"use client";

import { TrendingUp, FileText, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type InvestmentTab = "mutual-funds" | "bonds" | "invoice-discounting";

const TABS = [
  {
    id: "mutual-funds" as InvestmentTab,
    label: "Mutual Funds",
    icon: TrendingUp,
    description:
      "Professionally managed portfolios designed to grow your wealth over the long term. Diversified across sectors and asset classes to balance risk and returns.",
  },
  {
    id: "bonds" as InvestmentTab,
    label: "Bonds",
    icon: FileText,
    description:
      "Stable income-generating investments for predictable and steady returns. Ideal for investors seeking lower volatility and consistent cash flow.",
  },
  {
    id: "invoice-discounting" as InvestmentTab,
    label: "Invoice Discounting",
    icon: Briefcase,
    description:
      "Access short-term investment opportunities backed by verified business invoices. Earn attractive returns while supporting real business transactions.",
  },
];

export function InvestmentOptionsSection() {
  const [activeTab, setActiveTab] = useState<InvestmentTab>("mutual-funds");

  const commonTransform = "perspective(1000px) rotateX(35deg) rotateZ(-20deg)";

  return (
    <section className="w-full pt-8 md:pt-14 pb-20 md:pb-28 relative font-sans overflow-hidden">
      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-center font-bold text-[#294F7C] text-[32px] md:text-[36px] tracking-tight mb-1">
          Multiple ways to grow your wealth
        </h2>
        <p className="text-center text-[#294F7C] text-[15px] md:text-[18px] font-medium opacity-80 mb-16 md:mb-24 max-w-[700px] mx-auto">
          Diversified investment options selected and optimized by WealthUp.
        </p>

        {/* Flat 2D Isometric Buttons Area */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14 mb-12 md:mb-16 mt-10 md:mt-16">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const formattedLabel =
              tab.id === "invoice-discounting" ? (
                <>
                  Invoice
                  <br />
                  Discounting
                </>
              ) : tab.id === "mutual-funds" ? (
                <>
                  Mutual
                  <br />
                  Funds
                </>
              ) : (
                "Bonds"
              );

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center justify-center gap-3 w-[160px] md:w-[205px] h-[80px] md:h-[105px] rounded-[18px] md:rounded-[22px] transition-all duration-300 border-[1.5px] z-10 cursor-pointer hover:-translate-y-1 hover:shadow-lg",
                  isActive
                    ? "bg-[#294F7C] text-[#F8FAFC] border-[#294F7C]"
                    : "bg-[#ffffff] text-[#294F7C] border-[#294F7C]",
                )}
                style={{
                  transform: commonTransform,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* 3D Slab Base */}
                <div
                  className={cn(
                    "absolute top-[-1.5px] left-[-1.5px] right-[-1.5px] bottom-[-1.5px] border-[1.5px] rounded-[inherit] pointer-events-none transition-all duration-300 -z-10",
                    isActive
                      ? "bg-[#2a4054] border-[#2a4054]"
                      : "bg-[#ffffff] border-[#294F7C]"
                  )}
                  style={{
                    transform: "translateZ(-8px)",
                  }}
                />

                <div
                  className={cn(
                    "w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-all",
                    isActive
                      ? "bg-white"
                      : "bg-white border-[1.5px] border-[#294F7C]",
                  )}
                >
                  <tab.icon
                    className={cn(
                      "w-[16px] h-[16px] md:w-[18px] md:h-[18px] stroke-[2.5]",
                      isActive ? "text-[#294F7C]" : "text-[#294F7C]",
                    )}
                  />
                </div>
                <span className="font-bold text-[14px] md:text-[15px] leading-[1.2] text-left tracking-wide">
                  {formattedLabel}
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded-[24px] border border-[#4A90E2] bg-[#F8FAFC]/10 backdrop-blur-md shadow-[0_8px_32px_rgba(30,50,70,0.08)] overflow-hidden transition-all duration-500 max-w-[1050px] mx-auto relative z-10 flex flex-col md:flex-row m-0 p-0 h-auto md:min-h-[220px]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 flex flex-col items-start text-left px-8 py-9 md:py-10 transition-colors duration-300 cursor-pointer relative hover:bg-white/50",
                  isActive
                    ? "bg-[#294F7C]/85 backdrop-blur-md text-[#F8FAFC] shadow-inner border-r border-[#ffffff]/10 hover:bg-[#294F7C]/90"
                    : "bg-transparent text-[#294F7C]",
                )}
              >
                {/* Image 31 Gradient Blur boundary inside the active block */}
                {isActive && (
                  <div
                    className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-l from-[#1e3042]/40 to-transparent pointer-events-none"
                    aria-hidden
                  />
                )}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
                      isActive
                        ? "bg-white/90"
                        : "bg-[#ffffff]/80 border border-[#dcf0fb]",
                    )}
                  >
                    <tab.icon
                      className={cn(
                        "w-[18px] h-[18px] stroke-[2.5]",
                        isActive ? "text-[#294F7C]" : "text-[#294F7C]",
                      )}
                    />
                  </div>
                  <span className="font-bold text-[16px] md:text-[17px] tracking-wide">
                    {tab.label}
                  </span>
                </div>
                <p
                  className={cn(
                    "text-[13.5px] md:text-[14.5px] leading-[1.65] font-medium relative z-10",
                    isActive ? "text-[#e2eaf0]" : "text-[#70879e]",
                  )}
                >
                  {tab.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
