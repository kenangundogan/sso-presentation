import { AnalysisVerdict } from "../components/analysis-verdict";
import { Table } from "../components/table";
import { SLIDE_HEADERS, PLATFORM_DATA } from "../data/slides";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

export default function PlatformsSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={SLIDE_HEADERS.platforms.kicker}
      title={SLIDE_HEADERS.platforms.title}
      subtitle={SLIDE_HEADERS.platforms.subtitle}
    >
      <Table minWidth="820px">
        <Table.Header>
          <Table.Row divider={false}>
            {["Platform", "Uygulama Alanı", "Teknoloji", "Entegrasyon", "Öngörülen Süre"].map((h) => (
              <Table.Cell key={h} isHead>
                <Typography size="sm" font="mono" transform="uppercase" emphasis="muted">
                  {h}
                </Typography>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {PLATFORM_DATA.map((row, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <div className="inline-block rounded border border-black/10 px-2 py-0.5">
                  <Typography size="xs" font="mono" transform="uppercase" weight="medium">
                    {row.type}
                  </Typography>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Typography size="md" emphasis="muted">
                  {row.scope}
                </Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography size="sm" font="mono" emphasis="faded" className="italic">
                  {row.tech}
                </Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography size="sm" font="mono">
                  {row.sdk}
                </Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography size="md" weight="medium" className="tabular-nums">
                  {row.time}
                </Typography>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <AnalysisVerdict>
        <AnalysisVerdict.Result label="Smart TV Notu">
          Smart TV'ler için "Cihaz Yetkilendirme" (Device Flow) akışı uygulanır. Kullanıcılar TV ekranındaki QR kodu telefonlarıyla tarayarak, şifre girmelerine gerek kalmadan güvenli oturum açabilirler.
        </AnalysisVerdict.Result>
      </AnalysisVerdict>
    </SlideShell>
  );
}
