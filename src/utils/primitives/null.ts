/**
 * Returns true if any of the provided arguments is null.
 * @param args - List of values to check.
 */
export function hasNull(...args: unknown[]): boolean {
  return args.some((item) => item === null);
}
