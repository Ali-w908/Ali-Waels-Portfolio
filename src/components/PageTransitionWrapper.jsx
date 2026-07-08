"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

/**
 * A geometrically clean SVG 'A' drawn in a single continuous stroke path.
 * ViewBox: 0 0 100 120
 * Points:  start bottom-left foot → left leg up → apex → right leg down →
 *          loop back and form crossbar
 */
const A_PATH =
  "M 10 110 L 50 10 L 90 110 M 25 72 L 75 72";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith('/projects/');

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
        {/* ── Lando-Norris style loader: solid overlay that slides away ── */}
        {isProjectPage && (
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{ delay: 1.6, duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-950 pointer-events-none"
          >
            {/* Signature 'A' — animated line draw */}
            <motion.svg
              viewBox="0 0 100 120"
              className="w-40 h-40 md:w-52 md:h-52 overflow-visible"
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
                transition={{ duration: 1.4, ease: 'easeInOut' }}
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
                transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.05 }}
              />
            </motion.svg>
          </motion.div>
        )}

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
