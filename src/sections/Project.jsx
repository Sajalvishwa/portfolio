
import React, { useState, useRef, useEffect, useCallback } from "react";

import img1 from "../assets/ko.png";
import img2 from "../assets/i.png";
import img3 from "../assets/Screenshot 2026-04-05 124850.png";



const projectsData = [
  {
    id: 1,
    title: "WanderLust",
    description: "Full stack travel application.",
    image: img2,
    tags: ["Express", "Node", "MongoDB", "Ejs", "Cloudinary"],
    liveLink: "https://wanderlust-exqa.onrender.com/",
    githubLink: "https://github.com/Sajalvishwa/wanderlust",
    accentColor: "220, 53, 69",

  },
  {
    id: 2,
    title: "Trading App",
    description: "A modern Zerodha-inspired stock trading platform",
    image: img3,
    tags: ["HTML", "CSS", "JavaScript" ,"React" , "Supabase" , "PostgreSQL" , "Vercel"],
    liveLink: "https://zerodha-clone-gamma-liard.vercel.app/",
    githubLink: "https://github.com/Sajalvishwa/Zerodha-clone",
    accentColor: "10, 88, 202",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern responsive portfolio with animations.",
    image: img1,
    tags: ["HTML", "CSS", "JavaScript" ,"React" , "Vite" ,"spline"],
    liveLink: "https://sajal-vishwakarama.netlify.app/",
    githubLink: "https://github.com/Sajalvishwa/portfolio",
    accentColor: "255, 62, 150",
  },
  
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const cooldown = useRef(false);
  const activeRef = useRef(0);

  const project = projectsData[activeIndex];
  const accent = `rgb(${project.accentColor})`;

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  const goTo = useCallback((newIndex) => {
    if (cooldown.current) return;
    if (newIndex < 0 || newIndex >= projectsData.length) return;
    if (newIndex === activeRef.current) return;

    cooldown.current = true;
    setFade(false);

    setTimeout(() => {
      setActiveIndex(newIndex);
      setFade(true);
    }, 250);

    setTimeout(() => {
      cooldown.current = false;
    }, 700);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isSticky) return;

      const idx = activeRef.current;

      if (e.deltaY > 0) {
        if (idx < projectsData.length - 1) {
          e.preventDefault();
          e.stopPropagation();
          goTo(idx + 1);
        }
      } else {
        if (idx > 0) {
          e.preventDefault();
          e.stopPropagation();
          goTo(idx - 1);
        }
      }
    };

    const section = sectionRef.current;
    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, [isSticky, goTo]);

  const touchY = useRef(0);

  return (
    <section
      ref={sectionRef}
      id="projects"
      onTouchStart={(e) => {
        touchY.current = e.touches[0].clientY;
      }}
      onTouchEnd={(e) => {
        if (!isSticky) return;
        const diff = touchY.current - e.changedTouches[0].clientY;
        if (Math.abs(diff) < 60) return;
        if (diff > 0) goTo(activeRef.current + 1);
        else goTo(activeRef.current - 1);
      }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 5%",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: fade ? "scale(1.05)" : "scale(1)",
          transition: "transform 1.2s ease, opacity 0.6s ease",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(6px)",
          zIndex: 1,
        }}
      />

      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "50px",
          zIndex: 2,
          color: accent,
          textAlign: "center",
          letterSpacing: "1px",
          transition: "color 0.8s ease",
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          maxWidth: "1000px",
          width: "100%",
          zIndex: 2,
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 400px" }}>
          <div
            style={{
              fontSize: "4rem",
              fontWeight: 800,
              color: `rgba(${project.accentColor}, 0.7)`,
              lineHeight: 1,
              marginBottom: "10px",
            }}
          >
            0{project.id}
          </div>

          <h3
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "15px",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              color: "#ccc",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              marginBottom: "25px",
            }}
          >
            {project.description}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            {project.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: "6px 16px",
                  background: `rgba(${project.accentColor}, 0.1)`,
                  color: accent,
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  border: `1px solid rgba(${project.accentColor}, 0.2)`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "12px 28px",
                background: accent,
                color: "#000",
                borderRadius: "50px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Live Demo
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "12px 28px",
                background: "transparent",
                color: "#fff",
                border: "2px solid #444",
                borderRadius: "50px",
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          zIndex: 3,
        }}
      >
        {projectsData.map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === activeIndex ? "14px" : "10px",
              height: i === activeIndex ? "14px" : "10px",
              borderRadius: "50%",
              background: i === activeIndex ? accent : "#333",
              cursor: "pointer",
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "25px",
          color: "#aaa",
          fontSize: "0.8rem",
          zIndex: 2,
        }}
      >
        Scroll to explore projects
      </div>
    </section>
  );
};

export default Project;
