/**
 * Returns true if any of the provided arguments is null.
 * Useful for quickly checking the presence of null values in a list.
 *
 * @paramType T - The argument type (inferred)
 * @param args - List of values to check
 * @returns True if at least one argument is null, false otherwise
 *
 * @example
 * hasNull(1, null, 3); // true
 * hasNull('a', 'b', 'c'); // false
 */
export function hasNull<T = unknown>(...args: T[]): boolean {
  return args.some((item) => item === null);
}
