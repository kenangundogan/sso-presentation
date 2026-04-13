import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Badge } from "./badge";
import { Card } from "./card";
import { Typography } from "./typography";

/* ---------------------------------------------------------------- *
 * Types
 * ---------------------------------------------------------------- */

export interface DiagramProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DiagramTierProps extends DiagramProps {
  cols?: number;
}

export interface DiagramNodeProps {
  type: "leaf" | "hub";
  label: string;
  title: string;
  meta?: string;
  subtitle?: string;
  features?: string[];
  tone?: "default" | "invert";
  className?: string;
}

/* ---------------------------------------------------------------- *
 * Components
 * ---------------------------------------------------------------- */

function DiagramRoot({ className, children }: DiagramProps) {
  return (
    <div className={cn("flex flex-1 flex-col justify-between gap-1", className)}>
      {children}
    </div>
  );
}

function DiagramTier({ cols = 1, className, children }: DiagramTierProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[cols as 1 | 2 | 3 | 4];

  return (
    <div className={cn("grid gap-2 sm:gap-3", gridCols, className)}>
      {children}
    </div>
  );
}

function DiagramNode({
  type,
  label,
  title,
  meta,
  subtitle,
  features,
  tone = "default",
  className,
}: DiagramNodeProps) {
  if (type === "leaf") {
    return (
      <Card className={cn("flex flex-col gap-1 p-3 sm:p-4", className)}>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 sm:text-[11px]">
          {label}
        </span>
        <Typography size="base" weight="semibold" as="h5" className="leading-tight">
          {title}
        </Typography>
        {meta && (
          <span className="font-mono text-[10px] leading-snug text-black/60 sm:text-[11px]">
            {meta}
          </span>
        )}
      </Card>
    );
  }

  return (
    <Card tone={tone} className={cn("mx-auto w-full max-w-xl", className)}>
      <Card.Header>
        <Card.Header.Left className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
          {label}
        </Card.Header.Left>
        {subtitle && (
          <Card.Header.Right className="font-mono text-[11px] opacity-70">
            {subtitle}
          </Card.Header.Right>
        )}
      </Card.Header>
      <Card.Body className="flex flex-col gap-3">
        <Typography size="lg" weight="bold" as="h4">
          {title}
        </Typography>
        {features && (
          <div className="flex flex-wrap gap-1.5">
            {features.map((f) => (
              <Badge
                key={f}
                tone={tone === "invert" ? "invert" : "subtle"}
                className="px-2 py-0.5 text-[10px] sm:text-[11px]"
              >
                {f}
              </Badge>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

function DiagramConnector({ text, className }: { text?: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center py-1 sm:py-2", className)}>
      <div className="h-4 w-px bg-black/30 sm:h-6" />
      {text ? (
        <>
          <div className="my-1 rounded-full border border-black/10 bg-black/[0.03] px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-black/60 sm:text-[11px]">
            {text}
          </div>
          <div className="h-2 w-px bg-black/30 sm:h-3" />
        </>
      ) : null}
      <ChevronDown
        className="-mt-1 h-4 w-4 text-black/30"
        strokeWidth={2.5}
        aria-hidden
      />
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Compound Export
 * ---------------------------------------------------------------- */

export const ArchitectureDiagram = Object.assign(DiagramRoot, {
  Tier: DiagramTier,
  Node: DiagramNode,
  Connector: DiagramConnector,
});
