import { useEffect, type RefObject } from "react";

/**
 * Calls `handler` when a `mousedown` happens outside the referenced element.
 * Pass `enabled = false` to temporarily disable the listener.
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent) => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return;
    const listener = (event: MouseEvent) => {
      const node = ref.current;
      if (!node || node.contains(event.target as Node)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler, enabled]);
}
