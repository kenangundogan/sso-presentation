import { Plus } from "lucide-react";
import { Watermark } from "../components/watermark";
import { Typewriter } from "../components/typewriter";
import { Typography } from "../components/typography";
import type { SlideProps } from "../types";

const TAGLINES = [
  "Tek kayıt, tüm uygulamalar.",
  "OAuth 2.1 / OIDC tabanlı kimlik altyapısı.",
  "Self-hosted — veriler kendi sunucularınızda kalır.",
  "KVKK uyumlu, vendor lock-in yok.",
  "Web · Mobil · Smart TV — tek hesap, her ekran.",
];

const CORNER_POSITIONS = [
  "left-3 top-3 sm:left-5 sm:top-5 md:left-8 md:top-8",
  "right-3 top-3 sm:right-5 sm:top-5 md:right-8 md:top-8",
  "bottom-3 left-3 sm:bottom-5 sm:left-5 md:bottom-8 md:left-8",
  "bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-8 md:right-8",
];

/** 01 — Cover slide. Fully custom layout. */
export default function CoverSlide(_p: SlideProps) {
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

      {/* Editorial background watermark */}
      <Watermark>01</Watermark>

      {/* Corner marks */}
      {CORNER_POSITIONS.map((cls) => (
        <Plus
          key={cls}
          aria-hidden
          strokeWidth={1.5}
          className={`pointer-events-none absolute h-3 w-3 text-black/40 ${cls}`}
        />
      ))}

      {/* Abstract Decorative Element — Editorial Scanline Pill */}
      <div className="pointer-events-none absolute left-[-100px] top-[40%] hidden h-[400px] w-[200px] rotate-[-12deg] rounded-full border border-black/[0.03] bg-gradient-to-b from-black/[0.01] to-transparent lg:block" />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between gap-3 border-b border-black/10 px-5 py-4 sm:px-10 sm:py-5 md:px-16 md:py-6">
        <div className="flex items-center gap-3 sm:gap-5">
          <div
            aria-hidden
            className="flex h-7 w-7 items-center justify-center border border-black font-mono text-sm font-bold sm:h-8 sm:w-8"
          >
            S
          </div>
          <Typography size="sm" font="mono" transform="uppercase" tracking="widest">
            SSO · Ortak Üyelik Sistemi
          </Typography>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Typography size="sm" font="mono" transform="uppercase" emphasis="ghost" tracking="widest" className="hidden sm:inline">
            Teknik Araştırma
          </Typography>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-black/10 sm:inline-block" />
          <Typography size="sm" font="mono" transform="uppercase" tracking="widest">
            Nisan 2026
          </Typography>
        </div>
      </header>

      {/* Main stage */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16">
        {/* Kicker */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span aria-hidden className="block h-px w-6 bg-black sm:w-10" />
          <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="default">
            Intro
          </Typography>
          <Typography size="xs" font="mono" emphasis="ghost">/</Typography>
          <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="faded">
            Framework Kararı
          </Typography>
          <Typography size="xs" font="mono" emphasis="ghost" className="hidden sm:inline">/</Typography>
          <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="faded" className="hidden sm:inline">
            Yol Haritası
          </Typography>
        </div>

        {/* Display title */}
        <h1 className="mt-8 font-semibold leading-[0.82] tracking-[-0.05em] sm:mt-10 md:mt-12">
          <span className="block text-[clamp(3.5rem,14vw,11rem)]">
            Ortak Üyelik
          </span>
          <span className="block text-[clamp(3.5rem,14vw,11rem)]">
            Sistemi<span className="text-black/15">.</span>
          </span>
        </h1>

        {/* Ruler subtitle */}
        <div className="mt-6 flex items-center gap-4 sm:mt-8">
          <span aria-hidden className="h-px w-10 bg-black sm:w-16" />
          <Typography size="md" font="mono" transform="uppercase" tracking="widest" weight="medium">
            SSO Altyapısı & IAM Stratejisi
          </Typography>
        </div>

        {/* Typewriter lede */}

        <Typewriter
          texts={TAGLINES}
          typingSpeed={35}
          deletingSpeed={18}
          pauseDuration={2400}
          cursor
          cursorStyle="line"
          className="mt-10 flex min-h-[3.5em] max-w-3xl items-start gap-2 text-base leading-[1.45] text-black/85 sm:mt-12 sm:text-lg md:text-xl lg:mt-16 lg:min-h-[3em] lg:text-[1.4rem] lg:leading-[1.45]"
        />
      </div>
    </section>
  );
}
