"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Link from 'next/link';

/* ── Character-by-character reveal ── */
function AnimatedHeading({ text, className = "" }) {
  return (
    <motion.h2
      className={`font-bold tracking-tighter uppercase flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
    >
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
    >
      <Link 
        href={`/projects/${project.id}`}
        className="group relative w-full aspect-[3/2] overflow-hidden bg-black/20 border border-theme-text/5 cursor-pointer block rounded-lg"
      >
        {/* Media */}
        {project.video ? (
          <video
            src={project.video}
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
          />
        ) : null}

        <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-none mb-4 group-hover:translate-x-2 transition-transform duration-500"
          >
            {project.title}
          </h3>
          
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold tracking-widest uppercase opacity-80">{project.role}</span>
            <span className="text-xs font-bold tracking-widest uppercase opacity-60">{project.skills.slice(0,3).join(', ')}</span>
          </div>

          {/* Hover arrow indicator */}
          <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
            <svg className="w-4 h-4 text-white -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects({ setHoveredProject, onOpenProject, hoveredProject }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  return (
    <motion.section 
      ref={sectionRef}
      id="projects" 
      className="w-full py-32 px-8 md:px-16 lg:px-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-24 flex justify-between items-end border-b border-theme-text/10 pb-8"
          style={{ x: headingX }}
        >
          <AnimatedHeading text="My Projects" className="text-5xl md:text-7xl lg:text-8xl" />
          <span className="text-sm font-bold tracking-widest uppercase opacity-40">[{portfolioData.projects.length}]</span>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
