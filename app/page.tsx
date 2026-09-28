"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { detectUserCurrency, convertNgnPrice, UserCurrencyInfo, OVERAGE_FEE_NGN } from "@/lib/currency";
import { APP_BASE_URL } from "@/lib/config";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InteractiveFeatureFlow from "@/components/Home/InteractiveFeatureFlow";
import LiveNetworkStats from "@/components/Home/LiveNetworkStats";
import {
  Receipt,
  Truck,
  Store,
  Users,
  CheckCircle2,
  ArrowRight,
  Building2,
  Smartphone,
  ShieldCheck,
  Code2,
} from "lucide-react";

export default function Home() {
  const [userCurrency, setUserCurrency] = useState<UserCurrencyInfo | null>(null);

  useEffect(() => {
    detectUserCurrency().then(setUserCurrency);
  }, []);

  const salesBookUrl = `${APP_BASE_URL}/workspace?tab=pos`;
  const shipmentsUrl = `${APP_BASE_URL}/shipments`;
  const workspaceUrl = `${APP_BASE_URL}/workspace`;
  const teamUrl = `${APP_BASE_URL}/workspace?tab=team`;

  const overageText = userCurrency
    ? `universal ${convertNgnPrice(OVERAGE_FEE_NGN, userCurrency).formattedLocal} overage fees`
    : "transparent universal overage fees";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 xl:pt-24 xl:pb-32 border-b border-slate-200/80 dark:border-slate-800/80">
          {/* Real-World Modern Tech & Electronics Store Background */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <Image
              src="/images/hero_retail_bg.jpg"
              alt="Modern electronics retail store and tech showroom"
              fill
              priority
              className="object-cover object-center opacity-40 dark:opacity-30"
              sizes="100vw"
            />
            {/* Fintech Contrast Veil for Razor-Sharp Typography */}
            <div className="absolute inset-0 bg-slate-50/80 dark:bg-slate-950/85 backdrop-blur-[1px]" />
          </div>

          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 relative z-10 space-y-10 xl:space-y-14">
            {/* Centered Headlines & CTAs */}
            <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center space-y-6 xl:space-y-8">
              {/* Product Badge */}
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:py-1.5 xl:px-5 xl:py-2.5 rounded-2xl sm:rounded-full bg-blue-50/90 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-900/60 text-xs xl:text-sm text-blue-700 dark:text-blue-300 shadow-2xs backdrop-blur-xs max-w-full">
                <span className="flex h-2 w-2 xl:h-2.5 xl:w-2.5 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 xl:h-2.5 xl:w-2.5 bg-emerald-600" />
                </span>
                <span className="font-bold tracking-tight font-mono text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm uppercase text-center leading-normal flex flex-wrap justify-center items-center gap-x-1.5 xl:gap-x-2.5 gap-y-0.5">
                  <span>Smart QR Receipts</span>
                  <span className="text-blue-400/80 dark:text-blue-500/80">·</span>
                  <span className="text-blue-900 dark:text-blue-100 font-extrabold">Digital Sales Book</span>
                  <span className="text-blue-400/80 dark:text-blue-500/80">·</span>
                  <span>Package Tracking</span>
                </span>
              </div>

              {/* Master Pitch Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.12] sm:leading-[1.08] xl:leading-[1.04] wrap-break-word">
                Record sales, manage staff, and track shipments.
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto font-normal">
                Switch to <span className="font-bold text-slate-900 dark:text-white">Resit</span> for smart QR receipts. Replace lost paper slips, unverified deliveries, and manual bookkeeping with verified digital proof for your store.
              </p>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 xl:gap-4 justify-center items-center">
                <a
                  href={salesBookUrl}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl px-6 py-3.5 xl:px-8 xl:py-4.5 2xl:px-10 2xl:py-5 text-sm xl:text-base 2xl:text-lg transition-all shadow-xs text-center flex items-center justify-center gap-2 xl:gap-2.5 cursor-pointer"
                >
                  <Receipt className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-300" />
                  <span>Open Digital Sales Book</span>
                </a>

                <a
                  href={shipmentsUrl}
                  className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold rounded-2xl px-5 py-3.5 xl:px-7 xl:py-4.5 2xl:px-9 2xl:py-5 text-sm xl:text-base 2xl:text-lg transition-all shadow-2xs text-center flex items-center justify-center gap-2 xl:gap-2.5 cursor-pointer"
                >
                  <Truck className="w-4 h-4 xl:w-5 xl:h-5 text-blue-600 dark:text-blue-400" />
                  <span>Track Shipments</span>
                </a>

                <a
                  href={workspaceUrl}
                  className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-2xl px-5 py-3.5 xl:px-7 xl:py-4.5 2xl:px-9 2xl:py-5 text-sm xl:text-base 2xl:text-lg transition-all shadow-2xs text-center flex items-center justify-center gap-2 xl:gap-2.5 cursor-pointer"
                >
                  <Store className="w-4 h-4 xl:w-5 xl:h-5 text-slate-500" />
                  <span>Store Workspace</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 xl:pt-6 flex flex-wrap items-center justify-center gap-5 xl:gap-8 text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/80 max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
                <div className="flex items-center gap-1.5 xl:gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>No paper rolls needed</span>
                </div>
                <div className="flex items-center gap-1.5 xl:gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Zero app download for buyers</span>
                </div>
                <div className="flex items-center gap-1.5 xl:gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100 free operations monthly</span>
                </div>
              </div>
            </div>

            {/* Interactive 3-Step Feature Demonstration Flow */}
            <div className="pt-4 xl:pt-6">
              <InteractiveFeatureFlow />
            </div>
          </div>
        </section>

        {/* Live Network Statistics Bar */}
        <LiveNetworkStats />

        {/* Core Pillars Section */}
        <section className="py-16 sm:py-24 xl:py-32 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-12 xl:space-y-16">
            <div className="text-center max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto space-y-2 xl:space-y-3">
              <span className="text-xs xl:text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 xl:px-4 xl:py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Engineered for Modern Retail &amp; Commerce
              </h2>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Everything you need to issue digital sales slips, track customer balances, dispatch goods safely, and supervise your team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
              {/* Pillar 1: Smart QR Receipts & Digital Sales Book */}
              <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 xl:p-10 2xl:p-12 space-y-5 xl:space-y-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <div className="space-y-4 xl:space-y-5">
                  <div className="w-11 h-11 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-2xs">
                    <Receipt className="w-6 h-6 xl:w-8 xl:h-8" />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                      Digital Sales Book
                    </span>
                    <h3 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-bold text-slate-900 dark:text-white font-display mt-1.5">
                      Smart QR Receipts
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Build multi-item baskets in seconds on any phone or desktop. Issue instant digital receipts with scannable QR codes, record payment methods, and maintain debtor ledgers with partial repayments.
                  </p>
                  <ul className="space-y-2 xl:space-y-3 text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-emerald-600 shrink-0" />
                      <span>Instant QR scan, PDF download &amp; WhatsApp share</span>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-emerald-600 shrink-0" />
                      <span>Debtor balance tracking &amp; settlement history</span>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-emerald-600 shrink-0" />
                      <span>Catalog autocomplete &amp; quick-tap presets</span>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-emerald-600 shrink-0" />
                      <span>Audit-safe voiding with mandatory reasons</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <a
                    href={salesBookUrl}
                    className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    Open Digital Sales Book →
                  </a>
                </div>
              </div>

              {/* Pillar 2: Tracked Shipments & Dispatch */}
              <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 xl:p-10 2xl:p-12 space-y-5 xl:space-y-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <div className="space-y-4 xl:space-y-5">
                  <div className="w-11 h-11 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-2xs">
                    <Truck className="w-6 h-6 xl:w-8 xl:h-8" />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      Proof of Handover
                    </span>
                    <h3 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-bold text-slate-900 dark:text-white font-display mt-1.5">
                      Tracked Shipments &amp; Dispatch
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Connect delivery orders directly to tracked packages. Dual-layer QR labels and scratch-off recipient delivery PINs verify handovers without requiring buyers or dispatch riders to install apps.
                  </p>
                  <ul className="space-y-2 xl:space-y-3 text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-blue-600 shrink-0" />
                      <span>Secret scratch-off recipient handover PIN</span>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-blue-600 shrink-0" />
                      <span>Dispatch rider links with live custody status</span>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-blue-600 shrink-0" />
                      <span>Printable dual-layer QR dispatch labels</span>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-blue-600 shrink-0" />
                      <span>Automated delivery dispute protection</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <a
                    href={shipmentsUrl}
                    className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    Open Shipments Hub →
                  </a>
                </div>
              </div>

              {/* Pillar 3: Staff & Multi-Branch Management */}
              <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 xl:p-10 2xl:p-12 space-y-5 xl:space-y-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <div className="space-y-4 xl:space-y-5">
                  <div className="w-11 h-11 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-2xs">
                    <Users className="w-6 h-6 xl:w-8 xl:h-8" />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/60 text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                      Multi-User Roles
                    </span>
                    <h3 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-bold text-slate-900 dark:text-white font-display mt-1.5">
                      Staff &amp; Branch Controls
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Scale from a single shop to multiple retail locations. Invite store managers and sales reps via email with secure 6-digit access PINs. Sales reps record sales while financial dashboards remain confidential.
                  </p>
                  <ul className="space-y-2 xl:space-y-3 text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-teal-600 shrink-0" />
                      <span>Owner, Branch Manager &amp; Sales Rep roles</span>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-teal-600 shrink-0" />
                      <span>Multi-branch sales tracking &amp; staff tagging</span>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-teal-600 shrink-0" />
                      <span>Fast PIN logins without complex passwords</span>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-2.5">
                      <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-teal-600 shrink-0" />
                      <span>Permanent actor audit stamps on transactions</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <a
                    href={teamUrl}
                    className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
                  >
                    Manage Team &amp; Branches →
                  </a>
                </div>
              </div>
            </div>

            {/* Dedicated Real-World Commerce Visual Showcase */}
            <div className="pt-8 xl:pt-12 border-t border-slate-200/80 dark:border-slate-800/80 space-y-8 xl:space-y-12">
              <div className="text-center max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto space-y-2 xl:space-y-3">
                <span className="text-xs xl:text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 xl:px-4 xl:py-1.5 rounded-full border border-blue-200 dark:border-blue-800">
                  Real-World Commerce
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                  From Countertop to Customer Doorstep
                </h3>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-slate-600 dark:text-slate-400">
                  Resit bridges physical store counters and parcel deliveries with tamperproof digital verification.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-stretch">
                {/* Showcase 1: Digital Sales Book Checkout */}
                <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
                  <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
                    <Image
                      src="/images/retail_pos_counter.jpg"
                      alt="Customer scanning digital QR receipt on tablet at modern boutique checkout"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5 sm:p-8 xl:p-10 2xl:p-12 space-y-4 xl:space-y-5">
                    <div className="space-y-1.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                        In-Store Experience
                      </span>
                      <h4 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl font-bold text-slate-900 dark:text-white font-display wrap-break-word">
                        Zero Printer Clutter. Instant QR Receipts.
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      Customers scan their verified receipt directly from your counter screen on their phone camera. No paper jams, no expensive ink rolls, and zero app downloads required.
                    </p>
                    <div className="pt-2">
                      <a
                        href={salesBookUrl}
                        className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>Open Digital Sales Book</span>
                        <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Showcase 2: Package Dispatch & Delivery */}
                <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
                  <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
                    <Image
                      src="/images/package_dispatch_label.jpg"
                      alt="Package dispatch rider standing by delivery motorcycle holding parcel with dual-layer QR label"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5 sm:p-8 xl:p-10 2xl:p-12 space-y-4 xl:space-y-5">
                    <div className="space-y-1.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        Logistics Protection
                      </span>
                      <h4 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl font-bold text-slate-900 dark:text-white font-display wrap-break-word">
                        Physical QR Labels. Secret Handover PINs.
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      Affix dual-layer QR shipping labels to parcel boxes and poly-mailers. Recipients verify delivery using their confidential scratch-off PIN, completely eliminating false delivery disputes.
                    </p>
                    <div className="pt-2">
                      <a
                        href={shipmentsUrl}
                        className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>Open Shipments Hub</span>
                        <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="py-16 sm:py-24 xl:py-32 bg-slate-50/60 dark:bg-slate-950/40">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-10 xl:space-y-14">
            <div className="text-center max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto space-y-2 xl:space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-slate-900 dark:text-white font-display">
                Built for High Trust, Speed and Simplicity
              </h2>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-slate-600 dark:text-slate-400">
                Resit removes the friction of old commerce software with zero app requirements and transparent operational quotas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 xl:p-8 2xl:p-10 space-y-3 xl:space-y-4 shadow-2xs">
                <div className="p-2.5 xl:p-3.5 bg-blue-50 dark:bg-blue-950/60 rounded-xl xl:rounded-2xl w-max text-blue-600 dark:text-blue-400">
                  <Smartphone className="w-5 h-5 xl:w-7 xl:h-7" />
                </div>
                <h3 className="text-base xl:text-xl 2xl:text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Zero App Download
                </h3>
                <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Both your buyers and delivery riders scan QR receipts and dispatches instantly in standard mobile browsers.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 xl:p-8 2xl:p-10 space-y-3 xl:space-y-4 shadow-2xs">
                <div className="p-2.5 xl:p-3.5 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl xl:rounded-2xl w-max text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-5 h-5 xl:w-7 xl:h-7" />
                </div>
                <h3 className="text-base xl:text-xl 2xl:text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Tamperproof Proof
                </h3>
                <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Every receipt and shipment is certified with unique tracking codes, ensuring sales slips and handovers cannot be forged.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 xl:p-8 2xl:p-10 space-y-3 xl:space-y-4 shadow-2xs">
                <div className="p-2.5 xl:p-3.5 bg-teal-50 dark:bg-teal-950/60 rounded-xl xl:rounded-2xl w-max text-teal-600 dark:text-teal-400">
                  <Building2 className="w-5 h-5 xl:w-7 xl:h-7" />
                </div>
                <h3 className="text-base xl:text-xl 2xl:text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Multi-Branch Sync
                </h3>
                <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Supervise sales across all store locations in real time while keeping staff access locked to their respective branch.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 xl:p-8 2xl:p-10 space-y-3 xl:space-y-4 shadow-2xs">
                <div className="p-2.5 xl:p-3.5 bg-purple-50 dark:bg-purple-950/60 rounded-xl xl:rounded-2xl w-max text-purple-600 dark:text-purple-400">
                  <Code2 className="w-5 h-5 xl:w-7 xl:h-7" />
                </div>
                <h3 className="text-base xl:text-xl 2xl:text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Developer APIs
                </h3>
                <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Automate receipt issuance and delivery dispatches directly from custom storefronts, ERPs, or billing pipelines.
                </p>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="mt-8 xl:mt-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 sm:p-8 xl:p-12 2xl:p-16 flex flex-col sm:flex-row items-center justify-between gap-5 xl:gap-8 shadow-2xs">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl font-bold text-slate-900 dark:text-white font-display">
                  Start with 100 free operations each month
                </h3>
                <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400">
                  Free for solo entrepreneurs. Scale up with predictable tiers and {overageText}.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/pricing"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs xl:text-base 2xl:text-lg font-bold py-3 px-5 xl:py-4.5 xl:px-8 2xl:py-5 2xl:px-10 rounded-xl xl:rounded-2xl transition-all shadow-xs inline-flex items-center gap-1.5 xl:gap-2 cursor-pointer"
                >
                  <span>View Pricing Plans</span>
                  <ArrowRight className="w-3.5 h-3.5 xl:w-5 xl:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
