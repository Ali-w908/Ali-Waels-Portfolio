"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="w-full py-24 px-8 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 flex items-center gap-3">
            <Award className="w-8 h-8 text-indigo-600" />
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-center justify-between interactive hover:bg-white/60 transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800">{cert.title}</h3>
                <p className="text-slate-500">{cert.issuer}</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
