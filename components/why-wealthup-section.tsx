export function WhyWealthUpSection() {
  const FEATURES = [
    {
      id: "handpicked",
      title: "Handpicked Investments",
    },
    {
      id: "opportunities",
      title: "Capitalizing on Opportunities",
    },
    {
      id: "tax",
      title: "Optimized for Tax Efficiency",
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 relative font-sans overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute left-[-5%] top-[50%] w-[12%] h-[25%] bg-white/40 blur-[50px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] top-[40%] w-[15%] h-[30%] bg-white/40 blur-[60px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
          <h2 className="font-bold text-[#294F7C] text-[32px] md:text-[36px] tracking-tight mb-4">
            Why Your Wealth Grows Faster With WealthUp
          </h2>
          <p className="text-[#294F7C] text-[16px] md:text-[20px] font-normal opacity-85 leading-relaxed mx-auto max-w-[950px]">
            A smarter investment approach combining expert-curated opportunities, dynamic portfolio adjustments, and tax-efficient strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-[20px] bg-[#F8FAFC]/10 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(30,50,70,0.05)] min-h-[260px] md:min-h-[300px] flex flex-col items-center relative overflow-hidden group transition-all duration-300 hover:shadow-xl"
            >
              {/* Header Tab */}
              <div className="bg-[#537195] w-[88%] rounded-b-[24px] py-6 px-4 shadow-[0_8px_20px_rgba(0,0,0,0.25)] border-b border-x border-white/10 flex items-center justify-center relative z-20 mb-8 mx-auto">
                <h3 className="text-white font-bold text-[13px] md:text-[15px] text-center tracking-wide whitespace-nowrap">
                  {feature.title}
                </h3>
                {/* Inner Highlight for Depth */}
                <div className="absolute inset-0 rounded-b-[inherit] bg-linear-to-b from-white/10 to-transparent pointer-events-none" />
              </div>
              
              {/* Optional glowing effect behind the tab */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-12 bg-[#294F7C]/20 blur-[25px] rounded-full pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
