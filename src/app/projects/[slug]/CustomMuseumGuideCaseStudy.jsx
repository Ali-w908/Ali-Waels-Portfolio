"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

export default function CustomMuseumGuideCaseStudy({ project }) {
  return (
    <div className="w-full min-h-screen bg-theme-main text-theme-text pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-end pb-16 px-8 md:px-16 lg:px-32 bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-main via-theme-main/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <Link href="/#projects" className="inline-flex items-center gap-2 mb-8 text-sm font-bold tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-sm font-bold tracking-widest uppercase opacity-50 block mb-4">
              {project.date}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-80">
              {project.role} • {project.association}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Sequential Story */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-32 space-y-32 py-16">
        
        {/* Intro */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <p className="text-2xl leading-relaxed opacity-90 border-l-4 border-theme-text/20 pl-8">
            "We built an autonomous indoor platform capable of real-time teleoperation, visual obstacle detection, and guided navigation through a dynamic museum environment."
          </p>
        </motion.section>

        {/* 1. SOLIDWORKS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">1. Mechanical Design & Fabrication</h2>
              <p className="text-lg leading-relaxed opacity-80">
                Designed the car chassis in SOLIDWORKS specifically for laser cutting. The design incorporated several flat parts to ensure we could utilize a single sheet of acrylic for cost efficiency, while maintaining structural integrity for the differential drive system.
              </p>
            </div>
            {/* Placeholder for Media */}
            <div className="aspect-video w-full bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-600 font-bold tracking-widest uppercase">
              [Placeholder: SOLIDWORKS CAD / Laser Cut Chassis Image]
            </div>
          </div>
        </motion.section>

        {/* 2. ESP32 Microcontroller */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">2. Electronics & Microcontroller (ESP32)</h2>
              <p className="text-lg leading-relaxed opacity-80">
                Created the low-level hardware control node using an ESP32. It subscribes to the <code className="bg-theme-text/10 px-2 py-1 rounded">/cmd_vel</code> topic for velocity commands and publishes to the <code className="bg-theme-text/10 px-2 py-1 rounded">/odom</code> topic using feedback from the MPU6050 IMU and wheel encoders. Implemented a robust PID controller to maintain accurate motor speeds.
              </p>
            </div>
            {/* Placeholder for Media */}
            <div className="aspect-video w-full bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-600 font-bold tracking-widest uppercase">
              [Placeholder: ESP32 / Electronics Schematic or Photo]
            </div>
          </div>
        </motion.section>

        {/* 3. ROS Network */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">3. Distributed ROS Architecture</h2>
              <p className="text-lg leading-relaxed opacity-80">
                Established a Master-Slave ROS network connecting the high-level compute (Jetson Nano/PC) with the ESP32 over a local Wi-Fi network. This decoupled heavy vision processing from real-time hardware control.
              </p>
            </div>
            {/* Placeholder for Media */}
            <div className="aspect-video w-full bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-600 font-bold tracking-widest uppercase">
              [Placeholder: ROS RQT Graph or Network Diagram]
            </div>
          </div>
        </motion.section>

        {/* 4. Teleoperation */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">4. Custom Teleoperation GUI</h2>
              <p className="text-lg leading-relaxed opacity-80">
                Developed a custom Python Tkinter GUI for manual override and teleoperation. The interface provided real-time odometry feedback and allowed precise manual control when autonomous navigation was suspended.
              </p>
            </div>
            {/* Placeholder for Media */}
            <div className="aspect-video w-full bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-600 font-bold tracking-widest uppercase">
              [Placeholder: Tkinter GUI Screenshot / Screen Recording]
            </div>
          </div>
        </motion.section>

        {/* 5. Vision & Object Detection */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">5. Vision, YOLO & Interaction</h2>
              <p className="text-lg leading-relaxed opacity-80">
                Integrated YOLOv11 for real-time artifact and human detection, utilizing threading to overcome camera processing lag. Processed ArUco markers via OpenCV for precise localization, and integrated TTS (Text-to-Speech) to provide an interactive museum tour experience.
              </p>
            </div>
            {/* Placeholder for Media */}
            <div className="aspect-video w-full bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-600 font-bold tracking-widest uppercase">
              [Placeholder: YOLO Vision Detection Video/GIF]
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
