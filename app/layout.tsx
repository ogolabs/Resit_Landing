import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider";
import { sharedOpenGraph, getMetadataBaseUrl } from "@/lib/metadata";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: false,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

const metadataBase = getMetadataBaseUrl();

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Resit — Record Sales, Manage Staff & Track Shipments",
    template: "%s | Resit",
  },
  description:
    "Record sales, manage staff, and track shipments. Switch to Resit for smart QR receipts, digital sales books, debtor ledgers, and scratch-off PIN package tracking.",
  keywords: [
    "smart QR receipts",
    "digital sales book",
    "retail store register",
    "package dispatch tracking",
    "delivery verification",
    "multi-branch store management",
    "debtor tracking",
    "developer REST API",
    "Electroneum",
  ],
  authors: [{ name: "Resit" }],
  creator: "Resit",
  publisher: "Resit",
  openGraph: {
    ...sharedOpenGraph,
    title: "Resit — Record Sales, Manage Staff & Track Shipments",
    description:
      "Record sales, manage staff, and track shipments. Switch to Resit for smart QR receipts, digital sales books, and package tracking.",
    url: metadataBase.origin,
  },
  twitter: {
    card: "summary_large_image",
    title: "Resit — Record Sales, Manage Staff & Track Shipments",
    description:
      "Record sales, manage staff, and track shipments. Switch to Resit for smart QR receipts.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/logo-icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("resit_theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}else{document.documentElement.classList.remove("dark");document.documentElement.style.colorScheme="light";}}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
