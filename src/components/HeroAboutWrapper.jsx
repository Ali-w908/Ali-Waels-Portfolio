"use client";

import Hero from './Hero';
import About from './About';

export default function HeroAboutWrapper() {
  return (
    <div className="relative w-full transition-colors duration-1000">
      <Hero />
      <About />
    </div>
  );
}
