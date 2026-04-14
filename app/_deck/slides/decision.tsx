import { Table } from "../components/table";
import { SlideShell } from "../slide-shell";
import { Typography } from "../components/typography";
import type { SlideProps } from "../types";

/* ---------------------------------------------------------------- *
 * Frameworks (column order matches the 1/6 → 6/6 slide order)
 * ---------------------------------------------------------------- */

type FrameworkKey =
  | "keycloak"
  | "authentik"
  | "zitadel"
  | "logto"
  | "supertokens"
  | "casdoor";

const FRAMEWORKS: ReadonlyArray<{
  key: FrameworkKey;
  label: string;
  highlight?: boolean;
}> = [
    { key: "keycloak", label: "Keycloak" },
    { key: "authentik", label: "Authentik" },
    { key: "zitadel", label: "Zitadel" },
    { key: "logto", label: "Logto" },
    { key: "supertokens", label: "SuperTokens" },
    { key: "casdoor", label: "Casdoor" },
  ];

/* ---------------------------------------------------------------- *
 * Comparison data — facts cross-checked against each framework slide
 * (kept in sync with the 1/6 – 6/6 deep-dive cards).
 * ---------------------------------------------------------------- */

type Row = { kriter: string } & Record<FrameworkKey, string>;

const COMPARISON_DATA: ReadonlyArray<Row> = [
  // ── Teknoloji ─────────────────────────────
  { kriter: "Teknoloji / Stack", keycloak: "Java", authentik: "Python / Go", zitadel: "Go", logto: "TypeScript", supertokens: "Java + SDK", casdoor: "Go / React" },
  { kriter: "İlk Yayım", keycloak: "2014", authentik: "2020", zitadel: "2020", logto: "2022", supertokens: "2020", casdoor: "2021" },
  { kriter: "API Stili", keycloak: "REST", authentik: "REST", zitadel: "REST + gRPC + connectRPC", logto: "REST", supertokens: "REST (SDK)", casdoor: "REST" },

  // ── Lisans & Yönetişim ────────────────────
  { kriter: "Lisans Modeli", keycloak: "Apache 2.0", authentik: "MIT + EE", zitadel: "AGPL-3.0", logto: "MPL 2.0", supertokens: "Apache 2.0 + EE", casdoor: "Apache 2.0" },
  { kriter: "Yönetişim", keycloak: "CNCF Incubating", authentik: "Bağımsız şirket", zitadel: "Bağımsız şirket", logto: "Bağımsız şirket", supertokens: "Bağımsız şirket", casdoor: "Casbin ekosistemi" },
  { kriter: "Resmi Bulut", keycloak: "Red Hat (ticari)", authentik: "Enterprise tier", zitadel: "zitadel.com", logto: "cloud.logto.io", supertokens: "supertokens.com", casdoor: "casdoor.com" },

  // ── Protokol & Yetenek ────────────────────
  { kriter: "LDAP Federation", keycloak: "Yerleşik", authentik: "Outpost", zitadel: "Var", logto: "Sınırlı", supertokens: "Yok", casdoor: "Server + Client" },
  { kriter: "RADIUS Protokolü", keycloak: "Yok", authentik: "Outpost", zitadel: "Yok", logto: "Yok", supertokens: "Yok", casdoor: "Server" },
  { kriter: "SAML 2.0", keycloak: "Yerleşik", authentik: "Yerleşik", zitadel: "Yerleşik", logto: "Yerleşik", supertokens: "v11.3+", casdoor: "Yerleşik" },
  { kriter: "AI / MCP Entegresi", keycloak: "Partial", authentik: "Yok", zitadel: "Yok", logto: "Hazır", supertokens: "Yok", casdoor: "Hazır + A2A" },

  // ── Multi-tenant & Operasyon ──────────────
  { kriter: "Çoklu Kurum Yapısı", keycloak: "Realm", authentik: "Policy", zitadel: "Instance → Org → Project", logto: "Organizations", supertokens: "App + Tenant", casdoor: "Organization" },
  { kriter: "Denetim Kaydı", keycloak: "Sınırlı", authentik: "Var", zitadel: "Event-sourced (tam akış)", logto: "Sınırlı", supertokens: "Sınırlı", casdoor: "Webhook events" },
  { kriter: "Yönetim Arayüzü", keycloak: "Karmaşık", authentik: "Flow editor", zitadel: "Modern", logto: "Çok Başarılı", supertokens: "Sade dashboard", casdoor: "Yoğun (dense)" },

  // ── Geliştirici Deneyimi ──────────────────
  { kriter: "Kurulum Zorluğu", keycloak: "Zor", authentik: "Orta", zitadel: "Kolay", logto: "Çok Kolay", supertokens: "Orta (3-parça)", casdoor: "Kolay (tek binary)" },
];

export default function DecisionSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="04 · Karar"
      title="Karşılaştırma & Sonuç"
      subtitle="Teknoloji yığınımıza (Next.js, Laravel, Payload) ve ekip yetkinliklerimize en uygun çözümün belirlenmesi."
    >
      <Table minWidth="1100px">
        <Table.Header>
          <Table.Row divider={false}>
            <Table.Cell isHead>
              <Typography size="sm" font="mono" transform="uppercase" tracking="widest" weight="medium">
                Kriter
              </Typography>
            </Table.Cell>
            {FRAMEWORKS.map(({ key, label, highlight }) => (
              <Table.Cell key={key} isHead>
                <Typography
                  size="sm"
                  font="mono"
                  transform="uppercase"
                  tracking="widest"
                  weight={highlight ? "bold" : "medium"}
                >
                  {label}
                </Typography>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {COMPARISON_DATA.map((row) => (
            <Table.Row key={row.kriter}>
              <Table.Cell>
                <Typography size="md" emphasis="muted">
                  {row.kriter}
                </Typography>
              </Table.Cell>
              {FRAMEWORKS.map(({ key, highlight }) => (
                <Table.Cell key={key}>
                  <Typography
                    size="md"
                    weight={highlight ? "semibold" : "normal"}
                    emphasis={highlight ? "default" : "faded"}
                  >
                    {row[key]}
                  </Typography>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </SlideShell>
  );
}
