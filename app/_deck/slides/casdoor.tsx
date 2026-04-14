import { getFramework } from "../data/frameworks";
import { FrameworkCard } from "../framework-card";
import type { SlideProps } from "../types";

const fw = getFramework("casdoor");

export default function CasdoorSlide(p: SlideProps) {
  return <FrameworkCard index={p.index} total={p.total} framework={fw} />;
}
