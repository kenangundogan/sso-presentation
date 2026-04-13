export type ClassValue = string | number | false | null | undefined;

/**
 * Minimal class-name joiner — concatenates truthy class strings with spaces.
 * Use it the same way you'd use clsx for simple cases.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
