"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-8 z-10 relative bg-white/30 backdrop-blur-md border-y border-white/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 text-center">Engineering Toolkit</h2>
          <p className="text-xl text-slate-500 text-center max-w-2xl mx-auto">
            Hardware, software, and everything in between.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl interactive hover:border-indigo-200 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200/50">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/80 text-slate-700 shadow-sm rounded-lg text-sm font-medium border border-slate-100"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Witty remark placeholder */}
        <div className="mt-16 text-center text-slate-400 italic">
          {/* <!-- Add punchline about debugging hardware here --> */}
          <p>"If it compiles on the first try, it's a hardware problem."</p>
        </div>
      </div>
    </section>
  );
}
