"use client";

import { useEffect, useRef } from "react";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./chat-message";
import ChatInput from "./chat-input";
import SuggestedQuestions from "./suggested-questions";

const aiColors = ["#a855f7", "#06b6d4", "#22c55e", "#a855f7"];

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
          className="fixed bottom-24 right-7 z-40 w-[360px] max-w-[calc(100vw-2rem)] max-h-[600px] h-[500px] bg-black/50 backdrop-blur-2xl border border-white/[0.06] rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
        >
          {/* Glass highlight */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-b from-white/[0.04] to-transparent" />

          <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/[0.06] shrink-0 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ color: aiColors, scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
              >
                <Sparkles size={16} />
              </motion.div>
              <div>
                <h3 className="text-sm font-semibold text-white/90">
                  Edwin AI Assistant
                </h3>
                <p className="text-[10px] text-white/70">
                  Ask me anything about Edwin&apos;s experience, projects,
                  skills, and professional background.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close chat window"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200 shrink-0"
            >
              <X aria-hidden="true" size={14} className="text-white/60" />
            </button>
          </div>

          <div className="relative flex-1 overflow-y-auto px-4 py-4 chat-scrollbar">
            {!hasStarted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <SuggestedQuestions onSelect={onSend} />
              </div>
            ) : (
              messages.map((msg, i) => (
                <ChatMessage key={i} message={msg} />
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput onSend={onSend} disabled={isStreaming} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
