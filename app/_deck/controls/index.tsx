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

      <div className="flex items-center justify-between gap-4 p-4">

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
