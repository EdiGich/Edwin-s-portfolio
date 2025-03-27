"use client";
import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/work/Project_1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 2",
    description:
      "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Node.js" }],
    image: "/assets/work/Project_2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }],
    image: "/assets/work/Project_3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col py-12 xl:px-0 relative"
    >
      <div className="container mx-auto relative">
        {/* Central faint line */}
        <div className="absolute left-1/2 top-0 w-[2px] bg-white/20 h-full transform -translate-x-1/2 hidden xl:block"></div>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col xl:flex-row items-center gap-8 mb-16 
              ${index % 2 === 0 ? "xl:flex-row-reverse" : ""}
              p-4  rounded-lg 
              border border-white/30 bg-green-900/30
              xl:border-0 xl:bg-transparent`}
          >
            {/* Project Image */}
            <div className="w-full xl:w-1/2 flex justify-center">
              <Image
                src={project.image}
                width={500}
                height={300}
                className="rounded-lg"
                alt={project.title}
              />
            </div>

            {/* Connector line */}
            <div className="absolute h-[2px] bg-white/20 w-[5%] left-1/2 top-1/2  -translate-y-1/2 -translate-x-1/2 hidden xl:block"></div>

            {/* Project Details */}
            <div className="w-full xl:w-1/2 text-center xl:text-left px-4">
              <h2 className="text-3xl font-bold text-white capitalize">
                {project.title}
              </h2>
              <p className="text-white/60 mt-2">{project.description}</p>
              <ul className="flex gap-4 justify-center xl:justify-start mt-2">
                {project.stack.map((item, idx) => (
                  <li key={idx} className="text-xl text-accent">
                    {item.name}
                  </li>
                ))}
              </ul>
              {/* Buttons */}
              <div className="flex items-center gap-4 mt-4 justify-center xl:justify-start">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
