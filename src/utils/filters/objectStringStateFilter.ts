import { objectStringStatePredicate, ObjectStringStatePredicate } from '../predicates/objectStringStatePredicate';

// Type for objectStringStateFilter function.
export type ObjectStringStateFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectStringStatePredicate>[2]
) => Record<string, any>[];

/**
 * Filters an array of objects based on a string property state using objectStringStatePredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the string property to test.
 * @param oper - The state operation to apply (IS_EMPTY, IS_NOT_EMPTY).
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectStringStateFilter: ObjectStringStateFilter = (arr, key, oper) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectStringStatePredicate(obj, key, oper));
};
