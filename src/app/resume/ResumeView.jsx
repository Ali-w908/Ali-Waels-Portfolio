"use client";

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import BackButton from '@/components/BackButton';

export default function ResumeView({ content }) {
  return (
    <div className="min-h-screen bg-theme-main text-theme-text">
      {/* Sticky Back Button (Top Left) */}
      <BackButton label="Back" />

      {/* Fixed Download PDF Button (Top Right) */}
      <motion.a
        href="/AliWael-cv.pdf"
        download
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-theme-main/60 backdrop-blur-xl border border-theme-text/20 shadow-lg hover:bg-theme-main/80 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-xs font-bold tracking-widest uppercase cursor-pointer"
      >
        <Download className="w-4 h-4 shrink-0" />
        <span className="hidden md:inline-block">Download PDF</span>
        <span className="md:hidden">PDF</span>
      </motion.a>

      {/* CV Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-4xl mx-auto px-6 md:px-16 py-16"
      >
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:tracking-tight prose-headings:font-bold
          prose-h2:text-2xl prose-h2:border-b prose-h2:border-theme-text/10 prose-h2:pb-3 prose-h2:mt-12
          prose-strong:text-theme-text
          prose-p:leading-relaxed prose-p:opacity-90
          prose-li:opacity-90
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        ">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </motion.main>

    </div>
  );
}
