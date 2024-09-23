'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs, SiFlutter } from 'react-icons/si';

const about = {
  title: 'About me',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Edwin Gichira',
    },
    {
      fieldName: 'WhatsApp',
      fieldValue: '+254751478159',
    },
    {
      fieldName: 'Email',
      fieldValue: 'edwingichira801@gmail.com',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Kenyan',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Spoken Languages',
      fieldValue: 'English, Swahili',
    },
  ],
};

//experience data
const experience = {
  icon: '/assets/resume/icons/badge.svg',
  // icon: '/public/next.svg',
  title: 'My Experince',
  description:
    ' lorem sev asva as  jakyd sins aihf ah ASD URY CIA  s e urfued lorem gaus depod ferat',
  items: [
    {
      company: 'DTC',
      position: 'Full Stack Developer',
      duration: 'May 2024 - Present',
    },
    {
      company: 'Techbiz Limited',
      position: 'Tech Attachee',
      duration: 'May-August 2023',
    },
    {
      company: 'Techbiz Limited',
      position: 'Tech Attachee',
      duration: 'May-August 2023',
    },
    {
      company: 'Techbiz Limited',
      position: 'Tech Attachee',
      duration: 'May-August 2023',
    },
  ],
};

//education data
const education = {
  icon: '/assets/resume/icons/cap.svg',
  title: 'My Education',
  description:
    ' lorem sev asva as  jakyd sins aihf ah ASD URY CIA  s e urfued lorem gaus depod ferat',
  items: [
    {
      institution: "Murang'a University of Technology",
      degree: 'Software Engineering',
      duration: '2020-2024',
    },
  ],
};

//skills data
const skills = {
  title: 'My Skills',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nesciunt?',
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: 'html5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <SiFlutter />,
      name: 'Flutter & Dart',
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experince"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experince</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex items-center gap-3  ">
                  <img
                    src={experience.icon}
                    alt=""
                    className="h-[10vh] filter"
                    style={{
                      filter:
                        'invert(49%) sepia(100%) saturate(300%) hue-rotate(80deg) brightness(110%) contrast(100%)',
                    }}
                  />
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                </div>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex items-center gap-3  ">
                  <img
                    src={education.icon}
                    alt=""
                    className="h-[10vh] filter"
                    style={{
                      filter:
                        'invert(49%) sepia(100%) saturate(300%) hue-rotate(80deg) brightness(110%) contrast(100%)',
                    }}
                  />
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-start justify-start gap-4 px-4 py-2 border-b border-white/20 last:border-b-0"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="block text-white/60 font-medium">
                            {item.fieldName}
                          </span>
                          <span className="block text-xl text-white break-words">
                            {item.fieldValue}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
