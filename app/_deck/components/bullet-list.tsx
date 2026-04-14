import { Minus, type LucideIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";
import { useCardTone } from "./card";

export type BulletTone = "default" | "invert";

export interface BulletListProps {
  tone?: BulletTone;
  marker?: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

export interface BulletListItemProps {
  className?: string;
  children: React.ReactNode;
}

interface BulletListContextValue {
  tone: BulletTone;
  Marker: LucideIcon;
}

const DEFAULT_MARKER: LucideIcon = Minus;

const BulletListContext = React.createContext<BulletListContextValue>({
  tone: "default",
  Marker: DEFAULT_MARKER,
});

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

export const BulletList = Object.assign(BulletListRoot, {
  Item: BulletListItem,
});
