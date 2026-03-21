import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 flex justify-center pb-32">
      <div className="w-full max-w-[1050px] relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-white border border-black/10 shadow-sm">
        {/* Topographic Background Asset */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-1"
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Left Side Layer Blur SVG */}
        <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none opacity-60 z-0">
          <svg width="613" height="374" viewBox="0 0 613 374" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g filter="url(#filter0_f_144_1000)">
              <path d="M549 188.253C549 263.24 424.335 310 243.764 310C63.1927 310 64.0001 269.252 64.0001 194.265C64.0001 119.278 163.33 64 343.901 64C524.472 64 549 113.266 549 188.253Z" fill="#4A90E2" fillOpacity="0.2"/>
            </g>
            <defs>
              <filter id="filter0_f_144_1000" x="0" y="0" width="613" height="374" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_144_1000"/>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Dashboard Split Border Effect (2px dashed) */}
        <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-20">
          {/* Top Half Border (Blue) */}
          <div className="absolute inset-0 rounded-[inherit] border-2 border-dashed border-[#4A90E2]/60 [clip-path:inset(0_0_50%_0)]" />
          {/* Bottom Half Border (White) */}
          <div className="absolute inset-0 rounded-[inherit] border-2 border-dashed border-white/60 [clip-path:inset(50%_0_0_0)]" />
        </div>

        {/* Soft lighting overlay to enhance the right side brightness if the image is solid */}
        <div className="absolute inset-0 bg-linear-to-r from-black/5 via-transparent to-white/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-10 md:py-14 px-8 md:px-14">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#294F7C] tracking-tight mb-1.5 leading-tight">
              Your Goals Deserve a Plan
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#294F7C] font-normal opacity-85">
              Start your personalized investment roadmap in minutes.
            </p>
          </div>

          <button className="group relative flex items-center justify-center gap-4 bg-linear-to-r from-[#4A90E2] to-[#294F7C] text-white rounded-full px-8 md:px-10 py-4 md:py-4.5 font-bold text-[18px] md:text-[20px] shadow-[0_8px_25px_rgba(74,144,226,0.3)] transition-all hover:scale-[1.03] hover:shadow-[0_12px_35px_rgba(74,144,226,0.4)] whitespace-nowrap">
            <span className="relative z-10 flex items-center gap-3">
              Create your investment plan
              <ArrowRight className="w-[22px] h-[22px] transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
