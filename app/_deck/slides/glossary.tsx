import { Table } from "../components/table";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import { SLIDE_HEADERS, GLOSSARY_TERMS } from "../data/slides";
import type { SlideProps } from "../types";

export default function GlossarySlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.glossary.kicker}
      title={SLIDE_HEADERS.glossary.title}
      subtitle={SLIDE_HEADERS.glossary.subtitle}
    >
      <Table minWidth="700px">
        <Table.Header>
          <Table.Row divider={false}>
            {["Kısaltma", "Açılım", "Türkçe Karşılık"].map((h) => (
              <Table.Cell key={h} isHead>
                <Typography font="mono" transform="uppercase" tracking="widest" weight="medium">
                  {h}
                </Typography>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {GLOSSARY_TERMS.flatMap(({ group, items }) => [
            <Table.Row key={`g-${group}`} divider={false}>
              <Table.Cell className="pt-4 pb-1">
                <Typography size="xs" font="mono" transform="uppercase" tracking="widest" weight="bold" emphasis="faded">
                  {group}
                </Typography>
              </Table.Cell>
              <Table.Cell className="pt-4 pb-1">{""}</Table.Cell>
              <Table.Cell className="pt-4 pb-1">{""}</Table.Cell>
            </Table.Row>,
            ...items.map((t) => (
              <Table.Row key={t.abbr}>
                <Table.Cell>
                  <Typography size="md" font="mono" weight="bold">
                    {t.abbr}
                  </Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography size="md" emphasis="muted">
                    {t.full}
                  </Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography size="md">
                    {t.tr}
                  </Typography>
                </Table.Cell>
              </Table.Row>
            )),
          ])}
        </Table.Body>
      </Table>
    </SlideShell>
  );
}
