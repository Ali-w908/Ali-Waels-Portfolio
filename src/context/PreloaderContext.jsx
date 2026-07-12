"use client";

import { createContext, useContext, useState } from 'react';

const PreloaderContext = createContext();

export function PreloaderProvider({ children }) {
  const [hasRun, setHasRunState] = useState(false);

  useEffect(() => {
    // Check session storage on mount
    const stored = sessionStorage.getItem('portfolio_preloader_run');
    if (stored === 'true') {
      setHasRunState(true);
    }
  }, []);

  const setHasRun = (value) => {
    setHasRunState(value);
    if (value) {
      sessionStorage.setItem('portfolio_preloader_run', 'true');
    }
  };

  return (
    <PreloaderContext.Provider value={{ hasRun, setHasRun }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  return useContext(PreloaderContext);
}
