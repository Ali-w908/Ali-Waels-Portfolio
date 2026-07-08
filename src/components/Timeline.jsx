"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/* ── Character-by-character reveal ── */
function AnimatedHeading({ text, className = "" }) {
  return (
    <motion.h2
      className={`font-bold tracking-tighter uppercase flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ visible: { transition: { staggerChildren: 0.025 } } }}
    >
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '120%', opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

function TimelineCard({ item, index, isEducation = false }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 80 : -80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 25, mass: 0.8 });

  return (
    <motion.div
      ref={cardRef}
      style={{ x: smoothX, opacity }}
      className="group relative"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-12 border-b border-theme-text/5">
        {/* Date pill */}
        <div className="shrink-0 md:w-48">
          <span className="inline-block px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-theme-text/5 border border-theme-text/10 text-theme-text/60">
            {isEducation ? item.date : item.date}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-1 group-hover:translate-x-2 transition-transform duration-500">
                {isEducation ? item.degree : item.role}
              </h3>
              <h4 className="text-lg font-medium opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                {isEducation ? item.school : item.company}
              </h4>
            </div>
          </div>
          <p className="text-base leading-relaxed opacity-50 max-w-2xl group-hover:opacity-70 transition-opacity duration-500">
            {isEducation ? item.details : item.description}
          </p>
        </div>

        {/* Hover accent line */}
        <div className="absolute left-0 top-0 w-[3px] h-0 group-hover:h-full bg-gradient-to-b from-violet-500 to-blue-500 rounded-full transition-all duration-700 ease-out" />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Diagonal parallax on the heading
  const headingX = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  // Counter-scroll decoration line
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <motion.section 
      ref={sectionRef}
      id="experience" 
      className="w-full py-32 md:py-48 px-8 md:px-16 lg:px-32 relative z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        
        {/* Decorative vertical line */}
        <motion.div 
          className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-theme-text/10 to-transparent origin-top hidden md:block"
          style={{ scaleY: lineScaleY }}
        />

        {/* Header with diagonal scroll-in */}
        <motion.div 
          className="mb-24 md:mb-32 pl-0 md:pl-8"
          style={{ x: headingX, y: headingY }}
        >
          <AnimatedHeading text="Experience" className="text-5xl md:text-7xl lg:text-8xl" />
          <AnimatedHeading text="& Education" className="text-5xl md:text-7xl lg:text-8xl" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl font-medium mt-6"
          >
            A timeline of professional growth.
          </motion.p>
        </motion.div>

        {/* Experience entries with alternating diagonal scroll */}
        <div className="pl-0 md:pl-8 space-y-0">
          {portfolioData.experience.map((exp, index) => (
            <TimelineCard key={`exp-${index}`} item={exp} index={index} />
          ))}

          {/* Education entry */}
          <TimelineCard 
            item={portfolioData.education} 
            index={portfolioData.experience.length} 
            isEducation 
          />
        </div>
      </div>
    </motion.section>
  );
}
