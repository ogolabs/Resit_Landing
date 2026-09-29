export const sharedOpenGraph = {
  siteName: "Resit",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Resit — Record sales, manage staff, and track shipments with smart QR receipts",
    },
  ],
  locale: "en_US",
  type: "website",
};

import { LANDING_BASE_URL } from "./config";

export function getMetadataBaseUrl(): URL {
  try {
    return new URL(LANDING_BASE_URL);
  } catch {
    return new URL("https://app-resit.vercel.app");
  }
}
