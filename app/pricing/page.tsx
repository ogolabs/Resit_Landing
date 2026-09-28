"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { HelpCircle, ShieldCheck, Zap, Check } from "lucide-react";
import { detectUserCurrency, convertNgnPrice, UserCurrencyInfo, PLAN_TIERS, OVERAGE_FEE_NGN } from "@/lib/currency";
import { APP_BASE_URL } from "@/lib/config";

export default function PricingPage() {
  const [userCurrency, setUserCurrency] = useState<UserCurrencyInfo | null>(null);
  const [growthTierKey, setGrowthTierKey] = useState<"starter_500" | "growth_1000">("growth_1000");
  const [scaleTierKey, setScaleTierKey] = useState<"business_2500" | "scale_5000">("scale_5000");

  useEffect(() => {
    detectUserCurrency().then(setUserCurrency);
  }, []);

  const isNigeria = userCurrency?.currency === "NGN" || userCurrency?.countryCode === "NG";
  const overageFeeFormatted = convertNgnPrice(OVERAGE_FEE_NGN, userCurrency).formattedLocal;

  const freeTier = PLAN_TIERS.free;
  const growthTier = PLAN_TIERS[growthTierKey];
  const scaleTier = PLAN_TIERS[scaleTierKey];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 py-8 sm:py-16 xl:py-24 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-10 sm:space-y-14 xl:space-y-20">
          
          {/* Page Banner Header */}
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4.5 xl:py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[10px] sm:text-xs xl:text-sm text-blue-700 dark:text-blue-300 shadow-2xs select-none backdrop-blur-xs">
              <span className="flex h-2 w-2 xl:h-2.5 xl:w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 xl:h-2.5 xl:w-2.5 bg-blue-600"></span>
              </span>
              <span className="font-bold tracking-tight">Transparent Pricing</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Simple, Predictable Plans for Growing Merchants
            </h1>

            <p className="text-xs sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Unified dispatches &amp; receipts, branch management, and multi-user team roles with universal {convertNgnPrice(OVERAGE_FEE_NGN, userCurrency).formattedLocal} overage.
            </p>
          </div>

          {/* Merchant & Logistics Operations Tiers */}
          <div className="space-y-8 xl:space-y-12">
            <div className="text-center space-y-2 xl:space-y-3 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
              <span className="text-xs xl:text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 xl:px-4 xl:py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block">
                Merchant Operations Plans
              </span>
              <h2 className="text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 dark:text-white font-display">
                Dispatches, Receipts &amp; Multi-Branch Tiers
              </h2>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-slate-600 dark:text-slate-400">
                Unified operations counter for smart QR receipts and package dispatches. Includes branch management and team roles with {overageFeeFormatted} universal overage.
              </p>
            </div>

            {/* Merchant Pricing Grid - 3 High-End Fintech Cards with Embedded Switchers */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 max-w-7xl lg:max-w-[1600px] 2xl:max-w-[2000px] mx-auto items-stretch">
              
              {/* Card 1: Free Tier */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl xl:rounded-3xl p-6 sm:p-7 xl:p-9 flex flex-col justify-between space-y-6 transition-all shadow-xs">
                <div className="space-y-5 xl:space-y-6">
                  {/* Header & Sub-tier context pill */}
                  <div className="flex items-center justify-between min-h-6">
                    <span className="text-xs xl:text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {freeTier.name}
                    </span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full">
                      Solo CEO
                    </span>
                  </div>

                  {/* Switcher Alignment Spacer / Baseline Tag */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl p-2 xl:p-2.5 flex items-center justify-center text-center">
                    <span className="text-[11px] sm:text-xs xl:text-sm font-bold text-slate-600 dark:text-slate-300">
                      100 Ops (Single-User Pilot)
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-0.5">
                    <div className="text-3xl sm:text-4xl xl:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                      {convertNgnPrice(0, userCurrency).formattedLocal}
                    </div>
                    <p className="text-xs xl:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      forever free
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed min-h-10">
                    {freeTier.description}
                  </p>

                  {/* Operations Quota Highlight Pill */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 xl:p-4 flex items-center gap-3">
                    <div className="w-9 h-9 xl:w-11 xl:h-11 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                      <Zap className="w-4 h-4 xl:w-5 xl:h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm xl:text-base font-bold text-slate-900 dark:text-white font-display truncate">
                        {freeTier.quota.toLocaleString()} Operations
                      </div>
                      <div className="text-[11px] sm:text-xs xl:text-sm text-slate-500 dark:text-slate-400 truncate">
                        Dispatches &amp; Sales Book receipts
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3 xl:space-y-4 text-xs sm:text-sm xl:text-base">
                    {/* Branches */}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">0 Branches</span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Headquarters only
                        </span>
                      </div>
                    </div>

                    {/* Branch Managers */}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">No Branch Manager</span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          CEO direct oversight
                        </span>
                      </div>
                    </div>

                    {/* Sales Reps */}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">0 Sales Reps</span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          CEO handles all store sales
                        </span>
                      </div>
                    </div>

                    {/* Hard Cap */}
                    <div className="flex items-start gap-2.5 pt-1.5 border-t border-slate-100 dark:border-slate-800">
                      <ShieldCheck className="w-4 h-4 xl:w-5 xl:h-5 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">Hard Monthly Limit</span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Strict 100 ops cap · CEO only
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-3">
                  <a
                    href={`${APP_BASE_URL}/workspace`}
                    className="w-full py-3 xl:py-4 px-4 rounded-xl text-xs sm:text-sm xl:text-base font-bold text-center transition-colors cursor-pointer block bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-xs"
                  >
                    Get Started Free
                  </a>
                </div>
              </div>

              {/* Card 2: Growth Tier (Most Popular) with Switcher */}
              <div className="bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 rounded-2xl xl:rounded-3xl p-6 sm:p-7 xl:p-9 flex flex-col justify-between space-y-6 transition-all shadow-sm relative">
                <div className="space-y-5 xl:space-y-6">
                  {/* Header & Most Popular Badge */}
                  <div className="flex items-center justify-between min-h-6">
                    <span className="text-xs xl:text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {growthTier.name}
                    </span>
                    <span className="bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full tracking-wide">
                      Most Popular
                    </span>
                  </div>

                  {/* Segmented Button Switcher */}
                  <div className="bg-slate-100 dark:bg-slate-800 p-1 xl:p-1.5 rounded-xl flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                    <button
                      type="button"
                      onClick={() => setGrowthTierKey("starter_500")}
                      className={`flex-1 py-1.5 xl:py-2 px-2 rounded-lg text-[11px] sm:text-xs xl:text-sm font-bold transition-all text-center cursor-pointer ${
                        growthTierKey === "starter_500"
                          ? "bg-blue-600 text-white shadow-2xs"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      500 Ops (Starter)
                    </button>
                    <button
                      type="button"
                      onClick={() => setGrowthTierKey("growth_1000")}
                      className={`flex-1 py-1.5 xl:py-2 px-2 rounded-lg text-[11px] sm:text-xs xl:text-sm font-bold transition-all text-center cursor-pointer ${
                        growthTierKey === "growth_1000"
                          ? "bg-blue-600 text-white shadow-2xs"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      1,000 Ops (Growth)
                    </button>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-0.5">
                    <div className="text-3xl sm:text-4xl xl:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                      {convertNgnPrice(growthTier.ngnMonthly, userCurrency).formattedLocal}
                    </div>
                    <p className="text-xs xl:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      / month
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed min-h-10">
                    {growthTier.description}
                  </p>

                  {/* Operations Quota Highlight Pill */}
                  <div className="bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/60 rounded-xl p-3.5 xl:p-4 flex items-center gap-3">
                    <div className="w-9 h-9 xl:w-11 xl:h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Zap className="w-4 h-4 xl:w-5 xl:h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm xl:text-base font-bold text-slate-900 dark:text-white font-display truncate">
                        {growthTier.quota.toLocaleString()} Operations
                      </div>
                      <div className="text-[11px] sm:text-xs xl:text-sm text-slate-500 dark:text-slate-400 truncate">
                        Dispatches &amp; Sales Book receipts
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3 xl:space-y-4 text-xs sm:text-sm xl:text-base">
                    {/* Branches */}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {growthTier.branches} {growthTier.branches === 1 ? "Branch location" : "Branch locations"}
                        </span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          + {overageFeeFormatted} per extra branch
                        </span>
                      </div>
                    </div>

                    {/* Branch Managers */}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {growthTier.managers} {growthTier.managers === 1 ? "Branch Manager" : "Branch Managers"}
                        </span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Strictly 1 manager / branch
                        </span>
                      </div>
                    </div>

                    {/* Sales Reps */}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {growthTier.salesReps} Sales {growthTier.salesReps === 1 ? "rep" : "reps"}
                        </span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          + {overageFeeFormatted} per extra rep
                        </span>
                      </div>
                    </div>

                    {/* Universal Overage Line */}
                    <div className="flex items-start gap-2.5 pt-1.5 border-t border-slate-100 dark:border-slate-800">
                      <ShieldCheck className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">Universal Overage</span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Flat {overageFeeFormatted} / excess unit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-3">
                  <a
                    href={`${APP_BASE_URL}/settings?plan=${growthTierKey}`}
                    className="w-full py-3 xl:py-4 px-4 rounded-xl text-xs sm:text-sm xl:text-base font-bold text-center transition-colors cursor-pointer block bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                  >
                    Select {growthTier.name}
                  </a>
                </div>
              </div>

              {/* Card 3: Scale Tier (High Volume) with Switcher */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl xl:rounded-3xl p-6 sm:p-7 xl:p-9 flex flex-col justify-between space-y-6 transition-all shadow-xs">
                <div className="space-y-5 xl:space-y-6">
                  {/* Header & High Volume Badge */}
                  <div className="flex items-center justify-between min-h-6">
                    <span className="text-xs xl:text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {scaleTier.name}
                    </span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full">
                      High Volume
                    </span>
                  </div>

                  {/* Segmented Button Switcher */}
                  <div className="bg-slate-100 dark:bg-slate-800 p-1 xl:p-1.5 rounded-xl flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                    <button
                      type="button"
                      onClick={() => setScaleTierKey("business_2500")}
                      className={`flex-1 py-1.5 xl:py-2 px-2 rounded-lg text-[11px] sm:text-xs xl:text-sm font-bold transition-all text-center cursor-pointer ${
                        scaleTierKey === "business_2500"
                          ? "bg-blue-600 text-white shadow-2xs"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      2,500 Ops (Business)
                    </button>
                    <button
                      type="button"
                      onClick={() => setScaleTierKey("scale_5000")}
                      className={`flex-1 py-1.5 xl:py-2 px-2 rounded-lg text-[11px] sm:text-xs xl:text-sm font-bold transition-all text-center cursor-pointer ${
                        scaleTierKey === "scale_5000"
                          ? "bg-blue-600 text-white shadow-2xs"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      5,000 Ops (Scale)
                    </button>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-0.5">
                    <div className="text-3xl sm:text-4xl xl:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                      {convertNgnPrice(scaleTier.ngnMonthly, userCurrency).formattedLocal}
                    </div>
                    <p className="text-xs xl:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      / month
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed min-h-10">
                    {scaleTier.description}
                  </p>

                  {/* Operations Quota Highlight Pill */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 xl:p-4 flex items-center gap-3">
                    <div className="w-9 h-9 xl:w-11 xl:h-11 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                      <Zap className="w-4 h-4 xl:w-5 xl:h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm xl:text-base font-bold text-slate-900 dark:text-white font-display truncate">
                        {scaleTier.quota.toLocaleString()} Operations
                      </div>
                      <div className="text-[11px] sm:text-xs xl:text-sm text-slate-500 dark:text-slate-400 truncate">
                        Dispatches &amp; Sales Book receipts
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3 xl:space-y-4 text-xs sm:text-sm xl:text-base">
                    {/* Branches */}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {scaleTier.branches} Branch locations
                        </span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          + {overageFeeFormatted} per extra branch
                        </span>
                      </div>
                    </div>

                    {/* Branch Managers */}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {scaleTier.managers} Branch Managers
                        </span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Strictly 1 manager / branch
                        </span>
                      </div>
                    </div>

                    {/* Sales Reps */}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {scaleTier.salesReps} Sales reps
                        </span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          + {overageFeeFormatted} per extra rep
                        </span>
                      </div>
                    </div>

                    {/* Universal Overage Line */}
                    <div className="flex items-start gap-2.5 pt-1.5 border-t border-slate-100 dark:border-slate-800">
                      <ShieldCheck className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-tight">
                        <span className="font-semibold text-slate-900 dark:text-white">Universal Overage</span>
                        <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Flat {overageFeeFormatted} / excess unit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-3">
                  <a
                    href={`${APP_BASE_URL}/settings?plan=${scaleTierKey}`}
                    className="w-full py-3 xl:py-4 px-4 rounded-xl text-xs sm:text-sm xl:text-base font-bold text-center transition-colors cursor-pointer block bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-xs"
                  >
                    Select {scaleTier.name}
                  </a>
                </div>
              </div>
            </div>

            {/* Merchant Bottom Trust Bar - Responsive Mobile / Tablet / Desktop */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-4 sm:p-5 xl:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3.5 text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-slate-900 dark:text-white">Supported Payments:</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">
                  {isNigeria
                    ? "Paystack (Cards, Bank Transfer, USSD, OPay)"
                    : "Stripe (Credit / Debit Card, Apple Pay)"}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs xl:text-sm">
                <span className="bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-800">
                  Universal Overage: {overageFeeFormatted} / unit
                </span>
                <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
                <span>Automatic monthly billing</span>
                <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
                <span>Cancel or switch anytime</span>
              </div>
            </div>
          </div>

          {/* Section 3: Universal Overage & Fair Pricing Guarantee */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl xl:rounded-3xl p-5 sm:p-8 xl:p-12 shadow-xs space-y-4">
            <div className="flex items-start sm:items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 xl:w-7 xl:h-7 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
              <h2 className="text-base sm:text-xl xl:text-2xl 2xl:text-3xl font-bold font-display">
                Universal {convertNgnPrice(OVERAGE_FEE_NGN, userCurrency).formattedLocal} Overage &amp; Predictable Monthly Billing
              </h2>
            </div>
            <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl xl:max-w-5xl">
              Grow without unexpected barriers. Any operation or expansion beyond your tier quota—extra dispatches, extra digital receipts, extra branches, or additional sales reps—is billed at a flat <strong>{convertNgnPrice(OVERAGE_FEE_NGN, userCurrency).formattedLocal} per unit</strong>. Your full plan quota refreshes automatically at the start of each billing month.
            </p>
          </div>

          {/* Section 4: Frequently Asked Questions */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-5 sm:p-10 xl:p-14 shadow-xs space-y-6 xl:space-y-8">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 xl:pb-6">
              <h2 className="text-lg sm:text-2xl xl:text-3xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                <HelpCircle className="w-5 h-5 xl:w-7 xl:h-7 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Frequently Asked Questions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10 text-xs sm:text-sm xl:text-base">
              <div className="space-y-2 xl:space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base xl:text-lg">How do dispatches and receipts count toward my monthly quota?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Both logistics shipments and sales book receipts share a unified monthly operations counter. For example, on the Starter tier (500 Ops), you can create 300 receipts and 200 dispatches. Any excess is billed at {convertNgnPrice(OVERAGE_FEE_NGN, userCurrency).formattedLocal} per unit.
                </p>
              </div>

              <div className="space-y-2 xl:space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base xl:text-lg">How are extra branches and sales reps handled?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  You can expand beyond your plan&apos;s base limits at any time. Extra branches and extra sales reps are billed at {convertNgnPrice(OVERAGE_FEE_NGN, userCurrency).formattedLocal} each, while strictly maintaining the rule of 1 manager per branch.
                </p>
              </div>

              <div className="space-y-2 xl:space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base xl:text-lg">Which payment methods are supported?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  You can pay seamlessly using standard local debit cards, credit cards, bank transfers, or mobile payment channels based on your region.
                </p>
              </div>

              <div className="space-y-2 xl:space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base xl:text-lg">Can I change my plan or cancel at any time?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Yes. You can upgrade, switch tiers, or cancel your subscription at any time directly from your merchant settings. Changes apply seamlessly to your account.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
