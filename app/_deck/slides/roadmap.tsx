import { ArrowDown, ArrowRight } from "lucide-react";
import { Typography } from "../components/typography";
import { BulletList } from "../components/bullet-list";
import { Roadmap } from "../components/roadmap";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

type Phase = { n: string; title: string; days: string; items: string[] };

const PHASES: Phase[] = [
  {
    n: "01",
    title: "Altyapı & Konfigürasyon",
    days: "1. HAFTA",
    items: [
      "Merkezi kimlik sağlayıcı (IdP) altyapısının kurulumu",
      "Google ve Apple ile hızlı giriş entegrasyonları",
      "Kurumsal alan adı ve SSL güvenliği yapılandırması",
      "Temel organizasyon ve yetki profili tanımları",
    ],
  },
  {
    n: "02",
    title: "Platform Entegrasyonu",
    days: "2. HAFTA",
    items: [
      "Modern web framework (Next.js) SDK entegrasyonu",
      "Pilot projeler: Haber ve Radyo portalları",
      "Merkezi içerik yönetim sistemleri (CMS) uyumu",
      "SSO akışlarının kullanıcı tarafında test edilmesi",
    ],
  },
  {
    n: "03",
    title: "Servisler & Mobil Dünya",
    days: "3. HAFTA",
    items: [
      "Backend servis entegrasyonları (Laravel & API)",
      "Paket ve abonelik bazlı yetkilendirme kurgusu",
      "iOS ve Android uygulamaları için SSO geçişi",
      "Sistemler arası güvenli token trafiği yönetimi",
    ],
  },
  {
    n: "04",
    title: "KVKK & Smart TV Yayını",
    days: "4. HAFTA",
    items: [
      "KVKK onay metinleri ve açık rıza akış yönetimi",
      "Smart TV (Samsung, Apple, LG) entegrasyonları",
      "Kullanıcı verisi ihraç ve silme API desteği",
      "Performans testleri ve canlı sisteme geçiş",
    ],
  },
];

export default function RoadmapSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="06 · Yol Haritası"
      title="4 Aşamalı Uygulama Planı"
      subtitle="Yüksek hızda ve güvenli bir geçiş için 4 haftalık stratejik takvim. Altyapı kurulumundan Smart TV entegrasyonlarına kadar tüm süreçler planlanmıştır."
    >
      <Roadmap className="mt-8">
        {PHASES.map((ph, i) => (
          <Roadmap.Item key={ph.n} className="h-full">
            <Roadmap.Item.Header>
              <div className="flex items-baseline justify-between gap-4">
                <Roadmap.Item.Number>{ph.n}</Roadmap.Item.Number>
                <Roadmap.Item.Meta>
                  <Typography size="sm" font="mono" weight="bold" emphasis="muted">
                    {ph.days}
                  </Typography>
                </Roadmap.Item.Meta>
              </div>
              <Roadmap.Item.Title>
                <Typography size="lg" weight="bold">
                  {ph.title}
                </Typography>
              </Roadmap.Item.Title>
            </Roadmap.Item.Header>

            <Roadmap.Item.Content>
              <BulletList>
                {ph.items.map((it, i) => (
                  <BulletList.Item key={i}>
                    <Typography size="md" emphasis="muted">
                      {it}
                    </Typography>
                  </BulletList.Item>
                ))}
              </BulletList>
            </Roadmap.Item.Content>
          </Roadmap.Item>
        ))}
      </Roadmap>
    </SlideShell>
  );
}
