"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Lock,
  Globe2,
  Terminal,
  Store,
} from "lucide-react";
import { APP_BASE_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 pt-12 xl:pt-16 pb-10 xl:pb-14 transition-colors">
      <div className="mx-auto max-w-[1920px] 2xl:max-w-[2400px] w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Top Guarantee / Telemetry Ribbon */}
        <div className="mb-12 pb-8 border-b border-slate-100 dark:border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0 flex items-center group">
              <Image
                src="/logo-full.svg"
                alt="Resit Logo"
                width={460}
                height={90}
                style={{ width: "auto" }}
                className="h-8 sm:h-9 lg:h-10 xl:h-11 2xl:h-12 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Live Network & Security Telemetry */}
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-mono text-[11px]">Mainnet Operational</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
              <Zap className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-mono text-[11px]">~42ms Latency</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
              <span className="font-mono text-[11px]">Zero-Knowledge Proofs</span>
            </div>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12">
          {/* Col 1: Solutions */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Store className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Commerce Solutions</span>
            </h4>
            <ul className="space-y-2.5 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a href={`${APP_BASE_URL}/workspace?tab=pos`} className="hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Digital Sales Book</span>
                </a>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/workspace?tab=receipts`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Digital Customer Receipts
                </a>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/workspace?tab=shipments`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Tracked Shipments &amp; PIN Dispatch
                </a>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/workspace?tab=team`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Multi-Branch &amp; Staff Roles
                </a>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/workspace`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Merchant Workspace Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Platform & API */}
          <div className="space-y-3.5">
            <h4 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Developer Platform</span>
            </h4>
            <ul className="space-y-2.5 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/developers" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  REST API Endpoints Reference
                </Link>
              </li>
              <li>
                <Link href="/developers#sandbox" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Interactive API Sandbox Console
                </Link>
              </li>
              <li>
                <Link href="/developers#webhooks" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Webhook Event Dispatcher
                </Link>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/settings`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Merchant API Keys &amp; Secret
                </a>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Developer API Rate Limits &amp; Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Trust & Company */}
          <div className="space-y-3.5">
            <h4 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Trust &amp; Governance</span>
            </h4>
            <ul className="space-y-2.5 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  About Resit Protocol
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Tier Quotas &amp; Transparent Billing
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Privacy Policy &amp; Off-Chain PII
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Merchant Terms of Service
                </Link>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/workspace/login`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Branch Staff PIN Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Secured Infrastructure Badge */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Decentralized Ledger</span>
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <Image
                  src="/ETN.png"
                  alt="Electroneum Logo"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain shrink-0"
                />
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block text-[9px] uppercase font-bold tracking-wider font-mono">
                    Underlying Settlement
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs">
                    Electroneum Mainnet
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Every sale receipt and custody handover is stamped with a non-repudiable cryptographic certificate.
              </p>
              <div className="pt-1 border-t border-slate-200/80 dark:border-slate-800 text-[10px] text-slate-500 flex items-center justify-between font-mono">
                <span>Consensus: IBFT 2.0</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2 text-[11px]">
            <Image
              src="/logo-icon.svg"
              alt="Resit"
              width={20}
              height={20}
              className="w-4 h-4 xl:w-5 xl:h-5 object-contain shrink-0"
            />
            <span>© {new Date().getFullYear()} Resit. Digital Sales Book &amp; Logistics OS.</span>
          </div>
          <div className="flex items-center gap-5 text-xs font-medium">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              API Docs
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
