"use client";

import { useState, useEffect } from "react";
import { Play, Loader2, QrCode, FlaskConical, AlertTriangle, AlertCircle, Lightbulb, Clock } from "lucide-react";
import { APP_BASE_URL } from "@/lib/config";

type ConsoleEndpoint =
  | "create"
  | "edit_patch"
  | "list"
  | "verify_get"
  | "handover_post"
  | "verify_post"
  | "history_get"
  | "dispute_post"
  | "health_get"
  | "shipment_qr";

const defaultConsoleBodies: Record<string, string> = {
  create: JSON.stringify(
    {
      packageName: "Test Parcel Simulation",
      receiverName: "Alex Morgan",
      receiverPhone: "+2348099887766",
      destination: "Victoria Island, Lagos",
      weight: "0.85",
    },
    null,
    2
  ),
  edit_patch: JSON.stringify(
    {
      packageName: "Updated Express Parcel",
      receiverName: "Alex Morgan",
      receiverPhone: "+2348099887766",
      destination: "Lekki Phase 1, Lagos",
      weight: "1.20",
    },
    null,
    2
  ),
  list: "",
  verify_get: "",
  handover_post: JSON.stringify(
    {
      nextHandler: "0x3f12a8b901e23f45678901234567890123456789",
      riderName: "John Rider",
      riderPhone: "+2348011223344",
      location: "Ikeja Dispatch Hub",
    },
    null,
    2
  ),
  verify_post: JSON.stringify(
    {
      innerSecret: "RCVR-59DBE11D",
      location: "Lekki Phase 1",
    },
    null,
    2
  ),
  history_get: "",
  dispute_post: JSON.stringify(
    {
      innerSecret: "RCVR-59DBE11D",
      reason: "Package contents damaged on arrival",
      location: "Lekki Phase 1",
    },
    null,
    2
  ),
  health_get: "",
  shipment_qr: "",
};

export default function ApiSandboxConsole() {
  const [apiTestKey, setApiTestKey] = useState<string>("");
  const [selectedConsoleEndpoint, setSelectedConsoleEndpoint] = useState<ConsoleEndpoint>("create");
  const [reqParamId, setReqParamId] = useState<string>("RCV-DEMOPKG123");
  const [reqBodyText, setReqBodyText] = useState<string>(defaultConsoleBodies.create);
  const [isExecutingTest, setIsExecutingTest] = useState(false);
  const [testRespStatus, setTestRespStatus] = useState<number | null>(null);
  const [testRespTime, setTestRespTime] = useState<number | null>(null);
  const [testRespData, setTestRespData] = useState<unknown | null>(null);

  const [lastCreatedTrackingCode, setLastCreatedTrackingCode] = useState<string>("RCV-DEMOPKG123");
  const [lastCreatedInnerSecret, setLastCreatedInnerSecret] = useState<string>("RCVR-59DBE11D");

  // Auto-populate API key if available in sessionStorage
  useEffect(() => {
    if (!apiTestKey && typeof window !== "undefined") {
      try {
        const storedKey = sessionStorage.getItem("last_generated_test_api_key");
        if (storedKey) {
          setApiTestKey(storedKey);
          sessionStorage.removeItem("last_generated_test_api_key");
        }
      } catch {
        // ignore session storage errors
      }
    }
  }, [apiTestKey]);

  const handleEndpointSelect = (ep: ConsoleEndpoint) => {
    setSelectedConsoleEndpoint(ep);
    setReqBodyText(defaultConsoleBodies[ep] || "");
    setTestRespStatus(null);
    setTestRespData(null);
    setTestRespTime(null);

    if (ep === "verify_post") {
      const secret = lastCreatedInnerSecret || "RCVR-59DBE11D";
      setReqParamId(secret);
      setReqBodyText(JSON.stringify({ innerSecret: secret, location: "Lekki Phase 1" }, null, 2));
    } else if (ep === "dispute_post") {
      const secret = lastCreatedInnerSecret || "RCVR-59DBE11D";
      setReqParamId(lastCreatedTrackingCode || "RCV-DEMOPKG123");
      setReqBodyText(
        JSON.stringify(
          {
            innerSecret: secret,
            reason: "Package contents damaged on arrival",
            location: "Lekki Phase 1",
          },
          null,
          2
        )
      );
    } else if (
      ep === "edit_patch" ||
      ep === "verify_get" ||
      ep === "handover_post" ||
      ep === "history_get" ||
      ep === "shipment_qr"
    ) {
      setReqParamId(lastCreatedTrackingCode || "RCV-DEMOPKG123");
    }
  };

  const handleReqParamIdInputChange = (val: string) => {
    setReqParamId(val);
    if (selectedConsoleEndpoint === "verify_post") {
      let parsed: Record<string, unknown> = {};
      try {
        parsed = JSON.parse(reqBodyText) as Record<string, unknown>;
      } catch {
        parsed = { location: "Lekki Phase 1" };
      }
      parsed.innerSecret = val.trim();
      setReqBodyText(JSON.stringify(parsed, null, 2));
    }
  };

  const executeApiTestRequest = async () => {
    if (apiTestKey.trim().startsWith("rec_live_")) {
      setTestRespStatus(400);
      setTestRespData({
        error: "Live API keys (rec_live_...) are rejected in the test console. Please use a test key (rec_test_...).",
      });
      return;
    }

    setIsExecutingTest(true);
    setTestRespStatus(null);
    setTestRespData(null);
    const start = performance.now();

    try {
      let url = "";
      let method = "POST";
      let bodyData: string | undefined = undefined;

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (apiTestKey.trim()) {
        headers["Authorization"] = `Bearer ${apiTestKey.trim()}`;
      }

      if (selectedConsoleEndpoint === "create") {
        url = "/api/v1/shipments/create";
        method = "POST";
        bodyData = reqBodyText;
      } else if (selectedConsoleEndpoint === "edit_patch") {
        url = `/api/v1/shipments/${reqParamId.trim()}`;
        method = "PATCH";
        bodyData = reqBodyText;
      } else if (selectedConsoleEndpoint === "list") {
        url = "/api/v1/shipments";
        method = "GET";
      } else if (selectedConsoleEndpoint === "verify_get") {
        url = `/api/v1/shipments/${reqParamId.trim()}/verify`;
        method = "GET";
      } else if (selectedConsoleEndpoint === "handover_post") {
        url = `/api/v1/shipments/${reqParamId.trim()}/handover`;
        method = "POST";
        bodyData = reqBodyText;
      } else if (selectedConsoleEndpoint === "verify_post") {
        url = `/api/v1/shipments/${reqParamId.trim()}/verify`;
        method = "POST";
        let parsedBody: Record<string, unknown> = {};
        try {
          parsedBody = JSON.parse(reqBodyText) as Record<string, unknown>;
        } catch {
          parsedBody = { location: "Lekki Phase 1" };
        }
        parsedBody.innerSecret = reqParamId.trim();
        bodyData = JSON.stringify(parsedBody, null, 2);
        setReqBodyText(bodyData);
      } else if (selectedConsoleEndpoint === "history_get") {
        url = `/api/v1/shipments/${reqParamId.trim()}/history`;
        method = "GET";
      } else if (selectedConsoleEndpoint === "dispute_post") {
        url = `/api/v1/shipments/${reqParamId.trim()}/dispute`;
        method = "POST";
        bodyData = reqBodyText;
      } else if (selectedConsoleEndpoint === "shipment_qr") {
        url = `/api/v1/shipments/${reqParamId.trim()}/qr`;
        method = "GET";
      } else if (selectedConsoleEndpoint === "health_get") {
        url = "/api/v1/health";
        method = "GET";
      }

      const targetUrl = `${APP_BASE_URL}${url}`;
      const res = await fetch(targetUrl, {
        method,
        headers,
        body: method === "GET" ? undefined : bodyData,
      });

      const end = performance.now();
      setTestRespTime(Math.round(end - start));
      setTestRespStatus(res.status);

      const data = (await res.json().catch(() => ({ rawText: "Failed to parse JSON response" }))) as Record<
        string,
        unknown
      >;
      setTestRespData(data);

      if (res.ok && typeof data?.trackingCode === "string") {
        setLastCreatedTrackingCode(data.trackingCode);
        if (selectedConsoleEndpoint !== "verify_post") {
          setReqParamId(data.trackingCode);
        }
      }

      if (res.ok && typeof data?.innerSecret === "string") {
        setLastCreatedInnerSecret(data.innerSecret);
        const updatedBody = JSON.stringify(
          {
            innerSecret: data.innerSecret,
            location: "Lekki Phase 1",
          },
          null,
          2
        );
        if (selectedConsoleEndpoint === "verify_post") {
          setReqParamId(data.innerSecret);
          setReqBodyText(updatedBody);
        }
      }
    } catch (err: unknown) {
      const end = performance.now();
      setTestRespTime(Math.round(end - start));
      setTestRespStatus(500);
      setTestRespData({ error: err instanceof Error ? err.message : "Request failed" });
    } finally {
      setIsExecutingTest(false);
    }
  };

  const respObj = testRespData as Record<string, unknown> | null;

  return (
    <div
      id="sandbox-playground"
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Sandbox Testing Console</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
            Interactive REST API Playground
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Test making live requests with your API key (`rst_test_...` or `rst_live_...`) directly in your browser.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`${APP_BASE_URL}/settings`}
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
          >
            Manage API Keys in Settings →
          </a>
        </div>
      </div>

      {/* API Key Input Field */}
      <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/60 rounded-xl p-4 space-y-2">
        <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
          <span>Enter Your API Key (Authorization Bearer Header):</span>
          {apiTestKey ? (
            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              Auto-filled from active session
            </span>
          ) : (
            <a href={`${APP_BASE_URL}/settings`} className="text-[10px] font-bold text-blue-600 dark:text-blue-400 underline">
              Generate Key in Settings →
            </a>
          )}
        </label>
        <div className="flex items-center gap-2">
          <input
            type="password"
            value={apiTestKey}
            onChange={(e) => setApiTestKey(e.target.value)}
            placeholder="Paste your secret API key (rst_test_...)"
            className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {apiTestKey.trim().startsWith("rec_live_") || apiTestKey.trim().startsWith("rst_live_") ? (
          <p className="text-[11px] text-rose-800 dark:text-rose-300 font-medium bg-rose-50 dark:bg-rose-950/40 p-2 rounded-lg border border-rose-200 dark:border-rose-900 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span><strong>Live Key Notice:</strong> To prevent accidental quotas, test sandbox keys (`rst_test_...`) are recommended.</span>
          </p>
        ) : apiTestKey.includes("•") ? (
          <p className="text-[11px] text-slate-800 dark:text-slate-300 font-medium bg-slate-100 dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span><strong>Notice:</strong> Masked strings (containing ••••) cannot authenticate API calls. Please paste the
            full secret key you saved from{" "}
            <a href={`${APP_BASE_URL}/settings`} className="underline font-bold text-blue-600 dark:text-blue-400">
              Settings
            </a>{" "}
            or generate a new key.</span>
          </p>
        ) : (
          <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>Tip: Use a Test Sandbox Key (`rst_test_...`) to simulate requests safely without consuming live dispatch quota.</span>
          </p>
        )}
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-slate-900 dark:text-white block">Select Endpoint to Test:</span>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleEndpointSelect("create")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "create"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">POST</span>
            <span>/shipments/create</span>
          </button>

          <button
            type="button"
            onClick={() => handleEndpointSelect("list")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "list"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">GET</span>
            <span>/shipments</span>
          </button>

          <button
            type="button"
            onClick={() => handleEndpointSelect("edit_patch")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "edit_patch"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-slate-700 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">PATCH</span>
            <span>/shipments/[id]</span>
          </button>

          <button
            type="button"
            onClick={() => handleEndpointSelect("verify_get")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "verify_get"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">GET</span>
            <span>/shipments/[id]/verify</span>
          </button>

          <button
            type="button"
            onClick={() => handleEndpointSelect("handover_post")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "handover_post"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">POST</span>
            <span>/shipments/[id]/handover</span>
          </button>

          <button
            type="button"
            onClick={() => handleEndpointSelect("shipment_qr")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "shipment_qr"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">GET</span>
            <span>/shipments/[id]/qr</span>
          </button>

          <button
            type="button"
            onClick={() => handleEndpointSelect("verify_post")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "verify_post"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">POST</span>
            <span>/shipments/[id]/verify</span>
          </button>

          <button
            type="button"
            onClick={() => handleEndpointSelect("history_get")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "history_get"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">GET</span>
            <span>/shipments/[id]/history</span>
          </button>

          <button
            type="button"
            onClick={() => handleEndpointSelect("dispute_post")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "dispute_post"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">POST</span>
            <span>/shipments/[id]/dispute</span>
          </button>

          <button
            type="button"
            onClick={() => handleEndpointSelect("health_get")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedConsoleEndpoint === "health_get"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.2 rounded font-extrabold">GET</span>
            <span>/health</span>
          </button>
        </div>
      </div>

      {/* Request Configuration Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          {/* ID param input if endpoint has [id] */}
          {(selectedConsoleEndpoint === "edit_patch" ||
            selectedConsoleEndpoint === "verify_get" ||
            selectedConsoleEndpoint === "handover_post" ||
            selectedConsoleEndpoint === "verify_post" ||
            selectedConsoleEndpoint === "history_get" ||
            selectedConsoleEndpoint === "dispute_post" ||
            selectedConsoleEndpoint === "shipment_qr") && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-900 dark:text-white block">
                {selectedConsoleEndpoint === "verify_post"
                  ? "Scratch-Off Code / Inner Secret:"
                  : "Package Tracking Code:"}
              </label>
              <input
                type="text"
                value={reqParamId}
                onChange={(e) => handleReqParamIdInputChange(e.target.value)}
                placeholder={
                  selectedConsoleEndpoint === "verify_post" ? "RST-59DBE11D" : "RST-4A91B2C3E8F0"
                }
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>
          )}

          {/* Request Body JSON textarea */}
          {selectedConsoleEndpoint !== "list" &&
            selectedConsoleEndpoint !== "verify_get" &&
            selectedConsoleEndpoint !== "history_get" &&
            selectedConsoleEndpoint !== "health_get" &&
            selectedConsoleEndpoint !== "shipment_qr" && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-900 dark:text-white block">Request JSON Body:</label>
                <textarea
                  rows={7}
                  value={reqBodyText}
                  onChange={(e) => setReqBodyText(e.target.value)}
                  className="w-full bg-slate-950 text-emerald-400 font-mono p-3 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none border border-slate-800"
                />
              </div>
            )}

          <button
            type="button"
            onClick={executeApiTestRequest}
            disabled={isExecutingTest}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isExecutingTest ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Request...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-white fill-white" />
                <span>Execute API Request</span>
              </>
            )}
          </button>
        </div>

        {/* Live Response Panel */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900 dark:text-white block">API Response Output:</span>
            {testRespStatus !== null && (
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                    testRespStatus >= 200 && testRespStatus < 300
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800"
                      : "bg-red-100 text-red-800 border border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800"
                  }`}
                >
                  HTTP {testRespStatus}
                </span>
                {testRespTime !== null && (
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{testRespTime} ms</span>
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto min-h-55 max-h-90 border border-slate-800">
            {isExecutingTest ? (
              <div className="flex items-center justify-center py-16 text-slate-400 gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                <span>Executing request...</span>
              </div>
            ) : testRespData !== null ? (
              <div className="space-y-4">
                {testRespStatus !== null &&
                  testRespStatus >= 200 &&
                  testRespStatus < 300 &&
                  !respObj?.error &&
                  (respObj?.qrImageUrl || selectedConsoleEndpoint === "shipment_qr") && (
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex flex-col sm:flex-row items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          (respObj?.qrImageUrl as string) ||
                          `https://api.qrserver.com/v1/create-qr-code/?size=150x150&margin=10&data=${encodeURIComponent(
                            `https://resit.co/scan/${reqParamId}`
                          )}`
                        }
                        alt="Generated Package QR Code"
                        className="w-24 h-24 bg-white p-1 rounded-lg border border-slate-700 shadow-sm"
                      />
                      <div className="space-y-1 text-center sm:text-left">
                        <span className="text-xs font-bold text-white flex items-center justify-center sm:justify-start gap-1">
                          <QrCode className="w-3.5 h-3.5 text-blue-400" /> API-Generated Package QR Sticker
                        </span>
                        <p className="text-[11px] text-slate-400">
                          Scan URL:{" "}
                          <code className="text-emerald-400 font-mono font-normal">
                            {(respObj?.scanUrl as string) ||
                              `https://resit.co/scan/${reqParamId}`}
                          </code>
                        </p>
                        <a
                          href={
                            (respObj?.qrImageUrl as string) ||
                            `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(
                              `https://resit.co/scan/${reqParamId}`
                            )}`
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block text-[11px] text-blue-400 font-bold hover:underline pt-0.5"
                        >
                          Download PNG Label Image →
                        </a>
                      </div>
                    </div>
                  )}
                <pre className="text-emerald-300 whitespace-pre-wrap">{JSON.stringify(testRespData, null, 2)}</pre>
              </div>
            ) : (
              <div className="text-slate-500 text-center py-16 text-xs">
                Click &quot;Execute API Request&quot; above to test this endpoint live and inspect response output.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
