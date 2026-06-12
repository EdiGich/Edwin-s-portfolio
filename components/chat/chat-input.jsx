"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatInput({ onSend, disabled }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const text = input.trim();
    if (!text || disabled) return;
    onSend(text);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex items-center gap-2 px-4 py-3 border-t border-white/[0.06] bg-white/[0.01]">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask a question about Edwin..."
        disabled={disabled}
        className="flex-1 bg-white/5 border border-white/[0.06] rounded-full px-4 py-2 text-sm text-white/90 placeholder-white/30 outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all duration-300 disabled:opacity-50"
      />
      <button
        onClick={handleSubmit}
        disabled={disabled || !input.trim()}
        className="w-9 h-9 rounded-full bg-accent text-primary flex items-center justify-center shrink-0 hover:brightness-110 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Send size={14} />
      </button>
    </div>
  );
}
