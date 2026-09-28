"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ArrowRight, Truck, Smartphone, Receipt, Users, Building2, Code2 } from "lucide-react";
import { APP_BASE_URL } from "@/lib/config";

export default function AboutPage() {
  const salesBookUrl = `${APP_BASE_URL}/workspace?tab=pos`;
  const shipmentsUrl = `${APP_BASE_URL}/shipments`;
  const teamUrl = `${APP_BASE_URL}/workspace?tab=team`;

  const steps = [
    {
      num: "01",
      title: "Fast Mobile Sales & Smart QR Receipts",
      desc: "Record customer sales in seconds from any smartphone or tablet. Resit replaces fragile paper receipt printers with tamperproof digital receipts featuring scannable QR codes, payment tracking, and debtor ledgers.",
    },
    {
      num: "02",
      title: "Tracked Shipments & Scratch-Off Delivery Secrets",
      desc: "Dispatch retail deliveries and commercial packages with dual-layer QR shipping labels. Recipients unlock their deliveries using confidential scratch-off PIN verification, preventing dispatch rider theft or false delivery claims.",
    },
    {
      num: "03",
      title: "Multi-Branch Operations & Team Roles",
      desc: "Collaborate seamlessly across multiple retail shops. Invite branch managers and sales reps via email with 6-digit PIN logins. Track sales rep performance per branch while keeping financial bookkeeping private.",
    },
    {
      num: "04",
      title: "Permanent Audit Trails & Developer APIs",
      desc: "Every receipt issued, debtor settlement recorded, and package handover completed is certified with an immutable verification code. Integrate existing billing software, webhooks, and ERPs using Resit's REST API.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 py-8 sm:py-16 xl:py-24 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-8 sm:space-y-12 xl:space-y-16">
          
          {/* Banner Section */}
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4.5 xl:py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs xl:text-sm text-emerald-700 dark:text-emerald-300 shadow-2xs select-none backdrop-blur-xs">
              <span className="flex h-2 w-2 xl:h-2.5 xl:w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 xl:h-2.5 xl:w-2.5 bg-emerald-600"></span>
              </span>
              <span className="font-bold tracking-tight">About Resit</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Modern Commerce Without Paper Waste
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Record sales, manage staff, and track shipments. Switch to Resit for smart QR receipts that bridge in-store purchases, delivery handovers, and multi-branch bookkeeping into one cohesive system.
            </p>
          </div>

          {/* Step-by-Step Architecture Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:gap-8 pt-2 sm:pt-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 sm:p-8 xl:p-10 2xl:p-12 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex gap-4 xl:gap-6"
              >
                <span className="text-xl sm:text-2xl xl:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400 shrink-0 select-none">
                  {step.num}
                </span>
                <div className="space-y-1.5 sm:space-y-2 xl:space-y-3">
                  <h3 className="text-base sm:text-lg xl:text-2xl font-bold text-slate-900 dark:text-white font-display">{step.title}</h3>
                  <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Safeguards Section */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 sm:p-10 xl:p-12 2xl:p-16 shadow-2xs space-y-5 sm:space-y-6 xl:space-y-8">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 xl:pb-6">
              <h2 className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-slate-900 dark:text-white font-display">Built-In Security &amp; Trust Safeguards</h2>
              <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 mt-1">
                Your store finances, customer records, and dispatch timelines are protected by design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 text-xs sm:text-sm xl:text-base leading-relaxed">
              <div className="space-y-2 xl:space-y-2.5">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 xl:gap-2 text-sm xl:text-lg">
                  <Smartphone className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400" /> Zero App Downloads
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Customers view receipts, and delivery dispatchers verify shipments instantly from standard mobile browsers.
                </p>
              </div>

              <div className="space-y-2 xl:space-y-2.5">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 xl:gap-2 text-sm xl:text-lg">
                  <Users className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400" /> Role-Based Privacy
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Sales reps record customer orders without seeing overall store financial balances or manager settings.
                </p>
              </div>

              <div className="space-y-2 xl:space-y-2.5">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 xl:gap-2 text-sm xl:text-lg">
                  <Building2 className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400" /> Multi-Branch Isolation
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Organize team members by store location. Each branch maintains distinct daily revenue and debtor histories.
                </p>
              </div>

              <div className="space-y-2 xl:space-y-2.5">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 xl:gap-2 text-sm xl:text-lg">
                  <Receipt className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400" /> Permanent Audit Trails
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Every transaction issuance, void with reason, or credit settlement captures an immutable snapshot of the actor and branch.
                </p>
              </div>

              <div className="space-y-2 xl:space-y-2.5">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 xl:gap-2 text-sm xl:text-lg">
                  <Truck className="w-4 h-4 xl:w-5 xl:h-5 text-indigo-600 dark:text-indigo-400" /> Tamperproof Dispatches
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Dual-layer QR shipping labels protect parcels against unauthorized interception or delivery dispute.
                </p>
              </div>

              <div className="space-y-2 xl:space-y-2.5">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 xl:gap-2 text-sm xl:text-lg">
                  <Code2 className="w-4 h-4 xl:w-5 xl:h-5 text-blue-600 dark:text-blue-400" /> Developer REST API
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Connect Resit directly to custom e-commerce checkouts, billing systems, or dispatch fleets via simple REST endpoints.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action Pathways */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 sm:p-10 xl:p-12 2xl:p-16 shadow-2xs space-y-5 xl:space-y-8">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 xl:pb-6">
              <h2 className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-slate-900 dark:text-white font-display">Get Started with Resit</h2>
              <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 mt-1">
                Choose the workflow that fits your business needs today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-8 text-xs sm:text-sm">
              <div className="space-y-2 bg-emerald-50/50 dark:bg-emerald-950/20 p-5 xl:p-8 rounded-xl xl:rounded-2xl border border-emerald-200/60 dark:border-emerald-900/60 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 xl:gap-2 text-sm sm:text-base xl:text-xl">
                    <Receipt className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400" /> Digital Sales Book
                  </h4>
                  <p className="text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                    Record counter sales, issue digital receipts, track debtors, and manage store branches.
                  </p>
                </div>
                <div className="pt-3">
                  <a href={salesBookUrl} className="text-xs sm:text-sm xl:text-base font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
                    <span>Open Sales Book</span> <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-2 bg-indigo-50/50 dark:bg-indigo-950/20 p-5 xl:p-8 rounded-xl xl:rounded-2xl border border-indigo-200/60 dark:border-indigo-900/60 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 xl:gap-2 text-sm sm:text-base xl:text-xl">
                    <Truck className="w-4 h-4 xl:w-5 xl:h-5 text-indigo-600 dark:text-indigo-400" /> Package Tracking
                  </h4>
                  <p className="text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                    Dispatch commercial packages, print rider delivery manifests, and track chain of custody.
                  </p>
                </div>
                <div className="pt-3">
                  <a href={shipmentsUrl} className="text-xs sm:text-sm xl:text-base font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                    <span>Open Shipments Hub</span> <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-2 bg-blue-50/50 dark:bg-blue-950/20 p-5 xl:p-8 rounded-xl xl:rounded-2xl border border-blue-200/60 dark:border-blue-900/60 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 xl:gap-2 text-sm sm:text-base xl:text-xl">
                    <Users className="w-4 h-4 xl:w-5 xl:h-5 text-blue-600 dark:text-blue-400" /> Team &amp; Storefronts
                  </h4>
                  <p className="text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                    Invite sales representatives and branch managers with secure PIN credentials.
                  </p>
                </div>
                <div className="pt-3">
                  <a href={teamUrl} className="text-xs sm:text-sm xl:text-base font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                    <span>Manage Team</span> <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
