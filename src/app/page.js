"use client";

import { useState, useEffect, useRef, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import HeroAboutWrapper from '@/components/HeroAboutWrapper';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Hobbies from '@/components/Hobbies';
import Certificates from '@/components/Certificates';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Preloader from '@/components/Preloader';
import FloatingMedia from '@/components/FloatingMedia';
import LensCursor from '@/components/LensCursor';
import ProjectDetailsOverlay from '@/components/ProjectDetailsOverlay';
import { usePreloader } from '@/context/PreloaderContext';

function HomeContent() {
  const { hasRun } = usePreloader();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasRun) {
      setLoading(false);
    }
  }, [hasRun]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProjectDetails, setActiveProjectDetails] = useState(null);
  const [hideLensCursor, setHideLensCursor] = useState(false);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get('project');

  useEffect(() => {
    if (projectId) {
      setActiveProjectDetails(projectId);
    } else {
      setActiveProjectDetails(null);
    }
  }, [projectId]);

  const handleOpenProject = (id) => {
    router.push(`/?project=${id}`, { scroll: false });
  };

  const handleCloseProject = () => {
    router.push('/', { scroll: false });
  };

  // --- Scroll Restoration ---
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // On mount: if the preloader has already run (i.e. returning visitor),
    // restore the scroll position saved when we left this page.
    const savedY = sessionStorage.getItem('homeScrollY');
    if (hasRun && savedY) {
      // Small delay to let the layout paint first
      requestAnimationFrame(() => window.scrollTo(0, parseInt(savedY, 10)));
    } else if (!hasRun) {
      // First visit — start at top
      window.scrollTo(0, 0);
    }

    // On every scroll, keep saving position
    const onScroll = () => {
      sessionStorage.setItem('homeScrollY', window.scrollY.toString());
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasRun]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      <motion.main 
        className={`w-full flex flex-col ${loading ? 'h-screen overflow-hidden' : ''} bg-theme-main text-theme-text transition-colors duration-1000`}
      >
        <Navigation />
        <FloatingMedia activeProject={hoveredProject} />
        {!hideLensCursor && <LensCursor activeProject={hoveredProject} />}
        
        <HeroAboutWrapper />
        
        <Projects setHoveredProject={setHoveredProject} onOpenProject={handleOpenProject} />
        <Timeline />
        <Skills setHideLensCursor={setHideLensCursor} />
        <Hobbies />
        <Certificates />

        <Footer />

        <AnimatePresence>
          {activeProjectDetails && (
            <ProjectDetailsOverlay 
              projectId={activeProjectDetails} 
              onClose={handleCloseProject} 
            />
          )}
        </AnimatePresence>
      </motion.main>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
