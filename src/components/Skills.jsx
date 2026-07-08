"use client";

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Billboard, Grid, Sparkles } from '@react-three/drei';
import { useSpring, motion as fMotion, AnimatePresence, useTransform, useScroll, useVelocity } from 'framer-motion';
import { useDrag } from '@use-gesture/react';
import * as THREE from 'three';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from 'next-themes';

const SCATTER_POSITIONS = [
  [0, 0, 7.5],
  [4, 2, 2.5],
  [-4, -2, 0],
  [2.5, -4, -5],
  [-2.5, 4, -7.5],
];

const ACCENT_COLORS = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b'];

function MouseLight({ cursorX, cursorY }) {
  const lightRef = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    if (lightRef.current && typeof window !== 'undefined') {
      const x = (cursorX.get() / window.innerWidth) * viewport.width - viewport.width / 2;
      const y = -(cursorY.get() / window.innerHeight) * viewport.height + viewport.height / 2;
      lightRef.current.position.lerp(new THREE.Vector3(x, y, 10), 0.1);
    }
  });

  return <pointLight ref={lightRef} distance={40} intensity={3} color="#ffffff" />;
}

function CursorSparkles({ cursorX, cursorY }) {
  const groupRef = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    if (groupRef.current && typeof window !== 'undefined') {
      const x = (cursorX.get() / window.innerWidth) * viewport.width - viewport.width / 2;
      const y = -(cursorY.get() / window.innerHeight) * viewport.height + viewport.height / 2;
      groupRef.current.position.lerp(new THREE.Vector3(x, y, 5), 0.08);
    }
  });

  return (
    <group ref={groupRef}>
      <Sparkles count={30} scale={6} size={2} speed={0.5} opacity={0.7} color="#8b5cf6" />
    </group>
  );
}

function CategoryCard({ category, position, cursorX, cursorY, accentColor }) {
  const groupRef = useRef(null);
  const htmlRef = useRef(null);
  
  const glowX = useTransform(cursorX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-30, 30]);
  const glowY = useTransform(cursorY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-30, 30]);

  useFrame(({ camera }) => {
    if (!groupRef.current) return;
    
    const worldPosition = new THREE.Vector3();
    groupRef.current.getWorldPosition(worldPosition);
    
    const distance = camera.position.distanceTo(worldPosition);
    
    const minDist = 17;
    const maxDist = 33;
    
    const normalizedDist = Math.max(0, Math.min(1, (distance - minDist) / (maxDist - minDist)));
    
    const targetScale = 1.5 - (normalizedDist * 1.0);
    const targetOpacity = 1.0 - (normalizedDist * 0.8);
    
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    
    if (htmlRef.current) {
      htmlRef.current.style.opacity = targetOpacity.toFixed(2);
    }
  });

  return (
    <Billboard position={position} ref={groupRef}>
      <Html
        transform
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
        className="pointer-events-none select-none"
      >
        <div 
          ref={htmlRef}
          className="relative w-80 p-8 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center text-center transition-colors"
          style={{
            background: 'linear-gradient(135deg, rgba(20,20,30,0.9) 0%, rgba(10,10,18,0.95) 100%)',
            border: `1px solid ${accentColor}30`,
            boxShadow: `0 0 40px ${accentColor}15, inset 0 1px 0 rgba(255,255,255,0.05)`
          }}
        >
          {/* Noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: '128px 128px'
            }}
          />

          {/* Reactive glow sweep */}
          <fMotion.div 
            style={{ x: glowX, y: glowY }}
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none opacity-60 mix-blend-overlay"
            css={{
              background: `radial-gradient(circle at center, ${accentColor}25 0%, transparent 50%)`
            }}
          />

          {/* Accent top line */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-16 rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
          />

          <h3 className="relative z-10 text-xl font-bold mb-6 tracking-tight text-white uppercase">
            {category.category}
          </h3>
          <div className="relative z-10 flex flex-wrap justify-center gap-2">
            {category.items.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.15em] font-semibold uppercase pointer-events-auto cursor-default transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: "'Space Grotesk', monospace",
                  background: `${accentColor}10`,
                  border: `1px solid ${accentColor}30`,
                  color: 'rgba(255,255,255,0.8)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `${accentColor}30`;
                  e.target.style.borderColor = `${accentColor}60`;
                  e.target.style.color = '#fff';
                  e.target.style.boxShadow = `0 0 12px ${accentColor}25`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `${accentColor}10`;
                  e.target.style.borderColor = `${accentColor}30`;
                  e.target.style.color = 'rgba(255,255,255,0.8)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Html>
    </Billboard>
  );
}

function DraggableCluster({ rotationXSpring, rotationYSpring, isDragging, cursorX, cursorY }) {
  const groupRef = useRef(null);
  const driftRef = useRef(0);

  useFrame(() => {
    if (groupRef.current) {
      if (!isDragging.current) {
        driftRef.current += 0.0005;
      }
      groupRef.current.rotation.x = rotationXSpring.get();
      groupRef.current.rotation.y = rotationYSpring.get() + driftRef.current;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, Math.PI / 4, 0]}>
      {portfolioData.skills.map((category, index) => (
        <CategoryCard 
          key={index} 
          category={category} 
          position={SCATTER_POSITIONS[index % SCATTER_POSITIONS.length]}
          cursorX={cursorX}
          cursorY={cursorY}
          accentColor={ACCENT_COLORS[index % ACCENT_COLORS.length]}
        />
      ))}
    </group>
  );
}

/* ── Character-by-character reveal animation ── */
function AnimatedHeading({ text }) {
  return (
    <fMotion.h2
      className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase flex flex-wrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
    >
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <fMotion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </fMotion.span>
        </span>
      ))}
    </fMotion.h2>
  );
}

export default function Skills({ setHideLensCursor }) {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();
  
  const rotationX = useSpring(0, { stiffness: 50, damping: 20, mass: 1.2 });
  const rotationY = useSpring(0, { stiffness: 50, damping: 20, mass: 1.2 });
  
  const cursorX = useSpring(0, { stiffness: 300, damping: 25, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 25, mass: 0.5 });

  const isDragging = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll-linked parallax and exit compression
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const canvasY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -60]);
  const sectionOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const sectionScaleY = useTransform(scrollYProgress, [0.85, 1], [1, 0.95]);

  const bind = useDrag(({ movement: [mx, my], down, memo = [rotationX.get(), rotationY.get()] }) => {
    isDragging.current = down;
    rotationX.set(memo[0] + my * 0.005);
    rotationY.set(memo[1] + mx * 0.005);
    return memo;
  });

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (setHideLensCursor) setHideLensCursor(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (setHideLensCursor) setHideLensCursor(false);
  };

  return (
    <fMotion.section
      ref={sectionRef}
      id="skills" 
      className="w-full py-32 relative z-10 overflow-hidden bg-theme-main transition-colors duration-1000 cursor-none"
      style={{ opacity: sectionOpacity, scaleY: sectionScaleY, transformOrigin: 'top' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Section Header with character reveal */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-32 relative z-20 pointer-events-none mb-4">
        <AnimatedHeading text="Engineering Toolkit" />
        <fMotion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-theme-text mt-6"
        >
          Hardware, software, and the logic in between.
        </fMotion.p>
      </div>

      {/* 3D Canvas with scroll-parallax Y offset */}
      <fMotion.div 
        className="w-full h-[700px] active:cursor-none relative z-10"
        style={{ y: canvasY }}
        {...bind()}
        onPointerDown={(e) => { e.stopPropagation(); }}
      >
        {isMounted && (
          <Canvas camera={{ position: [0, 0, 25], fov: 50 }} gl={{ alpha: true, antialias: true }}>
            <ambientLight intensity={0.4} />
            <MouseLight cursorX={cursorX} cursorY={cursorY} />
            <CursorSparkles cursorX={cursorX} cursorY={cursorY} />
            <Grid 
              position={[0, -12, 0]} 
              args={[200, 200]}
              cellSize={1}
              cellThickness={0.5}
              sectionSize={3}
              sectionThickness={1}
              fadeDistance={80} 
              infiniteGrid 
              sectionColor={resolvedTheme === 'dark' ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"} 
              cellColor={resolvedTheme === 'dark' ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"} 
            />
            <Sparkles 
              count={200} 
              scale={30} 
              size={1.5} 
              speed={0.2} 
              opacity={0.3} 
              color={resolvedTheme === 'dark' ? "#ffffff" : "#000000"} 
            />
            <DraggableCluster 
              rotationXSpring={rotationX} 
              rotationYSpring={rotationY} 
              isDragging={isDragging}
              cursorX={cursorX}
              cursorY={cursorY}
            />
          </Canvas>
        )}

        <AnimatePresence>
          {isHovered && (
            <fMotion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%'
              }}
              className="fixed top-0 left-0 px-4 py-2 rounded-full bg-theme-text text-theme-main font-bold tracking-widest uppercase text-[10px] shadow-xl pointer-events-none flex items-center gap-2 z-50 mix-blend-difference"
            >
              <svg className="w-3 h-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Drag to Rotate Me!!
            </fMotion.div>
          )}
        </AnimatePresence>
      </fMotion.div>
    </fMotion.section>
  );
}
