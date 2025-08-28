import { objectNumberPredicate, ObjectNumberPredicate } from '../predicates/objectNumberPredicate';

// Type for objectNumberFilter function.
export type ObjectNumberFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectNumberPredicate>[2],
  target: Parameters<ObjectNumberPredicate>[3]
) => Record<string, any>[];

/**
 * Filters an array of objects based on a number property using objectNumberPredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the number property to test.
 * @param oper - The number operation to apply.
 * @param target - The target number value for comparison.
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectNumberFilter: ObjectNumberFilter = (arr, key, oper, target) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectNumberPredicate(obj, key, oper, target));
};
