/**
 * Checks if arr is a superset of targetArr, including duplicates.
 * All elements of targetArr (including duplicates) must be present in arr.
 * @template T
 * @param {T[]} arr - The array to check as superset
 * @param {T[]} targetArr - The array to check as subset
 * @returns {boolean} True if arr is a superset of targetArr (with duplicates), false otherwise
 */
export function isSupersetWithDuplicates<T>(arr: T[], targetArr: T[]): boolean {
  const arrCopy = [...arr];
  for (const v of targetArr) {
    const idx = arrCopy.indexOf(v);
    if (idx === -1) return false;
    arrCopy.splice(idx, 1);
  }
  return true;
}
