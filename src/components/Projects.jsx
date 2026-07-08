"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Projects() {
  return (
    <section id="projects" className="w-full py-32 px-8 md:px-16 lg:px-32 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-20 flex justify-between items-end"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Selected Work
          </h2>
          <span className="text-sm font-bold tracking-widest uppercase opacity-40 mb-2">
            [{portfolioData.projects.length}]
          </span>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {portfolioData.projects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <Link 
                href={`/projects/${project.id}`}
                className="group block relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-theme-text/5 border border-theme-text/10"
              >
                {/* Media */}
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-20">
                    <span className="font-bold tracking-widest uppercase">No Media</span>
                  </div>
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                  <div className="flex flex-col transform group-hover:-translate-y-2 transition-transform duration-500">
                    <span className="text-xs font-bold tracking-widest uppercase opacity-60 text-white mb-2">
                      {project.date}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium opacity-80 text-white line-clamp-2 mb-4">
                      {project.role} • {project.association}
                    </p>
                    
                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] font-bold tracking-wider uppercase text-white">
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider uppercase text-white/60">
                          +{project.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
