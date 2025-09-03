/**
 * Returns true if both arrays have the same unique elements and the same length.
 * Useful for comparing sets represented as arrays, regardless of order or duplicates.
 *
 * @paramType T - The array element type
 * @param arr - The first array
 * @param target - The second array
 * @returns True if both arrays have the same unique elements and same length
 *
 * @example
 * setEquals([1, 2, 2, 3], [3, 2, 1, 2]); // true
 * setEquals(['a', 'b'], ['b', 'a']); // true
 * setEquals([1, 2], [1, 2, 3]); // false
 */
export function setEquals<T>(arr: T[], target: T[]): boolean {
  const setA = new Set(arr);
  const setB = new Set(target);
  return setA.size === setB.size && [...setA].every((v) => setB.has(v)) && arr.length === target.length;
}
