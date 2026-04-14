import { Typography } from "../components/typography";
import { BulletList } from "../components/bullet-list";
import { Roadmap } from "../components/roadmap";
import { SlideShell } from "../slide-shell";
import { SLIDE_HEADERS, ROADMAP_PHASES } from "../data/slides";
import type { SlideProps } from "../types";

export default function RoadmapSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.roadmap.kicker}
      title={SLIDE_HEADERS.roadmap.title}
      subtitle={SLIDE_HEADERS.roadmap.subtitle}
    >
      <Roadmap className="mt-8">
        {ROADMAP_PHASES.map((ph) => (
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
