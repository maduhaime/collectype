import { objectArrayPredicate, ObjectArrayPredicate } from '../predicates/objectArrayPredicate';

// Type for objectArrayFilter function.
export type ObjectArrayFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectArrayPredicate>[2],
  target?: Parameters<ObjectArrayPredicate>[3]
) => Record<string, any>[];

/**
 * Filters an array of objects based on an array property using objectArrayPredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the array property to test.
 * @param oper - The array operation to apply.
 * @param target - The target value(s) for comparison.
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectArrayFilter: ObjectArrayFilter = (arr, key, oper, target) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectArrayPredicate(obj, key, oper, target));
};
