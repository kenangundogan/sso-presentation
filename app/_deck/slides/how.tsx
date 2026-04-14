import { Card } from "../components/card";
import { DescriptionList } from "../components/description-list";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import { SLIDE_HEADERS, FLOW_STEPS, TOKEN_TYPES } from "../data/slides";
import type { SlideProps } from "../types";

function SectionHeader({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3 sm:mb-5">
      <span aria-hidden className="h-px w-6 bg-black sm:w-10" />
      <Typography size="sm" font="mono" transform="uppercase" tracking="widest" emphasis="muted">
        {children}
      </Typography>
    </div>
  );
}

export default function HowSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.how.kicker}
      title={SLIDE_HEADERS.how.title}
      subtitle={SLIDE_HEADERS.how.subtitle}
    >
      <div className="flex flex-1 flex-col gap-6 sm:gap-8">
        <section>
          <SectionHeader>Çalışma Akışı</SectionHeader>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {FLOW_STEPS.map((step) => (
              <Card key={step.num} className="h-full">
                <Card.Header divider={false}>
                  <Card.Header.Left>
                    <Typography size="sm" font="mono" transform="uppercase" emphasis="faded">
                      {step.num}
                    </Typography>
                  </Card.Header.Left>
                  <Card.Header.Right>
                    <Typography size="xs" font="mono" transform="uppercase" emphasis="muted">
                      {step.actors}
                    </Typography>
                  </Card.Header.Right>
                </Card.Header>
                <Card.Body className="flex flex-col gap-2">
                  <Typography size="lg" weight="bold" as="h4">
                    {step.title}
                  </Typography>
                  <Typography size="md" emphasis="muted" className="leading-snug">
                    {step.detail}
                  </Typography>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>
        <section>
          <SectionHeader>Token Çeşitleri</SectionHeader>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {TOKEN_TYPES.map((token, i) => (
              <Card key={token.name} tone={i === 0 ? "invert" : "default"}>
                <Card.Header>
                  <Card.Header.Left>
                    <Typography size="sm" font="mono" transform="uppercase">
                      {token.name}
                    </Typography>
                  </Card.Header.Left>
                  <Card.Header.Right>
                    <Typography size="xs" font="mono" transform="uppercase" emphasis="muted">
                      {token.tag}
                    </Typography>
                  </Card.Header.Right>
                </Card.Header>

                <Card.Body>
                  <DescriptionList layout="between">
                    <DescriptionList.Item>
                      <DescriptionList.Item.Key>Süre</DescriptionList.Item.Key>
                      <DescriptionList.Item.Value>
                        {token.lifespan}
                      </DescriptionList.Item.Value>
                    </DescriptionList.Item>
                    <DescriptionList.Item>
                      <DescriptionList.Item.Key>Format</DescriptionList.Item.Key>
                      <DescriptionList.Item.Value>
                        {token.format}
                      </DescriptionList.Item.Value>
                    </DescriptionList.Item>
                  </DescriptionList>
                </Card.Body>

                <Card.Footer>
                  <Typography size="sm" emphasis="muted">
                    {token.note}
                  </Typography>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </SlideShell>
  );
}
