"use client";

import { BrandMarquee, type Brand } from "@/components/ui/brand-marquee";
import { Hero } from "@/components/hero";
import { InvestmentOptionsSection } from "@/components/investment-options-section";
import { WhyWealthUpSection } from "@/components/why-wealthup-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { CtaSection } from "@/components/cta-section";

const MARQUEE_BRANDS: Brand[] = [
  { name: "IRDAI", logo: "/marquee/irdai 2.png", alt: "IRDAI" },
  { name: "Gov Login", logo: "/marquee/gov-login-img1.png", alt: "Gov Login" },
  { name: "Startup India", logo: "/marquee/startup.svg", alt: "Startup India" },
  { name: "Nvidia", logo: "/marquee/Nvidia_logo.svg 1.png", alt: "Nvidia" },
  { name: "Razorpay", logo: "/marquee/razorypay.png", alt: "Razorpay" },
  { name: "AMFI", logo: "/marquee/amfi 2.png", alt: "AMFI" },
  {
    name: "Wadhwani Foundation",
    logo: "/marquee/Wadhwanifoundation.png",
    alt: "Wadhwani Foundation",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee brands={MARQUEE_BRANDS} isStatic={true} />
      <InvestmentOptionsSection />
      <WhyWealthUpSection />
      <CtaSection />
      <HowItWorksSection />
    </>
  );
}
