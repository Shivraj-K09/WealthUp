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
    <section className="w-full bg-linear-to-b from-[#e1eff8] to-[#d6e8f4] py-20 md:py-28 relative font-sans overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute left-[-5%] top-[50%] w-[12%] h-[25%] bg-white/40 blur-[50px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] top-[40%] w-[15%] h-[30%] bg-white/40 blur-[60px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
          <h2 className="font-bold text-[#203a53] text-[28px] md:text-[34px] tracking-tight mb-4">
            Why Your Wealth Grows Faster With WealthUp
          </h2>
          <p className="text-[#5b768e] text-[15px] md:text-[17px] leading-relaxed mx-auto max-w-[650px]">
            A smarter investment approach combining expert-curated opportunities, dynamic portfolio adjustments, and tax-efficient strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-[28px] bg-[#dcebf5]/40 shadow-[inset_6px_6px_14px_rgba(150,180,210,0.6),inset_-6px_-6px_14px_rgba(255,255,255,0.9)] border border-white/40 p-2.5 md:p-3 min-h-[250px] md:min-h-[280px] flex flex-col backdrop-blur-md relative"
            >
              <div className="bg-[#486786] w-full rounded-[20px] py-4 px-4 shadow-[0_6px_16px_rgba(50,80,110,0.3)] border border-[#ffffff]/10 flex items-center justify-center relative z-10">
                <h3 className="text-white font-semibold text-[14px] md:text-[15px] text-center tracking-wide">
                  {feature.title}
                </h3>
              </div>
              
              {/* Optional glowing effect behind the tab */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-[#486786]/20 blur-[15px] rounded-full pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
