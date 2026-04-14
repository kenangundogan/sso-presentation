import { Card } from "../components/card";
import { Typography } from "../components/typography";
import { DescriptionList } from "../components/description-list";
import { Badge } from "../components/badge";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

type Framework = {
  name: string;
  stack: string;
  license: string;
  release: string;
  releaseDate: string;
  website: string;
  repo: string;
  stars: string;
  contributors: string;
  openSource: boolean;
};

const FRAMEWORKS: Framework[] = [
  {
    name: "Keycloak",
    stack: "Java",
    license: "Apache-2.0",
    release: "v26.6.0",
    releaseDate: "5 May 2026",
    website: "https://www.keycloak.org/",
    repo: "https://github.com/keycloak/keycloak",
    stars: "33.9k",
    contributors: "1500+",
    openSource: true,
  },
  {
    name: "Authentik",
    stack: "Python · Go",
    license: "MIT + EE",
    release: "2026.2.3-rc1",
    releaseDate: "10 Şub 2026",
    website: "https://goauthentik.io/",
    repo: "https://github.com/goauthentik/authentik",
    stars: "21.0k",
    contributors: "530+",
    openSource: true,
  },
  {
    name: "Zitadel",
    stack: "Go",
    license: "AGPL-3.0",
    release: "v4.13.1",
    releaseDate: "1 Nis 2026",
    website: "https://zitadel.com/",
    repo: "https://github.com/zitadel/zitadel",
    stars: "13.5k",
    contributors: "260+",
    openSource: true,
  },
  {
    name: "Logto",
    stack: "TypeScript",
    license: "MPL-2.0",
    release: "v1.38.0",
    releaseDate: "31 Mar 2026",
    website: "https://logto.io/",
    repo: "https://github.com/logto-io/logto",
    stars: "11.9k",
    contributors: "94+",
    openSource: true,
  },
  {
    name: "SuperTokens",
    stack: "Java · çok dilli SDK",
    license: "Apache-2.0 + EE",
    release: "v11.4.3",
    releaseDate: "8 Şub 2026",
    website: "https://supertokens.com/",
    repo: "https://github.com/supertokens/supertokens-core",
    stars: "15.0k",
    contributors: "32+",
    openSource: true,
  },
  {
    name: "Casdoor",
    stack: "Go · React",
    license: "Apache-2.0",
    release: "v3.13.0",
    releaseDate: "13 Şub 2026",
    website: "https://casdoor.ai/",
    repo: "https://github.com/casdoor/casdoor",
    stars: "13.3k",
    contributors: "284+",
    openSource: true,
  },
];

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
          <Card key={f.name} className="h-full">
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
                    <Typography font="mono" emphasis="default">
                      {f.stack}
                    </Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>GitHub Stars</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono" weight="bold">
                      {f.stars}
                    </Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>Contributor Sayısı</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono" weight="bold">
                      {f.contributors}
                    </Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>Versiyon</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono">
                      {f.release}
                    </Typography>
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
                    <Typography emphasis="muted">
                      {f.license}
                    </Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
              </DescriptionList>
            </Card.Body>

            <Card.Footer>
              <Badge.Link tone="default" href={f.website}>
                Resmi Site
              </Badge.Link>
              <Badge.Link tone="invert" href={f.repo}>
                Kaynak Kod
              </Badge.Link>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </SlideShell>
  );
}
