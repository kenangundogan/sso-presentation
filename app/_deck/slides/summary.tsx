import { Check } from "lucide-react";
import { Separator } from "../components/separator";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

const BULLETS = [
  "Açık Kaynak (MPL 2.0) — Sıfır lisans maliyeti ve özgür altyapı",
  "4 Hafta İçinde Canlıya Geçiş — Hızlı ve standartlaştırılmış süreç",
  "KVKK & Yerel Veri Uyumu — Tüm veriler kendi sunucularımızda",
  "Geniş Kimlik Kaynağı — 29+ sosyal sağlayıcı · E-posta · SMS · Passkey · Enterprise SSO",
  "Bütünleşik Deneyim — Web, Mobil ve Smart TV'de tekil kimlik",
  "Esnek & Modüler Yapı — Bağımsız uygulamalar arası kolay entegrasyon",
  "SOC 2 Type II Sertifikalı — Argon2 hash · Aktif geliştirme · Geniş topluluk",
];

const NEXT_STEPS = [
  "PoC ve İlk Kurulum",
  "Lisans Modelinin Onayı",
  "Entegrasyon Takvimi",
  "Uygulama ve Yayına Geçiş",
];

export default function SummarySlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="07 · Özet & Strateji"
      title="Yönetici Özeti"
      subtitle="Mevcut teknoloji ve ekip yapımızla tam uyum. Düşük risk, yüksek hız ve sürdürülebilir bir kimlik ekosistemi."
    >
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        <ul className="flex flex-col gap-2 lg:col-span-3 lg:gap-3">
          {BULLETS.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 border-b border-black/10 pb-2.5 last:border-b-0 sm:gap-4 sm:pb-3"
            >
              <Typography size="sm" font="mono" weight="bold" emphasis="faded" className="mt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </Typography>
              <Typography size="lg" className="flex-1 leading-snug">
                {b}
              </Typography>
              <Check
                className="mt-1 h-4 w-4 flex-shrink-0 text-black/40"
                strokeWidth={2.5}
                aria-hidden
              />
            </li>
          ))}
        </ul>

        <div className="flex flex-col border-2 border-black p-6 lg:col-span-2">
          <Typography size="xs" font="mono" transform="uppercase" weight="bold" tracking="widest" emphasis="muted" className="mb-4">
            Sonraki Adımlar
          </Typography>

          <Separator className="mb-6" />

          <ol className="flex flex-1 flex-col gap-4">
            {NEXT_STEPS.map((n, i) => (
              <li key={n} className="flex items-center gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-black">
                  <Typography size="sm" font="mono" weight="bold">
                    {i + 1}
                  </Typography>
                </span>
                <Typography size="lg" weight="medium">
                  {n}
                </Typography>
              </li>
            ))}
          </ol>

          <div className="mt-8 border-t-2 border-black pt-4 text-right">
            <Typography size="sm" font="mono" transform="uppercase" weight="bold" tracking="widest" emphasis="muted">
              Teşekkürler
            </Typography>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
