import { objectDateRangePredicate, ObjectDateRangePredicate } from '../predicates/objectDateRangePredicate';

// Type for objectDateRangeFilter function.
export type ObjectDateRangeFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectDateRangePredicate>[2],
  min: Parameters<ObjectDateRangePredicate>[3],
  max: Parameters<ObjectDateRangePredicate>[4]
) => Record<string, any>[];

/**
 * Filters an array of objects based on a date property within a range using objectDateRangePredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the date property to test.
 * @param oper - The range operation to apply.
 * @param min - The minimum date bound.
 * @param max - The maximum date bound.
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectDateRangeFilter: ObjectDateRangeFilter = (arr, key, oper, min, max) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectDateRangePredicate(obj, key, oper, min, max));
};
