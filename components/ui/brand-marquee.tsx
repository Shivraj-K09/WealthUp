"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/** Lucide-style icon component (accepts className, size) */
export type BrandIconComponent = React.ComponentType<{
  className?: string;
  size?: number;
}>;

export interface Brand {
  name: string;
  /** Lucide or custom icon component - render as JSX */
  icon?: BrandIconComponent;
  /** Full logo image URL */
  logo?: string;
  /** theSVG.org slug - builds URL automatically */
  slug?: string;
  /** theSVG variant: "dark" | "mono" for light backgrounds */
  variant?: "default" | "dark" | "mono" | "light";
  alt?: string;
  /** For text-only brands */
  textColor?: string;
}

export interface BrandMarqueeProps {
  /** Array of brands - add/remove to update the marquee */
  brands: Brand[];
  title?: string;
  className?: string;
  speed?: number;
}

const MarqueeStyles = React.memo(() => (
  <style>
    {`
    @keyframes marquee-left {
      from { transform: translate3d(0, 0, 0); }
      to { transform: translate3d(-100%, 0, 0); }
    }
    .animate-marquee-left {
      animation: marquee-left var(--duration) linear infinite;
    }
    `}
  </style>
));
MarqueeStyles.displayName = "MarqueeStyles";

const MarqueeRow = React.memo(
  ({
    children,
    speed = 50,
    className,
    pauseOnHover = true,
  }: {
    children: React.ReactNode;
    speed?: number;
    className?: string;
    pauseOnHover?: boolean;
  }) => {
    return (
      <div className={cn("group flex overflow-hidden [--gap:3rem]", className)}>
        <div
          className={cn(
            "flex shrink-0 justify-start items-center [gap:var(--gap)] min-w-full pr-[var(--gap)] will-change-transform [backface-visibility:hidden] animate-marquee-left",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={
            {
              "--duration": `${speed}s`,
            } as React.CSSProperties
          }
        >
          {children}
        </div>
        <div
          aria-hidden="true"
          className={cn(
            "flex shrink-0 justify-start items-center [gap:var(--gap)] min-w-full pr-[var(--gap)] will-change-transform [backface-visibility:hidden] animate-marquee-left",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={
            {
              "--duration": `${speed}s`,
            } as React.CSSProperties
          }
        >
          {children}
        </div>
      </div>
    );
  },
);
MarqueeRow.displayName = "MarqueeRow";

const getLogoUrl = (brand: Brand): string | undefined =>
  brand.logo ?? (brand.slug ? THE_SVG(brand.slug, brand.variant ?? "default") : undefined);

const BrandItem = React.memo(
  ({ brand, className }: { brand: Brand; className?: string }) => {
    const logoUrl = getLogoUrl(brand);
    const IconComponent = brand.icon;
    const iconClassName =
      "h-8 w-8 shrink-0 text-[#1f3a52] opacity-85 hover:opacity-100 transition-all duration-300";

    return (
      <div
        className={cn(
          "flex items-center justify-center shrink-0 h-14 px-5 rounded-xl",
          className,
        )}
      >
        {IconComponent ? (
          <IconComponent className={iconClassName} size={32} />
        ) : logoUrl ? (
          <img
            src={logoUrl}
            alt={brand.alt ?? brand.name}
            className="h-8 w-auto max-w-[140px] min-w-[60px] object-contain object-center opacity-85 hover:opacity-100 transition-all duration-300"
          />
        ) : (
          <span
            className="font-semibold text-sm whitespace-nowrap"
            style={{ color: brand.textColor ?? "#1f3a52" }}
          >
            {brand.name}
          </span>
        )}
      </div>
    );
  },
);
BrandItem.displayName = "BrandItem";

/** Brand logos from theSVG.org - https://www.thesvg.org/ */
export const getTheSvgUrl = (slug: string, variant = "default") =>
  `https://thesvg.org/icons/${slug}/${variant}.svg`;

const THE_SVG = getTheSvgUrl;

export function BrandMarquee({
  brands,
  title = "Backed By",
  className,
  speed = 50,
}: BrandMarqueeProps) {
  const brandsToDisplay = React.useMemo(() => {
    let result = [...brands];
    while (result.length < 14) {
      result = [...result, ...brands];
    }
    return result;
  }, [brands]);

  return (
    <>
      <MarqueeStyles />
      <section className={cn("w-full mt-24 md:mt-36 pt-14 md:pt-20 pb-14 md:pb-20", className)}>
        <div className="w-full max-w-[1250px] mx-auto px-8 md:px-12">
          <h2 className="text-center font-bold text-[#1f3a52] text-xl md:text-2xl tracking-tight mb-10">
            {title}
          </h2>
          <div className="rounded-2xl md:rounded-3xl border border-[#b8d4e8]/80 bg-gradient-to-b from-white/95 via-[#e8f4fc]/90 to-[#dceef9] shadow-[0_8px_32px_rgba(80,140,200,0.08),0_2px_8px_rgba(100,150,200,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden backdrop-blur-sm">
            <MarqueeRow speed={speed} className="py-10 px-8 [--gap:4rem]">
              {brandsToDisplay.map((brand, i) => (
                <BrandItem key={`${brand.name}-${i}`} brand={brand} />
              ))}
            </MarqueeRow>
          </div>
        </div>
      </section>
    </>
  );
}
