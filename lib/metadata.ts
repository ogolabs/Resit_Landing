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

export function getMetadataBaseUrl(): URL {
  const raw = (process.env.NEXT_PUBLIC_APP_URL || "https://resit.xyz").trim();
  const formatted = raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`;
  try {
    return new URL(formatted);
  } catch {
    return new URL("https://resit.xyz");
  }
}
