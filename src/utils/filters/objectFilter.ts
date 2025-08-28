import { objectPredicate, ObjectPredicate } from '../predicates/objectPredicate';

// Type for objectFilter function.
export type ObjectFilter = (
  arr: Record<string, any>[],
  oper: Parameters<ObjectPredicate>[1],
  target: Parameters<ObjectPredicate>[2]
) => Record<string, any>[];

/**
 * Filters an array of objects using a generic object operation via objectPredicate.
 * @param arr - The array of objects to filter.
 * @param oper - The operation to perform (ObjectOperEnum).
 * @param target - The value or values to check, depending on the operation.
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectFilter: ObjectFilter = (arr, oper, target) => {
  // Guard clause: return an empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectPredicate(obj, oper, target));
};
