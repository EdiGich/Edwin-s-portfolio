"use client";

import { motion } from "framer-motion";

const questions = [
  "Tell me about Edwin.",
  "What technologies does Edwin work with?",
  "What projects has Edwin built?",
  "What is Edwin's Flutter experience?",
  "What is Edwin's Django experience?",
  "What technical support experience does Edwin have?",
  "What are Edwin's strongest skills?",
  "Why should I hire Edwin?",
  "What is AfiyaPal?",
  "How can I contact Edwin?",
];

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div className="px-4 py-3">
      <p className="text-xs text-white/40 mb-3 text-center">
        Suggested questions
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {questions.map((q, i) => (
          <motion.button
            key={q}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03, duration: 0.2 }}
            onClick={() => onSelect(q)}
            className="text-xs bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 hover:border-accent/40 text-white/70 px-3 py-1.5 rounded-full transition-all duration-300"
          >
            {q}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
