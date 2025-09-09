/**
 * Returns true if the array contains the target array as a contiguous subsequence.
 * Useful for checking if a sequence of values appears in order within another array.
 *
 * @template T - The array element type
 * @param arr - The array to search in
 * @param target - The subsequence to search for
 * @returns True if arr contains target as a contiguous subsequence, false otherwise
 *
 * @example
 * containsSubsequence([1, 2, 3, 4, 5], [2, 3, 4]); // true
 * containsSubsequence(['a', 'b', 'c'], ['b', 'c']); // true
 * containsSubsequence([1, 2, 3], [3, 2]); // false
 */
export function containsSubsequence<T>(arr: T[], target: T[]): boolean {
  for (let i = 0; i <= arr.length - target.length; i++) {
    if (target.every((v, j) => arr[i + j] === v)) return true;
  }
  return false;
}
