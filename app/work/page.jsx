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
    title: "DTC CATERING WEBSITE",
    description:
      "This is a Django-based catering website designed as an online platform for a catering company to showcase services, manage a gallery, and handle customer inquiries.",
    stack: [
      { name: "DJANGO" },
      { name: "BOOTSTRAP" },
      { name: "CSS 3" },
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
    category: "Frontend - Flutter (Dart), DJANGO BACKEND",
    title: "DTC Content Management App",
    description:
      "DTC Content Manager is a Flutter app built for easy management of dynamic content for the Delicious Tumaini Caterers website.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Node.js" }],
    images: [
      "/assets/work/ContentM_app/applogin.jpg",
      "/assets/work/ContentM_app/AppDash.jpg",
      "/assets/work/ContentM_app/message.jpg",
      "/assets/work/ContentM_app/sett.jpg",
      "/assets/work/ContentM_app/DMAppDash.jpg",
      "/assets/work/ContentM_app/Updatemen.jpg",
      "/assets/work/ContentM_app/events.jpg",
      "/assets/work/ContentM_app/news.jpg",
    ],
    live: "",
    github: "",
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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-lg bg-black/10">
        <motion.div
          className="flex transition-all duration-300 ease-in-out"
          animate={{ x: `-${currentIndex * 100}%` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 flex justify-center items-center"
            >
              <Image
                src={src}
                width={500}
                height={300}
                className="w-full max-h-[500px] object-contain rounded-lg sm:max-h-[600px] xl:max-h-[400px]"
                alt={`Project image ${index + 1}`}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
          >
            <BsChevronLeft className="text-white text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
          >
            <BsChevronRight className="text-white text-xl" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-green-400 w-3 h-3"
                    : "bg-white/50"
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
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col py-12 xl:px-0 relative"
    >
      <div className="container mx-auto relative">
        <div className="absolute left-1/2 top-0 w-[2px] bg-white/20 h-full transform -translate-x-1/2 hidden xl:block"></div>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col xl:flex-row items-center gap-8 mb-16 
              ${index % 2 === 0 ? "xl:flex-row-reverse" : ""}
              p-4 rounded-lg 
              border border-white/30 bg-green-900/30
              xl:border-0 xl:bg-transparent`}
          >
            {/* Project Slider */}
            <div className="w-full xl:w-1/2 flex justify-center">
              <div className="w-full max-h-[500px] overflow-y-auto xl:max-h-[400px] sm:overflow-visible">
                <ProjectSlider images={project.images} />
              </div>
            </div>

            <div className="absolute h-[2px] bg-white/20 w-[5%] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden xl:block"></div>

            {/* Project Details */}
            <div className="w-full xl:w-1/2 text-center xl:text-left px-4">
              <h6 className="font-bold text-white capitalize">
                {project.category}
              </h6>
              <h2 className="text-3xl font-bold text-white capitalize">
                {project.title}
              </h2>
              <p className="text-white/60 mt-2">{project.description}</p>
              <ul className="flex gap-4 justify-center xl:justify-start mt-2 flex-wrap">
                {project.stack.map((item, idx) => (
                  <li key={idx} className="text-xl text-accent">
                    {item.name}
                  </li>
                ))}
              </ul>
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
