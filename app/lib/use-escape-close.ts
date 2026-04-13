import { useEffect } from "react";

/**
 * Calls `close` when the Escape key is pressed.
 * Pass `enabled = false` to temporarily disable the listener.
 */
export function useEscapeClose(close: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close, enabled]);
}
