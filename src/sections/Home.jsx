// Is code ko apne Home.jsx mein rakhein (optimized version)
import React, { useMemo, useEffect, useState, useRef } from "react";
import Background from "../components/Background";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Hero from "../components/Hero.jsx";
import clickSoundFile from "../components/multi-pop.mp3";

const socials = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sajal-vishwakarma-b2008b27b/" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Sajalvishwa" },
];

const glowVariants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.15, y: -3, transition: { type: "spring", stiffness: 260, damping: 18 } },
  tap: { scale: 0.95 },
};

export default function Home() {
  const roles = useMemo(() => ["Mern Stack Developer", "Software Developer", "React Developer"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter: Cleanup automatic hota hai on unmount
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) { setSubIndex((v) => v + 1); }
      else if (!deleting && subIndex === current.length) { setTimeout(() => setDeleting(true), 800); }
      else if (deleting && subIndex > 0) { setSubIndex((v) => v - 1); }
      else if (deleting && subIndex === 0) { setDeleting(false); setIndex((p) => (p + 1) % roles.length); }
    }, deleting ? 60 : 90);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  // Audio: Optimized to play only on click
  const audioRef = useRef(null);
  const handleClickSound = () => {
    if (!audioRef.current) {
        audioRef.current = new Audio(clickSoundFile);
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {}); // catch silent error if browser blocks
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden" style={{ transform: "translateZ(0)" }}>
      {/* Background component unmounts automatically when page changes */}
      <Background />

      <div className="relative z-10 min-h-screen flex items-center pt-30 sm:pt-0">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-left will-change-[transform,opacity]">
            <motion.div className="text-3xl sm:text-4xl font-semibold text-white">
              {roles[index].substring(0, subIndex)}
              <span className="inline-block w-[2px] ml-2 bg-white h-[2.5rem] align-middle animate-blink"></span>
            </motion.div>

            <motion.h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="animated-gradient-text">Hello, I'm </span>
              <span className="text-pink-400 hover:text-pink-500 transition-colors duration-300">Sajal Vishwakarma</span>
            </motion.h1>

            <motion.p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl">
              I turn complex ideas into seamless, high-impact web experiences.
            </motion.p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="/resume.pdf" download onClick={handleClickSound} className="px-8 py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all">
                My Resume
              </a>
              <div className="flex gap-5 text-2xl md:text-3xl">
                {socials.map(({ Icon, label, href }) => (
                  <motion.a key={label} href={href} target="_blank" onClick={handleClickSound} variants={glowVariants} initial="initial" whileHover="hover" className="text-gray-300 hover:text-white">
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end min-h-[500px] will-change-transform">
             {/* Hero section will be unmounted when navigating away */}
            <Hero className="w-full h-full" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        .animate-blink { animation: blink 1s infinite; }
      `}</style>
    </section>
  );
}