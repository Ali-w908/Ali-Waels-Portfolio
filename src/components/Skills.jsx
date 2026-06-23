"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-8 bg-spectral-alt texture-overlay relative">
      <div className="content-z max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-4">Engineering Toolkit</h2>
          <div className="w-16 h-1 bg-spectral-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hardware, software, and everything in between.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-spectral-bg p-8 rounded-sm shadow-md border border-spectral-lighter/30"
            >
              <h3 className="text-lg font-bold text-white mb-6 pb-4 border-b border-spectral-lighter uppercase tracking-widest">
                {category.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 bg-spectral-alt text-gray-300 rounded-sm text-sm font-semibold tracking-wide"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-spectral-muted italic text-sm">
          {/* <!-- Add punchline about debugging hardware here --> */}
          <p>"If it compiles on the first try, it's a hardware problem."</p>
        </div>
      </div>
    </section>
  );
}
