/**
 * Checks if arr contains targetArr as a contiguous subsequence.
 * @template T
 * @param {T[]} arr - The array to search in
 * @param {T[]} targetArr - The subsequence to search for
 * @returns {boolean} True if arr contains targetArr as a contiguous subsequence, false otherwise
 */
export function containsSubsequence<T>(arr: T[], targetArr: T[]): boolean {
  for (let i = 0; i <= arr.length - targetArr.length; i++) {
    if (targetArr.every((v, j) => arr[i + j] === v)) return true;
  }
  return false;
}
