"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive, high-performance websites using modern frameworks like Next.js and Django, ensuring scalability and seamless user experience.",
    href: "/work",
  },
  {
    num: "02",
    title: "UI Design",
    description:
      "Creating visually appealing and user-friendly interfaces with a focus on accessibility, consistency, and brand identity using Figma and Tailwind CSS.",
    href: "/work",
  },
  {
    num: "03",
    title: "Flutter App Development",
    description:
      "Developing cross-platform mobile applications using Flutter, delivering smooth performance, modern UI, and seamless integration with backend services.",
    href: "/work",
  },
  // {
  //   num: "04",
  //   title: "Machine Learning",
  //   description:
  //     "Currently learning machine learning, including work on a sentiment analysis model to enhance application capabilities and deliver data-driven solutions.",
  //   href: "/work",
  // },
];

// Animation variants for the container and children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.4,
      duration: 0.4,
      ease: "easeIn",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.4, ease: "easeIn" }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          My Services
        </motion.h1>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex-1 flex flex-col justify-center gap-6 group hover:bg-[#232329]/80 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl border border-white/10"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  aria-label={`View ${service.title} work`}
                  className="w-[70px] h-[70px] rounded-full bg-white/10 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight aria-hidden="true" className="text-white text-3xl group-hover:text-primary" />
                </Link>
              </div>
              {/* Title */}
              <h2 className="text-[36px] xl:text-[42px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* Description */}
              <p className="text-white/70 text-base xl:text-lg leading-relaxed">
                {service.description}
              </p>
              {/* Border */}
              <div className="border-b border-white/30 w-full group-hover:border-accent transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
