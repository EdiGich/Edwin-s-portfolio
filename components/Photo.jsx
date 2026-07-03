"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
        className="relative w-[300px] h-[300px] xl:w-[300px] xl:h-[300px]"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute inset-0 grid place-items-center mix-blend-lighten "
        >
          <Image
            src="/assets/profile.png"
            priority
            quality={100}
            width={290}
            height={290}
            alt=""
            className="object-cover rounded-full"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className={"w-[300px] xl:w-[300px] h-[300px] xl:h-[300px]"}
          fill="transparent"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="150"
            cy="150"
            r="150"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
export default Photo;
