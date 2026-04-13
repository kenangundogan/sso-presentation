import { Check, X } from "lucide-react";
import { BulletList } from "../components/bullet-list";
import { Card } from "../components/card";
import { SlideShell } from "../slide-shell";
import { Typography } from "../components/typography";
import type { SlideProps } from "../types";

const SCRATCH_ITEMS = [
  "Minimum 2–4 ay temel geliştirme süreci",
  "Kritik güvenlik senaryolarının (Edge case) yönetimi",
  "Şifreleme, saldırı önleme ve sürekli yama yükü",
  "Sürekli bakım ve operasyonel maliyet",
  "Bağımsız güvenlik denetimi ve sızma testi zorunluluğu",
  "Platformlar arası (Web/Mobil) entegrasyon karmaşası",
  "Global regülasyon uyumu (GDPR/KVKK) teknik yükü",
  "Kullanıcı göçü (Migration) ve veri taşıma zorlukları",
];

const FRAMEWORK_ITEMS = [
  "Birkaç günde kurulum ve temel entegrasyon",
  "Binlerce ekip tarafından test edilmiş güvenli yapı",
  "Tek tıkla MFA, Passkey ve Sosyal Giriş desteği",
  "Kendi sunucularımızda (Self-hosted) tam veri hakimiyeti",
  "Sıfır lisans maliyeti (MPL 2.0) ve özgür yapı",
  "Gelişmiş Dashboard üzerinden kolay kullanıcı yönetimi",
  "Hazır SDK'lar ile tüm platformlara anında uyum",
  "Yapay Zeka (AI/MCP) ile kullanıcı analitiği desteği",
];

export default function NotFromScratchSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="04 · Build vs Buy"
      title="Neden Sıfırdan Yazmıyoruz?"
      subtitle="Kimlik yönetimi, yüzlerce kritik güvenlik senaryosu barındıran uzmanlık gerektiren bir alandır. Hazır bir yapı kullanmak, eforumuzu ürüne odaklamamızı sağlar."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {/* Table 1: Build from Scratch */}
        <Card tone="subtle">
          <Card.Header>
            <Card.Header.Left>
              <Typography size="lg" weight="bold">
                Sıfırdan Yazılsaydı
              </Typography>
            </Card.Header.Left>
            <Card.Header.Right>
              <X className="h-4 w-4 text-black/40" strokeWidth={2.5} aria-hidden />
            </Card.Header.Right>
          </Card.Header>
          <Card.Body>
            <BulletList marker={X}>
              {SCRATCH_ITEMS.map((item, i) => (
                <BulletList.Item key={i}>
                  <Typography size="md" emphasis="muted">
                    {item}
                  </Typography>
                </BulletList.Item>
              ))}
            </BulletList>
          </Card.Body>
        </Card>

        {/* Table 2: With Logto */}
        <Card>
          <Card.Header>
            <Card.Header.Left>
              <Typography size="lg" weight="bold">
                Açık Kaynak (Logto) ile
              </Typography>
            </Card.Header.Left>
            <Card.Header.Right>
              <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            </Card.Header.Right>
          </Card.Header>
          <Card.Body>
            <BulletList marker={Check}>
              {FRAMEWORK_ITEMS.map((item, i) => (
                <BulletList.Item key={i}>
                  <Typography size="md">
                    {item}
                  </Typography>
                </BulletList.Item>
              ))}
            </BulletList>
          </Card.Body>
        </Card>
      </div>
    </SlideShell>
  );
}
