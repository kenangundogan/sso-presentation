"use client";

import { OptionIcon } from "lucide-react";
import { Popover } from "../components/popover";

const SHORTCUTS: [string, string][] = [
  ["← / →", "Önceki / sonraki slayt"],
  ["Space", "Sonraki slayt"],
  ["PgUp / PgDn", "Önceki / sonraki slayt"],
  ["Home / End", "İlk / son slayt"],
  ["Wheel", "Trackpad ile gezinti"],
  ["Swipe", "Mobilde parmakla geçiş"],
];

/**
 * Info badge that reveals a popover with all keyboard / pointer shortcuts.
 * Uses the shared <Popover> compound (portal + click-outside + Escape close).
 */
export function KeyboardHint() {
  return (
    <Popover side="top" align="end">
      <Popover.Trigger
        aria-label="Klavye kısayolları"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-black/40 text-black/70 transition-colors hover:border-black hover:bg-black hover:text-white aria-expanded:border-black aria-expanded:bg-black aria-expanded:text-white"
      >
        <OptionIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      </Popover.Trigger>

      <Popover.Content className="w-xs">
        <div className="flex items-center justify-between border-b border-black/15 px-4 py-2.5">
          <span className="font-mono text-sm uppercase tracking-[0.22em] text-black/60">
            Kısayollar
          </span>
          <kbd className="rounded border border-black/30 px-1.5 py-0.5 font-mono text-sm uppercase tracking-wider text-black/60">
            esc
          </kbd>
        </div>
        <ul className="flex flex-col gap-2 px-4 py-3">
          {SHORTCUTS.map(([key, desc]) => (
            <li
              key={key}
              className="flex items-center justify-between gap-4 text-sm"
            >
              <kbd className="rounded border border-black/30 bg-black/[0.03] px-2 py-0.5 font-mono text-sm uppercase tracking-wider text-black">
                {key}
              </kbd>
              <span className="text-right text-black/70">{desc}</span>
            </li>
          ))}
        </ul>
      </Popover.Content>
    </Popover>
  );
}
