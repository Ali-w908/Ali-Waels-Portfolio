"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Image from 'next/image';

export default function Certificates() {
  return (
    <motion.section 
      id="certificates" 
      className="w-full py-24 px-8 md:px-16 lg:px-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4">Certifications</h2>
          <p className="text-xl opacity-70">Continuous learning and professional growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="w-full aspect-[1.414/1] relative mb-6 overflow-hidden border border-white/10 rounded-lg">
                <Image src={cert.image} alt={cert.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{cert.title}</h3>
                <p className="text-lg font-medium opacity-70 mb-4">{cert.issuer}</p>
                <span className="inline-block self-start px-4 py-2 bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest rounded-full">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
