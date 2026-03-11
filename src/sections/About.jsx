import { motion } from "framer-motion";
import React from "react";
import p from "../assets/y.jpeg";

export default function About() {
  const stats = [
    { label: "Experience", value: "Fresher" },
    { label: "Speciality", value: "Full Stack Developer" },
    { label: "Focus", value: "Learning Data Science" },
  ];

  const glows = [
    "-top-10 -left-10 w-[300px] h-[300px] opacity-10 blur-[70px]",
    "bottom-0 right-10 w-[320px] h-[320px] opacity-10 blur-[80px]",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      className="h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302663] via-[#00bf8f] to-[#1cd8d2] ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 will-change-transform"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Image */}
          <motion.div
            variants={item}
            className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-2xl overflow-hidden shadow-xl border border-white/10"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            style={{ willChange: "transform" }}
          >
            <img
              src={p}
              alt="profile"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={item}
            className="flex-1 text-center md:text-left will-change-transform"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
              Sajal Vishwakarma
            </h2>

            <p className="mt-2 text-lg text-white/90 font-semibold">
              Full Stack Developer
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl">
              I build scalable, modern applications with a strong focus on clean
              architecture, delightful UX, and performance.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((itemStat, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(28, 216, 210, 0.3)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="text-sm text-gray-400">
                    {itemStat.label}
                  </div>
                  <div className="text-lg font-semibold text-[#1cd8d2]">
                    {itemStat.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#project"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-6 py-3 transition-transform duration-300 will-change-transform"
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-6 py-3 transition-transform duration-300 will-change-transform"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Extra About */}
        <motion.div
          className="mt-12 text-center max-w-3xl mx-auto will-change-transform"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h3 variants={item} className="text-2xl font-bold mb-4">
            About Me
          </motion.h3>

          <motion.p variants={item} className="text-gray-300 leading-relaxed">
            I'm passionate about building fast, resilient applications and
            turning ideas into scalable, user-friendly products.
          </motion.p>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
  <motion.div
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-red-400"
  animate={{ y: [0, 12, 0] }}
  transition={{ repeat: Infinity, duration: 1.6 }}
>
  <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center items-start p-1">
    <motion.div
      className="w-1 h-2 bg-red-200 rounded"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.6 }}
    />
  </div>

  <span className="text-xs mt-2 tracking-widest text-white">
    SCROLL
  </span>
</motion.div>
    </section>
  );
}