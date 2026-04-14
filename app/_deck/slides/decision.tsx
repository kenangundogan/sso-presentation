import { Table } from "../components/table";
import { SlideShell } from "../slide-shell";
import { Typography } from "../components/typography";
import { FRAMEWORKS, type FrameworkId } from "../data/frameworks";
import type { SlideProps } from "../types";

/* ---------------------------------------------------------------- *
 * Build comparison rows from the centralized framework data.
 * Each row pulls from framework.comparison + framework meta fields.
 * ---------------------------------------------------------------- */

type Row = { kriter: string } & Record<FrameworkId, string>;

function row(kriter: string, getter: (id: FrameworkId) => string): Row {
  return FRAMEWORKS.reduce(
    (acc, fw) => ({ ...acc, [fw.id]: getter(fw.id) }),
    { kriter } as Row,
  );
}

function get(id: FrameworkId) {
  return FRAMEWORKS.find((f) => f.id === id)!;
}

const COMPARISON_DATA: ReadonlyArray<Row> = [
  // ── Teknoloji ─────────────────────────────
  row("Teknoloji / Stack", (id) => get(id).stack),
  row("İlk Yayım", (id) => get(id).firstRelease),
  row("API Stili", (id) => get(id).comparison.apiStyle),

  // ── Lisans & Yönetişim ────────────────────
  row("Lisans Modeli", (id) => get(id).license),
  row("Yönetişim", (id) => get(id).comparison.governance),
  row("Resmi Bulut", (id) => get(id).comparison.cloud),

  // ── Protokol & Yetenek ────────────────────
  row("LDAP Federation", (id) => get(id).comparison.ldap),
  row("RADIUS Protokolü", (id) => get(id).comparison.radius),
  row("SAML 2.0", (id) => get(id).comparison.saml),
  row("AI / MCP Entegresi", (id) => get(id).comparison.mcp),

  // ── Multi-tenant & Operasyon ──────────────
  row("Çoklu Kurum Yapısı", (id) => get(id).comparison.multiTenancy),
  row("Denetim Kaydı", (id) => get(id).comparison.auditLog),
  row("Yönetim Arayüzü", (id) => get(id).comparison.adminUI),

  // ── Geliştirici Deneyimi ──────────────────
  row("Resmi SDK Sayısı", (id) => get(id).comparison.sdkCount),
  row("Kurulum Zorluğu", (id) => get(id).comparison.setupDifficulty),

  // ── Genel Puan
  row("Puan (10 üzerinden)", (id) => String(get(id).score)),
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
            {FRAMEWORKS.map(({ id, name }) => (
              <Table.Cell key={id} isHead>
                <Typography size="sm" font="mono" transform="uppercase" tracking="widest" weight="medium">
                  {name}
                </Typography>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {COMPARISON_DATA.map((r) => (
            <Table.Row key={r.kriter}>
              <Table.Cell>
                <Typography size="md" emphasis="muted">{r.kriter}</Typography>
              </Table.Cell>
              {FRAMEWORKS.map(({ id }) => (
                <Table.Cell key={id}>
                  <Typography size="md" emphasis="faded">{r[id]}</Typography>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </SlideShell>
  );
}
