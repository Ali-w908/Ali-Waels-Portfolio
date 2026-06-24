"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-8 md:px-16 lg:px-32 bg-anti-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="google-card p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 rounded-full overflow-hidden placeholder-media border-4 border-white shadow-google">
            <span className="text-sm font-bold">[PORTRAIT]</span>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-anti-text mb-6 tracking-tight">
              Hi, I'm {portfolioData.personalInfo.name.split(' ')[0]}.
            </h2>
            <p className="text-lg md:text-xl text-anti-textMuted leading-relaxed mb-8">
              {portfolioData.personalInfo.summary}
            </p>
            <div className="flex gap-4">
              <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-anti-border text-anti-primary font-medium rounded-full hover:bg-anti-surfaceHover transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
