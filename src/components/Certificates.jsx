"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="w-full py-24 px-8 bg-spectral-alt texture-overlay relative">
      <div className="content-z max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-spectral-accent mx-auto mb-6"></div>
        </motion.div>

        <div className="flex flex-col gap-6">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-spectral-bg p-6 md:p-8 rounded-sm shadow-md border-l-4 border-l-spectral-accent flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-spectral-lighter/20 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="mt-1 text-spectral-accent">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">{cert.title}</h3>
                  <p className="text-md text-gray-400 mt-1">{cert.issuer}</p>
                </div>
              </div>
              <span className="px-4 py-2 bg-spectral-alt text-white font-bold tracking-widest text-sm rounded-sm">
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
