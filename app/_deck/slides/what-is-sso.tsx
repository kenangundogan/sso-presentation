import { Code, Target } from "lucide-react";
import { BulletList } from "../components/bullet-list";
import { Card } from "../components/card";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import { SLIDE_HEADERS, PRODUCT_POINTS, TECHNICAL_POINTS, SSO_EXAMPLES } from "../data/slides";
import type { SlideProps } from "../types";

export default function WhatIsSSOSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.whatIsSso.kicker}
      title={SLIDE_HEADERS.whatIsSso.title}
      subtitle={SLIDE_HEADERS.whatIsSso.subtitle}
    >
      <div className="flex flex-1 flex-col gap-5 sm:gap-6">
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <Card tone="default">
            <Card.Header>
              <Card.Header.Left>Ürün / İş Tarafı</Card.Header.Left>
              <Card.Header.Right>
                <Target className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              </Card.Header.Right>
            </Card.Header>
            <Card.Body>
              <Typography size="md" emphasis="muted">
                Son kullanıcının gözünden:
              </Typography>
              <BulletList>
                {PRODUCT_POINTS.map((s, i) => (
                  <BulletList.Item key={i}>{s}</BulletList.Item>
                ))}
              </BulletList>
            </Card.Body>
          </Card>
          <Card tone="invert">
            <Card.Header>
              <Card.Header.Left>Teknik Taraf</Card.Header.Left>
              <Card.Header.Right>
                <Code className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              </Card.Header.Right>
            </Card.Header>
            <Card.Body>
              <Typography size="md" emphasis="muted">
                Mimarin gözünden:
              </Typography>
              <BulletList>
                {TECHNICAL_POINTS.map((s, i) => (
                  <BulletList.Item key={i}>{s}</BulletList.Item>
                ))}
              </BulletList>
            </Card.Body>
          </Card>
        </div>
        <Card tone="subtle">
          <Card.Header divider={false} className="mb-3 items-center sm:mb-4">
            <Card.Header.Left>
              <span aria-hidden className="h-px w-6 bg-black sm:w-10" />
              Tanıdık Örnekler
            </Card.Header.Left>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-7">
              {SSO_EXAMPLES.map(([provider, apps]) => (
                <div
                  key={provider}
                  className="flex flex-col border-l-2 border-black pl-3 sm:pl-4"
                >
                  <span className="font-mono text-sm uppercase tracking-[0.2em] text-black">
                    {provider}
                  </span>
                  <span className="mt-1 font-mono text-sm text-black/65">
                    {apps}
                  </span>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>
    </SlideShell>
  );
}
