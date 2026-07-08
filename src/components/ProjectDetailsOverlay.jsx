"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Image from 'next/image';

export default function ProjectDetailsOverlay({ projectId, onClose }) {
  const project = portfolioData.projects.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div 
        layoutId={`project-row-${project.id}`}
        className="w-full max-w-5xl h-[90vh] bg-[#141416] text-[#F2F2F2] rounded-3xl overflow-hidden flex flex-col shadow-2xl relative"
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Header / Media area */}
        <div className="relative h-64 md:h-96 w-full shrink-0">
          {project.video ? (
            <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 mix-blend-screen" />
          ) : project.image ? (
            <Image src={project.image} alt={project.title} fill className="object-cover opacity-60 mix-blend-screen" />
          ) : (
            <div className="w-full h-full bg-white/5" />
          )}
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center text-white transition-colors"
          >
            ✕
          </button>

          <div className="absolute inset-0 bg-gradient-to-t from-[#141416] to-transparent pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <motion.h2 
              layoutId={`project-title-${project.id}`}
              className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none text-white"
            >
              {project.title}
            </motion.h2>
            <motion.span 
              layoutId={`project-role-${project.id}`}
              className="text-lg md:text-xl font-bold tracking-widest uppercase opacity-80 text-[#BDE038]"
            >
              {project.role}
            </motion.span>
          </div>
        </div>

        {/* Content area */}
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: The Ask & The Result */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h3 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4 border-b border-white/10 pb-2">The Ask</h3>
                <p className="text-xl md:text-2xl leading-relaxed font-medium">{project.theAsk}</p>
              </section>

              <section>
                <h3 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4 border-b border-white/10 pb-2">The Result</h3>
                <p className="text-xl md:text-2xl leading-relaxed text-white">{project.theResult}</p>
              </section>

              <section>
                <h3 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4 border-b border-white/10 pb-2">Architecture & Contribution</h3>
                <p className="text-lg leading-relaxed opacity-80">{project.architecture}</p>
              </section>
            </div>

            {/* Right Column: Tech Stack */}
            <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
              <h3 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-6 border-b border-white/10 pb-2">Tech Stack</h3>
              <div className="flex flex-col gap-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-lg font-medium tracking-tight">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
