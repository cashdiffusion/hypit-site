import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Pricing & Collaboration Plan — Hypit",
  description:
    "Matrix-account program: 20 accounts, 600 videos/month, a low base fee plus CPM revenue share.",
};

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-canvas">
      <Nav />
      <PricingPlans />
      <Footer />
    </main>
  );
}
