"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useScroll, useTransform } from 'framer-motion';

export default function LensCursor({ activeProject }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollY } = useScroll();

  // If scrollY > 600 (past Hero), shrink size and blur
  const size = useTransform(scrollY, [0, 800], [200, 100]);
  const blurVal = useTransform(scrollY, [0, 800], [4, 1]);
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.8 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.8 });

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[80] hidden md:block"
      animate={{
        opacity: activeProject ? 0 : 1,
        scale: activeProject ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        width: size,
        height: size,
        backdropFilter: useTransform(blurVal, (v) => `blur(${v}px) brightness(1.1) contrast(1.05) saturate(1.1)`),
        WebkitBackdropFilter: useTransform(blurVal, (v) => `blur(${v}px) brightness(1.1) contrast(1.05) saturate(1.1)`),
        boxShadow: 'inset 0 0 10px rgba(255,255,255,0.01), 0 5px 15px rgba(0,0,0,0.05), 0 0 30px var(--accent-color)',
        border: '1px solid var(--accent-color)',
        backgroundColor: 'color-mix(in srgb, var(--accent-color) 10%, transparent)'
      }}
    />
  );
}
