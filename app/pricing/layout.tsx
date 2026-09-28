import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Pricing & Merchant Subscription Plans",
  description:
    "Transparent pricing for modern merchants. Start with 100 operations free each month, with predictable tiers starting at ₦500/mo and universal overage.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Pricing & Merchant Subscription Plans | Resit",
    description:
      "Transparent pricing for modern merchants. 100 free monthly operations, predictable tiers, and transparent universal overage.",
    url: "/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
