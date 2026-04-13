import { Card } from "../components/card";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "Kurumsal Kimlik",
    description:
      "Logo, renk paleti ve tipografi yönetimi. Her organizasyon veya platformun kendi görsel diline tam uyum.",
  },
  {
    title: "Özel Alan Adı",
    description:
      "auth.platform.com gibi adres desteği. Kullanıcılar her zaman güvendikleri ana adres yapısında kalır.",
  },
  {
    title: "Esnek Tasarım",
    description:
      "Web, tablet ve mobil cihazlarda tutarlı oranlar. Her ekran boyutuna uygun, yüksek okunurluk sunan arayüz.",
  },
  {
    title: "Dinamik Özelleştirme",
    description:
      "Yazılım güncellemesi (deploy) gerektirmeyen anlık görsel değişimler. Yönetim panelinden tam kontrol noktası.",
  },
];

export default function BrandingSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="05 · Marka Deneyimi"
      title="Merkezi Yönetim, Özelleştirilmiş Kimlik"
      subtitle="Tek bir altyapı üzerinden; her platform için özgün alan adları, logolar ve görsel diller tanımlanarak kişiselleştirilmiş bir deneyim sunulur."
    >
      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        {FEATURES.map((f, i) => (
          <Card key={f.title}>
            <Card.Header>
              <Card.Header.Left>
                <Typography size="sm" font="mono" transform="uppercase" emphasis="muted" tracking="wider">
                  Deneyim Alanı
                </Typography>
              </Card.Header.Left>
              <Card.Header.Right>
                <Typography size="sm" font="mono" emphasis="muted">
                  {String(i + 1).padStart(2, "0")}
                </Typography>
              </Card.Header.Right>
            </Card.Header>
            <Card.Body className="flex flex-col gap-2 pt-4">
              <Typography size="xl" weight="bold" as="h3">
                {f.title}
              </Typography>
              <Typography size="md" emphasis="muted" className="leading-relaxed">
                {f.description}
              </Typography>
            </Card.Body>
          </Card>
        ))}
      </div>
    </SlideShell>
  );
}
