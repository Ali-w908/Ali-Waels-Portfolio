"use client";

import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const carouselItems = [
  { title: "Graphic Designing", description: "Visual identity and digital layouts that convey precision and elegance.", image: "/media/hobbies/Portfolio-hero.png", category: "Design" },
  { title: "Drawing & Painting", description: "Crying Eye Girl - An exploration of emotion through pencil shading.", image: "/media/hobbies/Drawing-CryingEyeGirl.jpeg", category: "Art" },
  { title: "Drawing & Painting", description: "Big Eyes - Capturing striking facial proportions.", image: "/media/hobbies/Drawing-BIGEYES.jpeg", category: "Art" },
  { title: "Drawing & Painting", description: "Dark and Light Waves - Abstract contrasts in fluid motion.", image: "/media/hobbies/Drawing-Dark-and-light-Waves.jpeg", category: "Art" },
  { title: "Drawing & Painting", description: "Sad Happy Band - A conceptual piece on dualities.", image: "/media/hobbies/Drawing-Sad-Happy-Band.jpeg", category: "Art" },
  { title: "Drawing & Painting", description: "Shadowless Stand - Architectural sketching without natural lighting.", image: "/media/hobbies/Drawing-Shadowless-Stand.jpeg", category: "Art" },
  { title: "Drawing & Painting", description: "Everybody Stare - A study in perspective and focal points.", image: "/media/hobbies/Drawing-Everybody-Stare.jpeg", category: "Art" },
  { title: "Tennis", description: "First Cup - The beginning of a competitive journey.", image: "/media/hobbies/FirstTennisCup.jpeg", category: "Sport" },
  { title: "Tennis", description: "First Cup 2 - Double victory securing the season.", image: "/media/hobbies/FirstTennisCup2.jpeg", category: "Sport" },
  { title: "Tennis", description: "Championship - Regional finals representing the team.", image: "/media/hobbies/TennisChampionship.jpeg", category: "Sport" },
  { title: "Tennis", description: "Shot 2 - Form and follow-through in action.", image: "/media/hobbies/TennisShot2.jpeg", category: "Sport" },
  { title: "Tennis", description: "Championship Win - The ultimate culmination of hard work and practice.", image: "/media/hobbies/Championship.jpeg", category: "Sport" },
];

function HobbyCard({ item, index, expandedId, setExpandedId, setIsHoveringItem }) {
  const isExpanded = expandedId === index;
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouse = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHoveringItem(false);
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      onClick={() => setExpandedId(isExpanded ? null : index)}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHoveringItem(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX: isExpanded ? 0 : rotateX,
        rotateY: isExpanded ? 0 : rotateY,
        perspective: 800,
      }}
      whileHover={{ scale: isExpanded ? 1 : 1.03, zIndex: 10 }}
      transition={{ layout: { type: "spring", stiffness: 350, damping: 30 } }}
      className={`relative overflow-hidden cursor-pointer shrink-0 rounded-2xl group ${
        isExpanded 
          ? 'w-[80vw] md:w-[60vw] h-[70vh]' 
          : 'w-[300px] md:w-[350px] h-[420px] md:h-[480px]'
      }`}
    >
      {/* Image */}
      <motion.div
        layout="position"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className={`absolute inset-0 transition-all duration-700 ${
          isExpanded 
            ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' 
            : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:via-black/20'
        }`} />
      </motion.div>

      {/* Category Tag */}
      <motion.div layout="position" className="absolute top-6 left-6 z-10">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md text-white border border-white/20">
          {item.category}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div layout="position" className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-2 text-white drop-shadow-lg">
          {item.title}
        </h3>
        <AnimatePresence>
          {isExpanded && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.15 }}
              className="text-sm font-medium leading-relaxed max-w-lg text-white/80"
            >
              {item.description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Subtle shine on hover */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)'
        }}
      />
    </motion.div>
  );
}

/* ── Character-by-character reveal ── */
function AnimatedHeading({ text }) {
  return (
    <motion.h2
      className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase flex flex-wrap leading-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
    >
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '120%', opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

export default function Hobbies() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringItem, setIsHoveringItem] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  // Velocity-based horizontal scroll: as user scrolls down through this tall section,
  // the inner track translates horizontally
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const rawX = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);
  const smoothX = useSpring(rawX, { stiffness: 100, damping: 30, mass: 0.8 });

  // Diagonal title parallax
  const titleX = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section 
      ref={sectionRef}
      id="hobbies" 
      className="relative z-10 bg-theme-main transition-colors duration-1000 select-none cursor-none"
      style={{ height: '300vh' }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Custom Magnifying / Close Cursor */}
        {isMounted && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center rounded-full bg-white text-black shadow-2xl mix-blend-difference"
            animate={{
              x: cursorPos.x - (isHoveringItem ? 32 : 12),
              y: cursorPos.y - (isHoveringItem ? 32 : 12),
              width: isHoveringItem ? 64 : 24,
              height: isHoveringItem ? 64 : 24,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {expandedId !== null && isHoveringItem ? (
                <motion.svg key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : isHoveringItem ? (
                <motion.svg key="mag" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </motion.svg>
              ) : (
                <motion.div key="dot" className="w-2 h-2 bg-black rounded-full" />
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Header — with diagonal scroll parallax */}
        <motion.div 
          className="absolute top-16 left-8 md:left-16 lg:left-32 z-20 pointer-events-none"
          style={{ x: titleX, y: titleY }}
        >
          <AnimatedHeading text="Beyond" />
          <AnimatedHeading text="Engineering" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl font-medium text-theme-text mt-6"
          >
            The human element.
          </motion.p>
        </motion.div>

        {/* Scroll progress indicator */}
        <motion.div 
          className="absolute bottom-8 left-8 md:left-16 lg:left-32 z-20 flex items-center gap-4 pointer-events-none"
        >
          <div className="w-32 h-[2px] bg-theme-text/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-theme-text/60 rounded-full origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-theme-text/40">Scroll to explore</span>
        </motion.div>

        {/* Horizontal scrolling track */}
        <motion.div
          ref={trackRef}
          className="absolute top-0 left-0 h-full flex items-center gap-6 md:gap-8 pl-[50vw] pr-[30vw] pt-8"
          style={{ x: smoothX }}
        >
          {carouselItems.map((item, idx) => (
            <HobbyCard
              key={idx}
              item={item}
              index={idx}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
              setIsHoveringItem={setIsHoveringItem}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
