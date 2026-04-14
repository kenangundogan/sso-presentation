"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Popover } from "../components/popover";
import { SLIDES } from "../slides";

export type QuickNavProps = {
  index: number;
  onJump: (i: number) => void;
};
export function QuickNav({ index, onJump }: QuickNavProps) {
  const [open, setOpen] = useState(false);

  const handleJump = (i: number) => {
    onJump(i);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen} side="top" align="center">
      <Popover.Trigger
        aria-label="Hızlı navigasyon"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-black transition-colors hover:bg-black hover:text-white aria-expanded:bg-black aria-expanded:text-white"
      >
        <Menu className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      </Popover.Trigger>

      <Popover.Content className="w-[320px]">
        <div className="flex items-center justify-between border-b border-black/15 px-4 py-2.5">
          <span className="font-mono text-sm uppercase tracking-[0.22em] text-black/60">
            Tüm Slaytlar
          </span>
          <kbd className="rounded border border-black/30 px-1.5 py-0.5 font-mono text-sm uppercase tracking-wider text-black/60">
            esc
          </kbd>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto py-1">
          {SLIDES.map((entry, i) => {
            const active = i === index;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => handleJump(i)}
                  aria-current={active ? "true" : undefined}
                  className={`flex w-full items-baseline gap-3 px-4 py-2 text-left text-sm transition-colors ${
                    active ? "bg-black text-white" : "hover:bg-black/[0.04]"
                  }`}
                >
                  <span
                    className={`font-mono tabular-nums ${
                      active ? "text-white/75" : "text-black/45"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 truncate">{entry.label}</span>
                  {entry.group ? (
                    <span
                      className={`flex-shrink-0 font-mono text-sm uppercase tracking-[0.15em] ${
                        active ? "text-white/55" : "text-black/40"
                      }`}
                    >
                      {entry.group}
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </Popover.Content>
    </Popover>
  );
}
