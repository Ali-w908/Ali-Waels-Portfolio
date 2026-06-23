"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="experience" className="w-full py-24 px-8 bg-spectral-alt texture-overlay relative">
      <div className="content-z max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-4">Experience & Education</h2>
          <div className="w-16 h-1 bg-spectral-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-spectral-lighter ml-4 md:ml-1/2">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={`exp-${index}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              <span className="absolute -left-[41px] top-1 flex items-center justify-center w-8 h-8 bg-spectral-bg rounded-full border-2 border-spectral-lighter text-spectral-accent">
                <Briefcase className="w-4 h-4" />
              </span>
              <div className="bg-spectral-bg p-6 rounded-md shadow-lg border border-spectral-lighter/50">
                <h3 className="flex items-center mb-1 text-xl font-bold text-white uppercase tracking-wider">{exp.role}</h3>
                <time className="block mb-4 text-sm font-bold tracking-widest text-spectral-accent">{exp.date}</time>
                <h4 className="mb-4 text-md font-semibold text-gray-300">{exp.company}</h4>
                <p className="text-base font-normal text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 ml-8 relative"
          >
            <span className="absolute -left-[41px] top-1 flex items-center justify-center w-8 h-8 bg-spectral-bg rounded-full border-2 border-spectral-lighter text-white">
              <GraduationCap className="w-4 h-4" />
            </span>
            <div className="bg-spectral-bg p-6 rounded-md shadow-lg border-l-4 border-l-white">
              <h3 className="flex items-center mb-1 text-xl font-bold text-white uppercase tracking-wider">{portfolioData.education.degree}</h3>
              <time className="block mb-4 text-sm font-bold tracking-widest text-spectral-accent">{portfolioData.education.date}</time>
              <h4 className="mb-4 text-md font-semibold text-gray-300">{portfolioData.education.school}</h4>
              <p className="text-base font-normal text-gray-400 leading-relaxed">{portfolioData.education.details}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
