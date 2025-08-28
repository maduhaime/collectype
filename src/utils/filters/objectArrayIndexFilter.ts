import { objectArrayIndexPredicate, ObjectArrayIndexPredicate } from '../predicates/objectArrayIndexPredicate';

// Type for objectArrayIndexFilter function.
export type ObjectArrayIndexFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectArrayIndexPredicate>[2],
  index: Parameters<ObjectArrayIndexPredicate>[3],
  target?: Parameters<ObjectArrayIndexPredicate>[4]
) => Record<string, any>[];

/**
 * Filters an array of objects based on an array index property using objectArrayIndexPredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the array property to test.
 * @param oper - The array index operation to apply.
 * @param index - The index to check.
 * @param target - The target value(s) for comparison.
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectArrayIndexFilter: ObjectArrayIndexFilter = (arr, key, oper, index, target) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectArrayIndexPredicate(obj, key, oper, index, target));
};
