"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// Specific Awwwards Neutral Anchor Palette
export const palettes = {
  graphite: {
    bg: '#2A2B2A',
    text: '#F3FCF0',
    accent: '#E3170A' // Burnt Tangerine default
  },
  honeydew: {
    bg: '#F3FCF0',
    text: '#2A2B2A',
    accent: '#548C2F' // Forest Green default
  }
};

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [currentPalette, setCurrentPalette] = useState('graphite');

  useEffect(() => {
    const root = document.documentElement;
    const colors = palettes[currentPalette];
    
    root.style.setProperty('--bg-color', colors.bg);
    root.style.setProperty('--text-color', colors.text);
    root.style.setProperty('--accent-color', colors.accent);
  }, [currentPalette]);

  return (
    <ColorContext.Provider value={{ currentPalette, setCurrentPalette, colors: palettes[currentPalette] }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  return useContext(ColorContext);
}
