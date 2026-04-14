import { getFramework } from "../data/frameworks";
import { FrameworkCard } from "../framework-card";
import type { SlideProps } from "../types";

const fw = getFramework("keycloak");

export default function KeycloakSlide(p: SlideProps) {
  return <FrameworkCard index={p.index} total={p.total} framework={fw} />;
}
