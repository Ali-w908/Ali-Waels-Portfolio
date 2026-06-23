"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="experience" className="w-full py-24 px-8 z-10 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Experience & Education</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-1/2">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={`exp-${index}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 relative interactive"
            >
              <span className="absolute -left-[41px] top-1 flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full ring-4 ring-white">
                <Briefcase className="w-4 h-4 text-indigo-600" />
              </span>
              <div className="glass p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="flex items-center mb-1 text-xl font-bold text-slate-800">{exp.role}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-pink-600">{exp.date}</time>
                <h4 className="mb-3 text-md font-medium text-slate-700">{exp.company}</h4>
                <p className="text-base font-normal text-slate-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 ml-8 relative interactive"
          >
            <span className="absolute -left-[41px] top-1 flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full ring-4 ring-white">
              <GraduationCap className="w-4 h-4 text-pink-600" />
            </span>
            <div className="glass p-6 rounded-2xl hover:shadow-lg transition-shadow border-l-4 border-l-pink-400">
              <h3 className="flex items-center mb-1 text-xl font-bold text-slate-800">{portfolioData.education.degree}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-pink-600">{portfolioData.education.date}</time>
              <h4 className="mb-3 text-md font-medium text-slate-700">{portfolioData.education.school}</h4>
              <p className="text-base font-normal text-slate-600">{portfolioData.education.details}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
