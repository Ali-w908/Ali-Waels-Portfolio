"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Section({ title, number, children }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-12 py-24 border-b border-white/5"
    >
      <div className="md:col-span-4">
        <h2 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4 pb-4">
          {number} / {title}
        </h2>
      </div>
      <div className="md:col-span-8 space-y-8">
        {children}
      </div>
    </motion.section>
  );
}

function MediaPlaceholder({ text, isVideo = false }) {
  return (
    <div className="w-full aspect-video rounded-2xl bg-neutral-900 border border-white/10 flex flex-col items-center justify-center text-white/40 shadow-2xl overflow-hidden relative p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
      {isVideo ? (
        <svg className="w-12 h-12 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <svg className="w-12 h-12 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )}
      <span className="font-mono text-sm uppercase tracking-widest text-center relative z-10">{text}</span>
    </div>
  );
}

export default function CustomMuseumGuideCaseStudy({ project, codeSnippets = [] }) {
  const getSnippet = (filename) => codeSnippets.find(s => s.file.toLowerCase().includes(filename.toLowerCase()));

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-neutral-200 selection:bg-white selection:text-black pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 mix-blend-difference pointer-events-none">
        <Link href="/" className="inline-flex items-center gap-2 text-white hover:opacity-70 transition-opacity pointer-events-auto group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold tracking-widest uppercase text-sm">Back to Home</span>
        </Link>
      </nav>

      {/* Hero Header */}
      <header className="relative w-full h-[80vh] overflow-hidden flex flex-col justify-end p-8 md:p-16 lg:p-32">
        {/* Background image */}
        <img
          src="/media/Autonomous-Ros-Based-Robot-preview.jpeg"
          alt="Autonomous Museum Guide Robot"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        {/* Text */}
        <div className="relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white/70 font-bold tracking-[0.3em] uppercase text-sm mb-4">
            {project.role}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white uppercase leading-none max-w-6xl">
            {project.title}
          </motion.h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 md:px-16 mt-16">
        
        {/* 1. SOLIDWORKS */}
        <Section number="01" title="Mechanical Design (SOLIDWORKS)">
          <p className="text-xl md:text-2xl leading-relaxed text-white/80">
            The foundation of the robot began with designing a custom chassis in SOLIDWORKS. The design was heavily optimized for laser cutting, utilizing flat planar geometries that significantly improved the speed of manufacturability and reduced costs.
          </p>
          <p className="text-lg leading-relaxed text-white/60">
            To ensure structural integrity and seamless assembly without complex fasteners, I implemented interlocking finger joints across the panels. I also accounted for the precise hole placements required to mount the electronic components and the custom PCB securely within the chassis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <MediaPlaceholder text="[Insert SOLIDWORKS CAD Placeholder]" isVideo={false} />
            <MediaPlaceholder text="[Insert Physical Laser-Cut Assembly Placeholder]" isVideo={false} />
          </div>
        </Section>

        {/* 2. Turtlesim */}
        <Section number="02" title="ROS2 Turtlesim Prototyping">
          <p className="text-xl md:text-2xl leading-relaxed text-white/80">
            Before interacting with the physical hardware, I used this project as a sandbox to deepen my knowledge of ROS2 nodes.
          </p>
          <p className="text-lg leading-relaxed text-white/60">
            I built a custom keyboard-navigable Turtlesim node. This script listened to keyboard teleop commands and translated them into simulated movements, serving as the perfect testing ground for node communication before scaling up to the actual robot.
          </p>
          <div className="mt-8">
            <MediaPlaceholder text="[Insert Turtlesim Screen Recording]" isVideo={true} />
          </div>
        </Section>

        {/* 3. CoppeliaSim */}
        <Section number="03" title="CoppeliaSim Exploration">
          <p className="text-lg leading-relaxed text-white/60">
            During the simulation phase, I briefly explored the CoppeliaSim platform to evaluate its capabilities for modeling the robot's physical constraints. While it was a shallow, one-sitting exploration, it provided valuable perspective on the physics engines available in the robotics ecosystem.
          </p>
        </Section>

        {/* 4. PID Tuning */}
        <Section number="04" title="Dynamic PID Tuning">
          <p className="text-xl md:text-2xl leading-relaxed text-white/80">
            Achieving smooth motion required independently tuning the PID parameters for all four motors. 
          </p>
          <p className="text-lg leading-relaxed text-white/60">
            We developed a dedicated Python tuning script to dynamically inject P, I, and D parameters on the fly without recompiling. Using a systematic approach, we tuned the Proportional gain first, followed by the Derivative gain to dampen oscillation, and finally the Integral gain to eliminate steady-state error.
          </p>
          
          <div className="mt-8">
            <MediaPlaceholder text="[Insert Terminal Time-Response Analysis Graph (Settling time, overshoot)]" isVideo={false} />
          </div>

          {getSnippet('pid') && (
            <div className="mt-8 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e]">
              <div className="bg-[#1e1e1e] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">{getSnippet('pid').file}</span>
              </div>
              <div className="max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#1e1e1e] [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full">
                <SyntaxHighlighter language={getSnippet('pid').language} style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', fontSize: '0.875rem', background: 'transparent' }}>
                  {getSnippet('pid').content}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </Section>

        {/* 5. Navigation.py */}
        <Section number="05" title="Hardware Integration & Teleop">
          <p className="text-xl md:text-2xl leading-relaxed text-white/80">
            Following the assembly, electrical integration, and PID tuning, we wrote the core navigation script to control the robot manually using keyboard inputs.
          </p>
          <p className="text-lg leading-relaxed text-white/60">
            During this phase, we encountered a severe friction issue. The thick rubber wheels generated excessive traction against the smooth tile floor ("بلاط"), causing the motors to stall during rotation. My solution was unconventional but highly effective: applying cornstarch (نشا طعام) to the wheels. It reduced the friction coefficient just enough to allow smooth differential turning while maintaining forward grip!
          </p>
          <div className="mt-8">
            <MediaPlaceholder text="[Insert Car Driving Fwd/Bwd Video]" isVideo={true} />
          </div>

          {getSnippet('nav') && (
            <div className="mt-8 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e]">
              <div className="bg-[#1e1e1e] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">{getSnippet('nav').file}</span>
              </div>
              <div className="max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#1e1e1e] [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full">
                <SyntaxHighlighter language={getSnippet('nav').language} style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', fontSize: '0.875rem', background: 'transparent' }}>
                  {getSnippet('nav').content}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </Section>

        {/* 6. Go_to_goal.py */}
        <Section number="06" title="Odometry & Go-to-Goal">
          <p className="text-xl md:text-2xl leading-relaxed text-white/80">
            With teleoperation verified, we moved to autonomous point-to-point navigation.
          </p>
          <p className="text-lg leading-relaxed text-white/60">
            We developed a script allowing us to input an (X, Y) coordinate for the robot to autonomously reach. This required rigorous physical calibration, mapping odometry data to differential wheel speeds. Crucially, we integrated an MPU IMU sensor to calculate and correct heading errors in real time, compensating for wheel slip during motion.
          </p>

          {getSnippet('goal') && (
            <div className="mt-8 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e]">
              <div className="bg-[#1e1e1e] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">{getSnippet('goal').file}</span>
              </div>
              <div className="max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#1e1e1e] [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full">
                <SyntaxHighlighter language={getSnippet('goal').language} style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', fontSize: '0.875rem', background: 'transparent' }}>
                  {getSnippet('goal').content}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </Section>

        {/* 7. Camera Calibration */}
        <Section number="07" title="Camera Calibration">
          <p className="text-lg leading-relaxed text-white/60">
            For computer vision, we required accurate spatial data. We implemented camera calibration scripts to calculate the intrinsic matrix of a smartphone camera. This calibration allowed us to accurately compute an object's physical distance and relative angle strictly from 2D pixel coordinates.
          </p>
          {getSnippet('camera') && (
            <div className="mt-8 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e]">
              <div className="bg-[#1e1e1e] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">{getSnippet('camera').file}</span>
              </div>
              <div className="max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#1e1e1e] [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full">
                <SyntaxHighlighter language={getSnippet('camera').language} style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', fontSize: '0.875rem', background: 'transparent' }}>
                  {getSnippet('camera').content}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </Section>

        {/* 8 & 9. Obstacle Avoidance */}
        <Section number="08" title="Obstacle Avoidance: YOLOv11 & ArUco">
          <p className="text-xl md:text-2xl leading-relaxed text-white/80">
            Safety and spatial awareness were achieved by merging the navigation script with deep learning and fiducial markers.
          </p>
          <p className="text-lg leading-relaxed text-white/60 mb-8">
            We initially integrated a pre-trained YOLOv11 model to detect and avoid dynamic objects in the robot's path. We subsequently expanded this system to recognize ArUco markers, creating robust, deterministic visual checkpoints.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MediaPlaceholder text="[Insert YOLOv11 Obstacle Avoidance Media]" isVideo={true} />
            <MediaPlaceholder text="[Insert ArUco Marker Detection Media]" isVideo={true} />
          </div>
        </Section>

        {/* 10. The Final Museum Guide Pipeline */}
        <Section number="09" title="The Museum Guide Pipeline">
          <p className="text-xl md:text-2xl leading-relaxed text-white/80 mb-8">
            The culminating milestone: transforming the robotic platform into a fully interactive autonomous museum guide.
          </p>
          
          <div className="space-y-6 text-lg leading-relaxed text-white/60">
            <p>
              <strong className="text-white">Custom Model Training:</strong> We printed images of three distinct artifacts—a Medieval Sword, a Dinosaur Skull, and an Ancient Vase. We captured over 50 varied images for each artifact under different lighting conditions, angles, and distances to fine-tune our YOLOv11 object detection model.
            </p>
            <p>
              <strong className="text-white">ArUco Checkpointing:</strong> ArUco markers were distributed throughout the museum environment. When the robot detected a marker, it reset its internal odometry. This brilliantly solved the problem of long-term IMU sensor drift, zeroing out accumulated errors and keeping the robot perfectly localized on its tour.
            </p>
            <p>
              <strong className="text-white">Interactive Tour Guide (TTS):</strong> As the robot navigated the museum, it actively scanned for the trained artifacts. Upon detection, it paused its trajectory and executed a Text-to-Speech (TTS) module, presenting a brief, automated historical overview of the artifact to the tourists before continuing its path.
            </p>
          </div>

          <div className="mt-12">
            <MediaPlaceholder text="[Insert Final Tour Guide Video / Model Training Montage]" isVideo={true} />
          </div>
        </Section>

      </main>
    </div>
  );
}
