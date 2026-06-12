import { prisma } from "@/lib/prisma";

export async function logChat({ sessionId, userMessage }) {
  try {
    await prisma.chatLog.create({
      data: {
        sessionId,
        userMessage,
        category: inferCategory(userMessage),
      },
    });
  } catch (error) {
    console.error("Chat logging failed:", error);
  }
}

function inferCategory(message) {
  const lower = message.toLowerCase();
  if (lower.includes("project")) return "projects";
  if (lower.includes("hire") || lower.includes("job") || lower.includes("recruit")) return "recruiting";
  if (lower.includes("skill") || lower.includes("tech")) return "skills";
  if (lower.includes("experience") || lower.includes("work")) return "experience";
  if (lower.includes("contact") || lower.includes("email") || lower.includes("linkedin")) return "contact";
  if (lower.includes("education") || lower.includes("degree") || lower.includes("university")) return "education";
  if (lower.includes("certif")) return "certification";
  return null;
}
