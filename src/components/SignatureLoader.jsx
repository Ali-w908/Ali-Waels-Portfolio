"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SignatureLoader({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  // We want to trigger the loader on route change.
  // Actually, for a simple page transition, we can just use AnimatePresence in the layout/template.
  // Wait, if it's a layout wrapper, it mounts on every navigation if we use it inside template.js.
  // Let's just make a standalone component that can be used inside PageTransitionWrapper.
  return null;
}
