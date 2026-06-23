"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hobbies() {
  return (
    <section id="more" className="w-full py-24 px-8 z-10 relative bg-white/30 backdrop-blur-md border-y border-white/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">More Than An Engineer</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Volunteering, hobbies, and how I spend my time away from the keyboard and soldering iron.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioData.hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="glass p-6 rounded-2xl interactive hover:scale-[1.02] transition-transform origin-center">
                <div className="aspect-square w-full mb-4 placeholder-media rounded-xl">
                  <p className="text-sm font-medium opacity-50">[IMAGE: {hobby.title}]</p>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{hobby.title}</h3>
                <p className="text-slate-600">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
