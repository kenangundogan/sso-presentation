import * as React from "react";
import { cn } from "../../lib/utils";

/* ---------------------------------------------------------------- *
 * Context
 * ---------------------------------------------------------------- */

type DescriptionListLayout = "default" | "between";

const DescriptionListContext = React.createContext<{
  layout: DescriptionListLayout;
}>({ layout: "default" });

/* ---------------------------------------------------------------- *
 * Types
 * ---------------------------------------------------------------- */

export interface DescriptionListProps {
  /**
   * Layout of the list items.
   * - `default`: Key and value are side by side with a small gap.
   * - `between`: Key is left-aligned, value is right-aligned.
   */
  layout?: DescriptionListLayout;
  className?: string;
  children: React.ReactNode;
}

export interface DescriptionListItemProps {
  className?: string;
  children: React.ReactNode;
}

/* ---------------------------------------------------------------- *
 * Sub-components
 * ---------------------------------------------------------------- */

function DescriptionListRoot({
  layout = "default",
  className,
  children,
}: DescriptionListProps) {
  return (
    <DescriptionListContext.Provider value={{ layout }}>
      <dl className={cn("flex flex-col gap-1 text-sm", className)}>
        {children}
      </dl>
    </DescriptionListContext.Provider>
  );
}
DescriptionListRoot.displayName = "DescriptionList";

function ItemRoot({ className, children }: DescriptionListItemProps) {
  const { layout } = React.useContext(DescriptionListContext);

  return (
    <div
      className={cn(
        "flex gap-2",
        layout === "between" && "justify-between border-b border-black/5 pb-1 last:border-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
ItemRoot.displayName = "DescriptionList.Item";

function ItemKey({ className, children }: DescriptionListItemProps) {
  return (
    <dt
      className={cn(
        "min-w-fit font-mono uppercase tracking-[0.12em] opacity-60",
        className,
      )}
    >
      {children}
    </dt>
  );
}
ItemKey.displayName = "DescriptionList.Item.Key";

function ItemValue({ className, children }: DescriptionListItemProps) {
  const { layout } = React.useContext(DescriptionListContext);

  return (
    <dd className={cn("flex-1", layout === "between" && "text-right", className)}>
      {children}
    </dd>
  );
}
ItemValue.displayName = "DescriptionList.Item.Value";

/* ---------------------------------------------------------------- *
 * Compound export
 * ---------------------------------------------------------------- */

const Item = Object.assign(ItemRoot, {
  Key: ItemKey,
  Value: ItemValue,
});

export const DescriptionList = Object.assign(DescriptionListRoot, {
  Item,
});
