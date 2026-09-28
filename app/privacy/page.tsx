"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ShieldCheck, Clock, FileText } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 py-12 sm:py-16 xl:py-24 sm:px-6 lg:px-8 space-y-8 xl:space-y-12">
          {/* Header Tag & Title */}
          <div className="space-y-3 xl:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4.5 xl:py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs xl:text-sm text-blue-700 dark:text-blue-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-blue-600 dark:text-blue-400" />
              <span>Legal &amp; Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Privacy Policy
            </h1>
            <div className="flex items-center gap-2 text-xs sm:text-sm xl:text-base text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <span>Status: Formal Framework Under Final Legal Review</span>
            </div>
          </div>

          {/* Policy Overview Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-6 sm:p-8 xl:p-12 space-y-6 xl:space-y-8 shadow-xs">
            <div className="flex items-start gap-4 xl:gap-6">
              <div className="w-10 h-10 xl:w-14 xl:h-14 rounded-xl xl:rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200/50 dark:border-blue-800/50">
                <FileText className="w-5 h-5 xl:w-7 xl:h-7" />
              </div>
              <div className="space-y-2 xl:space-y-3">
                <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Our Privacy Architecture
                </h2>
                <p className="text-sm sm:text-base xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Resit is architected from the ground up as a privacy-first platform. We believe store financial records, customer receipt details, and shipment custody coordinates must never be unnecessarily exposed or monetized.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 xl:pt-8 space-y-4 xl:space-y-6">
              <h3 className="text-sm sm:text-base xl:text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display">
                Core Privacy Guarantees
              </h3>
              <ul className="space-y-3 xl:space-y-4 text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5 xl:gap-3">
                  <span className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Protected Merchant Data:</strong> Store sales records, cashier activity, customer phone numbers, and secret delivery codes are stored securely and never made accessible without authorization.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 xl:gap-3">
                  <span className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Zero-Auth Public Verification:</strong> Customers scanning digital receipt QR codes or delivery parcels can view and verify transaction slips instantly without requiring mandatory app downloads or account creation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 xl:gap-3">
                  <span className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Cross-Jurisdiction Compliance:</strong> Structuring data retention and e-invoicing audit standards in compliance with modern commercial data privacy and financial recordkeeping requirements.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl xl:rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 p-4 xl:p-6 text-xs sm:text-sm xl:text-base text-slate-600 dark:text-slate-400 space-y-1">
              <p className="font-semibold text-slate-900 dark:text-white">Notice</p>
              <p>
                Our finalized legal terms and comprehensive data protection agreements are undergoing dual-jurisdiction legal certification. For immediate privacy inquiries or data requests, contact{" "}
                <a href="mailto:support@resit.xyz" className="text-blue-600 dark:text-blue-400 underline font-medium">
                  support@resit.xyz
                </a>.
              </p>
            </div>
          </div>

          {/* Quick Back Navigation */}
          <div className="pt-2 text-center sm:text-left">
            <Link
              href="/"
              className="text-xs sm:text-sm xl:text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
