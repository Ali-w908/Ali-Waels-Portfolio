"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-[60] flex justify-center pt-6 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
    >
      <nav className={`flex items-center gap-2 md:gap-6 px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-anti-border shadow-google transition-all`}>
        <Link href="/#banner" className="font-bold tracking-tight text-anti-text mr-4 hover:text-anti-primary transition-colors">
          AM.
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-anti-textMuted hover:text-anti-text transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <a href="#contact" className="ml-2 md:ml-4 px-5 py-2 bg-anti-surface hover:bg-anti-surfaceHover text-anti-text font-medium text-sm rounded-full transition-colors border border-anti-border">
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
