"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="banner" className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-slate-900 texture-overlay">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full placeholder-media bg-spectral-bg border-none rounded-none">
          <p className="text-xl font-bold opacity-30 tracking-widest">[BACKGROUND IMAGE PLACEHOLDER]</p>
        </div>
      </div>
      
      <div className="content-z max-w-3xl px-8 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold uppercase tracking-widest text-white mb-6 border-b-2 border-white/20 pb-6 inline-block"
        >
          {portfolioData.personalInfo.name.split(' ').slice(0, 2).join(' ')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-light tracking-wide text-gray-300 mb-8 uppercase"
        >
          {portfolioData.personalInfo.title}
          <br/>
          <span className="text-sm font-normal text-spectral-muted italic lowercase mt-2 block">aka claims they know everything</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#about" className="px-8 py-4 bg-spectral-accent text-white uppercase tracking-widest font-semibold text-sm rounded hover:bg-spectral-accentHover transition-colors">
            Explore Portfolio
          </a>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
        className="absolute bottom-10 content-z text-white/50 hover:text-white transition-colors"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.a>
    </section>
  );
}
