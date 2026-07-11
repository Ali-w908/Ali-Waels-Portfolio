"use client";

import Image from 'next/image';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring, useAnimationFrame, useMotionValue } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { usePreloader } from '../context/PreloaderContext';

import HeroWebGLPortrait from './HeroWebGLPortrait';

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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  useEffect(() => {
    let simulation;
    import('webgl-fluid').then((webglFluid) => {
      simulation = webglFluid.default(document.getElementById('canvas-fluid'), {
        IMMEDIATE: true,
        TRIGGER: 'hover',
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 3,
        VELOCITY_DISSIPATION: 1.2,
        PRESSURE_DISSIPATION: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 3,
        SPLAT_RADIUS: 0.3,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: true,
        BLOOM: false
      });
    });

    return () => { };
  }, []);

  const bgTemplate = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(0,128,128,0.4) 0%, rgba(0,255,255,0.3) 25%, rgba(255,255,255,0.2) 50%, transparent 100%)`
  );

  return (
    <motion.section
      id="banner"
      ref={containerRef}
      className="relative w-full min-h-screen shrink-0 flex flex-col justify-center overflow-hidden"
    >
      {/* Dynamic Mouse & Time Gradient Aura */}
      <motion.div
        className="absolute inset-0 z-0 hue-cycle mix-blend-screen"
        style={{ background: bgTemplate }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hasRun ? 0.7 : 0 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      />

      {/* Background Fluid Canvas */}
      <motion.canvas
        id="canvas-fluid"
        className="absolute inset-0 w-full h-full z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasRun ? 0.3 : 0 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      ></motion.canvas>

      {/* Portrait Element (Adjust 'top-XX' or '-translate-y-XX' here to move it vertically, and 'left-XX' for horizontal) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={hasRun ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
        className="absolute top-[35%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-64 md:w-64 md:h-80 lg:w-80 lg:h-[400px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl mix-blend-luminosity"
        style={{ rotateX, rotateY, perspective: 1000 }}
      >
        <HeroWebGLPortrait />
      </motion.div>

      {/* Text Container (Adjust 'items-start' to change alignment, 'pt-64' to push it further down, 'px-8' for side padding) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-start justify-center pt-64 px-8 md:px-16 lg:px-32 mix-blend-difference text-white">
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
