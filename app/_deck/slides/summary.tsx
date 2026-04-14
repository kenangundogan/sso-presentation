import { Check } from "lucide-react";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

const BULLETS = [
  "Açık Kaynak (MPL 2.0) — Sıfır lisans maliyeti ve özgür altyapı",
  "8 Haftalık Uygulama Planı — Analiz · Tasarım · Kurulum · Entegrasyon · Test · Canlıya Geçiş",
  "KVKK & Yerel Veri Uyumu — Tüm veriler kendi sunucularımızda",
  "Geniş Kimlik Kaynağı — 29+ sosyal sağlayıcı · E-posta · SMS · Passkey · Enterprise SSO",
  "Bütünleşik Deneyim — Web, Mobil ve Smart TV'de tekil kimlik",
  "Esnek & Modüler Yapı — Bağımsız uygulamalar arası kolay entegrasyon",
  "SOC 2 Type II Sertifikalı — Argon2 hash · Aktif geliştirme · Geniş topluluk",
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
      <ul className="flex flex-col gap-2 lg:gap-3">
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
    </SlideShell>
  );
}
