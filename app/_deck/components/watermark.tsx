import * as React from "react";
import { cn } from "../../lib/utils";

export interface WatermarkProps {
  children: React.ReactNode;
  className?: string;
  position?: "bottom-right" | "top-right";
}

/**
 * Editorial background watermark for slides.
 * Positioned absolute at the corners of its container.
 */
export function Watermark({ children, className }: WatermarkProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "fixed top-0 right-0",
        "pointer-events-none fixed select-none font-mono font-semibold leading-none tracking-[-0.05em] text-black/[0.035]",
        "text-[16rem] sm:text-[24rem] md:text-[32rem] lg:text-[40rem] xl:text-[48rem] leading-none",
        className,
      )}
    >
      {children}
    </span>
  );
}

Watermark.displayName = "Watermark";
