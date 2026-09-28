"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Copy, Check } from "lucide-react";
import { webhookPayloadExample } from "./codeSnippets";
import { APP_BASE_URL } from "@/lib/config";

export default function WebhookGuideSection() {
  const [copiedWebhook, setCopiedWebhook] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedWebhook(true);
    setTimeout(() => setCopiedWebhook(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* HTTP Status Codes Reference */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">HTTP Status Codes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 block">200</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">Success</span>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 block">201</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">Created</span>
          </div>
          <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-red-600 dark:text-red-400 block">401</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">Invalid API Key</span>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-slate-700 dark:text-slate-300 block">402</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">Quota Exhausted</span>
          </div>
          <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-red-600 dark:text-red-400 block">403</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">Not a Merchant</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-slate-600 dark:text-slate-400 block">404</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">Package Not Found</span>
          </div>
          <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-red-600 dark:text-red-400 block">400</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">Bad Request</span>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-slate-700 dark:text-slate-300 block">409</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">State Conflict</span>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-slate-700 dark:text-slate-300 block">429</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">Rate Limited</span>
          </div>
          <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl p-3 text-center">
            <span className="text-2xl font-extrabold text-red-600 dark:text-red-400 block">500</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">Server Error</span>
          </div>
        </div>
      </div>

      {/* Webhooks Integration Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" /> Real-Time Webhook Subscriptions
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Receive instant HTTP POST callbacks when dispatches are created, scanned, delivered, or disputed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Supported Event Types:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-xs shrink-0">resit.ping</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">— Connectivity &amp; latency test ping</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-xs shrink-0">shipment.created</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">— New package registered via API or Dashboard</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-mono font-bold text-purple-600 dark:text-purple-400 text-xs shrink-0">shipment.scanned</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">— QR sticker scanned in the field</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-mono font-bold text-sky-600 dark:text-sky-400 text-xs shrink-0">shipment.handover</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">— Custody transferred to dispatch rider</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs shrink-0">shipment.delivered</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">— Successful PIN verification &amp; physical delivery</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-mono font-bold text-red-600 dark:text-red-400 text-xs shrink-0">shipment.disputed</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">— Delivery dispute reported for damage / tampering</span>
              </li>
            </ul>
            <p className="pt-2 text-xs leading-relaxed">
              Configure your target webhook URL once on your{" "}
              <a href={`${APP_BASE_URL}/shipments`} className="font-bold text-blue-600 dark:text-blue-400 hover:underline">
                Merchant Dashboard
              </a>{" "}
              or{" "}
              <a href={`${APP_BASE_URL}/settings`} className="font-bold text-blue-600 dark:text-blue-400 hover:underline">
                Settings Page
              </a>
              . All dispatches created under your merchant profile automatically stream status events to your
              configured endpoint.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Example Webhook JSON Body:</span>
            <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative border border-slate-800">
              <button
                type="button"
                onClick={() => copyToClipboard(webhookPayloadExample)}
                className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
                title="Copy code"
              >
                {copiedWebhook ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-emerald-300">{webhookPayloadExample}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Rate Limits & Quota */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">Rate Limits &amp; Quota</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white block">Free Pilot</span>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white block">100</span>
            <span className="text-slate-500 dark:text-slate-400">operations / month</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white block">Starter</span>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white block">500</span>
            <span className="text-slate-500 dark:text-slate-400">operations / month</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white block">Growth</span>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white block">1,000</span>
            <span className="text-slate-500 dark:text-slate-400">operations / month</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white block">Scale</span>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white block">5,000</span>
            <span className="text-slate-500 dark:text-slate-400">operations / month</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400">
          When your monthly quota is reached on the Free tier, operations are capped until the billing cycle resets.
          Paid tiers support uninterrupted operations via transparent universal overage.{" "}
          <Link href="/pricing" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">
            View all tier details →
          </Link>
        </p>
      </div>
    </div>
  );
}
