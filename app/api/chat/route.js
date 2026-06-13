import { GoogleGenerativeAI } from "@google/generative-ai";
import { systemPrompt } from "@/lib/knowledge-base";
import { logChat, updateChatWithResponse } from "@/lib/chat-logger";

export async function POST(request) {
  try {
    const { messages, sessionId } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Messages are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Under maintenance." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    let chatLog = null;
    if (sessionId) {
      chatLog = await logChat({
        sessionId,
        userMessage: messages[messages.length - 1]?.content || "",
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash-lite",
      systemInstruction: systemPrompt,
    });

    const history = messages.slice(0, -1).map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const currentMessage = messages[messages.length - 1].content;

    const chat = model.startChat({ history });
    const result = await chat.sendMessageStream(currentMessage);

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        const fullResponseParts = [];
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            if (chunkText) {
              fullResponseParts.push(chunkText);
              controller.enqueue(encoder.encode(chunkText));
            }
          }
        } catch (err) {
          const isRateLimit = err?.status === 429 || err?.message?.includes("quota");
          const message = isRateLimit
            ? "The assistant is temporarily unavailable due to high demand. Please try again in a few moments."
            : "I apologize, but I'm having trouble processing your request right now. Please try again later.";
          fullResponseParts.push(message);
          controller.enqueue(encoder.encode(message));
        } finally {
          controller.close();
          const fullResponse = fullResponseParts.join("");
          if (chatLog?.id && fullResponse) {
            updateChatWithResponse({ chatLogId: chatLog.id, assistantResponse: fullResponse });
          }
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    const isRateLimit = error?.status === 429 || error?.message?.includes("quota");
    if (isRateLimit) {
      return new Response(
        JSON.stringify({ error: "rate_limited" }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
