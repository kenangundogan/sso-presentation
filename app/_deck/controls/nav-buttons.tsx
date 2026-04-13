import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { QuickNav } from "./quick-nav";

type NavButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  label: string;
  children: ReactNode;
};

function NavButton({ onClick, disabled, label, children }: NavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:border-black/20 disabled:text-black/30 disabled:hover:bg-white disabled:hover:text-black/30"
    >
      {children}
    </button>
  );
}

export type NavButtonsProps = {
  index: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
};

export function NavButtons({
  index,
  onPrev,
  onNext,
  onJump,
  prevDisabled,
  nextDisabled,
}: NavButtonsProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <NavButton
        onClick={onPrev}
        disabled={prevDisabled}
        label="Önceki slayt"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      </NavButton>
      <QuickNav index={index} onJump={onJump} />
      <NavButton
        onClick={onNext}
        disabled={nextDisabled}
        label="Sonraki slayt"
      >
        <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      </NavButton>
    </div>
  );
}
