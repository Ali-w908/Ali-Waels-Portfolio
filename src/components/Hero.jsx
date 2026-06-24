"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="banner" className="w-full min-h-[90vh] flex flex-col justify-center px-8 md:px-16 lg:px-32 bg-white pt-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full bg-anti-surface border border-anti-border text-anti-primary font-medium text-sm"
        >
          {portfolioData.personalInfo.title}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tight text-anti-text leading-none mb-6"
        >
          {portfolioData.personalInfo.name.split(' ')[0]} <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-anti-primary to-anti-accentCyan">
            {portfolioData.personalInfo.name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl font-normal text-anti-textMuted max-w-2xl mb-12"
        >
          Build the new way. <br className="hidden md:block"/>
          <span className="italic text-lg">aka claims they know everything</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-anti-primary text-white font-medium text-lg rounded-full hover:bg-anti-primaryHover hover:shadow-google-hover transition-all">
            View Projects
          </a>
          <a href="#about" className="px-8 py-4 bg-white text-anti-text border border-anti-border font-medium text-lg rounded-full hover:bg-anti-surface transition-all">
            About Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
