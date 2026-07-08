"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hideCursor, setHideCursor] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const lastPosition = useRef({ x: 0, y: 0 });
  const accumulatedDistance = useRef(0);

  // Use the exact images requested by the user
  const swapperImages = [
    '/media/Prom-Imag2.jpeg',
    '/media/Prom-Imag.jpeg',
    '/media/FirstTennisCup.jpeg',
    '/media/FirstTennisCup2.jpeg',
    '/media/portrait4.jpeg',
    '/media/Image-Formal.jpg'
  ];

  const handleMouseMove = (e) => {
    // Only track if we are inside the footer
    const currentPos = { x: e.clientX, y: e.clientY };
    setMousePosition(currentPos);

    // Calculate distance
    const dx = currentPos.x - lastPosition.current.x;
    const dy = currentPos.y - lastPosition.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    accumulatedDistance.current += distance;
    
    // Swap image every 150 pixels of movement
    if (accumulatedDistance.current > 150) {
      setImageIndex((prev) => (prev + 1) % swapperImages.length);
      accumulatedDistance.current = 0;
    }
    
    lastPosition.current = currentPos;
  };

  return (
    <footer 
      id="contact" 
      className="w-full py-24 px-8 md:px-16 lg:px-32 bg-theme-footer text-theme-footerText text-center relative z-10 overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        lastPosition.current = { x: e.clientX, y: e.clientY };
        setHideCursor(false);
      }}
      onMouseLeave={() => setHideCursor(true)}
    >
      {/* Tracking Image Swapper Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-48 h-64 pointer-events-none z-0 rounded-lg overflow-hidden shadow-2xl"
        animate={{
          x: mousePosition.x - 96, // offset by half width
          y: mousePosition.y - 128, // offset by half height
          scale: hideCursor || swapperImages.length === 0 ? 0 : 1,
          opacity: hideCursor || swapperImages.length === 0 ? 0 : 0.8
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={imageIndex}
            src={swapperImages[imageIndex]}
            alt="Portfolio preview"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-theme-footerText mb-12 pointer-events-none">Let's build.</h2>
        
        <div className="flex gap-6 mb-16">
          <motion.a 
            whileHover={{ y: -5 }}
            href={`mailto:${portfolioData.personalInfo.email}`} 
            className="w-16 h-16 flex items-center justify-center bg-theme-footerText text-theme-footer rounded-full shadow-sm transition-all relative z-20 cursor-pointer hover:scale-110"
            aria-label="Email"
            onMouseEnter={() => setHideCursor(true)}
            onMouseLeave={() => setHideCursor(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </motion.a>
          <motion.a 
            whileHover={{ y: -5 }}
            href={`https://${portfolioData.personalInfo.linkedin}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center bg-theme-footerText text-theme-footer rounded-full shadow-sm transition-all relative z-20 cursor-pointer hover:scale-110"
            aria-label="LinkedIn"
            onMouseEnter={() => setHideCursor(true)}
            onMouseLeave={() => setHideCursor(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </motion.a>
          <motion.a 
            whileHover={{ y: -5 }}
            href={`https://${portfolioData.personalInfo.github}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center bg-theme-footerText text-theme-footer rounded-full shadow-sm transition-all relative z-20 cursor-pointer hover:scale-110"
            aria-label="GitHub"
            onMouseEnter={() => setHideCursor(true)}
            onMouseLeave={() => setHideCursor(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
          </motion.a>
        </div>
        
        <p className="text-theme-footerText opacity-70 text-sm font-medium mb-2 pointer-events-none">
          &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
