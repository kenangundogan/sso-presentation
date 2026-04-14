import { Check, Minus, Plus, Star, X } from "lucide-react";
import type { FrameworkFeatures } from "./data/frameworks";
import { AnalysisVerdict } from "./components/analysis-verdict";
import { Badge } from "./components/badge";
import { BulletList } from "./components/bullet-list";
import { Card } from "./components/card";
import { DescriptionList } from "./components/description-list";
import { Typography } from "./components/typography";
import { SlideShell } from "./slide-shell";

export type FrameworkFacts = {
  firstRelease: string;
  stars: string;
  contributors: string;
  governance: string;
  cloud: string;
  apiStyle: string;
  sdkCount: string;
  setupDifficulty: string;
};

export type FrameworkCardProps = {
  index: number;
  total: number;
  kicker: string;
  name: string;
  stack: string;
  version: string;
  license: string;
  score: number;
  selected?: boolean;
  website?: string;
  repo?: string;
  facts?: FrameworkFacts;
  features?: FrameworkFeatures;
  strengths: string[];
  weaknesses: string[];
  verdict: string;
  warn?: string;
};

function ScorePill({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-black px-2.5 py-1 sm:px-3">
      <Star className="h-3 w-3" strokeWidth={1.5} fill="white" stroke="white" />
      <span className="font-mono text-xs font-bold tabular-nums text-white">
        {value}/10
      </span>
    </span>
  );
}

/* ---------------------------------------------------------------- *
 * Spec Sheet — facts + features in a single Card
 * ---------------------------------------------------------------- */

const FACT_ITEMS: ReadonlyArray<{ key: keyof FrameworkFacts; label: string }> = [
  { key: "firstRelease", label: "İlk Yayım" },
  { key: "stars", label: "GitHub Stars" },
  { key: "contributors", label: "Contributor" },
  { key: "governance", label: "Yönetişim" },
  { key: "cloud", label: "Resmi Bulut" },
  { key: "apiStyle", label: "API Stili" },
  { key: "sdkCount", label: "SDK Sayısı" },
  { key: "setupDifficulty", label: "Kurulum" },
];

const FEATURE_ITEMS: ReadonlyArray<{ key: keyof FrameworkFeatures; label: string }> = [
  { key: "openSource", label: "Açık Kaynak" },
  { key: "selfHosted", label: "Self-Hosted" },
  { key: "managedCloud", label: "Yönetilen Bulut" },
  { key: "multiTenancy", label: "Multi-Tenancy" },
  { key: "oauth", label: "OAuth / OIDC" },
  { key: "saml", label: "SAML 2.0" },
  { key: "ldap", label: "LDAP" },
  { key: "scim", label: "SCIM 2.0" },
  { key: "mfa", label: "MFA / Passkey" },
  { key: "sdkNextJs", label: "SDK (Next.js/TS)" },
  { key: "securityAudit", label: "Güvenlik Denetimi" },
  { key: "mcp", label: "AI / MCP" },
];

function SpecSheet({ facts, features }: { facts: FrameworkFacts; features: FrameworkFeatures }) {
  return (
    <Card tone="subtle">
      <Card.Header>
        <Card.Header.Left>Kimlik Kartı</Card.Header.Left>
      </Card.Header>
      <Card.Body className="flex flex-col gap-4">
        {/* Facts — key/value grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 lg:grid-cols-2 xl:grid-cols-4">
          {FACT_ITEMS.map(({ key, label }) => (
            <DescriptionList key={key} layout="default">
              <DescriptionList.Item>
                <DescriptionList.Item.Key>{label}</DescriptionList.Item.Key>
                <DescriptionList.Item.Value>
                  <Typography font="mono" weight="semibold" size="sm">{facts[key]}</Typography>
                </DescriptionList.Item.Value>
              </DescriptionList.Item>
            </DescriptionList>
          ))}
        </div>

        {/* Features — inline badge pills */}
        <div className="flex flex-wrap gap-1.5 border-t border-black/10 pt-3">
          {FEATURE_ITEMS.map(({ key, label }) => (
            <span
              key={key}
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-xs ${features[key]
                ? "border-black/20 bg-black/[0.04] text-black"
                : "border-black/8 text-black/30"
                }`}
            >
              {features[key] ? (
                <Check className="h-3 w-3" strokeWidth={2.5} />
              ) : (
                <X className="h-3 w-3" strokeWidth={2} />
              )}
              {label}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

/* ---------------------------------------------------------------- *
 * Main Card
 * ---------------------------------------------------------------- */

export function FrameworkCard(p: FrameworkCardProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker={p.kicker}
      title={
        <span className="flex flex-wrap items-center gap-3 sm:gap-5">
          {p.name}
          {p.selected && (
            <span className="inline-flex items-center gap-1.5 rounded bg-black px-2 py-0.5 font-mono text-sm uppercase tracking-[0.18em] text-white sm:px-3 sm:py-1 sm:tracking-[0.2em]">
              <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
              Seçilen
            </span>
          )}
        </span>
      }
    >
      <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
        <Badge>Stack · {p.stack}</Badge>
        <Badge>Sürüm · {p.version}</Badge>
        <Badge>Lisans · {p.license}</Badge>
        <ScorePill value={p.score} />
        {p.website ? <Badge.Link href={p.website}>Site</Badge.Link> : null}
        {p.repo ? <Badge.Link href={p.repo}>Repo</Badge.Link> : null}
      </div>

      {p.facts && p.features && <SpecSheet facts={p.facts} features={p.features} />}

      <div className="mt-5 grid flex-1 grid-cols-1 gap-4 sm:mt-6 md:grid-cols-2 md:gap-6">
        <Card>
          <Card.Header>
            <Card.Header.Left>Güçlü Yönler</Card.Header.Left>
            <Card.Header.Right>
              <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Card.Header.Right>
          </Card.Header>
          <Card.Body>
            <BulletList marker={Plus}>
              {p.strengths.map((s, i) => (
                <BulletList.Item key={i}>{s}</BulletList.Item>
              ))}
            </BulletList>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Header.Left>Zayıf Yönler</Card.Header.Left>
            <Card.Header.Right>
              <Minus className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Card.Header.Right>
          </Card.Header>
          <Card.Body>
            <BulletList marker={Minus}>
              {p.weaknesses.map((s, i) => (
                <BulletList.Item key={i}>{s}</BulletList.Item>
              ))}
            </BulletList>
          </Card.Body>
        </Card>
      </div>

      <AnalysisVerdict>
        <AnalysisVerdict.Result>{p.verdict}</AnalysisVerdict.Result>
        {p.warn && <AnalysisVerdict.Warning>{p.warn}</AnalysisVerdict.Warning>}
      </AnalysisVerdict>
    </SlideShell>
  );
}
