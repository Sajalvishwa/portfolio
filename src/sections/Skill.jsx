import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,
} from "react-icons/si";

import { DiNodejsSmall } from "react-icons/di";

export default function Skills() {
  // ✅ Mobile detect (responsive)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiAngular />, name: "Angular" },
  ];

  return (
    <section
      id="skills"
      className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[250px] h-[250px] rounded-full bg-red-600/20 blur-[80px]" />
        <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] rounded-full bg-red-500/20 blur-[80px]" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold z-10 text-red-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.2,
        }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-3 mb-16 text-red-400 text-base sm:text-lg z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.4,
        }}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden">
        <motion.div
          className="flex gap-10 sm:gap-20 text-4xl sm:text-5xl whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: isMobile ? skills.length * 0.5 : 45, // 🔥 mobile fast, desktop slow
            ease: "linear",
          }}
          style={{
            transform: "translateZ(0)",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 min-w-max cursor-pointer"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{
                willChange: "transform",
              }}
            >
              <span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">
                {skill.icon}
              </span>

              <span className="text-sm text-red-500 tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator (hide on mobile) */}
      <motion.div
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center text-red-400"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center items-start p-1">
          <motion.div
            className="w-1 h-2 bg-red-500 rounded"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          />
        </div>

        <span className="text-xs mt-2 tracking-widest text-red-400">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}