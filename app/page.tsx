"use client";

import { BrandMarquee, type Brand } from "@/components/ui/brand-marquee";
import { Hero } from "@/components/hero";
import { InvestmentOptionsSection } from "@/components/investment-options-section";
import { WhyWealthUpSection } from "@/components/why-wealthup-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { CtaSection } from "@/components/cta-section";

const MARQUEE_BRANDS: Brand[] = [
  { name: "Google", slug: "google", alt: "Google" },
  { name: "Amazon", slug: "amazon", alt: "Amazon" },
  { name: "Microsoft", slug: "microsoft", alt: "Microsoft" },
  { name: "Meta", slug: "meta", alt: "Meta" },
  { name: "Adobe", slug: "adobe", alt: "Adobe" },
  { name: "Stripe", slug: "stripe", alt: "Stripe" },
  { name: "Razorpay", slug: "razorpay", alt: "Razorpay" },
  { name: "GitHub", slug: "github", alt: "GitHub", variant: "light" },
  { name: "Nvidia", slug: "nvidia", alt: "Nvidia", variant: "light" },
  { name: "Vercel", slug: "vercel", alt: "Vercel", variant: "light" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee brands={MARQUEE_BRANDS} className="bg-[#e8f4fc]" />
      <InvestmentOptionsSection />
      <WhyWealthUpSection />
      <CtaSection />
      <HowItWorksSection />
    </>
  );
}
