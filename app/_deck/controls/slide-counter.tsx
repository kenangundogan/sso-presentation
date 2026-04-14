export type SlideCounterProps = {
  index: number;
  total: number;
};
export function SlideCounter({ index, total }: SlideCounterProps) {
  return (
    <div className="flex items-center gap-1.5 font-mono text-sm tabular-nums text-black sm:gap-3">
      <span className="text-base sm:text-lg">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-black/30">/</span>
      <span className="text-black/60">{String(total).padStart(2, "0")}</span>
    </div>
  );
}
