export const LANDING_BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://resit.xyz"
).replace(/\/$/, "");

export const APP_BASE_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://app.resit.xyz"
).replace(/\/$/, "");
