"use client";

import { motion, useScroll, useTransform } from 'framer-motion';

export default function DynamicBackground() {
  const { scrollYProgress } = useScroll();

  // Scroll transforms for the orbs to move and shift colors
  const y1 = useTransform(scrollYProgress, [0, 1], ['-10%', '60%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['20%', '-40%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['50%', '-20%']);

  const x1 = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['40%', '-10%']);
  const x3 = useTransform(scrollYProgress, [0, 1], ['-10%', '40%']);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        className="gradient-orb"
        style={{
          background: 'var(--accent-1)',
          width: '50vw',
          height: '50vw',
          top: '-10%',
          left: '-10%',
          y: y1,
          x: x1,
        }}
      />
      <motion.div
        className="gradient-orb"
        style={{
          background: 'var(--accent-2)',
          width: '40vw',
          height: '40vw',
          top: '40%',
          right: '-10%',
          y: y2,
          x: x2,
        }}
      />
      <motion.div
        className="gradient-orb"
        style={{
          background: 'var(--accent-3)',
          width: '60vw',
          height: '60vw',
          bottom: '-20%',
          left: '20%',
          y: y3,
          x: x3,
        }}
      />
    </div>
  );
}
