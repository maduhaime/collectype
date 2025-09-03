/**
 * Returns true if the array is a superset of the target array, including duplicates.
 * All elements of target (including duplicates) must be present in arr.
 *
 * @paramType T - The array element type
 * @param arr - The array to check as superset
 * @param target - The array to check as subset
 * @returns True if arr is a superset of target (with duplicates), false otherwise
 *
 * @example
 * isSupersetWithDuplicates([1, 2, 2, 3], [2, 2]); // true
 * isSupersetWithDuplicates([1, 2, 3], [2, 2]); // false
 * isSupersetWithDuplicates(['a', 'b', 'b'], ['b']); // true
 */
export function isSupersetWithDuplicates<T>(arr: T[], target: T[]): boolean {
  const arrCopy = [...arr];
  for (const v of target) {
    const idx = arrCopy.indexOf(v);
    if (idx === -1) return false;
    arrCopy.splice(idx, 1);
  }
  return true;
}
