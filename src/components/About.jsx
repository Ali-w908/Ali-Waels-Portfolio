"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-8 bg-spectral-bg texture-overlay text-center">
      <div className="content-z max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-6">
            Welcome to My Portfolio
          </h2>
          
          <div className="mb-12">
            <a href="/resume.pdf" target="_blank" className="inline-block px-8 py-4 border-2 border-spectral-accent text-spectral-accent uppercase tracking-widest font-semibold text-sm rounded hover:bg-spectral-accent hover:text-white transition-colors">
              Download My CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12 text-left bg-spectral-alt p-8 md:p-12 rounded-lg border-t-4 border-spectral-accent shadow-2xl"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden placeholder-media border-4 border-spectral-lighter">
            <span className="text-sm font-bold">[PORTRAIT]</span>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Hi! I'm {portfolioData.personalInfo.name.split(' ')[0]},</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {portfolioData.personalInfo.summary}
            </p>
            <p className="text-md text-spectral-muted">
              I am highly collaborative, accustomed to wearing multiple hats, and eager to connect the dots between hardware design and software deployment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
