import { Check } from "lucide-react";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import { SLIDE_HEADERS, SUMMARY_BULLETS } from "../data/slides";
import type { SlideProps } from "../types";

export default function SummarySlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.summary.kicker}
      title={SLIDE_HEADERS.summary.title}
      subtitle={SLIDE_HEADERS.summary.subtitle}
    >
      <ul className="flex flex-col gap-2 lg:gap-3">
        {SUMMARY_BULLETS.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-3 border-b border-black/10 pb-2.5 last:border-b-0 sm:gap-4 sm:pb-3"
          >
            <Typography size="sm" font="mono" weight="bold" emphasis="faded" className="mt-1 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </Typography>
            <Typography size="lg" className="flex-1 leading-snug">
              {b}
            </Typography>
            <Check
              className="mt-1 h-4 w-4 flex-shrink-0 text-black/40"
              strokeWidth={2.5}
              aria-hidden
            />
          </li>
        ))}
      </ul>
    </SlideShell>
  );
}
