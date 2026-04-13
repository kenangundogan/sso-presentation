"use client";

import { DotNav } from "./dot-nav";
import { KeyboardHint } from "./keyboard-hint";
import { NavButtons } from "./nav-buttons";
import { ProgressBar } from "./progress-bar";
import { SlideCounter } from "./slide-counter";

export type DeckControlsProps = {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
};

/**
 * Bottom control bar.
 * Top edge: full-bleed ProgressBar (also acts as the visual divider).
 * Body: prev/next + info hint · dot navigation (md+) · slide counter.
 */
export function DeckControls({
  index,
  total,
  onPrev,
  onNext,
  onJump,
}: DeckControlsProps) {
  const progress = ((index + 1) / total) * 100;

  return (
    <footer className="bg-white">
      <ProgressBar value={progress} />

      <div className="flex items-center gap-3 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">

        <SlideCounter index={index} total={total} />

        <DotNav index={index} total={total} onJump={onJump} />

        <div className="flex items-center gap-2 sm:gap-3">
          <KeyboardHint />
          <NavButtons
            index={index}
            onPrev={onPrev}
            onNext={onNext}
            onJump={onJump}
            prevDisabled={index === 0}
            nextDisabled={index === total - 1}
          />
        </div>

      </div>
    </footer>
  );
}
