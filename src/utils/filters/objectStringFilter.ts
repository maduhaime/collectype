import { objectStringPredicate, ObjectStringPredicate } from '../predicates/objectStringPredicate';

// Type for objectStringFilter function.
export type ObjectStringFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectStringPredicate>[2],
  target: Parameters<ObjectStringPredicate>[3]
) => Record<string, any>[];

/**
 * Filters an array of objects based on a string property using objectStringPredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the string property to test.
 * @param oper - The string operation to apply.
 * @param target - The target string value for comparison.
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectStringFilter: ObjectStringFilter = (arr, key, oper, target) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectStringPredicate(obj, key, oper, target));
};
