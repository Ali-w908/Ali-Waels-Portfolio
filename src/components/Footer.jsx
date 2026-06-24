"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-24 px-8 md:px-16 lg:px-32 bg-anti-surface border-t border-anti-border text-center relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-anti-text mb-12">Let's build.</h2>
        
        <div className="flex gap-6 mb-16">
          <motion.a 
            whileHover={{ y: -5 }}
            href={`mailto:${portfolioData.personalInfo.email}`} 
            className="w-16 h-16 flex items-center justify-center bg-white border border-anti-border rounded-full text-anti-text hover:bg-anti-surfaceHover shadow-sm transition-all"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </motion.a>
          <motion.a 
            whileHover={{ y: -5 }}
            href={`https://${portfolioData.personalInfo.linkedin}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center bg-white border border-anti-border rounded-full text-anti-text hover:bg-anti-surfaceHover shadow-sm transition-all"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </motion.a>
          <motion.a 
            whileHover={{ y: -5 }}
            href={`https://${portfolioData.personalInfo.github}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center bg-white border border-anti-border rounded-full text-anti-text hover:bg-anti-surfaceHover shadow-sm transition-all"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
          </motion.a>
        </div>
        
        <p className="text-anti-textMuted text-sm font-medium mb-2">
          &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
