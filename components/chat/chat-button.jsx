"use client";

import { BotMessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ChatButton({ isOpen, onClick }) {
  const [ringKey, setRingKey] = useState(0);
  const [breathing, setBreathing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBreathing(true), 2600 + 400 + 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => setRingKey((k) => k + 1), 4000);
    setRingKey((k) => k + 1);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <div className="fixed bottom-24 right-7 z-30">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key={ringKey}
            className="absolute top-0 left-0 w-14 h-14 rounded-full border-2 border-accent/60"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={
          breathing && !isOpen
            ? { scale: [1, 1.08, 1] }
            : { scale: 1 }
        }
        transition={{
          duration: 2,
          repeat: breathing && !isOpen ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <motion.button
          onClick={onClick}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent to-emerald-400 text-primary flex items-center justify-center shadow-xl"
          style={{
            boxShadow: "0 0 12px rgba(34, 197, 94, 0.4)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: breathing && !isOpen
              ? [
                  "0 0 12px rgba(34,197,94,0.4)",
                  "0 0 60px rgba(34,197,94,0.8), 0 0 100px rgba(16,185,129,0.3)",
                  "0 0 12px rgba(34,197,94,0.4)",
                ]
              : "0 0 12px rgba(34,197,94,0.4)",
          }}
          transition={{
            opacity: { delay: 2.6, duration: 0.4, ease: "easeOut" },
            scale: { delay: 2.6, type: "spring", stiffness: 300, damping: 15 },
            boxShadow: {
              duration: 1.5,
              repeat: breathing && !isOpen ? Infinity : 0,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 50px rgba(34,197,94,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X aria-hidden="true" size={24} /> : <BotMessageSquare aria-hidden="true" size={24} />}
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}
