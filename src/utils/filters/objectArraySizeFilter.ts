import { objectArraySizePredicate, ObjectArraySizePredicate } from '../predicates/objectArraySizePredicate';

// Type for objectArraySizeFilter function.
export type ObjectArraySizeFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectArraySizePredicate>[2],
  num?: Parameters<ObjectArraySizePredicate>[3]
) => Record<string, any>[];

/**
 * Filters an array of objects based on the size of an array property using objectArraySizePredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the array property to test.
 * @param oper - The array size operation to apply.
 * @param num - The size value to compare (if applicable).
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectArraySizeFilter: ObjectArraySizeFilter = (arr, key, oper, num) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectArraySizePredicate(obj, key, oper, num));
};
