/**
 * Checks if two arrays are set-equal (same unique elements, same length).
 * @template T
 * @param {T[]} arr - The first array
 * @param {T[]} targetArr - The second array
 * @returns {boolean} True if both arrays have the same unique elements and same length
 */
export function setEquals<T>(arr: T[], targetArr: T[]): boolean {
  const setA = new Set(arr);
  const setB = new Set(targetArr);
  return setA.size === setB.size && [...setA].every((v) => setB.has(v)) && arr.length === targetArr.length;
}
