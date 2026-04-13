import * as React from "react";
import { Typography } from "./typography";

export function PresenterInfo() {
  return (
    <div className="border-t border-black/[0.04] bg-white flex items-center justify-between px-4 py-2 pointer-events-none select-none">
      <div className="flex items-center gap-3">
        <Typography size="xs" font="mono" transform="uppercase" emphasis="faded" tracking="wider">
          Hazırlayan
        </Typography>
        <Typography size="sm" weight="semibold" font="mono">
          Kenan Gündoğan
        </Typography>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/40" />
        <Typography size="xs" font="mono" transform="uppercase" weight="medium" emphasis="faded">
          DRAFT v1.38
        </Typography>
      </div>
    </div>
  );
}

PresenterInfo.displayName = "PresenterInfo";
