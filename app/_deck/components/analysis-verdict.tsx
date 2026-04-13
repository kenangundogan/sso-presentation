import * as React from "react";
import { TriangleAlert } from "lucide-react";
import { cn } from "../../lib/utils";

/* ---------------------------------------------------------------- *
 * Types
 * ---------------------------------------------------------------- */

export interface AnalysisVerdictProps {
  className?: string;
  children: React.ReactNode;
}

export interface AnalysisVerdictResultProps {
  className?: string;
  /** Eyebrow label rendered above the body. Defaults to "Değerlendirme". */
  label?: string;
  children: React.ReactNode;
}

export interface AnalysisVerdictWarningProps {
  className?: string;
  children: React.ReactNode;
}

/* ---------------------------------------------------------------- *
 * Sub-components
 * ---------------------------------------------------------------- */

function AnalysisVerdictRoot({ className, children }: AnalysisVerdictProps) {
  return (
    <div
      className={cn(
        "mt-5 border-t-2 border-black bg-yellow-50 p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
AnalysisVerdictRoot.displayName = "AnalysisVerdict";

function AnalysisVerdictResult({
  className,
  label = "Değerlendirme",
  children,
}: AnalysisVerdictResultProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-black/60">
        {label}
      </span>
      <p className="text-base leading-relaxed text-black">
        {children}
      </p>
    </div>
  );
}
AnalysisVerdictResult.displayName = "AnalysisVerdict.Result";

function AnalysisVerdictWarning({
  className,
  children,
}: AnalysisVerdictWarningProps) {
  return (
    <p
      className={cn(
        "mt-3 flex items-center gap-2 border-l-4 border-black pl-3 font-mono text-sm uppercase tracking-[0.13em] text-black/70 sm:pl-4 sm:tracking-[0.15em]",
        className,
      )}
    >
      <TriangleAlert
        className="h-4 w-4 flex-shrink-0 text-black"
        strokeWidth={1.75}
        aria-hidden
      />
      <span>{children}</span>
    </p>
  );
}
AnalysisVerdictWarning.displayName = "AnalysisVerdict.Warning";

/* ---------------------------------------------------------------- *
 * Compound export
 * ---------------------------------------------------------------- */

export const AnalysisVerdict = Object.assign(AnalysisVerdictRoot, {
  Result: AnalysisVerdictResult,
  Warning: AnalysisVerdictWarning,
});
