/**
 * Returns true if any of the provided arguments is undefined.
 * @param args - List of values to check.
 */
export function hasUndefined(...args: unknown[]): boolean {
  return args.some((item) => item === undefined);
}
