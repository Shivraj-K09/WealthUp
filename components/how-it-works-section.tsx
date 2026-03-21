"use client";

import { useRef } from "react";
import { Search, UserPlus, PieChart, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const STEPS = [
  {
    id: 1,
    title: "Define Your Goal",
    description: "Start by defining what you want to achieve whether it's buying a car, travelling, or building long-term wealth. Tell us the goal amount and timeline, and we'll create a personalized investment plan to help you get there.",
    icon: Search,
  },
  {
    id: 2,
    title: "Setup Your Investment Account",
    description: "Complete a simple and secure account setup with quick KYC verification. This allows you to invest seamlessly through regulated platforms and start building your portfolio.",
    icon: UserPlus,
  },
  {
    id: 3,
    title: "Automated Allocation",
    description: "Based on your risk profile and goals, our intelligent engine allocates your funds across top-performing assets. Your portfolio is diversified to maximize returns while managing risk.",
    icon: PieChart,
  },
  {
    id: 4,
    title: "Achieve Your Milestone",
    description: "Celebrate as you reach your financial milestones. Withdraw your funds effortlessly to your bank account or choose to seamlessly reinvest them for continued compounding growth.",
    icon: Trophy,
  },
];

const STICKY_TOP = 130;

function StickyCard({ step, index, totalSteps }: { step: any; index: number; totalSteps: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track this specific card's layout wrapper as it scrolls past the sticky point
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [`start ${STICKY_TOP}px`, `end ${STICKY_TOP}px`]
  });

  // Snappy spring effect
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    restDelta: 0.001
  });

  // Framer Motion transforms for the 3D stacking effect
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.92]);
  const y = useTransform(smoothProgress, [0, 1], [0, -25]);
  const opacity = useTransform(smoothProgress, [0, 1], [1, 0.85]);
  const filter = useTransform(smoothProgress, [0, 1], ["blur(0px)", "blur(1.5px)"]);
  const rotateX = useTransform(smoothProgress, [0, 1], [0, -3]);

  return (
    <div 
      ref={containerRef} 
      className="sticky w-full origin-top" 
      style={{ 
        top: `${STICKY_TOP}px`, 
        zIndex: 10 + index, 
        marginBottom: "160px",
        perspective: "1000px"
      }}
    >
      <motion.div 
        style={{ scale, y, opacity, filter, rotateX, transformStyle: "preserve-3d" }}
        className="relative shadow-[0_20px_50px_rgba(30,50,80,0.08)] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden border-[1.5px] border-[#d2e4f3] flex flex-col md:flex-row w-full h-auto md:h-[350px]"
      >
        {/* Layer Blur Background on Right Side */}
        <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
          <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[60%] h-[150%] bg-[#CFE6F7] blur-[80px] rounded-[100%]" />
        </div>
        
        <div className="relative z-10 w-full md:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col items-start">
          <div className="w-10 h-10 rounded-full border border-[#c3d7e8] bg-[#ebf3fa] flex items-center justify-center mb-5 shadow-xs text-[#1f3a52]">
            <step.icon className="w-4 h-4 stroke-[2.5px]" />
          </div>
          
          <h3 className="text-[20px] md:text-[24px] font-bold text-[#1f3a52] mb-2 tracking-tight">
            {step.title}
          </h3>
          <p className="text-[14px] md:text-[14.5px] text-[#5d768f] leading-[1.65] font-medium mb-10 max-w-[420px]">
            {step.description}
          </p>
          
          <div className="mt-auto flex items-center gap-1 md:gap-1.5 pt-4">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-[#2a445d]" : "w-2.5 bg-[#d2e4f3]"
                )}
              />
            ))}
          </div>
        </div>

        {/* Right Mockup Side */}
        <div className="relative z-10 w-full md:w-1/2 justify-center items-center p-8 hidden md:flex opacity-100 h-[380px] md:h-auto">
          {/* Render the image directly with mix-blend-multiply to hide its solid white background */}
          <div className="relative h-[280px] md:h-[310px] w-auto transition-transform duration-500 md:translate-x-6">
             <img 
               src="/marquee/Rectangle.png" 
               alt="Mockup content" 
               className="h-full w-auto object-contain mix-blend-multiply"
             />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 relative overflow-visible">
      <div className="w-full max-w-[1050px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#294F7C] tracking-tight mb-2">
            How it Works?
          </h2>
          <p className="text-[16px] text-[#294F7C] font-normal opacity-85">
            India's most intelligent investment platform
          </p>
        </div>

        <div className="flex flex-col relative w-full pb-[40vh]">
          {STEPS.map((step, index) => (
            <StickyCard 
              key={step.id} 
              step={step} 
              index={index} 
              totalSteps={STEPS.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
