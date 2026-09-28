"use client";

import React, { useState } from "react";
import {
  Receipt,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Lock,
  Smartphone,
  Laptop,
  ArrowRight,
  Clock,
  Scan,
  Store,
} from "lucide-react";
import { APP_BASE_URL } from "@/lib/config";

interface StepDetail {
  id: number;
  label: string;
  badge: string;
  title: string;
  description: string;
  actor: string;
  keyBenefit: string;
}

const STEPS: StepDetail[] = [
  {
    id: 1,
    label: "Step 1",
    badge: "Digital Sales Book",
    title: "Cashier Rings Up Sale in Seconds",
    description:
      "Enter item names, set quantities, and auto-calculate unit totals and tax directly from your phone, tablet, or laptop. No thermal printer required.",
    actor: "Store Cashier / Sales Rep",
    keyBenefit: "Zero paper rolls · Auto item totals · Role-based staff PIN",
  },
  {
    id: 2,
    label: "Step 2",
    badge: "Instant QR Display",
    title: "Buyer Scans Receipt from Screen",
    description:
      "A dynamic, tamperproof digital receipt QR code appears on the counter display. The customer scans it with their default camera app in one second.",
    actor: "In-Store Customer",
    keyBenefit: "Zero app download · Instant offline receipt · Forever digital copy",
  },
  {
    id: 3,
    label: "Step 3",
    badge: "Tamperproof Proof",
    title: "Audit Trail Stamped & Dispatches Protected",
    description:
      "Every sale receives an immutable audit seal. For parcels and courier deliveries, generate dual-layer shipping labels with secret scratch-off handover PINs.",
    actor: "Store Manager & Logistics",
    keyBenefit: "Anti-void theft protection · Dispatch handover PIN · No chargebacks",
  },
];

export default function InteractiveFeatureFlow() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [pinRevealed, setPinRevealed] = useState<boolean>(false);

  const current = STEPS.find((s) => s.id === activeStep) ?? STEPS[0];

  return (
    <div className="w-full mx-auto space-y-6 text-left">
      {/* 3-Step Navigation Progress Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xl:gap-5">
        {STEPS.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(step.id)}
              className={`p-4 xl:p-6 2xl:p-7 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 xl:gap-4 ${
                isActive
                  ? "bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-600 dark:ring-blue-500"
                  : "bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xs"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {step.label}
                </span>

                <div
                  className={`w-7 h-7 xl:w-9 xl:h-9 rounded-xl flex items-center justify-center text-xs font-bold ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {step.id === 1 && <Receipt className="w-4 h-4 xl:w-5 xl:h-5" />}
                  {step.id === 2 && <QrCode className="w-4 h-4 xl:w-5 xl:h-5" />}
                  {step.id === 3 && <ShieldCheck className="w-4 h-4 xl:w-5 xl:h-5" />}
                </div>
              </div>

              <div>
                <h3
                  className={`text-sm sm:text-base xl:text-lg 2xl:text-xl font-bold font-display ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm xl:text-base text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {step.keyBenefit}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Simulation Stage Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-8 xl:p-10 2xl:p-12 shadow-sm space-y-6 xl:space-y-8">
        {/* Stage Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] sm:text-xs xl:text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0">
                {current.badge}
              </span>
              <span className="text-[11px] sm:text-xs xl:text-sm font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 truncate">
                <Store className="w-3.5 h-3.5 shrink-0" /> {current.actor}
              </span>
            </div>
            <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-slate-900 dark:text-white font-display wrap-break-word">
              {current.title}
            </h4>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev % 3) + 1)}
              className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-xl text-xs xl:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next Step ({activeStep === 3 ? "1" : activeStep + 1})</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            </button>
          </div>
        </div>

        {/* Dynamic Simulation Content Based on Active Step */}
        {activeStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Explanation */}
            <div className="md:col-span-6 space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Open Resit Sales Book on any web browser or phone. Staff enter items with unit counts and prices. Resit automatically tallies line items, applies taxes, and attributes the transaction to the active staff PIN.
              </p>

              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Works seamlessly on any tablet, laptop, or cashier phone</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Permanent cashier attribution stamps prevent pocketed cash</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Supports multi-currency and zero expensive printer hardware</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`${APP_BASE_URL}/workspace?tab=pos`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs xl:text-sm px-4 py-2.5 xl:px-6 xl:py-3.5 rounded-xl transition-all shadow-2xs"
                >
                  <Receipt className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  <span>Open Sales Book</span>
                </a>
              </div>
            </div>

            {/* Right: Simulated Sales Book Screen */}
            <div className="md:col-span-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 sm:p-5 space-y-3 font-mono text-xs overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-1 pb-2 border-b border-slate-200 dark:border-slate-800 text-[10px] sm:text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300 truncate">
                  <Laptop className="w-3.5 h-3.5 text-blue-600 shrink-0" /> RESIT SALES BOOK · ACTIVE SALE
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">STAFF #04</span>
              </div>

              {/* Sample Ring-Up Items */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80">
                  <div className="min-w-0 pr-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block truncate">
                      Aether Wireless Pro Headphones
                    </span>
                    <span className="text-[10px] text-slate-500">Qty: 1 × $189.00</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white shrink-0">$189.00</span>
                </div>

                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80">
                  <div className="min-w-0 pr-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block truncate">
                      65W GaN Fast Charger
                    </span>
                    <span className="text-[10px] text-slate-500">Qty: 2 × $28.00</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white shrink-0">$56.00</span>
                </div>
              </div>

              {/* Sales Book Total Box */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-slate-500 block">TOTAL (TAX INCL.)</span>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-display">
                    $245.00
                  </span>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-xl font-sans font-bold text-xs">
                  Generate QR Receipt
                </div>
              </div>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Explanation */}
            <div className="md:col-span-6 space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                As soon as payment is confirmed, the customer points their standard smartphone camera at your screen or sticker. Their digital sales slip opens instantly in browser without installing an app or typing an email.
              </p>

              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% friction-free — works on iOS, Android, and all camera apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Customer can save receipt to Apple Wallet, PDF, or bookmark</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Saves your business thousands in thermal paper and printer ink</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`${APP_BASE_URL}/workspace?tab=sales`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs xl:text-sm px-4 py-2.5 xl:px-6 xl:py-3.5 rounded-xl transition-all shadow-2xs"
                >
                  <Scan className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  <span>Explore Sales Registry</span>
                </a>
              </div>
            </div>

            {/* Right: Simulated Customer Phone Scan View */}
            <div className="md:col-span-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 text-center">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <Smartphone className="w-3.5 h-3.5 text-blue-600" /> CUSTOMER CAMERA VIEW
              </div>

              {/* QR Code Presentation Box */}
              <div className="w-36 h-36 mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-2.5 shadow-xs flex flex-col items-center justify-center space-y-1">
                <QrCode className="w-24 h-24 text-slate-900 dark:text-white" />
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  Scan to View
                </span>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <p className="font-bold text-slate-900 dark:text-white">
                  Slip #RST-84920 · Apex Electronics Store
                </p>
                <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  Status: Paid in Full · Immutable Sale Proof
                </p>
              </div>
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Explanation */}
            <div className="md:col-span-6 space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Resit provides two layers of commercial security: tamperproof sale records that cashiers cannot secretly delete, plus dual-layer QR shipping labels with scratch-off handover PINs for parcels dispatched to buyers.
              </p>

              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Void audits require manager authorization and leave permanent actor stamps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Riders cannot mark packages delivered without entering the customer PIN</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Eliminates fraudulent delivery disputes and unverified chargebacks</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`${APP_BASE_URL}/shipments`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs xl:text-sm px-4 py-2.5 xl:px-6 xl:py-3.5 rounded-xl transition-all shadow-2xs"
                >
                  <Truck className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  <span>Track Parcels & Logistics</span>
                </a>
              </div>
            </div>

            {/* Right: Simulated Dispatch Handover PIN Box */}
            <div className="md:col-span-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Dual-Layer Delivery Verification
                </span>
                <span className="text-[10px] font-mono text-slate-500">TRACKED DISPATCH</span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                The buyer reveals their secret scratch PIN only after inspecting the package physically. Handing this PIN to the courier proves genuine custody handover.
              </p>

              {/* Secret Handover PIN Display */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block">HANDOVER PIN</span>
                  <div className="font-mono text-sm tracking-widest font-black text-slate-900 dark:text-white mt-0.5">
                    {pinRevealed ? "8491" : "•••• (Scratch Secret)"}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPinRevealed(!pinRevealed)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                >
                  {pinRevealed ? "Hide PIN" : "Reveal PIN"}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Instant SMS & Web Sync
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  Tamperproof Handover
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
