"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-24 px-8 bg-[#151a1e] text-center border-t border-spectral-lighter/20 relative">
      <div className="content-z max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-8">Get In Touch</h2>
        
        <div className="flex gap-6 mb-16">
          <motion.a 
            whileHover={{ y: -5 }}
            href={`mailto:${portfolioData.personalInfo.email}`} 
            className="w-12 h-12 flex items-center justify-center bg-spectral-alt rounded text-white hover:bg-spectral-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
          <motion.a 
            whileHover={{ y: -5 }}
            href={`https://${portfolioData.personalInfo.linkedin}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-spectral-alt rounded text-white hover:bg-spectral-accent transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </motion.a>
          <motion.a 
            whileHover={{ y: -5 }}
            href={`https://${portfolioData.personalInfo.github}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-spectral-alt rounded text-white hover:bg-spectral-accent transition-colors"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
          </motion.a>
        </div>
        
        <p className="text-spectral-muted text-sm uppercase tracking-widest font-semibold mb-2">
          &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}
        </p>
        <p className="text-spectral-muted text-xs uppercase tracking-widest">
          Design inspired by <a href="https://html5up.net" className="border-b border-spectral-muted border-dashed hover:text-spectral-accent hover:border-spectral-accent transition-colors">HTML5 UP</a>
        </p>
      </div>
    </footer>
  );
}
