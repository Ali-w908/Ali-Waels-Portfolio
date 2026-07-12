"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton({ label = "Back" }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    router.back();
  };

  const showText = !scrolled || hovered;

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
      className={`fixed top-6 left-6 md:top-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] cursor-pointer
        ${scrolled && !hovered
          ? 'bg-theme-main/80 backdrop-blur-xl border-theme-text/10 shadow-lg pl-3 pr-3'
          : 'bg-theme-main/60 backdrop-blur-xl border-theme-text/20 shadow-lg'
        }`}
    >
      <ArrowLeft className="w-4 h-4 shrink-0" />
      <AnimatePresence mode="wait">
        {showText && (
          <motion.span
            key="back-text"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden whitespace-nowrap text-xs font-bold tracking-widest uppercase"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
