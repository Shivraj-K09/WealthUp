"use client";

import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { useMemo, useState } from "react";

type GoalCategory = "Car" | "Travel" | "Home" | "Custom";

const goalConfig = {
  Car: {
    title: "Buy a car",
    slider1Label: "Car price",
    btnText: "Let's get your car",
    btnIcon: "/car1.png",
    largeImage: "/car2.png",
    imageClasses: "w-[90%] lg:w-[125%] max-w-[320px] lg:max-w-[550px]",
    defaultPrice: 2000000,
  },
  Travel: {
    title: "Plan a trip",
    slider1Label: "Travel cost",
    btnText: "Let's plan your trip",
    btnIcon: "/airoplane.png",
    largeImage: "/airoplane1.png",
    imageClasses: "w-[80%] lg:w-[110%] max-w-[280px] lg:max-w-[480px]",
    defaultPrice: 500000,
  },
  Home: {
    title: "Buy a house",
    slider1Label: "Home price",
    btnText: "Let's get your house",
    btnIcon: "/house.png",
    largeImage: "/house1.png",
    imageClasses: "w-[60%] lg:w-[75%] max-w-[200px] lg:max-w-[280px]",
    defaultPrice: 10000000,
  },
  Custom: {
    title: "Custom Goal",
    slider1Label: "Goal amount",
    btnText: "Let's reach your goal",
    btnIcon: "/target.png",
    largeImage: "/target1.png",
    imageClasses: "w-[55%] lg:w-[70%] max-w-[180px] lg:max-w-[240px]",
    defaultPrice: 1000000,
  },
};

export function Hero() {
  const [activeGoal, setActiveGoal] = useState<GoalCategory>("Car");
  const [goalAmount, setGoalAmount] = useState(goalConfig.Car.defaultPrice);
  const [timeToBuy, setTimeToBuy] = useState(5);

  const handleGoalChange = (goal: GoalCategory) => {
    setActiveGoal(goal);
    setGoalAmount(goalConfig[goal].defaultPrice);
  };

  const formatCurrency = (value: number) => {
    if (value >= 1_00_00_000)
      return `₹ ${(value / 1_00_00_000).toFixed(value % 1_00_00_000 === 0 ? 0 : 1)}Cr`;
    if (value >= 1_00_000)
      return `₹ ${(value / 1_00_000).toFixed(value % 1_00_00_000 === 0 ? 0 : 1)}L`;
    if (value >= 1_000) return `₹ ${Math.round(value / 1000)}k`;
    return `₹ ${Math.round(value)}`;
  };

  const { lumpSum, monthlySip } = useMemo(() => {
    const expectedAnnualReturn = 0.12;
    const ls = goalAmount / Math.pow(1 + expectedAnnualReturn, timeToBuy);
    const monthlyRate = expectedAnnualReturn / 12;
    const months = timeToBuy * 12;
    const sip =
      (goalAmount * monthlyRate) /
      ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate));

    return { lumpSum: ls, monthlySip: sip };
  }, [goalAmount, timeToBuy]);

  const config = goalConfig[activeGoal];

  return (
    <main className="flex flex-col lg:flex-row justify-between items-center lg:items-start pt-[130px] lg:pt-[170px] px-8 md:px-12 w-full max-w-[1250px] mx-auto z-20 pb-20 relative">
      {/* Left Section (Text & Categories) */}
      <section className="flex flex-col w-full lg:w-[50%] mt-2 lg:mt-4 gap-7 shrink-0 items-center lg:items-start text-center lg:text-left">
        {/* Trust Badge */}
        <article className="flex items-center gap-3 bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <figure className="flex -space-x-1.5 m-0">
            <img
              src="https://i.pravatar.cc/100?img=1"
              alt="user"
              className="w-6 h-6 rounded-full border-[1.5px] border-white object-cover shadow-sm pointer-events-none"
            />
            <img
              src="https://i.pravatar.cc/100?img=2"
              alt="user"
              className="w-6 h-6 rounded-full border-[1.5px] border-white object-cover shadow-sm pointer-events-none"
            />
            <img
              src="https://i.pravatar.cc/100?img=3"
              alt="user"
              className="w-6 h-6 rounded-full border-[1.5px] border-white object-cover shadow-sm pointer-events-none"
            />
          </figure>
          <span className="text-[11px] text-[#7a93a8] font-medium italic pr-2">
            Trusted by over 2,000 users
          </span>
        </article>

        {/* Heading Block */}
        <header>
          <h1 className="text-[40px] md:text-[54px] lg:text-[60px] leading-[1.05] font-bold text-[#1f3a52] tracking-tight mb-4">
            Plan your life
            <br className="hidden md:block" />
            goals. <span className="text-[#4994df]">We'll plan</span>
            <br className="hidden md:block" />
            <span className="text-[#4994df]">the investments.</span>
          </h1>
          <p className="text-[15px] md:text-[16px] text-[#5d778f] max-w-[340px] font-medium leading-[1.6] mx-auto lg:mx-0">
            WealthUp helps you achieve goals through
            <br className="hidden md:block" />
            personalised goal based investing.
          </p>
        </header>

        {/* Grid Links Layer */}
        <nav className="grid grid-cols-2 gap-x-3 gap-y-3 w-full max-w-[380px] mt-4">
          {(Object.keys(goalConfig) as GoalCategory[]).map((key) => {
            const isActive = activeGoal === key;
            const category = goalConfig[key];
            return (
              <div
                key={key}
                onClick={() => handleGoalChange(key)}
                className={`border-[1.5px] rounded-[18px] p-3 md:p-4 flex items-center gap-3 md:gap-4 transition-all cursor-pointer ${
                  isActive
                    ? "bg-linear-to-b from-[#eff5fa] to-[#e4f0f9] border-[#d8eaf6] shadow-[0_0_20px_rgba(150,200,240,0.6)]"
                    : "bg-white/40 border-white/60 backdrop-blur-sm hover:shadow-sm shadow-[0_2px_10px_rgba(180,210,240,0.1)]"
                }`}
              >
                <div className="w-9 h-7 relative flex items-center justify-center shrink-0">
                  <Image
                    src={category.btnIcon}
                    alt={key}
                    fill
                    className="object-contain drop-shadow"
                  />
                </div>
                <span className="font-semibold text-[#1f3a52] text-[15px] md:text-[16px]">
                  {key}
                </span>
              </div>
            );
          })}
        </nav>
      </section>

      {/* Right Section (Calculator Card & 3D Feature Image) */}
      <section className="w-full lg:w-[44%] flex flex-col items-center lg:items-end justify-start relative z-20 shrink-0 mt-16 lg:mt-0">
        {/* This wrapper holds the Card + Feature Image logically together */}
        <article className="flex flex-col items-center lg:items-end w-full max-w-[420px] relative">
          {/* Main Calculator Card */}
          <div className="bg-[#e9f1f8]/90 border-[1.5px] border-[#c0ddef] rounded-[32px] p-6 pb-7 w-full shadow-[0_16px_40px_rgba(160,205,240,0.35)] backdrop-blur-xl relative z-20 transition-all duration-300">
            <h3 className="text-center font-bold text-[#1f3a52] text-[15px] mb-6">
              {config.title}
            </h3>

            <div className="flex justify-between items-stretch">
              {/* Left Side: Sliders & Button */}
              <div className="flex flex-col justify-between w-[52%]">
                <div className="flex flex-col grow">
                  {/* Slider 1 */}
                  <div className="flex flex-col w-full mb-5 transition-all">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-[12px] font-medium text-[#6b86a0]">
                        {config.slider1Label}
                      </span>
                      <span className="text-[13px] font-bold text-[#1f3a52]">
                        {formatCurrency(goalAmount)}
                      </span>
                    </div>
                    {/* Track */}
                    <div className="w-full px-[8px]">
                      <Slider
                        value={[goalAmount]}
                        onValueChange={([val]) => setGoalAmount(val)}
                        min={500000}
                        max={10000000}
                        step={100000}
                        aria-label="Goal Amount"
                      />
                    </div>
                    {/* Min/Max values */}
                    <div className="flex justify-between text-[10px] text-[#8aa6bf] font-medium w-full mt-2 pointer-events-none">
                      <span>₹ 5L</span>
                      <span>₹ 1Cr</span>
                    </div>
                  </div>

                  {/* Slider 2 */}
                  <div className="flex flex-col w-full mb-3">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-[12px] font-medium text-[#6b86a0]">
                        Time to buy
                      </span>
                      <span className="text-[13px] font-bold text-[#1f3a52]">
                        {timeToBuy} years
                      </span>
                    </div>
                    {/* Track */}
                    <div className="w-full px-[8px]">
                      <Slider
                        value={[timeToBuy]}
                        onValueChange={([val]) => setTimeToBuy(val)}
                        min={1}
                        max={10}
                        step={1}
                        aria-label="Time to buy"
                      />
                    </div>
                  </div>
                </div>

                <button className="flex items-center justify-center gap-1.5 mt-5 h-[38px] bg-linear-to-b from-[#ffffff] to-[#eaf2f9] border border-[#d2e4f3] rounded-full text-[#1f3a52] font-semibold text-[12px] shadow-[0_4px_12px_rgba(180,210,240,0.4)] hover:shadow-[0_6px_16px_rgba(180,210,240,0.5)] transition-all w-[96%] group focus:outline-none focus:ring-2 focus:ring-[#8cbdec]">
                  {config.btnText}
                  <Image
                    src={config.btnIcon}
                    alt="icon"
                    width={16}
                    height={11}
                    className="object-contain drop-shadow group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Right Side: Computed Results */}
              <div className="flex flex-col items-center justify-between w-[44%] pl-2">
                <div className="bg-[#fdfdfd] rounded-[20px] border border-[#d2e4f3] shadow-[0_8px_20px_rgba(170,205,235,0.35)] p-2 py-3 w-full text-center flex flex-col justify-center h-[76px] transition-all">
                  <span className="text-[10px] text-[#6b86a0] font-medium block mb-0.5">
                    Lump Sum
                  </span>
                  <span className="text-[18px] font-bold text-[#1f3a52] tracking-tight transition-all">
                    {formatCurrency(lumpSum)}
                  </span>
                </div>

                <div className="text-[9px] font-extrabold text-[#94aec7] tracking-[0.2em] uppercase my-1.5 py-0.5">
                  OR
                </div>

                <div className="bg-[#fdfdfd] rounded-[20px] border border-[#d2e4f3] shadow-[0_8px_20px_rgba(170,205,235,0.35)] p-2 py-3 w-full text-center flex flex-col justify-center h-[76px] transition-all">
                  <span className="text-[10px] text-[#6b86a0] font-medium block mb-0.5">
                    Monthly SIP
                  </span>
                  <span className="text-[18px] font-bold text-[#1f3a52] tracking-tight transition-all">
                    {formatCurrency(monthlySip)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Goal Feature Image - Anchored exactly centrally below the Card */}
          <div className="absolute top-full mt-4 lg:mt-8 left-1/2 -translate-x-1/2 pointer-events-none z-10 flex justify-center transition-all duration-300 w-full lg:w-[130%]">
            <div
              className={`flex justify-center transition-all duration-500 ease-out origin-top ${config.imageClasses}`}
            >
              <Image
                src={config.largeImage}
                alt={activeGoal}
                width={1000}
                height={1000}
                sizes="(max-width: 1024px) 280px, 320px"
                className="w-full h-auto object-contain drop-shadow-[0_45px_35px_rgba(20,50,80,0.25)]"
                priority
              />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
