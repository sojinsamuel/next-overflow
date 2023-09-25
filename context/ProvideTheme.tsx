"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AppThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const AppThemeContext = createContext<AppThemeContextType | null>(null);

export function ProvideTheme({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("");

  function toggleTheme() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(() => {
    toggleTheme();
  }, [theme]);

  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
}

export function useAppTheme() {
  const themeContext = useContext(AppThemeContext);
  if (!themeContext) {
    throw new Error("useAppTheme should be called within a ProvideTheme");
  }
  return themeContext;
}
