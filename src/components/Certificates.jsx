"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Certificates() {
  return (
    <section id="certificates" className="w-full py-24 px-8 md:px-16 lg:px-32 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-anti-text mb-4">Certifications</h2>
          <p className="text-xl text-anti-textMuted">Continuous learning and professional growth.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="google-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-anti-text tracking-tight">{cert.title}</h3>
                <p className="text-base text-anti-textMuted mt-1 font-medium">{cert.issuer}</p>
              </div>
              <span className="px-4 py-2 bg-anti-surface border border-anti-border text-anti-textMuted font-medium text-sm rounded-full whitespace-nowrap">
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
