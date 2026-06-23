"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
  };

  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center p-8 overflow-hidden z-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full md:w-1/2 flex flex-col justify-center pr-4"
      >
        <motion.h2 variants={item} className="text-xl md:text-2xl text-pink-600 font-medium mb-2">
          Hello, I'm
        </motion.h2>
        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2 text-slate-800">
          {portfolioData.personalInfo.name.split(' ').slice(0, 2).join(' ')}<br/>
          <span className="text-indigo-600">Mechatronics Engineer.</span>
        </motion.h1>
        <motion.h3 variants={item} className="text-lg md:text-xl font-medium italic mb-6 text-slate-500">
          aka claims they know everything
        </motion.h3>
        <motion.p variants={item} className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed">
          {portfolioData.personalInfo.summary}
        </motion.p>
        
        <motion.div variants={item} className="flex gap-4">
          <a href="#projects" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium interactive hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
            View Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-white text-slate-800 rounded-full font-medium interactive border border-slate-200 hover:bg-slate-50 transition-colors shadow-md">
            Get in touch
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        className="w-full md:w-1/2 h-[50vh] md:h-[70vh] flex items-center justify-center mt-12 md:mt-0"
      >
        <motion.div 
          className="w-full max-w-md aspect-[3/4] md:aspect-square placeholder-media glass interactive"
          whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
          style={{ perspective: 1000 }}
        >
          <div className="text-center p-6">
            <p className="text-xl font-bold mb-2">[PLACEHOLDER]</p>
            <p className="text-sm">Hero Portrait / Interactive Model</p>
            <p className="text-xs opacity-70 mt-2">Aspect Ratio: Flexible</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
