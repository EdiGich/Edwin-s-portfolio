"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight, BsCalendarEvent } from "react-icons/bs";
import Image from "next/image";
import events from "@/lib/events";

const typeStyles = {
  hackathon: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  event: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  news: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const Events = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.location.hash === "#events") {
      const el = document.getElementById("events");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
      }
    }
  }, []);

  if (events.length === 0) return null;

  return (
    <motion.section
      id="events"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BsCalendarEvent className="text-accent text-2xl" />
            <h2 className="text-2xl xl:text-3xl font-bold text-white">
              Events & News
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Scroll left"
            >
              <BsChevronLeft aria-hidden="true" className="text-lg" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Scroll right"
            >
              <BsChevronRight aria-hidden="true" className="text-lg" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="w-[80vw] md:w-1/2 xl:w-1/4 px-3 snap-start flex-none group"
            >
              <div className="bg-accent rounded-xl p-[3px] h-full event-card">
              <div className="bg-[#232329] rounded-xl p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {event.date}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border ${typeStyles[event.type] || typeStyles.event}`}
                >
                  {event.type}
                </span>
              </div>

              {event.image && (
                <div
                  className="relative w-full h-[280px] rounded-lg overflow-hidden mb-4 select-none"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    draggable={false}
                    className="object-contain"
                  />
                </div>
              )}

              <h3 className="text-lg font-bold text-accent transition-all duration-300 mb-2">
                {event.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                {event.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Events;
