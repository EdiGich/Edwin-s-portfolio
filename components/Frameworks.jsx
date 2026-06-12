"use client";

import { motion } from "framer-motion";
import { SiNextdotjs, SiDjango, SiFlutter, SiReact, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const frameworks = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    sub: "",
  },
  {
    name: "Django",
    icon: <SiDjango />,
    sub: "Python Backend",
  },
  {
    name: "Flutter",
    icon: <SiFlutter />,
    sub: "Mobile Apps",
  },
];

const Frameworks = () => {
  return (
    <section className="pb-12 xl:pb-24">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-16"
        >
          <div className="text-white/60 text-sm uppercase tracking-[2px] font-semibold">
            Key Frameworks
          </div>
          <div className="flex flex-wrap justify-center gap-8 xl:gap-12">
            {frameworks.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 group"
              >
                <div className="text-3xl text-white/50 group-hover:text-accent transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white group-hover:text-accent transition-all duration-300">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Frameworks;
