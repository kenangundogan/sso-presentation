import { Check, X } from "lucide-react";
import { BulletList } from "../components/bullet-list";
import { Card } from "../components/card";
import { SlideShell } from "../slide-shell";
import { Typography } from "../components/typography";
import { SLIDE_HEADERS, SCRATCH_ITEMS, FRAMEWORK_ITEMS } from "../data/slides";
import type { SlideProps } from "../types";

export default function NotFromScratchSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.notFromScratch.kicker}
      title={SLIDE_HEADERS.notFromScratch.title}
      subtitle={SLIDE_HEADERS.notFromScratch.subtitle}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
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
        <Card>
          <Card.Header>
            <Card.Header.Left>
              <Typography size="lg" weight="bold">
                Açık Kaynak ile
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
