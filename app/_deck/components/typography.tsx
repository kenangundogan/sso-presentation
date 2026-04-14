import * as React from "react";
import { cn } from "../../lib/utils";

export type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
export type TypographySize = "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
export type TypographyFont = "sans" | "mono";
export type TypographyWeight = "light" | "normal" | "medium" | "semibold" | "bold";
export type TypographyEmphasis = "default" | "muted" | "faded" | "ghost";
export type TypographyAlign = "left" | "center" | "right";
export type TypographyCase = "normal" | "uppercase";

export interface TypographyProps {
  as?: TypographyTag;
  size?: TypographySize;
  font?: TypographyFont;
  weight?: TypographyWeight;
  emphasis?: TypographyEmphasis;
  align?: TypographyAlign;
  underline?: boolean;
  transform?: TypographyCase;
  tracking?: "tight" | "normal" | "wide" | "wider" | "widest";
  truncate?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SIZES: Record<TypographySize, string> = {
  xs: "text-xs",
  sm: "text-xs sm:text-xs",
  base: "text-xs sm:text-sm",
  md: "text-sm sm:text-base",
  lg: "text-base sm:text-lg",
  xl: "text-lg sm:text-xl",
  "2xl": "text-xl sm:text-2xl",
  "3xl": "text-2xl sm:text-3xl",
  "4xl": "text-3xl sm:text-4xl md:text-5xl",
};

const FONTS: Record<TypographyFont, string> = {
  sans: "font-sans",
  mono: "font-mono",
};

const WEIGHTS: Record<TypographyWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const EMPHASIS: Record<TypographyEmphasis, string> = {
  default: "",
  muted: "opacity-70",
  faded: "opacity-50",
  ghost: "opacity-30",
};

const ALIGNS: Record<TypographyAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const CASES: Record<TypographyCase, string> = {
  normal: "normal-case",
  uppercase: "uppercase",
};

const TRACKING: Record<NonNullable<TypographyProps["tracking"]>, string> = {
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
};

export function Typography({
  as,
  size = "md",
  font = "sans",
  weight = "normal",
  emphasis = "default",
  align,
  underline = false,
  transform = "normal",
  tracking = "normal",
  truncate = false,
  className,
  children,
}: TypographyProps) {

  const Tag = as || (size === "base" || size === "md" ? "p" : "span");

  return (
    <Tag
      className={cn(
        SIZES[size],
        FONTS[font],
        WEIGHTS[weight],
        EMPHASIS[emphasis],
        CASES[transform],
        TRACKING[tracking],
        align && ALIGNS[align],
        underline && "underline underline-offset-4",
        truncate && "truncate",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

Typography.displayName = "Typography";
