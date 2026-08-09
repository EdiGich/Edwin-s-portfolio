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
    category: "E-commerce",
    title: "Shem Collections",
    description:
      "An elegant showcase for a boutique collection, highlighting products with a focus on visual appeal and ease of navigation.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    images: [
      "/assets/work/shemCol/landing.png",
      "/assets/work/shemCol/shem.png",
      "/assets/work/shemCol/howToOrder.png",
      "/assets/work/shemCol/location.png",
    ],
    live: "https://shem-col.vercel.app/",
    github: "https://github.com/EdiGich",
    isPrivate: true,
  },
  {
    num: "02",
    category: "AMD Dev Cloud Hackathon 2026 & GDG Pwani AI Hackathon 2026.",
    title: "Farmi Pal",
    description:
      "An AI-powered agricultural assistant for Kenyan farmers, providing market prices, negotiation scripts, and localized farming lessons.",
    stack: [
      { name: "Next.js" },
      { name: "Gemini AI" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    images: [
      "/assets/work/farmiPal/agriTutor.png",
      "/assets/work/farmiPal/bei.png",
      "/assets/work/farmiPal/chat.png",
      "/assets/work/farmiPal/surplusZones.png",
    ],
    live: "https://farmi-pal.vercel.app/",
    github: "https://github.com/EdiGich/farmi-pal.git",
  },
  {
    num: "03",
    category: "Full-Stack",
    title: "Kuwa Makini",
    description:
      "A civic-tech project called 'Kuwa Makini' — An anonymous platform for reporting and tracking scam encounters.",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "NodeJS" },
      { name: "Supabase" },
    ],
    images: [
      "/assets/work/kuwamakini/dashboardKuwaMakini.jpg",
      "/assets/work/kuwamakini/reportScam.png",
      "/assets/work/kuwamakini/contact.png",
      "/assets/work/kuwamakini/guidelines.png",
    ],
    live: "https://kuwamakini.vercel.app/",
    github: "https://github.com/EdiGich",
    isPrivate: true,
  },
    {
    num: "04",
    category: "Frontend",
    title: "Pizza Place Website",
    description:
      "A vibrant and interactive web application for a pizza restaurant, featuring a dynamic menu and seamless ordering experience.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    images: [
      "/assets/work/milios/landing.png",
      "/assets/work/milios/menu.png",
      "/assets/work/milios/menuCarousel.png",
      "/assets/work/milios/location.png",
    ],
    live: "https://milios-pizza.vercel.app/",
    github: "https://github.com/EdiGich",
    isPrivate: true,
  },
  {
    num: "05",
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
    num: "06",
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


  {
    num: "07",
    category: "Frontend",
    title: "BBQ Restaurant Website",
    description:
      "A sleek, modern landing page and menu system for a BBQ restaurant, designed to showcase delicious offerings and enhance brand presence.",
    stack: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    images: [
      "/assets/work/adamzaBBQ/landing.png",
      "/assets/work/adamzaBBQ/menu.png",
      "/assets/work/adamzaBBQ/carousel.png",
    ],
    live: "https://addamz-bbq.vercel.app/",
    github: "https://github.com/EdiGich",
    isPrivate: true,
  },

  {
    num: "08",
    category: "Frontend",
    title: "Computer Shop Website",
    description:
      "A professional platform for tech services and PC components, designed to provide users with a trusted and efficient browsing experience.",
    stack: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Vite" },
    ],
    images: [
      "/assets/work/Vicks/landing.png",
      "/assets/work/Vicks/pcs.png",
      "/assets/work/Vicks/TRUSTED.png",
    ],
    live: "https://vickscomp.vercel.app/",
    github: "https://github.com/EdiGich",
    isPrivate: true,
  },
];

const ProjectSlider = ({ images, title }) => {
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
                alt={`${title} screenshot ${idx + 1}`}
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
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:opacity-90"
          >
            <BsChevronLeft aria-hidden="true" className="text-white text-xl" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:opacity-90"
          >
            <BsChevronRight aria-hidden="true" className="text-white text-xl" />
          </button>
          <div className="flex justify-center mt-3 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={currentIndex === idx}
                className={`w-2 h-2 rounded-full ${currentIndex === idx ? "bg-green-400 w-3 h-3" : "bg-white/50"
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
              border border-white/20 bg-green-900/10 p-6 rounded-lg hover:bg-green-900/20 hover:border-accent/30 transition-all duration-500 group/card`}
          >
            {/* Slider */}
            <div className="w-full xl:w-1/2">
              <ProjectSlider images={project.images} title={project.title} />
            </div>

            {/* Divider Line */}
            <div className="hidden xl:block absolute h-[2px] w-[5%] bg-white/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Details */}
            <div className="w-full xl:w-1/2 text-center xl:text-left z-10">
              <div className="flex items-center justify-center xl:justify-start gap-4 mb-1">
                <h6 className="text-white font-semibold uppercase tracking-wider">
                  {project.category}
                </h6>
                {project.isPrivate && (
                  <span className="text-[10px] bg-white/10 text-white/50 px-2 py-0.5 rounded-full border border-white/20 uppercase tracking-tighter">
                    Private Repo
                  </span>
                )}
              </div>
              <h2 className="text-white text-3xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-white/70 mb-4">{project.description}</p>
              <ul className="flex flex-wrap justify-center xl:justify-start gap-3 mb-6">
                {project.stack.map((item, idx) => (
                  <li key={idx} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-accent text-sm font-medium hover:bg-accent/10 hover:border-accent transition-all duration-300">
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
                        aria-label={`View ${project.title} live`}
                        className="w-[50px] h-[50px] rounded-full bg-white/10 flex items-center justify-center group"
                      >
                        <BsArrowUpRight aria-hidden="true" className="text-white text-2xl group-hover:text-accent" />
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
                        aria-label={`View ${project.title} on GitHub`}
                        className="w-[50px] h-[50px] rounded-full bg-white/10 flex items-center justify-center group relative overflow-hidden"
                      >
                        <BsGithub aria-hidden="true" className={`text-white text-2xl group-hover:text-accent ${project.isPrivate ? "opacity-50" : ""}`} />
                        {project.isPrivate && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="w-full h-[1px] bg-white/30 rotate-45 absolute" />
                          </div>
                        )}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.isPrivate ? "Private Repo (View Profile)" : "GitHub Repo"}</p>
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
