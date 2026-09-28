"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { ArrowRight, KeyRound, UserPlus, Package, ShieldCheck, QrCode, Lock } from "lucide-react";
import ApiSandboxConsole from "@/components/Developers/ApiSandboxConsole";
import ApiEndpointsReference from "@/components/Developers/ApiEndpointsReference";
import WebhookGuideSection from "@/components/Developers/WebhookGuideSection";
import { APP_BASE_URL } from "@/lib/config";

export default function DevelopersPage() {
  const gettingStartedSteps = [
    {
      step: 1,
      icon: <UserPlus className="w-5 h-5 xl:w-6 xl:h-6 text-blue-600 dark:text-blue-400" />,
      title: "Create a Merchant Account",
      description:
        "Sign up on Resit using Google or Email or Phone. During profile setup, select your merchant business type to unlock the shipments and smart receipts workspace.",
      action: "Sign Up as Merchant →",
      actionHref: `${APP_BASE_URL}/workspace`,
      isExternal: true,
    },
    {
      step: 2,
      icon: <KeyRound className="w-5 h-5 xl:w-6 xl:h-6 text-blue-600 dark:text-blue-400" />,
      title: "Generate Your Secret API Key",
      description:
        'Open your Settings page and scroll to the Developer REST API section. Click "Generate API Key" to create a secret key in the format rst_live_.... Copy this key securely — it authenticates all your server-to-server API calls.',
      action: "Go to Settings →",
      actionHref: `${APP_BASE_URL}/settings`,
      isExternal: true,
    },
    {
      step: 3,
      icon: <Package className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Register Your First Dispatch",
      description:
        "Call POST /api/v1/shipments/create with your API key in the Authorization header. The response returns a unique packageId, consumer trackingCode, RST-prefixed handover secret (innerSecret), and shipment record.",
      action: "See Code Example ↓",
      actionHref: "#endpoints",
      isExternal: false,
    },
    {
      step: 4,
      icon: <QrCode className="w-5 h-5 xl:w-6 xl:h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Print & Affix API-Generated QR Sticker",
      description:
        "Every shipment creation call automatically returns ready-to-print qrImageUrl and scanUrl links, plus a dedicated GET /api/v1/shipments/[id]/qr endpoint for SVG/PNG label printing onto boxes or poly-mailers.",
    },
    {
      step: 5,
      icon: <ShieldCheck className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Complete Delivery with PIN Handover",
      description:
        "At delivery, the recipient provides their secret scratch-off PIN. The recipient or rider enters it on the scan page (or your backend calls POST /api/v1/shipments/[id]/verify). On match, the package status updates to Verified and your webhook fires.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 py-8 sm:py-16 xl:py-24 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-12 xl:space-y-16">
          {/* Hero Banner Header */}
          <div className="text-center space-y-4 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4.5 xl:py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] sm:text-xs xl:text-sm text-blue-700 dark:text-blue-300 shadow-2xs select-none backdrop-blur-xs">
              <span className="flex h-2 w-2 xl:h-2.5 xl:w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 xl:h-2.5 xl:w-2.5 bg-blue-600"></span>
              </span>
              <span className="font-bold tracking-tight">Developer API</span>
              <span className="text-slate-300 dark:text-slate-700 font-light">·</span>
              <span className="font-medium text-slate-600 dark:text-slate-400">REST API &amp; Webhooks</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Integrate Resit Dispatches &amp; Receipts
            </h1>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Programmatically create tamper-proof dispatches, generate dual-layer QR stickers, verify PIN handovers,
              and stream real-time logistics webhooks directly into your ERP or e-commerce store.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-3 xl:gap-4">
              <a
                href="#getting-started"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm xl:text-base font-bold py-3 px-6 xl:py-4 xl:px-8 rounded-xl xl:rounded-2xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Getting Started Guide</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#endpoints"
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm xl:text-base font-bold py-3 px-6 xl:py-4 xl:px-8 rounded-xl xl:rounded-2xl transition-all shadow-xs"
              >
                API Reference
              </a>
              <Link
                href="/pricing"
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm xl:text-base font-bold py-3 px-6 xl:py-4 xl:px-8 rounded-xl xl:rounded-2xl transition-all shadow-xs"
              >
                View Quota Tiers
              </Link>
            </div>
          </div>

          {/* Getting Started: Step-by-Step Guide */}
          <div id="getting-started" className="space-y-6 xl:space-y-8">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 xl:pb-6">
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-slate-900 dark:text-white font-display">
                Getting Started: From Sign-Up to First Dispatch
              </h2>
              <p className="text-xs sm:text-sm xl:text-base text-slate-500 dark:text-slate-400 mt-1">
                Follow these 5 steps to go from zero to a fully automated package tracking integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
              {gettingStartedSteps.map((s) => (
                <div
                  key={s.step}
                  className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-5 sm:p-7 xl:p-8 shadow-xs space-y-3 xl:space-y-4 relative ${
                    s.step <= 3 ? "" : "md:col-span-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-slate-900 dark:bg-blue-600 text-white font-extrabold text-xs xl:text-sm w-7 h-7 xl:w-9 xl:h-9 rounded-full flex items-center justify-center shadow-xs shrink-0">
                      {s.step}
                    </span>
                    {s.icon}
                    <h3 className="text-sm sm:text-base xl:text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{s.description}</p>

                  {s.action && s.actionHref && (
                    s.isExternal ? (
                      <a
                        href={s.actionHref}
                        className="text-xs sm:text-sm xl:text-base font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                      >
                        {s.action}
                      </a>
                    ) : (
                      <Link
                        href={s.actionHref}
                        className="text-xs sm:text-sm xl:text-base font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                      >
                        {s.action}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Authentication Guide */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 sm:p-8 xl:p-12 shadow-xs space-y-4 xl:space-y-6">
            <h2 className="text-lg sm:text-2xl xl:text-3xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
              <KeyRound className="w-5 h-5 xl:w-7 xl:h-7 text-blue-600 dark:text-blue-400" />
              <span>Authentication</span>
            </h2>

            <p className="text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              All authenticated endpoints require your secret API key. You can pass it in one of two ways:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 text-xs sm:text-sm xl:text-base">
              <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl xl:rounded-2xl p-4 xl:p-6 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white block">Option 1: Authorization Header (Recommended)</span>
                <code className="bg-slate-950 text-emerald-400 font-mono px-2.5 py-1.5 rounded block text-[11px] sm:text-xs xl:text-sm overflow-x-auto">
                  Authorization: Bearer rst_live_8f921a4b901e23f...
                </code>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl xl:rounded-2xl p-4 xl:p-6 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white block">Option 2: Custom Header</span>
                <code className="bg-slate-950 text-emerald-400 font-mono px-2.5 py-1.5 rounded block text-[11px] sm:text-xs xl:text-sm overflow-x-auto">
                  x-api-key: rst_live_8f921a4b901e23f...
                </code>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl xl:rounded-2xl p-3.5 xl:p-5 text-xs sm:text-sm xl:text-base text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-2.5">
              <Lock className="w-4 h-4 xl:w-5 xl:h-5 text-slate-700 dark:text-slate-300 shrink-0 mt-0.5" />
              <div>
                <strong>Security Notice:</strong> Never expose your API key in client-side browser code. Only use it in
                server-to-server calls from your backend (Node.js, Python, PHP, etc.). If your key is compromised, roll it
                immediately from{" "}
                <a href={`${APP_BASE_URL}/settings`} className="font-bold underline text-blue-600 dark:text-blue-400">
                  Settings
                </a>
                .
              </div>
            </div>
          </div>

          {/* Interactive REST API Console / Playground */}
          <ApiSandboxConsole />

          {/* Endpoints Reference Section with Language Switcher */}
          <ApiEndpointsReference />

          {/* Webhook Guide, Status Codes, and Quotas */}
          <WebhookGuideSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
