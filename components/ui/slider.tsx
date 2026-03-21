"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden rounded-full bg-[#EAF4FB] border border-[#d6e5f1] shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] data-horizontal:h-[10px] data-horizontal:w-full data-vertical:h-full data-vertical:w-[10px]"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute bg-linear-to-r from-[#4A90E2] to-[#294F7C] shadow-sm select-none data-horizontal:h-full data-vertical:w-full"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="relative block size-[22px] shrink-0 rounded-full border-[4.5px] border-[#72A6E4] bg-[#294F7C] transition-[color,box-shadow] select-none shadow-[0_2px_8px_rgba(0,0,0,0.15)] after:absolute after:-inset-2 hover:ring-4 hover:ring-[#72A6E4]/40 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
