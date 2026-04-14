"use client";

import * as React from "react";
import { Fingerprint, Globe, KeyRound, Monitor, Plus, Shield, Smartphone, Tv, User } from "lucide-react";
import { Watermark } from "../components/watermark";
import { Typography } from "../components/typography";
import type { SlideProps } from "../types";

/* ---------------------------------------------------------------- *
 * Mock screen cards — different auth UI states
 * ---------------------------------------------------------------- */

function ScreenLogin() {
  return (
    <div className="w-96 rounded-lg border border-black/15 bg-white p-10">
      <div className="mb-4 flex flex-col items-center gap-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 font-mono text-sm font-bold">
          S
        </div>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Giriş Yap</span>
      </div>
      <div className="mb-2 rounded border border-black/20 px-3 py-2">
        <span className="font-mono text-xs text-black/40">kullanici@ornek.com</span>
      </div>
      <div className="mb-3 rounded border border-black/20 px-3 py-2">
        <span className="font-mono text-xs text-black/40">••••••••••</span>
      </div>
      <div className="mb-3 rounded bg-black py-2 text-center">
        <span className="text-xs font-semibold text-white">Oturum Aç</span>
      </div>
      <div className="mb-3 flex items-center gap-2">
        <span className="h-px flex-1 bg-black/10" />
        <span className="font-mono text-[10px] text-black/30">veya</span>
        <span className="h-px flex-1 bg-black/10" />
      </div>
      <div className="flex gap-2">
        <div className="flex flex-1 items-center justify-center gap-1 rounded border border-black/15 py-1.5">
          <Globe className="h-3 w-3 text-black/40" strokeWidth={1.75} />
          <span className="font-mono text-[10px] font-medium">Google</span>
        </div>
        <div className="flex flex-1 items-center justify-center gap-1 rounded border border-black/15 py-1.5">
          <Globe className="h-3 w-3 text-black/40" strokeWidth={1.75} />
          <span className="font-mono text-[10px] font-medium">Apple</span>
        </div>
      </div>
    </div>
  );
}

function ScreenMFA() {
  return (
    <div className="w-96 rounded-lg border border-black/15 bg-white p-10">
      <div className="mb-4 flex items-center gap-3">
        <Shield className="h-5 w-5" strokeWidth={1.75} />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">İki Faktörlü Doğrulama</span>
      </div>
      <p className="mb-4 text-xs leading-relaxed text-black/60">
        Telefonunuzdaki kimlik doğrulama uygulamasından aldığınız 6 haneli kodu girin.
      </p>
      <div className="mb-4 flex justify-between gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex h-10 w-10 items-center justify-center rounded border border-black/15 font-mono text-sm font-bold">
            {i < 3 ? "•" : ""}
          </div>
        ))}
      </div>
      <div className="rounded bg-black py-2 text-center">
        <span className="text-xs font-semibold text-white">Doğrula</span>
      </div>
    </div>
  );
}

function ScreenConsent() {
  return (
    <div className="w-96 rounded-lg border border-black/15 bg-white p-10">
      <div className="mb-4 flex items-center gap-3">
        <KeyRound className="h-5 w-5" strokeWidth={1.75} />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Erişim İzni</span>
      </div>
      <div className="mb-3 rounded border border-black/10 bg-black/[0.02] px-3 py-2.5">
        <span className="text-xs font-semibold">Haber Portalı</span>
        <span className="ml-1 text-[10px] text-black/40">erişim istiyor</span>
      </div>
      <ul className="mb-4 space-y-1.5">
        {["Profil bilgileriniz", "E-posta adresiniz", "Abonelik durumunuz"].map((p) => (
          <li key={p} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-black/40" />
            <span className="text-xs text-black/60">{p}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <div className="flex-1 rounded border border-black/20 py-2 text-center">
          <span className="text-xs font-medium text-black/60">Reddet</span>
        </div>
        <div className="flex-1 rounded bg-black py-2 text-center">
          <span className="text-xs font-semibold text-white">İzin Ver</span>
        </div>
      </div>
    </div>
  );
}

function ScreenProfile() {
  return (
    <div className="w-96 rounded-lg border border-black/15 bg-white p-10">
      <div className="mb-4 flex items-center gap-3">
        <User className="h-5 w-5" strokeWidth={1.75} />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Kullanıcı Profili</span>
      </div>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 font-mono text-sm font-bold">
          KG
        </div>
        <div>
          <div className="text-sm font-semibold">Kenan G.</div>
          <div className="font-mono text-[10px] text-black/40">kenan@ornek.com</div>
        </div>
      </div>
      <div className="space-y-1.5 border-t border-black/10 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-black/50">Bağlı uygulamalar</span>
          <span className="font-mono text-[10px] font-bold">4</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-black/50">Aktif oturumlar</span>
          <span className="font-mono text-[10px] font-bold">2</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-black/50">MFA durumu</span>
          <span className="font-mono text-[10px] font-bold text-black">Aktif</span>
        </div>
      </div>
    </div>
  );
}

function ScreenPasskey() {
  return (
    <div className="w-96 rounded-lg border border-black/15 bg-white p-10">
      <div className="mb-4 flex items-center gap-3">
        <Fingerprint className="h-5 w-5" strokeWidth={1.75} />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Passkey ile Giriş</span>
      </div>
      <div className="mb-4 flex flex-col items-center gap-3 rounded border border-black/10 bg-black/[0.02] py-6">
        <Fingerprint className="h-10 w-10 text-black/30" strokeWidth={1.25} />
        <span className="text-xs text-black/50">Biyometrik doğrulamayı kullanın</span>
      </div>
      <div className="rounded bg-black py-2 text-center">
        <span className="text-xs font-semibold text-white">Passkey Kullan</span>
      </div>
    </div>
  );
}

function ScreenPlatforms() {
  return (
    <div className="w-96 rounded-lg border border-black/15 bg-white p-10">
      <div className="mb-4">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Bağlı Platformlar</span>
      </div>
      {[
        { icon: Monitor, label: "Web Portalları", status: "3 uygulama" },
        { icon: Smartphone, label: "Mobil Uygulamalar", status: "iOS + Android" },
        { icon: Tv, label: "Smart TV", status: "4 platform" },
      ].map(({ icon: Icon, label, status }) => (
        <div key={label} className="flex items-center gap-3 border-t border-black/10 py-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded border border-black/15">
            <Icon className="h-4 w-4 text-black/50" strokeWidth={1.75} />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium">{label}</div>
            <div className="font-mono text-[10px] text-black/40">{status}</div>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-black/30" />
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Scrolling columns — two columns, opposite directions
 * ---------------------------------------------------------------- */

const COL_A = [ScreenLogin, ScreenMFA, ScreenPasskey];
const COL_B = [ScreenConsent, ScreenProfile, ScreenPlatforms];

function ScrollColumn({ screens, direction }: { screens: Array<() => React.JSX.Element>; direction: "up" | "down" }) {
  // Duplicate for seamless loop
  const items = [...screens, ...screens];
  const animClass = direction === "up" ? "animate-scroll-up" : "animate-scroll-down";

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden">
      <div className={`flex flex-col gap-4 ${animClass}`}>
        {items.map((Screen, i) => (
          <Screen key={i} />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Corner marks
 * ---------------------------------------------------------------- */

const CORNER_POSITIONS = [
  "left-3 top-3 sm:left-5 sm:top-5 md:left-8 md:top-8",
  "right-3 top-3 sm:right-5 sm:top-5 md:right-8 md:top-8",
  "bottom-3 left-3 sm:bottom-5 sm:left-5 md:bottom-8 md:left-8",
  "bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-8 md:right-8",
];

/* ---------------------------------------------------------------- *
 * Slide
 * ---------------------------------------------------------------- */

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

      <Watermark>01</Watermark>

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
        <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="faded" className="hidden sm:inline">
          Nisan 2026
        </Typography>
      </header>

      {/* Main stage */}
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row lg:items-stretch">

        {/* Left — Title area */}
        <div className="flex flex-col justify-center px-5 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16 lg:flex-1">
          <h1 className="font-semibold leading-[0.85] tracking-[-0.04em]">
            <span className="block text-[clamp(2.5rem,10vw,7.5rem)]">
              Ortak Üyelik
            </span>
            <span className="block text-[clamp(2.5rem,10vw,7.5rem)]">
              Sistemi<span className="text-black/15">.</span>
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-4 sm:mt-8">
            <span aria-hidden className="h-px w-8 bg-black sm:w-12" />
            <Typography size="md" font="mono" transform="uppercase" tracking="widest" weight="medium">
              SSO Altyapısı & IAM Stratejisi
            </Typography>
          </div>

          <Typography size="md" emphasis="muted" className="mt-6 max-w-lg leading-relaxed sm:mt-8 sm:text-lg">
            Tek kimlik doğrulamasıyla tüm platformlara erişim. Açık kaynak, self-hosted, KVKK uyumlu kimlik altyapısı.
          </Typography>
        </div>

        {/* Right — Scrolling auth screens */}
        <div className="relative hidden h-full overflow-hidden lg:flex lg:w-[820px] xl:w-[860px]">
          {/* Fade masks top & bottom */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-white to-transparent" />

          <div className="flex items-start gap-4 px-4 py-8">
            <ScrollColumn screens={COL_A} direction="up" />
            <ScrollColumn screens={COL_B} direction="down" />
          </div>
        </div>

        {/* Mobile fallback — single static card */}
        <div className="flex items-center justify-center px-5 pb-10 lg:hidden">
          <ScreenLogin />
        </div>
      </div>
    </section>
  );
}
