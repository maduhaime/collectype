import { ByType } from '../../types/utility';
import { arraySizePredicate } from '../predicates/arraySizePredicate';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';

/**
 * Filters a collection of objects based on the size of an array property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the array property within the nested object to test.
 * @param {ArraySizeOperEnum} oper - The array size operation to apply.
 * @param {number} [num] - The size value to compare (optional).
 * @returns {T[]} The filtered array of objects where the array size property matches the operation.
 *
 * Example: Filter users where user.profile.tags has length 3:
 *   objectArraySizeFilter(users, 'profile', 'tags', ArraySizeOperEnum.LENGTH_EQUALS, 3)
 */
export function objectArraySizeFilter<T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: string,
  oper: ArraySizeOperEnum,
  num?: number
): T[] {
  if (!Array.isArray(collection)) return [];
  return collection.filter((item) => {
    const obj = item[field] as Record<string, any>;
    return obj && arraySizePredicate(obj[key], oper, num);
  });
}
