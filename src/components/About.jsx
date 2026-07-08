"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Image from 'next/image';
import Magnetic from './Magnetic';

export default function About({ scrollProgress }) {
  const containerRef = useRef(null);

  const { scrollYProgress: localScrollY } = useScroll({
    target: containerRef,
    offset: ["start bottom", "start center"]
  });

  // Synchronized Text Reveal Transforms
  const textY = useTransform(localScrollY, [0, 1], [40, 0]);
  const textOpacity = useTransform(localScrollY, [0, 1], [0, 1]);
  const textBlurVal = useTransform(localScrollY, [0, 1], [10, 0]);
  const textFilter = useTransform(textBlurVal, (v) => `blur(${v}px)`);
  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full py-32 px-8 md:px-16 lg:px-32 relative z-10"
    >
      <motion.div
        viewport={{ amount: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center lg:items-center"
      >

        <motion.div
          className="w-full lg:w-1/3 aspect-[3/4] relative overflow-hidden rounded-xl shrink-0"
        >
          {/* Empty slot for Filmstrip to land into */}
        </motion.div>

        <div className="w-full lg:w-2/3 flex flex-col justify-center pt-8 relative z-20 text-theme-text">
          <motion.h2
            style={{ y: textY, opacity: textOpacity, filter: textFilter }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12"
          >
            I am a multi-disciplinary engineer driven by motion, logic, and aesthetics.
          </motion.h2>

          <motion.p
            style={{ y: textY, opacity: textOpacity, filter: textFilter }}
            className="text-xl md:text-2xl font-medium leading-relaxed opacity-70 mb-16"
          >
            {portfolioData.personalInfo.summary}
          </motion.p>

          <motion.div
            style={{ y: textY, opacity: textOpacity, filter: textFilter }}
          >
            <Magnetic>
              <a href="/resume.pdf" target="_blank" className="inline-flex items-center justify-center w-48 h-48 rounded-full border border-black/20 text-lg font-bold tracking-widest uppercase hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] hover:text-[#F3FCF0] transition-colors duration-500">
                Download CV
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
