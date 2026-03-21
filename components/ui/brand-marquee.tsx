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
  isStatic?: boolean;
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
    isStatic = false,
  }: {
    children: React.ReactNode;
    speed?: number;
    className?: string;
    pauseOnHover?: boolean;
    isStatic?: boolean;
  }) => {
    return (
      <div className={cn("group flex overflow-hidden", className)}>
        <div
          className={cn(
            "flex items-center will-change-transform backface-hidden",
            isStatic ? "w-full justify-evenly gap-4 px-2" : "shrink-0 justify-around min-w-full gap-12 pr-12 animate-marquee-left",
            !isStatic && pauseOnHover && "group-hover:paused",
          )}
          style={
            {
              "--duration": `${speed}s`,
            } as React.CSSProperties
          }
        >
          {children}
        </div>
        {!isStatic && (
          <div
            aria-hidden="true"
            className={cn(
              "flex shrink-0 justify-around items-center gap-(--gap) min-w-full pr-(--gap) will-change-transform backface-hidden animate-marquee-left",
              pauseOnHover && "group-hover:paused",
            )}
            style={
              {
                "--duration": `${speed}s`,
              } as React.CSSProperties
            }
          >
            {children}
          </div>
        )}
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
      "h-8 w-8 shrink-0 text-[#294F7C] opacity-85 hover:opacity-100 transition-all duration-300";

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
            className="h-8 w-auto max-w-[120px] min-w-[60px] object-contain object-center opacity-85 hover:opacity-100 transition-all duration-300"
          />
        ) : (
          <span
            className="font-semibold text-sm whitespace-nowrap"
            style={{ color: brand.textColor ?? "#294F7C" }}
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
  isStatic = false,
}: BrandMarqueeProps) {
  const brandsToDisplay = React.useMemo(() => {
    if (isStatic) return brands;
    let result = [...brands];
    while (result.length < 14) {
      result = [...result, ...brands];
    }
    return result;
  }, [brands]);

  return (
    <>
      <MarqueeStyles />
      <section className={cn("w-full mt-20 md:mt-28 py-10", className)}>
        <div className="w-full max-w-[1040px] mx-auto px-8 md:px-0">
          <div className="relative h-[150px] flex flex-col items-center justify-center rounded-[20px] border border-white/50 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,120,255,0.05),inset_0_0_12px_rgba(255,255,255,0.3)] overflow-hidden">
            <h2 className="text-center font-bold text-[#294F7C] text-[13px] tracking-[0.15em] uppercase mb-4 mt-2">
              {title}
            </h2>
            <MarqueeRow speed={speed} className="w-full [--gap:4rem] py-2" isStatic={isStatic}>
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
