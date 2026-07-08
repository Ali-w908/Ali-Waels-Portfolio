"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { X } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

// Build flat list of bento items from hobbies data
function buildBentoItems(hobbies) {
  const items = [];
  hobbies.forEach(hobby => {
    if (hobby.video) {
      items.push({ type: 'video', src: hobby.video, title: hobby.title, description: hobby.description, span: 'md:col-span-2 md:row-span-2' });
    }
    if (hobby.image) {
      items.push({ type: 'image', src: hobby.image, title: hobby.title, description: hobby.description, span: '' });
    }
    if (hobby.images) {
      hobby.images.forEach((img, i) => {
        items.push({ type: 'image', src: img, title: hobby.title, description: hobby.description, span: i === 0 ? 'md:row-span-2' : '' });
      });
    }
  });
  return items;
}

function Lightbox({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="relative max-w-4xl max-h-[85vh] w-full mx-4 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {item.type === 'video' ? (
          <video
            src={item.src}
            controls
            autoPlay
            className="w-full max-h-[80vh] rounded-xl object-contain bg-black"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="w-full max-h-[80vh] rounded-xl object-contain"
          />
        )}
        <p className="text-white/70 text-sm font-medium mt-4 text-center">{item.title}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Hobbies() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const bentoItems = buildBentoItems(portfolioData.hobbies);

  return (
    <section id="hobbies" className="w-full py-32 px-8 md:px-16 lg:px-32 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Beyond Engineering
          </h2>
          <p className="text-lg md:text-xl opacity-60">
            The human element.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {bentoItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightboxItem(item)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${item.span}`}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                />
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold tracking-wide">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
