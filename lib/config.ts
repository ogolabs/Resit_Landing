export const LANDING_BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://landing-resit.vercel.app"
).replace(/\/$/, "");

export const APP_BASE_URL = (
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://app-resit.vercel.app")
).replace(/\/$/, "");

export const isTestnet =
  process.env.NEXT_PUBLIC_NETWORK?.toLowerCase() !== "mainnet";

export const NETWORK_NAME = isTestnet
  ? "Electroneum Testnet"
  : "Electroneum Mainnet";

export const BLOCK_EXPLORER_URL = isTestnet
  ? "https://testnet-blockexplorer.electroneum.com"
  : "https://blockexplorer.electroneum.com";

