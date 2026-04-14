import { Check } from "lucide-react";
import { Card } from "../components/card";
import { Table } from "../components/table";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import {
  SLIDE_HEADERS,
  ENTERPRISE_PLATFORMS,
  ENTERPRISE_VS_OPENSOURCE,
} from "../data/slides";
import type { SlideProps } from "../types";

export default function EnterpriseAlternativesSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.enterpriseAlternatives.kicker}
      title={SLIDE_HEADERS.enterpriseAlternatives.title}
      subtitle={SLIDE_HEADERS.enterpriseAlternatives.subtitle}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ENTERPRISE_PLATFORMS.map((pl) => (
          <Card key={pl.name} tone="default" className="flex flex-col">
            <Card.Header>
              <Card.Header.Left>
                <Typography size="lg" weight="bold">{pl.name}</Typography>
              </Card.Header.Left>
              <Card.Header.Right>
                {pl.selfHosted ? (
                  <Check className="h-4 w-4 text-black" strokeWidth={2.5} />
                ) : (
                  <Typography size="sm" font="mono" emphasis="faded">SaaS</Typography>
                )}
              </Card.Header.Right>
            </Card.Header>
            <Card.Body className="flex flex-1 flex-col gap-3">
              <Typography size="md" emphasis="muted" className="leading-relaxed">
                {pl.differentiator}
              </Typography>
              <div className="mt-auto border-t border-black/10 pt-3">
                <Typography size="sm" font="mono" emphasis="muted">
                  {pl.protocols}
                </Typography>
              </div>
            </Card.Body>
            <Card.Footer>
              <Typography size="sm" emphasis="muted" className="leading-snug">
                ⚠ {pl.limitation}
              </Typography>
            </Card.Footer>
          </Card>
        ))}
      </div>

      <Table minWidth="700px" className="mt-6">
        <Table.Header>
          <Table.Row divider={false}>
            {["Endişe", "Ticari Platform", "Açık Kaynak"].map((h) => (
              <Table.Cell key={h} isHead>
                <Typography size="sm" font="mono" transform="uppercase" tracking="widest" weight="medium">
                  {h}
                </Typography>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ENTERPRISE_VS_OPENSOURCE.map((row) => (
            <Table.Row key={row.concern}>
              <Table.Cell>
                <Typography size="md" weight="medium">{row.concern}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography size="md" emphasis="faded">{row.commercial}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography size="md" weight="medium">{row.openSource}</Typography>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </SlideShell>
  );
}
