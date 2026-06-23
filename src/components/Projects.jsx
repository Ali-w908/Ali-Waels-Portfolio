"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-8 bg-spectral-bg texture-overlay relative">
      <div className="content-z max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-spectral-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of my recent mechatronics, embedded systems, and software engineering projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="bg-spectral-alt rounded-sm overflow-hidden h-full flex flex-col group border border-transparent hover:border-spectral-lighter transition-colors shadow-md">
                  <div className="aspect-video w-full placeholder-media rounded-none group-hover:opacity-80 transition-opacity">
                    <p className="font-medium text-sm text-spectral-muted tracking-widest">[THUMBNAIL 16:9]</p>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-spectral-accent transition-colors uppercase tracking-wider">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-spectral-accent font-bold tracking-widest mb-4 uppercase">{project.role}</p>
                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-spectral-bg text-gray-300 rounded text-[10px] uppercase tracking-wider font-semibold border border-spectral-lighter/50">
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="px-2 py-1 bg-spectral-bg text-gray-300 rounded text-[10px] uppercase tracking-wider font-semibold border border-spectral-lighter/50">
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
