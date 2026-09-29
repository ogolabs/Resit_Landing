export const LANDING_BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://landing-resit.vercel.app"
).replace(/\/$/, "");

export const APP_BASE_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://app-resit.vercel.app"
).replace(/\/$/, "");
