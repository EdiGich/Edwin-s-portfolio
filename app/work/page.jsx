"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  BsArrowUpRight,
  BsGithub,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
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
    category: "Full-Stack",
    title: "DTC Catering Website",
    description:
      "A Django-based catering website for showcasing services, managing a gallery, and handling customer inquiries.",
    stack: [
      { name: "Django" },
      { name: "Bootstrap" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "SQLite3" },
    ],
    images: [
      "/assets/work/dtcwebprj/DTCWebLanding.png",
      "/assets/work/dtcwebprj/events.png",
      "/assets/work/dtcwebprj/GalleryPage.png",
      "/assets/work/dtcwebprj/Contact.png",
      "/assets/work/dtcwebprj/404.png",
    ],
    live: "https://delicioustumainicaterers.pythonanywhere.com/",
    github: "https://github.com/EdiGich/Catering",
  },
  {
    num: "02",
    category: "Flutter Frontend · Django Backend",
    title: "DTC Content Management App",
    description:
      "A Flutter app for managing dynamic content on the Delicious Tumaini Caterers website.",
    stack: [{ name: "Flutter" }, { name: "Django REST API" }, { name: "GetX" }],
    images: [
      "/assets/work/ContentM_app/DMAppDash.jpg",
      "/assets/work/ContentM_app/sett.jpg",
      "/assets/work/ContentM_app/events.jpg",
      "/assets/work/ContentM_app/news.jpg",
    ],
    live: "https://www.linkedin.com/posts/edwin-gichira-9147a8213_flutter-mobiledevelopment-getx-activity-7316031246218727425-hSOn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYLaSABWBtvVtDM9GV0cV9dl2Y-_c0Jpoo",
    github: "https://github.com/EdiGich/dtc_content_manager/tree/main",
  },
];

const ProjectSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg bg-black/10">
        <motion.div
          className="flex transition-transform duration-500 ease-in-out"
          animate={{ x: `-${currentIndex * 100}%` }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="min-w-full flex items-center justify-center"
            >
              <Image
                src={src}
                width={600}
                height={400}
                className="w-full max-h-[400px] object-contain rounded-lg"
                alt={`Slide ${idx + 1}`}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:opacity-90"
          >
            <BsChevronLeft className="text-white text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:opacity-90"
          >
            <BsChevronRight className="text-white text-xl" />
          </button>
          <div className="flex justify-center mt-3 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === idx ? "bg-green-400 w-3 h-3" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4 } }}
      className="min-h-[80vh] py-12"
    >
      <div className="container mx-auto px-4 relative">
        {/* Vertical Divider */}
        <div className="hidden xl:block absolute left-1/2 top-0 w-[2px] h-full bg-white/20 -translate-x-1/2" />

        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col xl:flex-row items-center gap-8 mb-16 
              ${index % 2 === 0 ? "xl:flex-row-reverse" : ""}
              border border-white/20 bg-green-900/30 p-6 rounded-lg`}
          >
            {/* Slider */}
            <div className="w-full xl:w-1/2">
              <ProjectSlider images={project.images} />
            </div>

            {/* Divider Line */}
            <div className="hidden xl:block absolute h-[2px] w-[5%] bg-white/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Details */}
            <div className="w-full xl:w-1/2 text-center xl:text-left z-10">
              <h6 className="text-white font-semibold uppercase tracking-wider mb-1">
                {project.category}
              </h6>
              <h2 className="text-white text-3xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-white/70 mb-4">{project.description}</p>
              <ul className="flex flex-wrap justify-center xl:justify-start gap-3 mb-4">
                {project.stack.map((item, idx) => (
                  <li key={idx} className="text-accent text-lg font-medium">
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 justify-center xl:justify-start">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.live}
                        target="_blank"
                        className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.github}
                        target="_blank"
                        className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Repo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
