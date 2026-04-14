import { Table } from "../components/table";
import { SlideShell } from "../slide-shell";
import { Typography } from "../components/typography";
import { FRAMEWORKS, type Framework, type FrameworkId, type Field } from "../data/frameworks";
import type { SlideProps } from "../types";

/* ---------------------------------------------------------------- *
 * Build comparison rows directly from Field<T> — labels come from
 * the field itself, no separate lookup needed.
 * ---------------------------------------------------------------- */

type Row = { label: string } & Record<FrameworkId, string>;

function row(getter: (fw: Framework) => Field<string | number | boolean>): Row {
  const first = getter(FRAMEWORKS[0]);
  return FRAMEWORKS.reduce(
    (acc, fw) => ({ ...acc, [fw.id]: String(getter(fw).value) }),
    { label: first.tr } as Row,
  );
}

const COMPARISON_DATA: ReadonlyArray<Row> = [
  // ── Teknoloji
  row((fw) => fw.meta.stack),
  row((fw) => fw.meta.firstRelease),
  row((fw) => fw.comparison.apiStyle),
  // ── Lisans & Yönetişim
  row((fw) => fw.meta.license),
  row((fw) => fw.comparison.governance),
  row((fw) => fw.comparison.cloud),
  // ── Protokol & Yetenek
  row((fw) => fw.comparison.ldap),
  row((fw) => fw.comparison.radius),
  row((fw) => fw.comparison.saml),
  row((fw) => fw.comparison.mcp),
  // ── Multi-tenant & Operasyon
  row((fw) => fw.comparison.multiTenancy),
  row((fw) => fw.comparison.auditLog),
  row((fw) => fw.comparison.adminUI),
  // ── Geliştirici Deneyimi
  row((fw) => fw.comparison.sdkCount),
  row((fw) => fw.comparison.setupDifficulty),
  // ── Genel Puan
  row((fw) => fw.meta.score),
];

export default function DecisionSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="04 · Karar"
      title="Karşılaştırma"
      subtitle="Kurumsal mimarimize ve operasyonel yetkinliklerimize en yüksek uyumu sağlayan stratejik çözümün belirlenmesi."
    >
      <Table minWidth="1100px">
        <Table.Header>
          <Table.Row divider={false}>
            <Table.Cell isHead>
              <Typography size="sm" font="mono" transform="uppercase" tracking="widest" weight="medium">
                Kriter
              </Typography>
            </Table.Cell>
            {FRAMEWORKS.map((fw) => (
              <Table.Cell key={fw.id} isHead>
                <Typography size="sm" font="mono" transform="uppercase" tracking="widest" weight="medium">
                  {fw.meta.name.value}
                </Typography>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {COMPARISON_DATA.map((r) => (
            <Table.Row key={r.label}>
              <Table.Cell>
                <Typography size="md" emphasis="muted">{r.label}</Typography>
              </Table.Cell>
              {FRAMEWORKS.map((fw) => (
                <Table.Cell key={fw.id}>
                  <Typography size="md" emphasis="faded">{r[fw.id]}</Typography>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </SlideShell>
  );
}
