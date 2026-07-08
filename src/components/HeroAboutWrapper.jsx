"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Image from 'next/image';

import HeroWebGLPortrait from './HeroWebGLPortrait';

export default function HeroAboutWrapper() {
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "center center"]
  });

  const [xOffset, setXOffset] = useState("0vw");

  useEffect(() => {
    const updateX = () => {
      setXOffset(window.innerWidth >= 1024 ? "-22vw" : "0vw");
    };
    updateX();
    window.addEventListener('resize', updateX);
    return () => window.removeEventListener('resize', updateX);
  }, []);

  // Scale the mask down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  // Translate the mask down and horizontally
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "115vh"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", xOffset]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["9999px 9999px 0 0", "24px 24px 24px 24px"]);

  // Filmstrip track X translation
  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={wrapperRef} className="relative w-full transition-colors duration-1000">
      <Hero />
      <About scrollProgress={scrollYProgress} />

      {/* Absolute container that slides down into the grid slot */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 w-full h-screen flex items-center justify-center">
          <motion.div
            className="relative w-[90vw] md:w-[60vw] lg:w-[35vw] aspect-[3/4] overflow-hidden shadow-2xl pointer-events-auto"
            style={{ scale, borderRadius, x, y }}
          >
            <motion.div
              className="flex w-[200%] h-full"
              style={{ x: trackX }}
            >
              {/* Image 1: Hero WebGL Portrait */}
              <div className="w-1/2 h-full relative bg-black">
                <HeroWebGLPortrait />
              </div>
              {/* Image 2: About */}
              <div className="w-1/2 h-full relative">
                <Image
                  src="/media/portrait-abtme.jpeg"
                  alt="Portrait About"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
