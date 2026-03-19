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
        className="relative shadow-[0_20px_50px_rgba(30,50,80,0.08)] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden border-[1.5px] border-[#d2e4f3] flex flex-col md:flex-row w-full"
      >
        {/* Soft lighting on the right side pointing towards the phone */}
        <div className="absolute inset-y-0 right-0 w-3/5 bg-linear-to-l from-[#dceaf7]/80 to-transparent pointer-events-none" />
        
        <div className="relative z-10 w-full md:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col items-start bg-white/40">
          <div className="w-10 h-10 rounded-full border border-[#c3d7e8] bg-[#ebf3fa] flex items-center justify-center mb-5 shadow-xs text-[#1f3a52]">
            <step.icon className="w-4 h-4 stroke-[2.5px]" />
          </div>
          
          <h3 className="text-[20px] md:text-[24px] font-bold text-[#1f3a52] mb-2 tracking-tight">
            {step.title}
          </h3>
          <p className="text-[14px] md:text-[14.5px] text-[#5d768f] leading-[1.65] font-medium mb-10 max-w-[420px]">
            {step.description}
          </p>
          
          <div className="mt-auto flex items-center gap-1.5 md:gap-2 pt-4">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 md:h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-10 md:w-12 bg-[#2a445d]" : "w-5 md:w-6 bg-[#d2e4f3]"
                )}
              />
            ))}
          </div>
        </div>

        {/* Right Mockup Side */}
        <div className="relative z-10 w-full md:w-1/2 justify-center items-center p-8 hidden md:flex mix-blend-multiply opacity-90 h-[380px] md:h-auto">
          {/* Minimal CSS Phone Mockup mimicking exact user image styling */}
          <div className="relative w-[190px] h-[390px] bg-[#2a4054] rounded-[32px] p-2 shadow-[15px_25px_40px_rgba(30,50,80,0.25)] transform -rotate-12 transition-transform duration-500 translate-x-[20px] translate-y-[10px]">
            {/* Inner screen border */}
            <div className="w-full h-full bg-[#1b2b3a] rounded-[32px] overflow-hidden relative flex flex-col p-[1.5px]">
               <div className="w-full h-full bg-[#f4f8fb] rounded-[30px] overflow-hidden relative flex flex-col items-center justify-center shadow-inner">
                 
                 {/* Figma placeholder graphic matching Image 2 perfectly */}
                 <div className="w-[130px] h-[85px] bg-white border border-[#91c0e8] border-dashed rounded-sm flex flex-col items-center justify-center relative z-20 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                   <span className="text-[9px] text-[#7a93a8] font-medium mb-1">Select a layer</span>
                   <span className="text-[15px] font-extrabold text-[#1f3a52] tracking-tight">375×812</span>
                   {/* Perfect cursor replica */}
                   <svg className="absolute bottom-2 right-2 w-[11px] h-[11px] text-[#1f3a52]" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 5z"/>
                   </svg>
                 </div>
                 
                 {/* Solid gray waveform block mimicking Image 2 */}
                 <div className="absolute inset-x-0 bottom-0 h-[35%] bg-[#7a8f9c] opacity-80" style={{ clipPath: "ellipse(120% 100% at 50% 100%)" }} />
                 <div className="absolute inset-x-0 bottom-0 h-[25%] bg-[#6a808e] opacity-90" style={{ clipPath: "ellipse(100% 100% at 70% 100%)" }} />
                 
                 {/* Phone Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[20px] bg-[#1b2b3a] rounded-b-[12px] z-30 flex items-center justify-center">
                    <div className="w-[35px] h-1 bg-[#0f1720] rounded-full" />
                 </div>
               </div>
            </div>
            
            {/* Volume/Power Buttons built into phone edge */}
            <div className="absolute top-[100px] -left-1 w-1 h-[26px] bg-[#1b2b3a] rounded-l-md" />
            <div className="absolute top-[140px] -left-1 w-1 h-[45px] bg-[#1b2b3a] rounded-l-md" />
            <div className="absolute top-[120px] -right-1 w-1 h-[45px] bg-[#1b2b3a] rounded-r-md" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="w-full bg-linear-to-b from-[#cfe1ef] to-[#c6daea] py-24 px-6 md:px-12 relative overflow-visible">
      <div className="w-full max-w-[1050px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1f3a52] tracking-tight mb-3">
            How it Works?
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#5b768e] font-medium">
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
