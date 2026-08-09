"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaUser,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaFlag,
  FaBriefcase,
  FaLanguage,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I strive to integrate technology in business process automation in order to increase efficiency in carrying out business activities.",
  info: [
    { fieldName: "Name", fieldValue: "Edwin Gichira", icon: <FaUser /> },
    {
      fieldName: "WhatsApp",
      fieldValue: "+254751478159",
      icon: <FaWhatsapp />,
    },
    {
      fieldName: "Email",
      fieldValue: "edwingichira801@gmail.com",
      icon: <FaEnvelope />,
    },
    { fieldName: "Experience", fieldValue: "3+ Years", icon: <FaClock /> },
    { fieldName: "Nationality", fieldValue: "Kenyan", icon: <FaFlag /> },
    { fieldName: "Freelance", fieldValue: "Available", icon: <FaBriefcase /> },
    {
      fieldName: "Spoken Languages",
      fieldValue: "English, Swahili",
      icon: <FaLanguage />,
    },
  ],
};

const experience = {
  icon: "/assets/resume/icons/badge.svg",
  title: "Experience",
  description: "Freelance software engineer building web and mobile solutions with React, Next.js, Flutter, and Django.",
  items: [
    {
      company: "Self-Employed",
      position: "Freelance Technical Consultant and Web Developer",
      duration: "Feb 2026 - Present",
    },
    {
      company: "Circular Economy Hub (CEH) – Close the Gap",
      position: "IT Intern",
      duration: "May 2025 - Nov 2025",
    },
    {
      company: "Swahilipot Hub Foundation",
      position: "Volunteer Developer",
      duration: "May 2024 - Aug 2024",
    },
    {
      company: "Techbiz Limited",
      position: "Software Engineering Attaché",
      duration: "May 2023 - Aug 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/icons/cap.svg",
  title: "Education",
  description:
    "Graduated with a BSc in Software Engineering, I am eager to apply my knowledge while continuously learning new skills and contributing to innovative projects.",
  items: [
    {
      institution: "Power Learn Project",
      degree: "Software Development Cohort",
      duration: "2025 Feb - Nov 2025",
    },
    {
      institution: "Murang'a University of Technology",
      degree: "Software Engineering",
      duration: "2020 - 2024",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "I have gained skills working with web technologies like Django, React.js, and Next.js. I have also worked with Flutter and Kotlin for mobile app development.",
  categories: [
    {
      name: "Development",
      skills: [
        { icon: <FaHtml5 aria-hidden="true" />, name: "html5" },
        { icon: <FaCss3 aria-hidden="true" />, name: "css 3" },
        { icon: <FaJs aria-hidden="true" />, name: "javascript" },
        { icon: <FaReact aria-hidden="true" />, name: "react.js" },
        { icon: <FaNodeJs aria-hidden="true" />, name: "node.js" },
        { icon: <SiNextdotjs aria-hidden="true" />, name: "next.js" },
        { icon: <SiTailwindcss aria-hidden="true" />, name: "tailwind.css" },
        { icon: <SiFlutter aria-hidden="true" />, name: "Flutter & Dart" },
      ],
    },
    {
      name: "Tools & Design",
      skills: [
        { icon: <FaFigma aria-hidden="true" />, name: "figma" },
      ],
    },
  ],
  OtherSkills: [
    { name: "Proficient in Linux & Windows Operating Systems" },
    { name: "Computer Hardware Maintenance Coutesy of Close the Gap Kenya" },
    { name: "Network Configuration" },
    { name: "Corel Draw, Ms Office suite" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 w-[2px] bg-white/20 h-full transform -translate-x-1/2"></div>

          {/* Experience */}
          <div className="relative w-full max-w-4xl mb-12">
            <div className="flex items-center justify-center xl:justify-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full"></div>
              <div className="bg-[#232329] p-6 rounded-xl w-full xl:w-[calc(50%-2rem)] xl:ml-[calc(50%+1rem)]">
                <div className="flex items-center gap-3 justify-center xl:justify-start mb-4">
                  {/* <img
                    src={experience.icon}
                    alt=""
                    className="h-8 filter"
                    style={{
                      filter:
                        "invert(49%) sepia(100%) saturate(300%) hue-rotate(80deg) brightness(110%) contrast(100%)",
                    }}
                  /> */}
                  <h3 className="text-xl font-semibold text-white">
                    {experience.title}
                  </h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-center xl:text-left">
                  {experience.description}
                </p>
                <ScrollArea className="h-[380px] mt-4 scrollbar-always-visible">
                  <ul className="grid grid-cols-1 gap-6">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#1a1a1e] p-4 rounded-lg flex flex-col items-center xl:items-start gap-1 hover:scale-[1.02] hover:bg-[#202025] transition-all duration-300 border border-transparent hover:border-accent/20"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h4 className="text-lg text-white">{item.position}</h4>
                        <p className="text-white/60">{item.company}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="relative w-full max-w-4xl mb-12">
            <div className="flex items-center justify-center xl:justify-end">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full"></div>
              <div className="bg-[#232329] p-6 rounded-xl w-full xl:w-[calc(50%-2rem)] xl:mr-[calc(50%+1rem)]">
                <div className="flex items-center gap-3 justify-center xl:justify-start mb-4">
                  {/* <img
                    src={education.icon}
                    alt=""
                    className="h-8 filter"
                    style={{
                      filter:
                        "invert(49%) sepia(100%) saturate(300%) hue-rotate(80deg) brightness(110%) contrast(100%)",
                    }}
                  /> */}
                  <h3 className="text-xl font-semibold text-white">
                    {education.title}
                  </h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-center xl:text-left">
                  {education.description}
                </p>
                <ScrollArea className="h-[300px] mt-4">
                  <ul className="grid grid-cols-1 gap-6">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#1a1a1e] p-4 rounded-lg flex flex-col items-center xl:items-start gap-1 hover:scale-[1.02] hover:bg-[#202025] transition-all duration-300 border border-transparent hover:border-accent/20"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h4 className="text-lg text-white">{item.degree}</h4>
                        <p className="text-white/60">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="relative w-full max-w-4xl mb-12">
            <div className="flex items-center justify-center xl:justify-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full"></div>
              <div className="bg-[#232329] p-6 rounded-xl w-full xl:w-[calc(50%-2rem)] xl:ml-[calc(50%+1rem)]">
                <div className="flex items-center gap-3 justify-center xl:justify-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {skills.title}
                  </h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-center xl:text-left">
                  {skills.description}
                </p>
                <div className="space-y-8 mt-6">
                  {skills.categories.map((category, catIndex) => (
                    <div key={catIndex}>
                      <h4 className="text-sm uppercase tracking-widest text-white/70 mb-4 px-1">
                        {category.name}
                      </h4>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {category.skills.map((skill, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger
                                  aria-label={skill.name}
                                  className="w-full h-[100px] bg-[#1a1a1e] rounded-lg flex justify-center items-center group border border-transparent hover:border-accent/30 transition-all duration-300"
                                >
                                  <div className="text-3xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl mt-5 font-semibold text-white text-center">
                  More skills;
                </h3>
                <ul className="grid grid-cols-2 mt-2">
                  {skills.OtherSkills.map((otherSkill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[120px] rounded-lg">
                            <div className="text-1xl bg-[#1a1a1e] m-2 rounded group-hover:text-accent transition-all duration-300">
                              <p> {otherSkill.name}</p>
                            </div>
                          </TooltipTrigger>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="relative w-full max-w-4xl mb-12">
            <div className="flex items-center justify-center xl:justify-end">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full"></div>
              <div className="bg-[#232329] p-6 rounded-xl w-full xl:w-[calc(50%-2rem)] xl:mr-[calc(50%+1rem)]">
                <div className="flex items-center gap-3 justify-center xl:justify-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {about.title}
                  </h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-center xl:text-left">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 mt-4">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-start gap-4 px-4 py-2 border-b border-white/20 last:border-b-0"
                    >
                      <span className="text-accent text-2xl">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <span className="block text-white/60 font-medium">
                          {item.fieldName}
                        </span>
                        <span className="block text-lg text-white break-words">
                          {item.fieldValue}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
