import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full bg-linear-to-b from-[#d6e8f4] to-[#cfe1ef] py-16 md:py-24 px-6 md:px-12 flex justify-center pb-32">
      <div className="w-full max-w-[1050px] relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-linear-to-r from-[#d2eaf7] to-[#ffffff] border border-white/60">
        {/* Topographic Background Asset */}
        <div
          className="absolute inset-0 pointer-events-none opacity-80"
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Soft lighting overlay to enhance the right side brightness if the image is solid */}
        <div className="absolute inset-0 bg-linear-to-r from-[#d2eaf7]/40 via-transparent to-white/80 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-10 md:py-14 px-8 md:px-14">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[26px] md:text-[36px] font-bold text-[#1f3a52] tracking-tight mb-0.5 leading-tight">
              Your Goals Deserve a Plan
            </h2>
            <p className="text-[14.5px] md:text-[16px] text-[#5b768e] font-medium">
              Start your personalized investment roadmap in minutes.
            </p>
          </div>

          <button className="group relative flex items-center justify-center gap-3 bg-linear-to-r from-[#518ad3] to-[#25425c] text-white rounded-full px-6 md:px-8 py-3 md:py-3.5 font-medium text-[15px] transition-all hover:opacity-90 whitespace-nowrap">
            <span className="relative z-10 flex items-center gap-2">
              Create your investment plan
              <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
