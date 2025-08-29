import { ByType } from '@/types/utility';
import { objectArraySizePredicate, ObjectArraySizePredicate } from '../predicates/objectArraySizePredicate';

/**
 * Filters a collection of objects based on the size of an array property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the array property within the nested object to test.
 * @param {ObjectArraySizePredicate[2]} oper - The array size operation to apply.
 * @param {ObjectArraySizePredicate[3]} [num] - The size value to compare (optional).
 * @returns {T[]} The filtered array of objects where the array size property matches the operation.
 *
 * Example: Filter users where user.profile.tags has length 3:
 *   objectArraySizeFilter(users, 'profile', 'tags', ArraySizeOperEnum.LENGTH_EQUALS, 3)
 */
export const objectArraySizeFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectArraySizePredicate>[1],
  oper: Parameters<ObjectArraySizePredicate>[2],
  num?: Parameters<ObjectArraySizePredicate>[3]
) => T[] = (collection, field, key, oper, num) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectArraySizePredicate(source, key, oper, num);
  });
};
