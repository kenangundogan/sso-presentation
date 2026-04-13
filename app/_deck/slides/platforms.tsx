import { AnalysisVerdict } from "../components/analysis-verdict";
import { Table } from "../components/table";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

const PLATFORM_DATA = [
  { type: "WEB",   scope: "Sunucu Render Portalları (SSR)", tech: "Laravel",           sdk: "PHP SDK + OIDC",               time: "2–3 Gün / Portal" },
  { type: "WEB",   scope: "Modern Web Uygulamaları",        tech: "Next.js",           sdk: "@logto/next",                  time: "1–2 Gün / Uygulama" },
  { type: "WEB",   scope: "CMS ve Yönetim Panelleri",       tech: "Next.js",           sdk: "@logto/next",                  time: "1–2 Gün / Proje" },
  { type: "MOBİL", scope: "iOS & Android Uygulamaları",     tech: "React Native",      sdk: "@logto/rn",                    time: "2–3 Gün / Versiyon" },
  { type: "TV",    scope: "Samsung Tizen & LG WebOS",       tech: "JavaScript",        sdk: "@logto/browser + Device Flow", time: "3–5 Gün / OS" },
  { type: "TV",    scope: "Android TV & Google TV",         tech: "Kotlin (Native)",   sdk: "io.logto.sdk:android (Maven)", time: "2–3 Gün" },
  { type: "TV",    scope: "Apple TV (tvOS)",                tech: "Swift",             sdk: "logto-io/swift (SPM)",         time: "2–3 Gün" },
];

export default function PlatformsSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="05 · Platform & SDK"
      title="Uçtan Uca Entegrasyon Planı"
      subtitle="Eko-sistemimizdeki tüm platformlar için hazır kütüphane ve protokol desteği sayesinde, entegrasyon süreçleri standartlaştırılmıştır."
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
