"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-24 px-8 z-10 relative bg-slate-900 text-white overflow-hidden">
      {/* Background decoration for footer */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-[50%] -right-[10%] w-[70%] h-[150%] rounded-full bg-indigo-600 blur-[120px]" />
        <div className="absolute -bottom-[50%] -left-[10%] w-[50%] h-[150%] rounded-full bg-pink-600 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Let's build something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">incredible.</span></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Currently open for new opportunities and interesting projects.
          </p>
          
          <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg interactive hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-16">
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>

        <div className="flex gap-6 mb-16">
          <motion.a 
            whileHover={{ y: -5 }}
            href={`mailto:${portfolioData.personalInfo.email}`} 
            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors interactive"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
          <motion.a 
            whileHover={{ y: -5 }}
            href={`https://${portfolioData.personalInfo.linkedin}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors interactive"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </motion.a>
          <motion.a 
            whileHover={{ y: -5 }}
            href={`https://${portfolioData.personalInfo.github}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors interactive"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
          </motion.a>
        </div>
        
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Engineered with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
