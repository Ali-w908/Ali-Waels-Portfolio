"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-8 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Featured Work</h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl">
            A selection of my recent mechatronics, embedded systems, and software engineering projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="glass rounded-2xl overflow-hidden h-full flex flex-col group interactive">
                  <div className="aspect-video w-full placeholder-media rounded-none border-0 border-b border-slate-200/50 group-hover:scale-105 transition-transform duration-500">
                    <p className="font-medium text-sm text-slate-400">[THUMBNAIL 16:9]</p>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-pink-600 font-medium mb-3">{project.role}</p>
                    <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
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
