import React from "react";
import Background from "../components/Background";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "B.Tech - Computer Science And Engineering",
    company: "Samrat Ashok Technological Institute",
    period: "May 2023 - Mar 2027",
  },
  {
    id: 2,
    role: "Joint Entrance Examination",
    company: "National Testing Agency",
    period: "Feb-2022",
  },
  {
    id: 3,
    role: "Higher Secondary Education",
    company: "Maa Sharda Vidyalaya",
    period: "Mar 2021 - Apr 2022",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen overflow-hidden bg-black text-white flex flex-col items-center px-4 sm:px-6 py-10 sm:py-12"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Background */}
      <Background />

      <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center z-10 relative">
        My Education
      </h2>

      <div className="relative w-full max-w-5xl z-10">
        {/* Vertical Line (center on desktop, left on mobile) */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-800 rounded-full" />

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 !== 0;

          return (
            <div key={exp.id} className="relative w-full mb-16 sm:mb-24">
              
              {/* Card */}
              <motion.div
                className={`
                  w-full sm:w-1/2 p-5 sm:p-6 rounded-2xl border border-white/20
                  bg-gradient-to-br from-white/10 via-white/5 to-white/10
                  backdrop-blur-[16px] shadow-lg
                  ml-10 sm:ml-0
                  ${isLeft ? "sm:mr-auto" : "sm:ml-auto"}
                  sm:sticky sm:top-1/4
                `}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.2,
                  type: "spring",
                  stiffness: 70,
                  damping: 20,
                }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  {exp.role}
                </h3>
                <p className="text-blue-300 mb-1 text-sm sm:text-base">
                  {exp.company}
                </p>
                <p className="text-blue-400 text-xs sm:text-sm">
                  {exp.period}
                </p>
              </motion.div>

              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-1/2 top-6 transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
            </div>
          );
        })}
      </div>
    </section>
  );
}