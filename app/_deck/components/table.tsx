import * as React from "react";
import { cn } from "../../lib/utils";

/* ---------------------------------------------------------------- *
 * Types
 * ---------------------------------------------------------------- */

export interface TableProps {
  className?: string;
  /** Minimum table width before horizontal scroll kicks in. */
  minWidth?: string;
  /** Make the first column sticky during horizontal scroll. Default: true. */
  stickyFirstCol?: boolean;
  children: React.ReactNode;
}

export interface TableHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export interface TableRowProps {
  className?: string;
  /** Whether to show the bottom border. Default: true (except for last row). */
  divider?: boolean;
  children: React.ReactNode;
}

export interface TableCellProps {
  className?: string;
  /** Whether this is a header cell. */
  isHead?: boolean;
  children: React.ReactNode;
}

/* ---------------------------------------------------------------- *
 * Sub-components
 * ---------------------------------------------------------------- */

function TableHeader({ className, children }: TableHeaderProps) {
  return (
    <thead className={cn("bg-black text-white", className)}>
      {children}
    </thead>
  );
}
TableHeader.displayName = "Table.Header";

function TableRow({ className, divider = true, children }: TableRowProps) {
  return (
    <tr
      className={cn(
        divider && "border-b border-black/10 last:border-0",
        className,
      )}
    >
      {children}
    </tr>
  );
}
TableRow.displayName = "Table.Row";

function TableCell({ isHead = false, className, children }: TableCellProps) {
  const Tag = isHead ? "th" : "td";
  return (
    <Tag
      className={cn(
        "px-3 py-2.5 text-left align-top text-sm sm:px-4 sm:py-3",
        isHead && "font-mono text-sm uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]",
        !isHead && "text-black/75",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
TableCell.displayName = "Table.Cell";

/* ---------------------------------------------------------------- *
 * Root (Responsive Wrapper + Table)
 * ---------------------------------------------------------------- */

/**
 * Wraps a wide table so it can scroll horizontally on narrow viewports
 * while keeping a clean rounded border on tablet+.
 *
 * When `stickyFirstCol` is true (default), the first column stays
 * pinned to the left edge during horizontal scroll — this keeps the
 * row label visible while the user pans through framework columns.
 *
 * The scroll container is marked `data-embla-no-drag` so horizontal
 * panning inside the table does not hijack the deck carousel.
 */
function TableRoot({
  minWidth = "640px",
  stickyFirstCol = true,
  className,
  children,
}: TableProps) {
  // Sticky-first-column styles applied via descendant selectors so the
  // existing TableCell API stays unchanged. Header cells sit above body
  // cells (z-20 vs z-10) and carry their own background so content
  // sliding underneath stays hidden.
  const stickyStyles = stickyFirstCol
    ? cn(
        // header
        "[&_thead_tr>*:first-child]:sticky [&_thead_tr>*:first-child]:left-0 [&_thead_tr>*:first-child]:z-20 [&_thead_tr>*:first-child]:bg-black",
        // body
        "[&_tbody_tr>*:first-child]:sticky [&_tbody_tr>*:first-child]:left-0 [&_tbody_tr>*:first-child]:z-10 [&_tbody_tr>*:first-child]:bg-white",
        // subtle right edge on the sticky column to separate it during scroll
        "[&_tbody_tr>*:first-child]:border-r [&_tbody_tr>*:first-child]:border-black/10",
        "[&_thead_tr>*:first-child]:border-r [&_thead_tr>*:first-child]:border-white/10",
      )
    : "";

  return (
    <div
      data-embla-no-drag
      className={cn(
        "-mx-5 flex-1 overflow-x-auto sm:mx-0 sm:rounded sm:border sm:border-black",
        className,
      )}
    >
      <div className="inline-block min-w-full align-top border-y border-black sm:border-0">
        <table
          className={cn("w-full border-collapse", stickyStyles)}
          style={{ minWidth }}
        >
          {children}
        </table>
      </div>
    </div>
  );
}
TableRoot.displayName = "Table";

/* ---------------------------------------------------------------- *
 * Compound export
 * ---------------------------------------------------------------- */

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: (props: React.HTMLAttributes<HTMLTableSectionElement>) => <tbody {...props} />,
  Row: TableRow,
  Cell: TableCell,
});

/** @deprecated Use Table instead. Keeping for compatibility during migration. */
export const ResponsiveTable = TableRoot;
