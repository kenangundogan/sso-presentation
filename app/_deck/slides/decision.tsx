import { Table } from "../components/table";
import { SlideShell } from "../slide-shell";
import { Typography } from "../components/typography";
import { FRAMEWORKS, type Framework, type FrameworkId, type Field } from "../data/frameworks";
import { SLIDE_HEADERS } from "../data/slides";
import type { SlideProps } from "../types";

type Row = { label: string } & Record<FrameworkId, string>;

function row(getter: (fw: Framework) => Field<string | number | boolean>): Row {
  const first = getter(FRAMEWORKS[0]);
  return FRAMEWORKS.reduce(
    (acc, fw) => ({ ...acc, [fw.id]: String(getter(fw).value) }),
    { label: first.tr } as Row,
  );
}

const COMPARISON_DATA: ReadonlyArray<Row> = [

  row((fw) => fw.meta.stack),
  row((fw) => fw.meta.firstRelease),
  row((fw) => fw.comparison.apiStyle),

  row((fw) => fw.meta.license),
  row((fw) => fw.comparison.governance),
  row((fw) => fw.comparison.cloud),

  row((fw) => fw.comparison.ldap),
  row((fw) => fw.comparison.radius),
  row((fw) => fw.comparison.saml),
  row((fw) => fw.comparison.mcp),

  row((fw) => fw.comparison.multiTenancy),
  row((fw) => fw.comparison.auditLog),
  row((fw) => fw.comparison.adminUI),

  row((fw) => fw.comparison.sdkCount),
  row((fw) => fw.comparison.setupDifficulty),

  row((fw) => fw.meta.score),
];

export default function DecisionSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.decision.kicker}
      title={SLIDE_HEADERS.decision.title}
      subtitle={SLIDE_HEADERS.decision.subtitle}
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
