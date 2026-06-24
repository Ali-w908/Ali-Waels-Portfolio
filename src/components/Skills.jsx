"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const badgeColors = ['bg-anti-primary/10 text-anti-primary border-anti-primary/20', 'bg-anti-accentRed/10 text-anti-accentRed border-anti-accentRed/20', 'bg-anti-accentGreen/10 text-anti-accentGreen border-anti-accentGreen/20'];

  return (
    <section id="skills" className="w-full py-24 px-8 md:px-16 lg:px-32 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-anti-text mb-4">Engineering Toolkit</h2>
          <p className="text-xl text-anti-textMuted">Hardware, software, and the logic in between.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="google-card p-8"
            >
              <h3 className="text-xl font-bold text-anti-text mb-6 tracking-tight">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${badgeColors[index % badgeColors.length]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="inline-block px-6 py-3 bg-anti-surface border border-anti-border rounded-full text-anti-textMuted font-medium text-sm">
            "If it compiles on the first try, it's a hardware problem."
          </p>
        </div>
      </div>
    </section>
  );
}
