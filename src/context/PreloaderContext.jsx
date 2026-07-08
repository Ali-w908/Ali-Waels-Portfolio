"use client";

import { createContext, useContext, useState } from 'react';

const PreloaderContext = createContext();

export function PreloaderProvider({ children }) {
  const [hasRun, setHasRun] = useState(false);

  return (
    <PreloaderContext.Provider value={{ hasRun, setHasRun }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  return useContext(PreloaderContext);
}
