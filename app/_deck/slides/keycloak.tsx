import { getFramework } from "../data/frameworks";
import { FrameworkCard } from "../framework-card";
import type { SlideProps } from "../types";

const fw = getFramework("keycloak");

export default function KeycloakSlide(p: SlideProps) {
  return (
    <FrameworkCard
      index={p.index}
      total={p.total}
      kicker={fw.kicker}
      name={fw.name}
      stack={fw.stack}
      version={fw.version}
      license={fw.license}
      score={fw.score}
      website={fw.website}
      repo={fw.repo}
      facts={{
        firstRelease: fw.firstRelease,
        stars: fw.stars,
        contributors: fw.contributors,
        governance: fw.comparison.governance,
        cloud: fw.comparison.cloud,
        apiStyle: fw.comparison.apiStyle,
        sdkCount: fw.comparison.sdkCount,
        setupDifficulty: fw.comparison.setupDifficulty,
      }}
      features={fw.features}
      strengths={[...fw.content.strengths]}
      weaknesses={[...fw.content.weaknesses]}
      verdict={fw.content.verdict}
      warn={fw.content.warn}
    />
  );
}
