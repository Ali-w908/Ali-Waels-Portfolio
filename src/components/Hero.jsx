"use client";

import Image from 'next/image';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useVelocity, useSpring, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { usePreloader } from '../context/PreloaderContext';

import HeroWebGLPortrait from './HeroWebGLPortrait';
import AmbientBackground from './AmbientBackground';

export default function Hero() {
  const { hasRun } = usePreloader();
  const containerRef = useRef(null);

  // Marquee Logic
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -0.5 * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    let currentX = baseX.get() + moveBy;

    if (currentX <= -50) {
      currentX = 0;
    } else if (currentX > 0) {
      currentX = -50;
    }

    baseX.set(currentX);
  });

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200, mass: 0.5 });

  // Lean away effect: when mouse is left (0%), rotateY is 15deg (right side pushes back). 
  const rotateY = useTransform(smoothX, [0, 100], [15, -15]);
  const rotateX = useTransform(smoothY, [0, 100], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize to percentages of screen
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);



  return (
    <motion.section
      id="banner"
      ref={containerRef}
      className="relative w-full min-h-screen shrink-0 flex flex-col justify-center overflow-hidden"
    >
      <AmbientBackground />

      {/* Portrait Element Wrapper (Handles alignment & responsive dimensions) */}
      <div className="absolute top-[35%] md:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-64 md:w-64 md:h-80 lg:w-80 lg:h-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasRun ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          className="w-full h-full rounded-3xl overflow-hidden mix-blend-luminosity shadow-[inset_0_0_0_2px_rgba(255,255,255,0.2)]"
          style={{ rotateX, rotateY, perspective: 1000 }}
        >
          <HeroWebGLPortrait />
        </motion.div>
      </div>

      {/* Text Container (Adjust 'items-start' to change alignment, 'pt-64' to push it further down, 'px-8' for side padding) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-start justify-center pt-52 px-8 md:px-16 lg:px-32 mix-blend-difference text-white">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={hasRun ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-none mb-6"
        >
          {portfolioData.personalInfo.name.split(' ')[0]}<br />
          {portfolioData.personalInfo.name.split(' ').slice(1).join(' ')}
        </motion.h1>
      </div>

      {/* Marquee Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={hasRun ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
        className="absolute bottom-4 md:bottom-8 left-0 w-full overflow-hidden pointer-events-none mix-blend-difference text-white z-20"
      >
        <motion.div className="flex whitespace-nowrap text-6xl md:text-9xl font-bold uppercase tracking-tighter" style={{ x }}>
          <span className="mr-8">PASSIONATE MECHATRONICS ENGINEER — </span>
          <span className="mr-8">PASSIONATE MECHATRONICS ENGINEER — </span>
          <span className="mr-8">PASSIONATE MECHATRONICS ENGINEER — </span>
          <span className="mr-8">PASSIONATE MECHATRONICS ENGINEER — </span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
