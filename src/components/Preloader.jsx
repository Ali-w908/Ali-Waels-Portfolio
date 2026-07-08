"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePreloader } from '../context/PreloaderContext';

export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState(0);
  const { setHasRun } = usePreloader();

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 500); // "Hi, Welcome to"
    const t2 = setTimeout(() => setStage(2), 1800); // "Ali Wael's Portfolio"
    const t2_hide = setTimeout(() => setStage(2.5), 3300); // Fade out text completely
    const t3 = setTimeout(() => setStage(3), 3600); // "Lumos" and Wand wave
    const t4 = setTimeout(() => {
      setStage(4); // Trigger exit
      setHasRun(true); // Mark as run for this session
      if (onComplete) setTimeout(onComplete, 1200); // Wait for exit animation
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t2_hide);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []); // Empty dependency array prevents restart on render

  // Typewriter Animation Variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.05 }
    }
  };
  
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const lumosSentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.15 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={stage === 4 ? { y: '-100vh' } : { y: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Greeting Sequence */}
      <div className="flex flex-col items-center justify-center h-48 relative w-full" style={{ fontFamily: "'Caveat', cursive" }}>
        {stage >= 1 && stage < 2.5 && (
          <motion.p
            variants={sentence}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="text-white text-3xl md:text-4xl font-medium tracking-wide mb-4 absolute top-0"
          >
            {"Hi, Welcome to".split('').map((char, index) => (
              <motion.span key={index} variants={letter}>{char === ' ' ? '\u00A0' : char}</motion.span>
            ))}
          </motion.p>
        )}
        
        {stage >= 2 && stage < 2.5 && (
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="text-white text-5xl md:text-7xl font-bold tracking-tight absolute top-12 whitespace-nowrap"
          >
            {"Ali Wael's Portfolio".split('').map((char, index) => (
              <motion.span key={index} variants={letter}>{char === ' ' ? '\u00A0' : char}</motion.span>
            ))}
          </motion.h1>
        )}
      </div>

      {/* Lumos Wand Effect (Triggers only after text fades out) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: stage >= 3 ? 1 : 0 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative flex flex-col items-center">
          {stage >= 3 && stage < 4 && (
            <motion.p
              variants={lumosSentence}
              initial="hidden"
              animate="visible"
              className="text-white text-5xl md:text-7xl font-serif italic mb-12 relative z-10"
              style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)" }}
            >
              {"Lumos.".split('').map((char, index) => (
                <motion.span key={index} variants={letter}>{char}</motion.span>
              ))}
            </motion.p>
          )}
          
          {/* Wand waving animation SVG */}
          <motion.svg 
            width="200" 
            height="200" 
            viewBox="0 0 200 200" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
            initial={{ opacity: 0 }}
            animate={stage >= 3 && stage < 4 ? { opacity: 1 } : { opacity: 0 }}
          >
            {/* Smooth swoosh wand path */}
            <motion.path
              d="M 30 150 C 60 200, 140 200, 180 150"
              fill="transparent"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, filter: "drop-shadow(0px 0px 0px rgba(255,255,255,0))" }}
              animate={stage >= 3 ? { 
                pathLength: 1, 
                filter: "drop-shadow(0px 0px 10px rgba(255,255,255,1))" 
              } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            {/* Burst of light at the end point (180, 150) */}
            <motion.circle
              cx="180"
              cy="150"
              r="8"
              fill="#ffffff"
              initial={{ scale: 0, opacity: 0, filter: "blur(0px)" }}
              animate={stage >= 3 ? { 
                scale: [0, 1.5, 4, 6], 
                opacity: [0, 1, 0.8, 0],
                filter: ["blur(2px)", "blur(5px)", "blur(15px)", "blur(30px)"]
              } : {}}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
