import { objectNumberRangePredicate, ObjectNumberRangePredicate } from '../predicates/objectNumberRangePredicate';

// Type for objectNumberRangeFilter function.
export type ObjectNumberRangeFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectNumberRangePredicate>[2],
  min: Parameters<ObjectNumberRangePredicate>[3],
  max: Parameters<ObjectNumberRangePredicate>[4]
) => Record<string, any>[];

/**
 * Filters an array of objects based on a number property within a range using objectNumberRangePredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the number property to test.
 * @param oper - The range operation to apply.
 * @param min - The minimum number bound.
 * @param max - The maximum number bound.
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectNumberRangeFilter: ObjectNumberRangeFilter = (arr, key, oper, min, max) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectNumberRangePredicate(obj, key, oper, min, max));
};
