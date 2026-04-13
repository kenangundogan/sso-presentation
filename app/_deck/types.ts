import type { ComponentType } from "react";

/** Props every slide receives from the deck orchestrator. */
export type SlideProps = {
  index: number;
  total: number;
};

/** Slide is just a component taking SlideProps. */
export type SlideComponent = ComponentType<SlideProps>;
