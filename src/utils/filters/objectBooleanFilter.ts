import { objectBooleanPredicate, ObjectBooleanPredicate } from '../predicates/objectBooleanPredicate';

// Type for objectBooleanFilter function.
export type ObjectBooleanFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectBooleanPredicate>[2],
  target: Parameters<ObjectBooleanPredicate>[3]
) => Record<string, any>[];

/**
 * Filters an array of objects based on a boolean property using objectBooleanPredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the boolean property to test.
 * @param oper - The boolean operation to apply.
 * @param target - The target boolean value for comparison.
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectBooleanFilter: ObjectBooleanFilter = (arr, key, oper, target) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectBooleanPredicate(obj, key, oper, target));
};
