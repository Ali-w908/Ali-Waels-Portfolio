"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const SIGNATURE_PATH = "m 410.53516,61.787109 c -1.65576,-0.74482 -10.29548,11.287035 -20.42969,27.175782 -2.075,3.253253 -4.21213,6.667847 -6.36524,10.167968 -14.80881,24.073441 -43.11937,66.081781 -48.35351,71.750001 -2.42732,2.62863 -2.96073,2.75082 -12.10156,2.76562 -57.67818,0.0933 -119.56936,12.02146 -144.5625,27.86133 -30.8025,19.52167 -18.53129,49.99452 23.16796,57.5293 41.53289,7.50472 83.63842,-16.68227 127.78907,-73.40625 7.74607,-9.95199 7.82043,-10 15.67383,-10 9.21353,0 9.11186,-0.85514 1.84375,15.5 -11.96271,26.91922 -15.02065,45.5 -7.49024,45.5 2.36592,0 2.38411,-0.068 0.96485,-3.46484 -2.4136,-5.77655 1.95098,-18.34593 12.6582,-45.50196 3.66137,-9.28611 17.21643,-9.74496 16.61719,-8.33008 -12.88595,30.42544 -1.66119,33.21097 13.05078,23.3086 1.13169,3.84403 12.61991,4.39646 16.92578,-0.24024 2.01531,5.64145 19.18297,-4.30246 13.92187,-5.50781 -4.43883,2.49478 -12.74083,8.76117 -8.62304,0.23633 3.16939,-6.56143 0.85647,-9.99276 -2.43946,-3.61914 -5.21153,10.07799 -18.7922,13.614 -14.74023,3.83789 3.05036,-7.35954 1.15419,-10.44057 -2.30664,-3.74805 -4.47218,8.64823 -18.51367,14.84354 -18.51367,8.16797 0,-1.89863 4.72992,-16.1582 7.47851,-22.54687 1.68198,-3.90949 1.68057,-3.90981 44.75586,-3.29493 29.54661,0.42176 42.75322,0.29033 42.04688,-0.41601 -0.64781,-0.64781 -13.78109,-1.19938 -35.40625,-1.48828 -49.11806,-0.65621 -49.21895,-0.66661 -47.2461,-5.22461 5.0551,-11.67911 8.60457,-21.26652 8.07032,-21.80078 -1.18414,-1.18414 -3.74132,0.61001 -4.78321,3.35742 -7.5652,19.94914 -20.91601,33.22941 -20.91601,20.80469 0,-1.63783 51.30728,-108.475727 49.3125,-109.373051 z M 382.8457,109.91211 c 0.95729,0.31798 -5.89203,15.63554 -24.57617,56.32031 -2.40679,5.24078 -3.26094,6.19203 -6.05078,6.75 -11.40317,2.28064 -12.58019,0.45652 -5.92578,-9.18359 7.44922,-10.79153 24.42579,-36.15497 30.78711,-45.99805 3.28322,-5.08025 5.33049,-8.03321 5.76562,-7.88867 z m -67.10742,66.71875 c 17.13869,0 16.68333,-1.087 5.42969,12.95898 -28.47874,35.54512 -57.90077,58.59377 -84.44531,66.15235 -41.84766,11.91618 -86.62278,-18.32359 -65.02149,-43.91407 16.40085,-19.42966 80.92385,-35.19726 144.03711,-35.19726 z m 97.21484,0.53906 c -0.44542,0.0332 -1.01228,0.3466 -1.66601,1.02735 -1.0211,1.0633 -2.1578,2.94609 -2.52734,4.18359 -0.94537,3.16578 1.92847,2.99389 4.04882,-0.24219 1.7302,-2.64061 1.48082,-5.06845 0.14453,-4.96875 z m -16.5664,0.14258 c -0.62055,-0.16209 -1.58954,0.29682 -2.73828,1.625 -1.33469,1.54317 -2.42578,3.45567 -2.42578,4.25 0,2.31019 2.80574,1.6681 4.58593,-1.04883 1.67912,-2.56265 1.61238,-4.55603 0.57813,-4.82617 z";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith('/projects/') || pathname.startsWith('/resume');
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

    // Minimum display time: one full draw cycle (1.8s draw + 0.3s pause = 2.1s)
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2200);

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
                {/* Signature — looping animated line draw */}
                <motion.svg
                  viewBox="0 0 300.01221 198.61424"
                  className="w-64 h-auto max-w-[80vw] overflow-visible"
                  fill="none"
                >
                  <g transform="translate(-161.51855,-61.754318)">
                    {/* Primary crisp stroke */}
                    <motion.path
                      d={SIGNATURE_PATH}
                      stroke="white"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0, fill: "rgba(255,255,255,0)" }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: 1, 
                        fill: ["rgba(255,255,255,0)", "rgba(255,255,255,0)", "rgba(255,255,255,1)"] 
                      }}
                      transition={{
                        duration: 1.8,
                        ease: 'easeInOut',
                        fill: { duration: 1.8, times: [0, 0.9, 1] },
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 0.4,
                      }}
                    />
                  </g>
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
