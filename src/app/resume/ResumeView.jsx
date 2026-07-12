"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function ResumeView({ content }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-theme-main text-theme-text">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-16 py-4 bg-theme-main/80 backdrop-blur-xl border-b border-theme-text/10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </button>
        <a
          href="/AliWael-cv.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-theme-text text-theme-main text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </header>

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

      {/* Floating Download Button (visible on scroll, mobile-friendly) */}
      <a
        href="/AliWael-cv.pdf"
        download
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 rounded-full bg-theme-text text-theme-main text-xs font-bold tracking-widest uppercase shadow-2xl hover:scale-105 transition-transform md:hidden"
      >
        <Download className="w-4 h-4" />
        PDF
      </a>
    </div>
  );
}
