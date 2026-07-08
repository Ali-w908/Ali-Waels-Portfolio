"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Image from 'next/image';
import Magnetic from './Magnetic';

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full py-32 px-8 md:px-16 lg:px-32 relative z-10"
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center lg:items-center"
      >
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-1/3 aspect-[3/4] relative overflow-hidden rounded-2xl shrink-0 shadow-lg"
        >
          <Image
            src="/media/portrait-abtme.jpeg"
            alt="Ali Wael"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="w-full lg:w-2/3 flex flex-col justify-center pt-8 relative z-20 text-theme-text">
          <motion.h2
            style={{ y: textY, opacity: textOpacity }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-12"
          >
            I am a multi-disciplinary engineer driven by motion, logic, and aesthetics.
          </motion.h2>

          <motion.p
            style={{ y: textY, opacity: textOpacity }}
            className="text-lg md:text-xl font-medium leading-relaxed opacity-70 mb-16"
          >
            {portfolioData.personalInfo.summary}
          </motion.p>

          <motion.div
            style={{ y: textY, opacity: textOpacity }}
          >
            <Magnetic>
              <a href="/resume.pdf" target="_blank" className="inline-flex items-center justify-center w-44 h-44 rounded-full border border-theme-text/20 text-base font-bold tracking-widest uppercase hover:bg-theme-text hover:text-theme-main transition-colors duration-500">
                Download CV
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
