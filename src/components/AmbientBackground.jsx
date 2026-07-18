"use client";

import { motion } from 'framer-motion';
import { usePreloader } from '../context/PreloaderContext';

// Each orb drifts on its own slow path — no two move the same way.
// Duration 18-24s makes them feel like breathing, not spinning.
const orbs = [
  {
    // Top-left — dominant teal, large
    className: "w-[600px] h-[600px] -top-40 -left-40",
    lightColor: "bg-teal-300/30",
    darkColor:  "dark:bg-teal-800/20",
    animate: { x: [0, 60, 20, 0], y: [0, 40, -20, 0], scale: [1, 1.1, 0.95, 1] },
    duration: 22,
  },
  {
    // Bottom-right — slate/indigo counterweight
    className: "w-[500px] h-[500px] -bottom-32 -right-32",
    lightColor: "bg-indigo-200/25",
    darkColor:  "dark:bg-indigo-900/15",
    animate: { x: [0, -50, -20, 0], y: [0, -40, 30, 0], scale: [1, 0.95, 1.08, 1] },
    duration: 26,
  },
  {
    // Centre-right — warm accent, smaller
    className: "w-[380px] h-[380px] top-1/3 right-10",
    lightColor: "bg-cyan-200/20",
    darkColor:  "dark:bg-cyan-900/10",
    animate: { x: [0, -30, 40, 0], y: [0, 50, 10, 0], scale: [1, 1.05, 0.98, 1] },
    duration: 19,
  },
  {
    // Bottom-left — deep neutral anchor
    className: "w-[420px] h-[420px] bottom-10 left-1/4",
    lightColor: "bg-slate-300/20",
    darkColor:  "dark:bg-neutral-700/15",
    animate: { x: [0, 40, -10, 0], y: [0, -30, 20, 0], scale: [1, 0.97, 1.06, 1] },
    duration: 24,
  },
];

export default function AmbientBackground() {
  const { hasRun } = usePreloader();

  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: hasRun ? 1 : 0 }}
      transition={{ duration: 2, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] will-change-transform ${orb.className} ${orb.lightColor} ${orb.darkColor}`}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </motion.div>
  );
}
