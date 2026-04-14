import { Card } from "../components/card";
import { Typography } from "../components/typography";
import { DescriptionList } from "../components/description-list";
import { Badge } from "../components/badge";
import { SlideShell } from "../slide-shell";
import { FRAMEWORKS } from "../data/frameworks";
import type { SlideProps } from "../types";

export default function FrameworkOverviewSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="03 · Pazar Araştırması"
      title="Açık Kaynak Çözümler"
      subtitle="Kendi sunucularımızda barındırabileceğimiz popüler kimlik yönetimi (IAM) çözümlerinin teknoloji, güncellik ve lisans bazlı karşılaştırması."
    >
      <div className="grid flex-1 grid-cols-1 gap-4 overflow-y-auto pb-8 sm:grid-cols-2 lg:grid-cols-3">
        {FRAMEWORKS.map((f, i) => (
          <Card key={f.id} className="h-full">
            <Card.Header divider={true}>
              <Card.Header.Left>
                <Typography size="lg" weight="bold">
                  {f.name}
                </Typography>
              </Card.Header.Left>
              <Card.Header.Right>
                <Typography size="sm" font="mono" emphasis="muted">
                  {String(i + 1).padStart(2, "0")} / {FRAMEWORKS.length}
                </Typography>
              </Card.Header.Right>
            </Card.Header>

            <Card.Body>
              <DescriptionList layout="between" className="py-4">
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>Teknoloji</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono" emphasis="default">{f.stack}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>GitHub Stars</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono" weight="bold">{f.stars}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>Contributor Sayısı</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono" weight="bold">{f.contributors}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>Versiyon</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono">{f.release}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>Güncelleme</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography>{f.releaseDate}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>Lisans</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography emphasis="muted">{f.license}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
              </DescriptionList>
            </Card.Body>

            <Card.Footer>
              <Badge.Link tone="default" href={f.website}>Resmi Site</Badge.Link>
              <Badge.Link tone="invert" href={f.repo}>Kaynak Kod</Badge.Link>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </SlideShell>
  );
}
