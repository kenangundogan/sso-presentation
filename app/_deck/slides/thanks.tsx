import { Plus } from "lucide-react";
import { Watermark } from "../components/watermark";
import { Typography } from "../components/typography";
import type { SlideProps } from "../types";

const CORNER_POSITIONS = [
  "left-3 top-3 sm:left-5 sm:top-5 md:left-8 md:top-8",
  "right-3 top-3 sm:right-5 sm:top-5 md:right-8 md:top-8",
  "bottom-3 left-3 sm:bottom-5 sm:left-5 md:bottom-8 md:left-8",
  "bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-8 md:right-8",
];

export default function ThanksSlide(p: SlideProps) {
  return (
    <section className="relative flex min-h-full w-full flex-col overflow-hidden bg-white selection:bg-black selection:text-white">
      {/* Dotted grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <Watermark>FIN</Watermark>

      {/* Corner marks */}
      {CORNER_POSITIONS.map((cls) => (
        <Plus
          key={cls}
          aria-hidden
          strokeWidth={1.5}
          className={`pointer-events-none absolute h-3 w-3 text-black/40 ${cls}`}
        />
      ))}

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between gap-3 border-b border-black/10 px-5 py-4 sm:px-10 sm:py-5 md:px-16 md:py-6">
        <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="faded">
          {String(p.index + 1).padStart(2, "0")} / {String(p.total).padStart(2, "0")}
        </Typography>
        <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="faded">
          SSO · Ortak Üyelik Sistemi
        </Typography>
      </header>

      {/* Center stage */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 sm:px-10 md:px-16">
        <h1 className="text-center font-semibold leading-[0.85] tracking-[-0.04em]">
          <span className="block text-[clamp(3rem,12vw,9rem)]">
            Teşekkürler<span className="text-black/15">.</span>
          </span>
        </h1>

        <div className="mt-8 flex items-center gap-4 sm:mt-10">
          <span aria-hidden className="h-px w-10 bg-black sm:w-16" />
          <Typography size="md" font="mono" transform="uppercase" tracking="widest" weight="medium" emphasis="muted">
            Sorular & Tartışma
          </Typography>
          <span aria-hidden className="h-px w-10 bg-black sm:w-16" />
        </div>
      </div>
    </section>
  );
}
