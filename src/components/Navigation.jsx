"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
  };

  const navLinks = [
    { name: 'Home', href: '/#banner' },
    { name: 'About Me', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'More', href: '/#more' },
    { name: 'Certificates', href: '/#certificates' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <button 
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-[60] bg-spectral-alt p-3 rounded text-white hover:text-spectral-accent transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[50] bg-spectral-bg flex flex-col items-center justify-center"
          >
            <button 
              onClick={closeMenu}
              className="absolute top-6 right-6 bg-spectral-lighter p-3 rounded text-white hover:text-spectral-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            
            <nav>
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.05) }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={closeMenu}
                      className="text-2xl md:text-3xl font-light uppercase tracking-widest text-white hover:text-spectral-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
