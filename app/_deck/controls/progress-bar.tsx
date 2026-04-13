/**
 * Edge-to-edge progress strip. Doubles as the footer's top border —
 * the unfilled portion sits at the same opacity as a hairline divider,
 * the filled portion is solid black.
 */
export function ProgressBar({ value }: { value: number }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="relative h-[2px] w-full bg-black/15"
    >
      <div
        className="absolute inset-y-0 left-0 bg-black transition-[width] duration-300 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
