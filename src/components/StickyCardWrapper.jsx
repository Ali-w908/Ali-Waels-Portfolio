"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StickyCardWrapper({ children }) {
  const targetRef = useRef(null);
  const [tilt, setTilt] = useState(0);

  useEffect(() => {
    // Generate a subtle random tilt between -2 and 2 degrees on mount to avoid SSR hydration mismatch
    setTilt((Math.random() - 0.5) * 4);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    // "end end" = when the bottom of the tracker hits the bottom of the viewport (which is exactly when the sticky card sticks).
    // "end top" = when the bottom of the tracker hits the top of the viewport (which is 100vh later).
    offset: ["end end", "end top"] 
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, tilt]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <div className="grid grid-cols-1 grid-rows-1 w-full">
      {/* Invisible standard-flow tracker perfectly stretched to the grid cell height */}
      <div ref={targetRef} className="col-start-1 row-start-1 w-full h-full pointer-events-none" />

      {/* The sticky content in the exact same grid cell */}
      <div className="col-start-1 row-start-1 w-full min-h-screen">
        <div 
          className="sticky bottom-0 w-full min-h-screen pointer-events-none" 
          style={{ perspective: "1500px", zIndex: 10 }}
        >
          <motion.div 
            className="w-full h-full origin-bottom flex flex-col relative bg-theme-main transition-colors duration-1000 border-t border-theme-text/10 rounded-t-[40px] shadow-[0_-15px_40px_rgba(0,0,0,0.3)] pointer-events-auto"
            style={{ scale, rotateX, rotateZ, opacity }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
