import { Check, Minus, Plus, Star } from "lucide-react";
import { AnalysisVerdict } from "./components/analysis-verdict";
import { Badge } from "./components/badge";
import { BulletList } from "./components/bullet-list";
import { Card } from "./components/card";
import { SlideShell } from "./slide-shell";

export type FrameworkCardProps = {
  index: number;
  total: number;
  kicker: string;
  name: string;
  stack: string;
  version: string;
  license: string;
  /** Filled-star count out of 5 (e.g. 4 → ★★★★☆). */
  score: number;
  selected?: boolean;
  /** Marketing site URL — rendered as a "Site" link badge. */
  website?: string;
  /** Source repository URL — rendered as a "Repo" link badge. */
  repo?: string;
  strengths: string[];
  weaknesses: string[];
  verdict: string;
  warn?: string;
};

function ScorePill({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2.5 py-1 sm:px-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3 w-3"
          strokeWidth={1.5}
          fill={i < value ? "white" : "transparent"}
          stroke="white"
        />
      ))}
    </span>
  );
}

/**
 * Reusable "framework analysis" slide template.
 * Used by all 6 framework comparison slides (Keycloak, Authentik, Zitadel, Logto, ...).
 */
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

      <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
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
