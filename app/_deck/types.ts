import type { ComponentType } from "react";
export type SlideProps = {
  index: number;
  total: number;
};
export type SlideComponent = ComponentType<SlideProps>;
