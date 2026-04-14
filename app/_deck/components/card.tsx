import * as React from "react";
import { cn } from "../../lib/utils";

export type CardTone = "default" | "invert" | "subtle";

export interface CardProps {
  tone?: CardTone;
  className?: string;
  children: React.ReactNode;
}

export interface CardHeaderProps {
  divider?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface CardSectionProps {
  className?: string;
  children: React.ReactNode;
}

interface CardContextValue {
  tone: CardTone;
}

const CardContext = React.createContext<CardContextValue>({ tone: "default" });
export function useCardTone(): CardTone {
  return React.useContext(CardContext).tone;
}

const TONE_CLASSES: Record<CardTone, string> = {
  default: "border-black bg-white text-black",
  invert: "border-black bg-black text-white",
  subtle: "border-black bg-black/[0.02] text-black",
};

const DIVIDER_CLASSES: Record<CardTone, string> = {
  default: "border-black/15",
  invert: "border-white/20",
  subtle: "border-black/15",
};

const LABEL_TEXT_CLASSES: Record<CardTone, string> = {
  default: "text-black/60",
  invert: "text-white/65",
  subtle: "text-black/60",
};

const ACCENT_TEXT_CLASSES: Record<CardTone, string> = {
  default: "text-black/70",
  invert: "text-white/70",
  subtle: "text-black/70",
};

function CardRoot({ tone = "default", className, children }: CardProps) {
  return (
    <CardContext.Provider value={{ tone }}>
      <div
        className={cn(
          "flex flex-col border p-5 sm:p-6",
          TONE_CLASSES[tone],
          className,
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}
CardRoot.displayName = "Card";

function CardHeader({
  divider = true,
  className,
  children,
}: CardHeaderProps) {
  const tone = useCardTone();
  return (
    <div
      className={cn(
        "mb-4 flex items-baseline justify-between gap-3",
        divider && "border-b pb-2",
        divider && DIVIDER_CLASSES[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}
CardHeader.displayName = "Card.Header";

function HeaderLeft({ className, children }: CardSectionProps) {
  const tone = useCardTone();
  return (
    <span
      className={cn(
        "flex items-center gap-3 font-mono text-sm uppercase tracking-[0.22em]",
        LABEL_TEXT_CLASSES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
HeaderLeft.displayName = "Card.Header.Left";

function HeaderRight({ className, children }: CardSectionProps) {
  const tone = useCardTone();
  return (
    <span
      className={cn(
        "flex flex-shrink-0 items-center gap-2 font-mono text-sm uppercase tracking-[0.18em]",
        ACCENT_TEXT_CLASSES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
HeaderRight.displayName = "Card.Header.Right";

function CardBody({ className, children }: CardSectionProps) {
  return (
    <div className={cn("flex flex-1 flex-col gap-3", className)}>{children}</div>
  );
}
CardBody.displayName = "Card.Body";

function CardFooter({ className, children }: CardSectionProps) {
  const tone = useCardTone();
  return (
    <div
      className={cn(
        "mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-3 mt-3!",
        DIVIDER_CLASSES[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}
CardFooter.displayName = "Card.Footer";

const Header = Object.assign(CardHeader, {
  Left: HeaderLeft,
  Right: HeaderRight,
});

export const Card = Object.assign(CardRoot, {
  Header,
  Body: CardBody,
  Footer: CardFooter,
});
