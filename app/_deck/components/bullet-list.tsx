import { Minus, type LucideIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";
import { useCardTone } from "./card";

/* ---------------------------------------------------------------- *
 * Types
 * ---------------------------------------------------------------- */

export type BulletTone = "default" | "invert";

export interface BulletListProps {
  /**
   * Override tone explicitly. If omitted, the list inherits from the closest
   * parent `<Card tone="...">` (default → default, invert → invert,
   * subtle → default).
   */
  tone?: BulletTone;
  /**
   * Marker icon shown before each item. Default: `Minus` (preserves the
   * original horizontal-bar look). Pass any Lucide icon — e.g. `Dot`,
   * `ChevronRight`, `Square`, `ArrowRight`.
   */
  marker?: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

export interface BulletListItemProps {
  className?: string;
  children: React.ReactNode;
}

/* ---------------------------------------------------------------- *
 * Tone + marker context
 * ---------------------------------------------------------------- */

interface BulletListContextValue {
  tone: BulletTone;
  Marker: LucideIcon;
}

const DEFAULT_MARKER: LucideIcon = Minus;

const BulletListContext = React.createContext<BulletListContextValue>({
  tone: "default",
  Marker: DEFAULT_MARKER,
});

/* ---------------------------------------------------------------- *
 * Root
 * ---------------------------------------------------------------- */

function BulletListRoot({
  tone,
  marker,
  className,
  children,
}: BulletListProps) {
  const cardTone = useCardTone();
  const resolvedTone: BulletTone =
    tone ?? (cardTone === "invert" ? "invert" : "default");

  return (
    <BulletListContext.Provider
      value={{ tone: resolvedTone, Marker: marker ?? DEFAULT_MARKER }}
    >
      <ul className={cn("flex flex-1 flex-col gap-3", className)}>
        {children}
      </ul>
    </BulletListContext.Provider>
  );
}
BulletListRoot.displayName = "BulletList";

/* ---------------------------------------------------------------- *
 * Item
 * ---------------------------------------------------------------- */

function BulletListItem({ className, children }: BulletListItemProps) {
  const { tone, Marker } = React.useContext(BulletListContext);
  const isInvert = tone === "invert";
  return (
    <li
      className={cn(
        "flex items-start gap-2.5 text-sm leading-relaxed sm:text-base",
        isInvert && "text-white/90",
        className,
      )}
    >
      <Marker
        aria-hidden
        strokeWidth={2.5}
        className={cn(
          "mt-1 h-4 w-4 flex-shrink-0",
          isInvert ? "text-white/70" : "text-black",
        )}
      />
      <span>{children}</span>
    </li>
  );
}
BulletListItem.displayName = "BulletList.Item";

/* ---------------------------------------------------------------- *
 * Compound export
 * ---------------------------------------------------------------- */

export const BulletList = Object.assign(BulletListRoot, {
  Item: BulletListItem,
});
