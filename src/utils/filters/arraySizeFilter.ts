import { arraySizePredicate } from '../predicates/arraySizePredicate';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { ByType } from '../../types/utility';

/**
 * Filters a collection by array size operation (length equals, greater than, less than, is empty, is not empty).
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {ArraySizeOperEnum} oper - The size operation to perform.
 * @param {number} [n] - The length to compare (required for some operations).
 * @returns {T[]} The filtered array of objects.
 */
export function arraySizeFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  oper: ArraySizeOperEnum,
  n?: number
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;

    // Guard clause: return false if the field is not an array
    if (!Array.isArray(arr)) return false;

    return arraySizePredicate(arr, oper, n);
  });
}
