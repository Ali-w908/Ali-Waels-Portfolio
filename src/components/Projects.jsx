"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-8 md:px-16 lg:px-32 bg-anti-surface relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-anti-text mb-4">Selected Work</h2>
          <p className="text-xl text-anti-textMuted">Projects spanning robotics, software, and embedded systems.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`} className="block h-full">
                <div className="google-card h-full flex flex-col group">
                  <div className="aspect-[16/10] w-full placeholder-media border-b border-anti-border rounded-b-none group-hover:bg-white transition-colors">
                    <p className="text-sm font-medium opacity-50 tracking-wide">[THUMBNAIL 16:10]</p>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-xs font-bold tracking-wider uppercase text-anti-primary mb-2 block">{project.role}</span>
                      <h3 className="text-2xl font-bold text-anti-text tracking-tight group-hover:text-anti-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-base text-anti-textMuted mb-8 flex-grow leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-anti-surface text-anti-textMuted rounded-full text-xs font-medium border border-anti-border">
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="px-3 py-1 bg-anti-surface text-anti-textMuted rounded-full text-xs font-medium border border-anti-border">
                          +{project.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
