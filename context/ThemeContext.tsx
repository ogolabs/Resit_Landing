"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

export type Theme = "system" | "dark" | "light";
export type ResolvedTheme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "resit_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
  const [mounted, setMounted] = useState(false);

  // Compute resolved theme from system preference
  const getSystemTheme = useCallback((): ResolvedTheme => {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, []);

  // Apply theme to document
  const applyTheme = useCallback((targetTheme: Theme) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const resolved = targetTheme === "system" ? getSystemTheme() : targetTheme;

    setResolvedTheme(resolved);

    if (resolved === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [getSystemTheme]);

  // Initial mount: load saved theme from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (saved && (saved === "system" || saved === "dark" || saved === "light")) {
        setThemeState(saved);
        applyTheme(saved);
      } else {
        applyTheme("system");
      }
    } catch {
      applyTheme("system");
    }
  }, [applyTheme]);

  // Listen to system preference changes when in 'system' mode
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, applyTheme]);

  // Change theme handler
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // Storage unavailable fallback
    }
    applyTheme(newTheme);
  }, [applyTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme: mounted ? resolvedTheme : "dark",
      setTheme,
    }),
    [theme, resolvedTheme, mounted, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
