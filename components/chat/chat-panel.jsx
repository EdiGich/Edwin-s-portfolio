"use client";

import { useEffect, useRef } from "react";
import { X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./chat-message";
import ChatInput from "./chat-input";
import SuggestedQuestions from "./suggested-questions";

export default function ChatPanel({
  isOpen,
  messages,
  isStreaming,
  onSend,
  onClose,
}) {
  const messagesEndRef = useRef(null);
  const hasStarted = messages.length > 0;

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-24 right-6 z-40 w-[360px] max-w-[calc(100vw-2rem)] max-h-[600px] h-[500px] bg-[#1c2c22] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Bot size={16} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Edwin AI Assistant
                </h3>
                <p className="text-[10px] text-white/40">
                  Ask me anything about Edwin&apos;s experience, projects,
                  skills, and professional background.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200 shrink-0"
            >
              <X size={14} className="text-white/60" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-thin">
            {!hasStarted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Bot size={36} className="text-accent/60 mb-3" />
              </div>
            ) : (
              messages.map((msg, i) => (
                <ChatMessage key={i} message={msg} />
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {!hasStarted && <SuggestedQuestions onSelect={onSend} />}

          <ChatInput onSend={onSend} disabled={isStreaming} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
