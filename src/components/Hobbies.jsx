"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hobbies() {
  return (
    <section id="hobbies" className="w-full py-24 px-8 md:px-16 lg:px-32 bg-anti-surface relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-anti-text mb-4">Beyond Engineering</h2>
          <p className="text-xl text-anti-textMuted">What keeps me balanced outside the lab.</p>
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
              <div className="google-card p-6 h-full flex flex-col hover:-translate-y-1">
                <div className="aspect-square w-full mb-6 placeholder-media bg-anti-surface border-none rounded-2xl overflow-hidden">
                  <p className="text-sm font-medium tracking-wide text-anti-textMuted opacity-60">[IMAGE: {hobby.title}]</p>
                </div>
                <h3 className="text-xl font-bold text-anti-text mb-2 tracking-tight">{hobby.title}</h3>
                <p className="text-base text-anti-textMuted leading-relaxed">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
