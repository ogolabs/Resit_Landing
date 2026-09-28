"use client";

import { useState } from "react";
import { Server, Code, Copy, Check, Key } from "lucide-react";
import { codeExamples, SupportedLang } from "./codeSnippets";

export default function ApiEndpointsReference() {
  const [activeLang, setActiveLang] = useState<SupportedLang>("curl");
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Language Selector Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
          <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" /> API Request Code Examples:
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveLang("curl")}
            className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeLang === "curl" ? "bg-blue-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            cURL
          </button>
          <button
            type="button"
            onClick={() => setActiveLang("javascript")}
            className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeLang === "javascript" ? "bg-blue-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            JavaScript (Node)
          </button>
          <button
            type="button"
            onClick={() => setActiveLang("python")}
            className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeLang === "python" ? "bg-blue-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Python
          </button>
        </div>
      </div>

      {/* Endpoints Reference Section */}
      <div id="endpoints" className="space-y-8">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
            <Server className="w-6 h-6 text-indigo-600" /> REST API Endpoint Reference
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Base URL:{" "}
            <code className="bg-slate-900 text-emerald-400 font-mono px-2 py-0.5 rounded text-xs">
              https://resit.co/api/v1
            </code>
          </p>
        </div>

        {/* Endpoint 1: Create Shipment */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-emerald-500 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                POST
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/shipments/create</code>
            </div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 flex items-center gap-1">
              <Key className="w-3 h-3" />
              <span>API Key Required</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Registers a new commercial shipment, reserves your monthly quota, writes a tamper-proof record to the
            Electroneum blockchain, and returns a unique packageId, trackingCode, RST-prefixed handover secret
            (innerSecret), and shipment object.
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.createShipment[activeLang], "create")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "create" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre>{codeExamples.createShipment[activeLang]}</pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">Request Body Parameters:</span>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 font-mono">
                <li>• <strong className="text-slate-900 dark:text-white">packageName</strong> (string, required): Reference title</li>
                <li>• <strong className="text-slate-900 dark:text-white">receiverName</strong> (string, optional): Recipient full name</li>
                <li>• <strong className="text-slate-900 dark:text-white">receiverPhone</strong> (string, required): Recipient phone number</li>
                <li>• <strong className="text-slate-900 dark:text-white">destination</strong> (string, optional): Destination city / area</li>
                <li>• <strong className="text-slate-900 dark:text-white">weight</strong> (string, optional): Weight in kg</li>
                <li>• <strong className="text-slate-900 dark:text-white">metadata</strong> (object, optional): Custom key-value data</li>
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">200 OK Response:</span>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 font-mono">
                <li>• <strong className="text-emerald-600">success</strong>: true</li>
                <li>• <strong className="text-emerald-600">packageId</strong>: &quot;0x4a91b2...&quot; (internal package ID)</li>
                <li>• <strong className="text-emerald-600">trackingCode</strong>: &quot;RST-4A91B2C3E8F0&quot; (consumer tracking code)</li>
                <li>• <strong className="text-emerald-600">scanUrl</strong>: &quot;https://resit.co/scan/RST-4A91B2C3E8F0&quot;</li>
                <li>• <strong className="text-emerald-600">qrImageUrl</strong>: &quot;https://api.qrserver.com/...&quot; (ready-to-print PNG link)</li>
                <li>• <strong className="text-emerald-600">qrApiUrl</strong>: &quot;https://resit.co/api/v1/shipments/RST-4A91B2C3E8F0/qr&quot;</li>
                <li>• <strong className="text-emerald-600">innerSecret</strong>: &quot;RST-A8F2B1C0&quot; (8-char handover secret)</li>
                <li>• <strong className="text-emerald-600">shipment</strong>: Full Shipment Object</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Endpoint 2: List Shipments */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-blue-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                GET
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/shipments</code>
            </div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 flex items-center gap-1">
              <Key className="w-3 h-3" />
              <span>API Key Required</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Returns all shipments belonging to your merchant account, sorted by most recent first. Useful for syncing
            your order management system or building custom dashboards.
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.listShipments[activeLang], "list")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "list" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre>{codeExamples.listShipments[activeLang]}</pre>
          </div>
        </div>

        {/* Endpoint 3: Verify Shipment Scan */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-blue-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                GET
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/shipments/[id]/verify</code>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Public · No Auth Required
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Public endpoint for QR scan verification. Returns package weight, carrier info, current status (InTransit,
            Delivered, Disputed), and chain-of-custody timeline. This is the same endpoint called when anyone scans a
            physical QR sticker.
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.verifyShipment[activeLang], "verify")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "verify" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre>{codeExamples.verifyShipment[activeLang]}</pre>
          </div>
        </div>

        {/* Endpoint 4: Log Custody Handover */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-emerald-500 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                POST
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/shipments/[id]/handover</code>
            </div>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 flex items-center gap-1">
              <Key className="w-3 h-3" />
              <span>API Key Required</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Transfers package custody to a dispatch rider, driver, or warehouse handler. Updates status to &quot;InTransit&quot;,
            logs an on-chain event, and fires a <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-800 dark:text-slate-200">shipment.handover</code>{" "}
            webhook callback.
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.handoverShipment[activeLang], "handover")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "handover" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre>{codeExamples.handoverShipment[activeLang]}</pre>
          </div>
        </div>

        {/* Endpoint 5: Verify PIN & Confirm Delivery */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-emerald-500 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                POST
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/shipments/[id]/verify</code>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              PIN Verification
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Verifies the 8-character Secret Handover PIN at physical delivery. On a match, status updates to
            &quot;Verified&quot; and a <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-800 dark:text-slate-200">shipment.delivered</code> webhook
            callback fires with company details.
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.confirmDelivery[activeLang], "confirmDelivery")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "confirmDelivery" ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            <pre>{codeExamples.confirmDelivery[activeLang]}</pre>
          </div>
        </div>

        {/* Endpoint 6: Fetch Custody History Timeline */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-blue-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                GET
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/shipments/[id]/history</code>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Public Timeline
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Fetches the complete custody event timeline (Created, InTransit, Handover, Verified, Disputed) for a package.
            Passing an authorized rider PIN unlocks rider contact details.
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.historyShipment[activeLang], "history")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "history" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre>{codeExamples.historyShipment[activeLang]}</pre>
          </div>
        </div>

        {/* Endpoint 7: Log Delivery Dispute */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-emerald-500 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                POST
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/shipments/[id]/dispute</code>
            </div>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 flex items-center gap-1">
              <Key className="w-3 h-3" />
              <span>API Key Required</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Files a formal delivery dispute for damaged, stolen, or missing contents.{" "}
            <strong>Requires the package to be in &quot;InTransit&quot; status</strong> (i.e. handed over for delivery).
            Updates package status to &quot;Disputed&quot;, records an on-chain event, and triggers a{" "}
            <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-800 dark:text-slate-200">shipment.disputed</code> webhook.
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.disputeShipment[activeLang], "dispute")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "dispute" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre>{codeExamples.disputeShipment[activeLang]}</pre>
          </div>
        </div>

        {/* Endpoint 8: Edit Package Details */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-slate-700 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                PATCH
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/shipments/[id]</code>
            </div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 flex items-center gap-1">
              <Key className="w-3 h-3" />
              <span>API Key Required</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Updates package metadata (name, receiver name, receiver phone, destination, weight). Only the package
            creator can edit details. Cannot modify packages in &quot;Verified&quot; or &quot;Disputed&quot; status.{" "}
            <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-800 dark:text-slate-200">receiverPhone</code> cannot be set to empty.
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.editShipment[activeLang], "edit")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "edit" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre>{codeExamples.editShipment[activeLang]}</pre>
          </div>
        </div>

        {/* Endpoint 9: Public QR Generator */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-blue-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                GET
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/shipments/[id]/qr</code>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Public QR Generator
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Generates a QR code image or returns JSON metadata containing direct scan links, ready-to-print PNG/SVG
            URLs, and caption text for any registered package or item. Supports query parameters{" "}
            <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-800 dark:text-slate-200">?format=json|png|svg</code> and{" "}
            <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-800 dark:text-slate-200">?size=300</code>.
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.getQrCode[activeLang], "getQrCode")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "getQrCode" ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            <pre>{codeExamples.getQrCode[activeLang]}</pre>
          </div>
        </div>

        {/* Endpoint 10: API Health Status Check */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-blue-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
                GET
              </span>
              <code className="text-sm font-mono font-bold text-slate-900 dark:text-white">/health</code>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Public Health Check
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Returns the real-time operational status of the REST API, MongoDB connection, Electroneum mainnet chain
            configuration, backend relayer configuration status, and system response latency (in ms).
          </p>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto relative">
            <button
              type="button"
              onClick={() => copyToClipboard(codeExamples.healthCheck[activeLang], "health")}
              className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy code"
            >
              {copiedSnippet === "health" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre>{codeExamples.healthCheck[activeLang]}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
