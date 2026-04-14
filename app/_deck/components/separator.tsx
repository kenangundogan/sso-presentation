import * as React from "react";
import { cn } from "../../lib/utils";

export interface SeparatorProps {
  className?: string;
}
export function Separator({ className }: SeparatorProps) {
  return (
    <div
      className={cn("my-4 h-px w-full bg-black/15 sm:my-6", className)}
    />
  );
}
Separator.displayName = "Separator";
