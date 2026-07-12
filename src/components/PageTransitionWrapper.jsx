"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

/**
 * A clean cone/triangle 'A' without the horizontal crossbar.
 * ViewBox: 0 0 100 120
 */
const A_PATH = "M 10 110 L 50 10 L 90 110";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith('/projects/');
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  const pageReady = minTimeElapsed && contentReady;

  // Reset both flags whenever pathname changes
  useEffect(() => {
    setMinTimeElapsed(false);
    setContentReady(false);

    if (!isProjectPage) {
      setMinTimeElapsed(true);
      setContentReady(true);
      return;
    }

    // Minimum display time: one full draw cycle (1.2s draw + 0.3s pause = 1.5s)
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1600);

    // Content readiness: wait for DOM to settle after render
    const raf = requestAnimationFrame(() => {
      const contentTimer = setTimeout(() => {
        setContentReady(true);
      }, 600);
      return () => clearTimeout(contentTimer);
    });

    return () => {
      clearTimeout(minTimer);
      cancelAnimationFrame(raf);
    };
  }, [pathname, isProjectPage]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="w-full flex flex-col min-h-screen relative"
      >
        {/* ── Loader overlay: solid screen that slides away when page is ready ── */}
        {isProjectPage && (
          <AnimatePresence>
            {!pageReady && (
              <motion.div
                initial={{ y: '0%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-950 pointer-events-none"
              >
                {/* Signature 'A' cone — looping animated line draw */}
                <motion.svg
                  viewBox="0 0 100 120"
                  className="w-24 h-24 md:w-32 md:h-32 overflow-visible"
                  fill="none"
                >
                  {/* Subtle glow halo behind the path */}
                  <motion.path
                    d={A_PATH}
                    stroke="white"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeOpacity={0.08}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatType: 'loop',
                      repeatDelay: 0.3,
                    }}
                  />
                  {/* Primary crisp stroke */}
                  <motion.path
                    d={A_PATH}
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      ease: 'easeInOut',
                      delay: 0.05,
                      repeat: Infinity,
                      repeatType: 'loop',
                      repeatDelay: 0.3,
                    }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
