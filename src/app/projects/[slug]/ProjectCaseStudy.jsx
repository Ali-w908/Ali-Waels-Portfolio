"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, ChevronDown, FileText, Code2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import BackButton from '@/components/BackButton';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

export default function ProjectCaseStudy({ project, codeSnippets = [], extractedText = [] }) {
  const [openDocs, setOpenDocs] = useState({});
  const [openCode, setOpenCode] = useState({});

  const toggleDoc = (i) => setOpenDocs(prev => ({ ...prev, [i]: !prev[i] }));
  const toggleCode = (i) => setOpenCode(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="w-full min-h-screen bg-theme-main text-theme-text pb-32">
      {/* Sticky Back Button */}
      <BackButton label="Back to Projects" />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-16 px-8 md:px-16 lg:px-32 bg-neutral-950">
        <div className="absolute inset-0 z-0">
          {project.video ? (
            <video
              src={project.video}
              autoPlay loop muted playsInline
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-theme-main via-theme-main/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-sm font-bold tracking-widest uppercase opacity-50 block mb-4">
              {project.date}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-80">
              {project.role} • {project.association}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-32">
        
        {/* Overview Grid */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-16 border-b border-theme-text/10"
        >
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase opacity-40 mb-4">The Ask</h2>
              <p className="text-xl leading-relaxed opacity-90 border-l-4 border-theme-text/20 pl-6">{project.theAsk}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase opacity-40 mb-4">The Result</h2>
              <p className="text-xl leading-relaxed opacity-90 border-l-4 border-theme-text/20 pl-6">{project.theResult}</p>
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-12">
            {project.repo && (
              <div>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-theme-text/20 hover:bg-theme-text hover:text-theme-main transition-colors text-sm font-bold tracking-widest uppercase">
                  {project.repoLabel || "View Source Code"}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase opacity-40 mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-theme-text/10 bg-theme-text/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Dynamic Sections */}
        {project.sections && project.sections.length > 0 && (
          <div className="py-16 space-y-32 border-b border-theme-text/10">
            {project.sections.map((section, idx) => (
              <motion.section 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              >
                <div className="flex flex-col gap-8">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{section.title}</h2>
                    <p className="text-lg leading-relaxed opacity-80 whitespace-pre-wrap">{section.text}</p>
                  </div>
                  
                  {/* Media for this section */}
                  {section.media && section.media.length > 0 && (
                    <div className={`grid grid-cols-1 ${section.media.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
                      {section.media.map((m, mIdx) => (
                        <div key={mIdx} className="rounded-xl overflow-hidden bg-theme-text/5 border border-theme-text/10">
                          {m.type === 'video' ? (
                            <video src={m.src} autoPlay loop muted playsInline controls className="w-full h-auto max-h-[60vh] object-cover bg-black" />
                          ) : (
                            <img src={m.src} alt={m.caption} className="w-full h-auto max-h-[60vh] object-cover" />
                          )}
                          {m.caption && (
                            <p className="p-4 text-xs font-bold tracking-widest uppercase opacity-50 text-center">{m.caption}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.section>
            ))}
          </div>
        )}

        {/* Recommendation (if any) */}
        {project.recommendation && (
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="py-16 border-b border-theme-text/10"
          >
            <blockquote className="border-l-4 border-theme-text/20 pl-8 italic">
              <p className="text-2xl leading-relaxed opacity-90 mb-6">"{project.recommendation.text}"</p>
              <footer className="text-sm font-bold tracking-widest uppercase opacity-60">
                — {project.recommendation.name}, {project.recommendation.title}
              </footer>
            </blockquote>
          </motion.section>
        )}

        {/* Technical Documentation (Expandable Accordions) */}
        {extractedText.length > 0 && (
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="py-16 border-b border-theme-text/10"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">Technical Documentation</h2>
            <div className="space-y-4">
              {extractedText.map((file, i) => (
                <div key={i} className="rounded-xl border border-theme-text/20 overflow-hidden">
                  <button 
                    onClick={() => toggleDoc(i)}
                    className="w-full flex items-center justify-between p-6 bg-theme-text/5 hover:bg-theme-text/10 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <FileText className="w-6 h-6 opacity-60" />
                      <div>
                        <h3 className="font-bold tracking-wider">{file.file}</h3>
                        <p className="text-xs tracking-widest uppercase opacity-50 mt-1">Read the final documentation file prepared for this project</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 opacity-50 transition-transform ${openDocs[i] ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openDocs[i] && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 prose prose-invert prose-lg max-w-none border-t border-theme-text/10 bg-theme-main">
                          <ReactMarkdown>{file.content}</ReactMarkdown>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Source Code Snippets (Expandable Accordions) */}
        {codeSnippets.length > 0 && (
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="py-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">Source Code Reference</h2>
            <div className="space-y-4">
              {codeSnippets.map((snippet, i) => (
                <div key={i} className="rounded-xl border border-theme-text/20 overflow-hidden">
                  <button 
                    onClick={() => toggleCode(i)}
                    className="w-full flex items-center justify-between p-6 bg-theme-text/5 hover:bg-theme-text/10 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <Code2 className="w-6 h-6 opacity-60" />
                      <div>
                        <h3 className="font-bold tracking-wider">{snippet.file}</h3>
                        <p className="text-xs tracking-widest uppercase opacity-50 mt-1">Language: {snippet.language}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 opacity-50 transition-transform ${openCode[i] ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openCode[i] && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-theme-text/10 bg-black/50">
                          <SyntaxHighlighter
                            language={snippet.language}
                            style={vscDarkPlus}
                            customStyle={{ margin: 0, padding: '2rem', background: 'transparent', fontSize: '0.875rem' }}
                          >
                            {snippet.content}
                          </SyntaxHighlighter>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
