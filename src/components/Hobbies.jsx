"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hobbies() {
  return (
    <section id="hobbies" className="w-full py-24 px-8 bg-spectral-bg texture-overlay relative">
      <div className="content-z max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-4">Beyond Engineering</h2>
          <div className="w-16 h-1 bg-spectral-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            What keeps me balanced and driven outside the lab.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-spectral-alt p-6 rounded-sm shadow-md border border-spectral-lighter/30 h-full flex flex-col group">
                <div className="aspect-square w-full mb-6 placeholder-media border-none opacity-50 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-bold tracking-widest text-spectral-muted uppercase">[IMAGE: {hobby.title}]</p>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-spectral-accent transition-colors">{hobby.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
