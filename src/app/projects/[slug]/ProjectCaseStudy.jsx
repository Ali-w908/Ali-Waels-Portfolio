"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

export default function ProjectCaseStudy({ project, codeSnippets = [], extractedText = [] }) {
  return (
    <div className="w-full min-h-screen bg-theme-main text-theme-text pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-16 px-8 md:px-16 lg:px-32">
        <div className="absolute inset-0 z-0 bg-theme-text/5">
          {project.video ? (
            <video
              src={project.video}
              autoPlay loop muted playsInline
              className="w-full h-full object-cover opacity-30"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-30"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-theme-main via-theme-main/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <Link href="/#projects" className="inline-flex items-center gap-2 mb-8 text-sm font-bold tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
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
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-32">
        
        {/* Overview Grid */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-16 border-b border-theme-text/10"
        >
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase opacity-40 mb-4">The Ask</h2>
              <p className="text-xl leading-relaxed opacity-90">{project.theAsk}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase opacity-40 mb-4">The Result</h2>
              <p className="text-xl leading-relaxed opacity-90">{project.theResult}</p>
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
            {project.architecture && (
              <div>
                <h2 className="text-sm font-bold tracking-widest uppercase opacity-40 mb-4">Architecture</h2>
                <p className="text-base leading-relaxed opacity-70">{project.architecture}</p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Contributions List */}
        {project.contributions && project.contributions.length > 0 && (
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="py-16 border-b border-theme-text/10"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">Key Contributions</h2>
            <ul className="space-y-4">
              {project.contributions.map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-lg opacity-80">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 opacity-50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
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

        {/* Media Gallery (Pick and Place) */}
        {project.media && project.media.length > 0 && (
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="py-16 border-b border-theme-text/10"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">System Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.media.map((m, i) => (
                <div key={i} className={`rounded-xl overflow-hidden bg-theme-text/5 ${i === 0 ? 'md:col-span-2' : ''}`}>
                  {m.type === 'video' ? (
                    <video src={m.src} controls className="w-full h-auto object-cover max-h-[60vh] bg-black" />
                  ) : (
                    <img src={m.src} alt={m.caption} className="w-full h-auto object-cover max-h-[60vh]" />
                  )}
                  <p className="p-4 text-sm font-bold tracking-widest uppercase opacity-50 text-center">{m.caption}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Extracted Markdown Reports */}
        {extractedText.length > 0 && (
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="py-16 border-b border-theme-text/10"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">Project Documentation</h2>
            <div className="space-y-16">
              {extractedText.map((file, i) => (
                <div key={i} className="prose prose-invert prose-lg max-w-none">
                  <ReactMarkdown>{file.content}</ReactMarkdown>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Extracted Source Code */}
        {codeSnippets.length > 0 && (
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="py-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">Source Code Snippets</h2>
            <div className="space-y-8">
              {codeSnippets.map((snippet, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-theme-text/10 bg-theme-text/5">
                  <div className="px-4 py-2 border-b border-theme-text/10 bg-black/20 text-xs font-mono opacity-60 flex justify-between">
                    <span>{snippet.file}</span>
                    <span className="uppercase">{snippet.language}</span>
                  </div>
                  <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-theme-text/20 scrollbar-track-transparent">
                    <SyntaxHighlighter
                      language={snippet.language}
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: '1rem', background: 'transparent', fontSize: '0.875rem' }}
                    >
                      {snippet.content}
                    </SyntaxHighlighter>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
