"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function FloatingMedia({ activeProject }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track previous project ID and current direction using Refs for synchronous calculation
  const prevProjectRef = useRef(null);
  const directionRef = useRef({ dx: 0, dy: 0 });

  // Synchronously calculate direction during render if activeProject changes
  if (activeProject?.id !== prevProjectRef.current?.id) {
    if (!activeProject) {
      // If we unhovered (went to null), reset direction so next hover doesn't slide from an old position
      directionRef.current = { dx: 0, dy: 0 };
    } else if (prevProjectRef.current) {
      // If we moved directly from one project to another, calculate grid vector
      const oldIndex = portfolioData.projects.findIndex(p => p.id === prevProjectRef.current.id);
      const newIndex = portfolioData.projects.findIndex(p => p.id === activeProject.id);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const oldCol = oldIndex % 2;
        const oldRow = Math.floor(oldIndex / 2);
        const newCol = newIndex % 2;
        const newRow = Math.floor(newIndex / 2);
        
        directionRef.current = {
          dx: newCol - oldCol,
          dy: newRow - oldRow
        };
      }
    } else {
      // If we hovered from empty (prev was null), no slide
      directionRef.current = { dx: 0, dy: 0 };
    }
    prevProjectRef.current = activeProject;
  }

  const direction = directionRef.current;

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const slideVariants = {
    initial: (dir) => ({
      x: dir.dx * 100 + "%",
      y: dir.dy * 100 + "%",
    }),
    animate: {
      x: "0%",
      y: "0%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    exit: (dir) => ({
      x: -dir.dx * 100 + "%",
      y: -dir.dy * 100 + "%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    })
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[250px] pointer-events-none z-50 overflow-hidden rounded-xl bg-black shadow-2xl"
      animate={{
        x: mousePosition.x - 200, // offset by half width
        y: mousePosition.y - 125, // offset by half height
        scale: activeProject ? 1 : 0,
        opacity: activeProject ? 1 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.5
      }}
    >
      <div className="relative w-full h-full">
        <AnimatePresence mode="popLayout" custom={direction}>
          {activeProject && (
            <motion.div
              key={activeProject.id}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              {activeProject.video ? (
                <video
                  src={activeProject.video}
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                />
              ) : activeProject.image ? (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full placeholder-media flex flex-col justify-center items-center bg-white/10 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-center">
                    {activeProject.title}<br />[MEDIA PREVIEW]
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
