"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Timeline() {
  return (
    <section id="experience" className="w-full py-32 px-8 md:px-16 lg:px-32 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Experience & Education
          </h2>
          <p className="text-lg md:text-xl opacity-60">
            A timeline of professional growth.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="space-y-0 mb-24"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              className="group py-10 border-b border-theme-text/5 last:border-none"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                {/* Date */}
                <div className="shrink-0 md:w-44">
                  <span className="text-sm font-medium opacity-40">
                    {exp.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1 group-hover:opacity-100 transition-opacity duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-base font-medium opacity-50 mb-4">
                    {exp.company}
                  </p>
                  <p className="text-base leading-relaxed opacity-60 max-w-2xl">
                    {exp.description}
                  </p>

                  {/* View Project Link */}
                  {exp.linkedProject && (
                    <Link
                      href={`/projects/${exp.linkedProject}`}
                      className="inline-flex items-center gap-1.5 mt-5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-theme-text/10 hover:bg-theme-text hover:text-theme-main transition-colors duration-300"
                    >
                      View Project
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="py-10 border-t border-theme-text/10"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
            <div className="shrink-0 md:w-44">
              <span className="text-sm font-medium opacity-40">
                {portfolioData.education.date}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
                {portfolioData.education.degree}
              </h3>
              <p className="text-base font-medium opacity-50 mb-4">
                {portfolioData.education.school}
              </p>
              <p className="text-base leading-relaxed opacity-60 max-w-2xl">
                {portfolioData.education.details}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
