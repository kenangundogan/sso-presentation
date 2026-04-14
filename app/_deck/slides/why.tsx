import { ArrowDown, ArrowUp, Check, X } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { SlideShell } from "../slide-shell";
import { Typography } from "../components/typography";
import { SLIDE_HEADERS, WHY_ROWS, WHY_IMPACTS } from "../data/slides";
import type { SlideProps } from "../types";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
const ICON_MAP: Record<string, IconType> = { up: ArrowUp, down: ArrowDown };

const GRID_COLS = "sm:grid-cols-[minmax(110px,160px)_1fr_1fr]";

export default function WhySlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.why.kicker}
      title={SLIDE_HEADERS.why.title}
      subtitle={SLIDE_HEADERS.why.subtitle}
    >
      <div className="flex flex-1 flex-col gap-5 sm:gap-6">
        <div className="overflow-hidden border border-black">
          <div className={`hidden border-b border-black sm:grid ${GRID_COLS}`}>
            <div className="border-r border-black bg-black/[0.04] px-5 py-3">
              <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="muted">
                Alan
              </Typography>
            </div>
            <div className="border-r border-black bg-black px-5 py-3">
              <Typography size="sm" font="mono" transform="uppercase" tracking="widest" weight="medium" className="text-white">
                Mevcut Yapı
              </Typography>
            </div>
            <div className="bg-white px-5 py-3">
              <Typography size="sm" font="mono" transform="uppercase" tracking="widest" weight="medium">
                Yeni (SSO) Yapı
              </Typography>
            </div>
          </div>
          {WHY_ROWS.map((r, i) => (
            <div
              key={r.area}
              className={`grid grid-cols-1 ${GRID_COLS} ${i === WHY_ROWS.length - 1 ? "" : "border-b border-black/15"
                }`}
            >
              <div className="border-b border-dashed border-black/20 bg-black/[0.025] px-5 py-2.5 sm:border-b-0 sm:border-r sm:border-solid sm:border-black/15 sm:px-5 sm:py-4">
                <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="muted">
                  {r.area}
                </Typography>
              </div>
              <div className="border-b border-dashed border-black/15 px-5 py-3 sm:border-b-0 sm:border-r sm:border-solid sm:border-black/15 sm:px-5 sm:py-4">
                <div className="flex items-start">
                  <X className="mr-2 mt-1 h-3.5 w-3.5 flex-shrink-0 text-black/40 sm:hidden" strokeWidth={2} />
                  <Typography size="md" emphasis="muted" className="leading-snug">
                    {r.now}
                  </Typography>
                </div>
              </div>
              <div className="px-5 py-3 sm:px-5 sm:py-4">
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-3.5 w-3.5 flex-shrink-0 text-black sm:hidden" strokeWidth={2.5} />
                  <Typography size="md" weight="medium" className="leading-snug">
                    {r.sso}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 border border-black bg-black/[0.02] px-5 py-5 sm:px-8 sm:py-7">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-black sm:w-10" />
              <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="muted">
                Süreç Etkisi
              </Typography>
            </div>
            <Typography size="md" emphasis="muted" className="max-w-3xl leading-relaxed">
              Kullanıcı kimlik bilgilerinin ve oturum yönetiminin tek bir merkezden (Identity Provider) yürütülmesinin operasyonel, teknik ve güvenlik odaklı somut sonuçları.
            </Typography>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-10 sm:gap-y-4 pt-2 border-t border-black/5">
            {WHY_IMPACTS.map(({ icon, label }) => {
              const Icon = ICON_MAP[icon];
              return (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-black/20 bg-white sm:h-8 sm:w-8">
                    <Icon className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                  <Typography size="base" weight="semibold">
                    {label}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
