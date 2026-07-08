"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setIsNavigating(true);
    
    // Smooth scroll logic
    setTimeout(() => {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => setIsNavigating(false), 500); // Stop spinning after scroll
    }, 800); // wait for menu closing animation
  };

  const navLinks = [
    { name: 'Home', href: '/#banner' },
    { name: 'About', href: '/#about' },
    { name: 'Toolkit', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Hobbies', href: '/#hobbies' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-8 mix-blend-difference text-white pointer-events-none"
      >
        <div className="font-bold tracking-widest uppercase text-xl pointer-events-auto">
          Ali Wael
        </div>
        
        <div className="pointer-events-auto flex items-center gap-6">
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`relative flex items-center w-16 h-8 rounded-full p-1 transition-colors duration-500 border border-white/20 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/20'}`}
              aria-label="Toggle Theme"
            >
              {/* Background Icons */}
              <div className="absolute inset-0 flex items-center justify-between px-2 w-full pointer-events-none">
                <Sun className="w-3.5 h-3.5 text-white opacity-50" />
                <Moon className="w-3.5 h-3.5 text-white opacity-50" />
              </div>
              
              {/* Sliding Circle */}
              <div 
                className={`w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-10 ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}`}
              >
                {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-black" /> : <Sun className="w-3.5 h-3.5 text-black" />}
              </div>
            </button>
          )}
          <Magnetic>
            <motion.button 
              onClick={toggleMenu}
              animate={{ rotate: isNavigating ? 360 : 0 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col gap-2 w-12 h-12 justify-center items-end group"
            >
              <span className={`h-0.5 bg-white origin-right transition-all duration-300 ${isOpen ? 'w-12 rotate-45 translate-y-2.5' : 'w-8 group-hover:scale-x-75'}`}></span>
              <span className={`h-0.5 bg-white origin-right transition-all duration-300 ${isOpen ? 'w-12 -rotate-45 -translate-y-2.5' : 'w-12 group-hover:scale-x-75'}`}></span>
            </motion.button>
          </Magnetic>
        </div>
      </motion.header>

      {/* Side Glass Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: 'circle(0% at calc(100% - 4rem) 4rem)', opacity: 0 }}
            animate={{ clipPath: 'circle(150% at calc(100% - 4rem) 4rem)', opacity: 1 }}
            exit={{ clipPath: 'circle(0% at calc(100% - 4rem) 4rem)', opacity: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-y-0 right-0 z-[90] w-full md:w-1/2 lg:w-5/12 bg-black/40 backdrop-blur-xl border-l border-white/10 flex flex-col justify-center px-8 md:px-16 shadow-2xl"
          >
            <nav className="flex flex-col gap-6 md:gap-8">
              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: [0.76, 0, 0.24, 1] }}
                  >
                    <Magnetic>
                      <a 
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white hover:text-white/60 transition-colors inline-block"
                      >
                        {link.name}
                      </a>
                    </Magnetic>
                  </motion.div>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
