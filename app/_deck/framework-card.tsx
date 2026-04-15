import { Check, Minus, Plus, Star, X } from "lucide-react";
import type { Framework, Field } from "./data/frameworks";
import { AnalysisVerdict } from "./components/analysis-verdict";
import { Badge } from "./components/badge";
import { BulletList } from "./components/bullet-list";
import { Card } from "./components/card";
import { DescriptionList } from "./components/description-list";
import { Typography } from "./components/typography";
import { SlideShell } from "./slide-shell";

export type FrameworkCardProps = {
  index: number;
  total: number;
  framework: Framework;
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
const FACT_FIELDS: ReadonlyArray<(fw: Framework) => Field<string | number>> = [
  (fw) => fw.meta.firstRelease,
  (fw) => fw.meta.stars,
  (fw) => fw.meta.contributors,
  (fw) => fw.comparison.governance,
  (fw) => fw.comparison.cloud,
  (fw) => fw.comparison.apiStyle,
  (fw) => fw.comparison.sdkCount,
  (fw) => fw.comparison.setupDifficulty,
  (fw) => fw.comparison.mfaMethods,
  (fw) => fw.comparison.rbacModel,
  (fw) => fw.comparison.socialCount,
  (fw) => fw.comparison.omniModel,
  (fw) => fw.comparison.database,
  (fw) => fw.comparison.i18nCount,
];

function SpecSheet({ fw }: { fw: Framework }) {
  const featureEntries = Object.values(fw.features);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card tone="invert">
        <Card.Header>
          <Card.Header.Left>Kimlik Kartı</Card.Header.Left>
        </Card.Header>
        <Card.Body className="flex flex-col gap-4">
          {FACT_FIELDS.map((getter) => {
            const field = getter(fw);
            return (
              <DescriptionList key={field.en} layout="default">
                <DescriptionList.Item>
                  <DescriptionList.Item.Key>{field.tr}</DescriptionList.Item.Key>
                  <DescriptionList.Item.Value>
                    <Typography font="mono" weight="semibold" size="sm">
                      {String(field.value)}
                    </Typography>
                  </DescriptionList.Item.Value>
                </DescriptionList.Item>
              </DescriptionList>
            );
          })}
        </Card.Body>
      </Card>
      <Card tone="invert">
        <Card.Header>
          <Card.Header.Left>Özellikler</Card.Header.Left>
        </Card.Header>
        <div className="grid grid-cols-1 md:grid-cols-2 flex-col gap-4">
          {featureEntries.map((field) => (
            <span
              key={field.en}
              className={`inline-flex items-center gap-2 rounded-full border p-2 font-mono text-xs ${field.value
                ? "border-white/20"
                : "opacity-50"
                }`}
            >
              {field.value ? (
                <Check className="h-3 w-3" strokeWidth={2.5} />
              ) : (
                <X className="h-3 w-3" strokeWidth={2} />
              )}
              {field.en}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function FrameworkCard({ index, total, framework: fw }: FrameworkCardProps) {
  return (
    <SlideShell
      index={index}
      total={total}
      kicker={fw.kicker}
      title={fw.meta.name.value}
    >
      <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
        <ScorePill value={fw.meta.score.value} />
        <Badge>{fw.meta.stack.tr} · {fw.meta.stack.value}</Badge>
        <Badge>{fw.meta.version.tr} · {fw.meta.version.value}</Badge>
        <Badge>{fw.meta.license.tr} · {fw.meta.license.value}</Badge>
        {fw.meta.website.value && <Badge.Link href={fw.meta.website.value}>{fw.meta.website.tr}</Badge.Link>}
        {fw.meta.repo.value && <Badge.Link href={fw.meta.repo.value}>{fw.meta.repo.tr}</Badge.Link>}
      </div>

      <SpecSheet fw={fw} />

      <div className="mt-5 grid flex-1 grid-cols-1 gap-4 sm:mt-6 md:grid-cols-2 md:gap-6">
        <Card>
          <Card.Header>
            <Card.Header.Left>{fw.content.strengths.tr}</Card.Header.Left>
            <Card.Header.Right>
              <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Card.Header.Right>
          </Card.Header>
          <Card.Body>
            <BulletList marker={Plus}>
              {fw.content.strengths.value.map((s, i) => (
                <BulletList.Item key={i}>{s}</BulletList.Item>
              ))}
            </BulletList>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Header.Left>{fw.content.weaknesses.tr}</Card.Header.Left>
            <Card.Header.Right>
              <Minus className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Card.Header.Right>
          </Card.Header>
          <Card.Body>
            <BulletList marker={Minus}>
              {fw.content.weaknesses.value.map((s, i) => (
                <BulletList.Item key={i}>{s}</BulletList.Item>
              ))}
            </BulletList>
          </Card.Body>
        </Card>
      </div>

      <AnalysisVerdict>
        <AnalysisVerdict.Result label={fw.content.verdict.tr}>{fw.content.verdict.value}</AnalysisVerdict.Result>
        {fw.content.warn.value && <AnalysisVerdict.Warning>{fw.content.warn.value}</AnalysisVerdict.Warning>}
      </AnalysisVerdict>
    </SlideShell>
  );
}
