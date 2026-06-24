"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="experience" className="w-full py-24 px-8 md:px-16 lg:px-32 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-anti-text mb-4">Experience</h2>
          <p className="text-xl text-anti-textMuted">Where I've built things.</p>
        </motion.div>

        <div className="relative border-l-2 border-anti-border ml-4 md:ml-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={`exp-${index}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              <span className="absolute -left-[41px] top-2 flex items-center justify-center w-8 h-8 bg-white rounded-full border-2 border-anti-primary shadow-sm">
                <span className="w-2.5 h-2.5 bg-anti-primary rounded-full"></span>
              </span>
              <div className="google-card p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-anti-text tracking-tight">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-anti-primary">{exp.company}</h4>
                  </div>
                  <time className="mt-2 md:mt-0 px-3 py-1 bg-anti-surface rounded-full text-sm font-medium text-anti-textMuted inline-block whitespace-nowrap border border-anti-border">
                    {exp.date}
                  </time>
                </div>
                <p className="text-base text-anti-textMuted leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 ml-8 relative"
          >
            <span className="absolute -left-[41px] top-2 flex items-center justify-center w-8 h-8 bg-white rounded-full border-2 border-anti-accentGreen shadow-sm">
              <span className="w-2.5 h-2.5 bg-anti-accentGreen rounded-full"></span>
            </span>
            <div className="google-card p-8">
               <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-anti-text tracking-tight">{portfolioData.education.degree}</h3>
                    <h4 className="text-lg font-medium text-anti-accentGreen">{portfolioData.education.school}</h4>
                  </div>
                  <time className="mt-2 md:mt-0 px-3 py-1 bg-anti-surface rounded-full text-sm font-medium text-anti-textMuted inline-block whitespace-nowrap border border-anti-border">
                    {portfolioData.education.date}
                  </time>
                </div>
              <p className="text-base text-anti-textMuted leading-relaxed">{portfolioData.education.details}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
