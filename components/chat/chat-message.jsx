"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  if (!message.content) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-start mb-3"
      >
        <div className="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm bg-[#232329] text-white/90 rounded-bl-sm border border-white/5">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" />
            <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
            <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-accent text-primary rounded-br-sm"
            : "bg-[#232329] text-white/90 rounded-bl-sm border border-white/5"
        }`}
      >
        {isUser ? (
          message.content
        ) : (
          <div className="prose prose-invert prose-sm max-w-none prose-ul:list-disc prose-ul:pl-4 prose-li:my-0.5 prose-p:my-1 prose-strong:text-accent">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  );
}
