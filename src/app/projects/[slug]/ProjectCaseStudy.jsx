"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ProjectCaseStudy({ project, codeSnippets = [], extractedText = [] }) {
  return (
    <div className="w-full min-h-screen bg-theme-main text-theme-text selection:bg-white selection:text-black dark:selection:bg-neutral-800 dark:selection:text-white pb-32">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 mix-blend-difference pointer-events-none">
        <Link href="/" className="inline-flex items-center gap-2 text-white hover:opacity-70 transition-opacity pointer-events-auto group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold tracking-widest uppercase text-sm">Back to Home</span>
        </Link>
      </nav>

      {/* Hero Media Header */}
      <header className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black flex items-center justify-center">
        {project.video ? (
          <video 
            src={project.video} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        )}
        <div className="relative z-10 text-center px-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
          >
            {project.role}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase max-w-5xl mx-auto leading-none"
          >
            {project.title}
          </motion.h1>
        </div>
      </header>

      {/* Case Study Content */}
      <main className="max-w-5xl mx-auto px-8 md:px-16 mt-24 space-y-32">
        
        {/* Context / The Ask */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4 border-b border-theme-text/10 pb-4">01 / The Ask</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-2xl md:text-3xl font-medium leading-snug">{project.theAsk || project.description}</p>
            {project.theResult && (
              <div className="p-6 bg-theme-text/5 rounded-2xl border border-theme-text/10">
                <h4 className="text-xs font-bold tracking-widest uppercase opacity-50 mb-2">The Result</h4>
                <p className="text-lg opacity-80">{project.theResult}</p>
              </div>
            )}
          </div>
        </section>

        {/* Challenges & Architecture */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4 border-b border-theme-text/10 pb-4">02 / Architecture & Challenges</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            {extractedText && extractedText.length > 0 ? (
              <div className="space-y-6">
                {extractedText.map((textObj, idx) => (
                  <div key={idx} className="p-6 bg-theme-text/5 rounded-xl border border-theme-text/10">
                    <h3 className="text-xs font-bold tracking-widest uppercase opacity-50 mb-4 border-b border-theme-text/10 pb-2">Extracted from: {textObj.file}</h3>
                    <p className="text-sm opacity-80 leading-relaxed font-mono whitespace-pre-wrap">{textObj.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg opacity-80 leading-relaxed">{project.architecture}</p>
            )}
            
            <div className="flex flex-wrap gap-2 pt-4">
              {project.techStack?.map((tech, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-theme-text/20 bg-theme-text/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Code Implementation */}
        {codeSnippets && codeSnippets.length > 0 && (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4 border-b border-theme-text/10 pb-4">03 / Implementation</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                A glimpse into the underlying logic and system behavior extracted directly from the project repository.
              </p>
              <div className="space-y-12">
                {codeSnippets.map((snippet, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e]">
                    <div className="bg-[#1e1e1e] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded">{snippet.file}</span>
                    </div>
                    <div className="max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#1e1e1e] [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full">
                      <SyntaxHighlighter 
                        language={snippet.language} 
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, padding: '2rem', fontSize: '0.875rem', background: '#1e1e1e' }}
                      >
                        {snippet.content}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}
