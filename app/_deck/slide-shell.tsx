import type { ReactNode } from "react";
import { ScrollArea } from "./components/scroll-area";
import { Watermark } from "./components/watermark";

export type SlideShellProps = {
  index: number;
  total: number;
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
};

/**
 * Standard slide layout used by every non-cover slide.
 * Renders a header (counter + section kicker), the title block, and a content area.
 */
export function SlideShell({
  index,
  total,
  kicker,
  title,
  subtitle,
  children,
}: SlideShellProps) {
  return (
    <>
      <Watermark>{String(index + 1).padStart(2, "0")}</Watermark>
      <section className="relative flex h-full w-full flex-col overflow-hidden px-5 py-6 sm:px-10 sm:py-10 md:px-16 md:py-12">
        <header className="relative z-10 flex shrink-0 items-baseline justify-between gap-3 border-b border-black pb-3 sm:pb-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 sm:gap-6">
            <span className="font-mono text-sm tabular-nums tracking-widest text-black/60 sm:text-sm">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            {kicker ? (
              <span className="font-mono text-sm uppercase tracking-[0.22em] text-black/70 sm:text-sm sm:tracking-[0.28em]">
                {kicker}
              </span>
            ) : null}
          </div>
          <span className="hidden font-mono text-sm uppercase tracking-[0.25em] text-black/50 md:inline">
            SSO · Ortak Üyelik Sistemi
          </span>
        </header>

        <ScrollArea
          orientation="vertical"
          scrollbarVisibility="hover"
          className="relative z-10 mt-6 min-h-0 flex-1 sm:mt-8 md:mt-10"
          viewportClassName="h-full pb-24"
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="max-w-4xl text-sm leading-relaxed text-black/70 sm:text-base md:text-lg lg:text-xl">
                {subtitle}
              </p>
            ) : null}
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10">
            {children}
          </div>
        </ScrollArea>
      </section>
    </>
  );
}
