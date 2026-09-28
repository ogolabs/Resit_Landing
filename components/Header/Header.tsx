"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

import { APP_BASE_URL } from "@/lib/config";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Developers", href: "/developers" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const workspaceUrl = `${APP_BASE_URL}/workspace`;

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 left-0 right-0 z-50 shadow-2xs w-full transition-colors">
        <nav className="mx-auto max-w-[1920px] 2xl:max-w-[2400px] w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex h-20 lg:h-22 xl:h-24 items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="flex items-center space-x-2.5 group">
                <Image
                  src="/logo-icon.svg"
                  alt="Resit Logo"
                  width={40}
                  height={40}
                  style={{ width: "auto" }}
                  className="h-8 w-auto shrink-0 sm:hidden"
                  priority
                />
                <Image
                  src="/logo-full.svg"
                  alt="Resit Logo"
                  width={160}
                  height={44}
                  style={{ width: "auto" }}
                  className="h-8 sm:h-9 lg:h-10 xl:h-11 2xl:h-12 w-auto shrink-0 hidden sm:block object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 xl:px-4.5 xl:py-2.5 rounded-xl text-xs xl:text-sm 2xl:text-base font-semibold transition-all ${
                      active
                        ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons & Theme Switcher */}
            <div className="flex items-center gap-2 sm:gap-3 xl:gap-4">
              <ThemeToggle />

              <a
                href={workspaceUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 xl:px-5 xl:py-2.5 rounded-xl text-xs xl:text-sm 2xl:text-base font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-xs"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <a
                href={workspaceUrl}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
