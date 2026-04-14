export type DotNavProps = {
  index: number;
  total: number;
  onJump: (i: number) => void;
};
export function DotNav({ index, total, onJump }: DotNavProps) {
  return (
    <div className="hidden flex-1 items-center justify-center gap-1.5 md:flex">
      {Array.from({ length: total }).map((_, i) => {
        const active = i === index;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onJump(i)}
            aria-label={`Slayt ${i + 1}`}
            aria-current={active ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active ? "w-6 bg-black" : "w-1.5 bg-black/20 hover:bg-black/50"
            }`}
          />
        );
      })}
    </div>
  );
}
