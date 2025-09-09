/**
 * Returns true if any of the provided arguments is undefined.
 * Useful for quickly checking the presence of undefined values in a list.
 *
 * @template T - The argument type (inferred)
 * @param args - List of values to check
 * @returns True if at least one argument is undefined, false otherwise
 *
 * @example
 * hasUndefined(1, undefined, 3); // true
 * hasUndefined('a', 'b', 'c'); // false
 */
export function hasUndefined<T = unknown>(...args: T[]): boolean {
  return args.some((item) => item === undefined);
}
