"use client";

import { useState, useCallback } from "react";
import ChatButton from "./chat-button";
import ChatPanel from "./chat-panel";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());

  const handleSend = useCallback(
    async (text) => {
      if (isStreaming || !text.trim()) return;

      const userMessage = { role: "user", content: text };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);

      setIsStreaming(true);

      const assistantMessage = { role: "assistant", content: "" };
      setMessages((prev) => [...prev, assistantMessage]);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: updatedMessages, sessionId }),
        });

        if (!response.ok) {
          const err = await response.json().catch(() => ({}));
          throw new Error(err.error || "Request failed", { cause: response.status });
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          accumulated += chunk;

          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = {
              role: "assistant",
              content: accumulated,
            };
            return next;
          });
        }
      } catch (error) {
        const isRateLimit = error.cause === 429;
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = {
            role: "assistant",
            content: isRateLimit
              ? "The assistant is temporarily unavailable due to high demand. Please try again in a few moments."
              : "I apologize, but I'm having trouble connecting right now.",
          };
          return next;
        });
      } finally {
        setIsStreaming(false);
      }
    },
    [messages, isStreaming]
  );

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={toggleOpen} />
      <ChatPanel
        isOpen={isOpen}
        messages={messages}
        isStreaming={isStreaming}
        onSend={handleSend}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
