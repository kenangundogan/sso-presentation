import { Card } from "../components/card";
import { Typography } from "../components/typography";
import { DescriptionList } from "../components/description-list";
import { Badge } from "../components/badge";
import { SlideShell } from "../slide-shell";
import { FRAMEWORKS } from "../data/frameworks";
import { SLIDE_HEADERS } from "../data/slides";
import type { SlideProps } from "../types";

export default function FrameworkOverviewSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.frameworkOverview.kicker}
      title={SLIDE_HEADERS.frameworkOverview.title}
      subtitle={SLIDE_HEADERS.frameworkOverview.subtitle}
    >
      <div className="grid flex-1 grid-cols-1 gap-4 overflow-y-auto pb-8 sm:grid-cols-2 lg:grid-cols-3">
        {FRAMEWORKS.map((fw, i) => (
          <Card key={fw.id} className="h-full">
            <Card.Header divider={true}>
              <Card.Header.Left>
                <Typography size="lg" weight="bold">{fw.meta.name.value}</Typography>
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
                  <DescriptionList.Item.Key>{fw.meta.stack.tr}</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono" emphasis="default">{fw.meta.stack.value}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>{fw.meta.stars.tr}</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono" weight="bold">{fw.meta.stars.value}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>{fw.meta.contributors.tr}</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono" weight="bold">{fw.meta.contributors.value}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>{fw.meta.version.tr}</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono">{fw.meta.release.value}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>{fw.meta.releaseDate.tr}</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography>{fw.meta.releaseDate.value}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>{fw.meta.license.tr}</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography emphasis="muted">{fw.meta.license.value}</Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
              </DescriptionList>
            </Card.Body>

            <Card.Footer>
              <Badge.Link tone="default" href={fw.meta.website.value}>{fw.meta.website.tr}</Badge.Link>
              <Badge.Link tone="invert" href={fw.meta.repo.value}>{fw.meta.repo.tr}</Badge.Link>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </SlideShell>
  );
}
