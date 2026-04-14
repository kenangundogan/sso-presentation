import { Typography } from "../components/typography";
import { BulletList } from "../components/bullet-list";
import { Roadmap } from "../components/roadmap";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

type Phase = { n: string; title: string; days: string; items: string[] };

const PHASES: Phase[] = [
  {
    n: "01",
    title: "Analiz & Keşif",
    days: "1. HAFTA",
    items: [
      "Mevcut sistem envanteri ve kullanıcı akışlarının haritalanması",
      "Platform bazlı entegrasyon noktalarının belirlenmesi",
      "Kimlik veri modeli ve kullanıcı göçü gereksinimlerinin çıkarılması",
      "Teknik gereksinim dokümanının hazırlanması",
    ],
  },
  {
    n: "02",
    title: "Mimari Tasarım",
    days: "2. HAFTA",
    items: [
      "IdP mimari kararları ve protokol seçimi (OIDC / SAML)",
      "Multi-tenancy yapısı ve organizasyon hiyerarşisi tasarımı",
      "Güvenlik politikaları, MFA stratejisi ve KVKK uyum planı",
      "Entegrasyon mimarisi dokümanı ve onay süreci",
    ],
  },
  {
    n: "03",
    title: "Altyapı Kurulumu",
    days: "3. HAFTA",
    items: [
      "Merkezi kimlik sağlayıcı (IdP) deploy ve konfigürasyon",
      "Kurumsal alan adı (auth.domain.com) ve SSL yapılandırması",
      "Google, Apple ve sosyal giriş entegrasyonları",
      "Temel organizasyon, rol ve yetki profili tanımları",
    ],
  },
  {
    n: "04",
    title: "Web Entegrasyonları",
    days: "4. HAFTA",
    items: [
      "Next.js SDK entegrasyonu ve pilot proje (web portalları)",
      "Laravel backend SSO entegrasyonu (PHP SDK + OIDC)",
      "CMS ve yönetim paneli entegrasyonları",
      "Web platformlarında SSO akışlarının fonksiyonel testi",
    ],
  },
  {
    n: "05",
    title: "Backend & Mobil",
    days: "5. HAFTA",
    items: [
      "Backend API servis entegrasyonları ve token yönetimi",
      "iOS ve Android uygulamaları için SSO geçişi",
      "Paket ve abonelik bazlı yetkilendirme kurgusu",
      "Sistemler arası güvenli token trafiği doğrulaması",
    ],
  },
  {
    n: "06",
    title: "KVKK & Smart TV",
    days: "6. HAFTA",
    items: [
      "KVKK onay metinleri ve açık rıza akış yönetimi",
      "Smart TV entegrasyonları (Tizen, WebOS, Android TV, tvOS)",
      "Kullanıcı verisi ihraç, anonimleştirme ve silme API'leri",
      "Mevcut kullanıcı verisi göçü (migration) planı ve testi",
    ],
  },
  {
    n: "07",
    title: "Test & Güvenlik",
    days: "7. HAFTA",
    items: [
      "Uçtan uca entegrasyon testleri (tüm platformlar)",
      "Bağımsız güvenlik review ve sızma testi (penetration test)",
      "Yük ve performans testleri, darboğaz optimizasyonu",
      "Kullanıcı kabul testleri (UAT) ve geri bildirim döngüsü",
    ],
  },
  {
    n: "08",
    title: "Canlıya Geçiş",
    days: "8. HAFTA",
    items: [
      "Kontrollü yayına alma (staged rollout — %10 → %50 → %100)",
      "Gerçek zamanlı izleme ve hata müdahale süreci",
      "Destek ekibi eğitimi ve operasyon el kitabı teslimi",
      "Proje kapanış raporu ve sürekli iyileştirme planı",
    ],
  },
];

export default function RoadmapSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="06 · Yol Haritası"
      title="8 Aşamalı Uygulama Planı"
      subtitle="Analizden canlıya geçişe kadar 8 haftalık stratejik takvim. Her aşama bir öncekinin çıktısına dayanır — paralel iş kolları haftalar arası örtüşebilir."
    >
      <Roadmap className="mt-8">
        {PHASES.map((ph) => (
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
