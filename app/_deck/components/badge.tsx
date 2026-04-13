import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

/* ---------------------------------------------------------------- *
 * Types
 * ---------------------------------------------------------------- */

export type BadgeTone = "default" | "invert" | "subtle";

export interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}

export interface BadgeLinkProps extends BadgeProps {
  href: string;
}

/* ---------------------------------------------------------------- *
 * Badge
 * ---------------------------------------------------------------- */

const TONE_CLASSES: Record<BadgeTone, string> = {
  default: "border-black text-black bg-transparent",
  invert: "bg-black text-white border-transparent",
  subtle: "border-black/10 bg-black/[0.04] text-black/60",
};

function BadgeRoot({ tone = "default", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm uppercase tracking-[0.18em]",
        TONE_CLASSES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
BadgeRoot.displayName = "Badge";

/* ---------------------------------------------------------------- *
 * Badge.Link
 * ---------------------------------------------------------------- */

const LINK_TONE_CLASSES: Record<BadgeTone, string> = {
  default: "border-black bg-white text-black hover:bg-black hover:text-white",
  invert: "border-transparent bg-black text-white hover:bg-black/80",
  subtle: "border-black/20 bg-black/[0.04] text-black/70 hover:bg-black hover:text-white",
};

export function BadgeLink({
  href,
  tone = "default",
  className,
  children,
}: BadgeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm uppercase transition-colors",
        LINK_TONE_CLASSES[tone],
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
    </a>
  );
}
BadgeLink.displayName = "Badge.Link";

/* ---------------------------------------------------------------- *
 * Compound export
 * ---------------------------------------------------------------- */

export const Badge = Object.assign(BadgeRoot, {
  Link: BadgeLink,
});
