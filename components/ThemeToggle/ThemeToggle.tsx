"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme, Theme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "segmented";
}

export default function ThemeToggle({ className = "", variant = "icon" }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (variant === "segmented") {
    const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
      { value: "light", label: "Light", icon: <Sun className="w-3.5 h-3.5" /> },
      { value: "system", label: "Auto", icon: <Laptop className="w-3.5 h-3.5" /> },
      { value: "dark", label: "Dark", icon: <Moon className="w-3.5 h-3.5" /> },
    ];

    return (
      <div
        className={`inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-2xs gap-0.5 ${className}`}
        role="group"
        aria-label="Theme mode switcher"
      >
        {options.map((opt) => {
          const isActive = theme === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setTheme(opt.value)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {opt.icon}
              <span className="text-[11px]">{opt.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Default dropdown icon variant
  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs cursor-pointer"
        aria-label="Change theme mode"
        aria-expanded={isOpen}
      >
        {resolvedTheme === "dark" ? (
          <Moon className="w-4 h-4 text-blue-400" />
        ) : (
          <Sun className="w-4 h-4 text-slate-700 dark:text-slate-300" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg py-1 z-50 text-xs animate-fadeIn">
          <button
            type="button"
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-2 text-left transition-colors cursor-pointer ${
              theme === "light"
                ? "bg-slate-100 dark:bg-slate-800 font-bold text-blue-600 dark:text-blue-400"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
            <span>Light</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-2 text-left transition-colors cursor-pointer ${
              theme === "dark"
                ? "bg-slate-100 dark:bg-slate-800 font-bold text-blue-600 dark:text-blue-400"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-blue-400" />
            <span>Dark</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-2 text-left transition-colors cursor-pointer ${
              theme === "system"
                ? "bg-slate-100 dark:bg-slate-800 font-bold text-blue-600 dark:text-blue-400"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            }`}
          >
            <Laptop className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
}
