import * as React from "react";
import { cn } from "../../lib/utils";
import { Typography } from "./typography";

export interface RoadmapProps {
  className?: string;
  children: React.ReactNode;
}

export interface RoadmapItemProps {
  className?: string;
  children: React.ReactNode;
}
function RoadmapRoot({ className, children }: RoadmapProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4", className)}>
      {children}
    </div>
  );
}
RoadmapRoot.displayName = "Roadmap";

function RoadmapItem({ className, children }: RoadmapItemProps) {
  return (
    <div className={cn("group relative flex flex-col border border-black bg-white", className)}>
      {children}
    </div>
  );
}
RoadmapItem.displayName = "Roadmap.Item";

function RoadmapItemHeader({ className, children }: RoadmapItemProps) {
  return (
    <div className={cn("flex flex-col gap-3 p-4 border-b border-black sm:p-5 sm:gap-4", className)}>
      {children}
    </div>
  );
}
RoadmapItemHeader.displayName = "Roadmap.Item.Header";

function RoadmapItemNumber({ className, children }: RoadmapItemProps) {
  return (
    <Typography
      size="4xl"
      font="mono"
      weight="light"
      emphasis="ghost"
      tracking="widest"
      className={className}
    >
      {children}
    </Typography>
  );
}
RoadmapItemNumber.displayName = "Roadmap.Item.Number";

function RoadmapItemTitle({ className, children }: RoadmapItemProps) {
  return (
    <Typography
      as="h3"
      size="xl"
      weight="bold"
      className={className}
    >
      {children}
    </Typography>
  );
}
RoadmapItemTitle.displayName = "Roadmap.Item.Title";

function RoadmapItemMeta({ className, children }: RoadmapItemProps) {
  return (
    <Typography
      size="sm"
      font="mono"
      transform="uppercase"
      emphasis="faded"
      tracking="wide"
      className={className}
    >
      {children}
    </Typography>
  );
}
RoadmapItemMeta.displayName = "Roadmap.Item.Meta";

function RoadmapItemContent({ className, children }: RoadmapItemProps) {
  return (
    <div className={cn("flex flex-col gap-3 p-4 sm:p-5", className)}>
      {children}
    </div>
  );
}
RoadmapItemContent.displayName = "Roadmap.Item.Content";

export const Roadmap = Object.assign(RoadmapRoot, {
  Item: Object.assign(RoadmapItem, {
    Header: RoadmapItemHeader,
    Number: RoadmapItemNumber,
    Title: RoadmapItemTitle,
    Meta: RoadmapItemMeta,
    Content: RoadmapItemContent,
  }),
});
