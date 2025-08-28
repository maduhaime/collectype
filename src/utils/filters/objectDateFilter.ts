import { objectDatePredicate, ObjectDatePredicate } from '../predicates/objectDatePredicate';

// Type for objectDateFilter function.
export type ObjectDateFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectDatePredicate>[2],
  target: Parameters<ObjectDatePredicate>[3]
) => Record<string, any>[];

/**
 * Filters an array of objects based on a date property using objectDatePredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the date property to test.
 * @param oper - The date operation to apply.
 * @param target - The target date value for comparison.
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectDateFilter: ObjectDateFilter = (arr, key, oper, target) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectDatePredicate(obj, key, oper, target));
};
