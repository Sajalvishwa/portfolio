import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Image import (Make sure the path is correct based on your folder structure)
import loImage from "../assets/lo.jpeg"; 
import aoImage from "../assets/av.png"; 

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "This is not a typical portfolio website. I genuinely enjoyed exploring this website. It contains excellent animations, smooth transitions, and many impressive web features. The experience feels almost like watching a movie, with every section showcasing different features and great detailing. My favourite part is the cursor feature and the robot following the cursor.",
      name: "Astha Vishwakarma",
      designation: "Software Engineer at HSBC",
      src: loImage, // Aapki local image yahan apply ho gayi hai
    },
    {
      quote: "I appreciated the intent behind creating a user-interactive portfolio. The overall experience across the pages felt smooth and easy to navigate, making the website engaging to explore.However, the design could benefit from slightly limiting the colour variations to create a more cohesive and refined visual experience. Overall, it is a well-thought-out portfolio with a strong interactive approach.",
      name: "Soumya Vishwakarma",
      designation: "Architect at Integral Designs International Studio Pvt. Ltd.",
      src: aoImage, // Aapki local image yahan apply ho gayi hai
    },
    {
      quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
    {
      quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <style>
        {`
          .testimonials-wrapper {
            min-height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
            position: relative;
            overflow: hidden;
            font-family: 'Segoe UI', sans-serif;
          }

          .stars-container {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
          }

          .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle var(--duration) infinite ease-in-out;
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>

      <section className="testimonials-wrapper px-6 py-12">
        {/* Twinkling Stars Background */}
        <div className="stars-container">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                "--duration": `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 z-10" 
          style={{ 
            background: 'linear-gradient(to right, #38bdf8, #ffffff)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}
        >
          What People Say
        </motion.h2>

        <div className="relative w-full max-w-5xl h-[450px] flex items-center justify-center z-10">
          {testimonials.map((t, i) => {
            let offset = i - index;
            if (offset < -Math.floor(testimonials.length / 2)) offset += testimonials.length;
            if (offset > Math.floor(testimonials.length / 2)) offset -= testimonials.length;

            const isActive = offset === 0;
            
            return (
              <motion.div
                key={i}
                initial={false}
                animate={{ 
                  opacity: isActive ? 1 : 0.3, 
                  scale: isActive ? 1 : 0.7, 
                  x: offset * 250, // Card spacing badha di gayi hai desktop ke liye
                  zIndex: 10 - Math.abs(offset),
                  filter: isActive ? "blur(0px)" : "blur(2px)"
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute w-[320px] md:w-[450px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 text-white shadow-2xl flex flex-col items-center"
              >
                <div className="relative mb-6">
                  <img
                    src={t.src}
                    alt={t.name}
                    className="w-24 h-24 rounded-full ring-4 ring-sky-500/30 object-cover shadow-lg"
                  />
                  {isActive && (
                    <motion.div 
                      layoutId="glow"
                      className="absolute inset-0 rounded-full bg-sky-400/20 blur-xl -z-10"
                    />
                  )}
                </div>

                <p className="text-lg md:text-xl mb-6 italic text-center text-gray-100 leading-relaxed">
                  "{t.quote}"
                </p>
                
                <div className="text-center">
                  <h3 className="font-bold text-2xl text-sky-300">{t.name}</h3>
                  <p className="text-sky-100/60 text-sm tracking-widest uppercase mt-1">{t.designation}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-8 mt-16 z-10">
          <button
            onClick={prevSlide}
            className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white hover:bg-sky-500/20 transition-all duration-300 backdrop-blur-md"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
          </button>
          <button
            onClick={nextSlide}
            className="group flex items-center justify-center w-14 h-14 rounded-full bg-sky-500/80 text-black font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-sky-500/20"
          >
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>
    </>
  );
}