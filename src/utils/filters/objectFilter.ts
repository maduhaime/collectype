import { ByType } from '@/types/utility';
import { objectPredicate, ObjectPredicate } from '../predicates/objectPredicate';

/**
 * Filters a collection of objects using a generic object operation on a nested object property.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {ObjectPredicate[1]} oper - The object operation to perform.
 * @param {ObjectPredicate[2]} target - The value or values to check, depending on the operation.
 * @returns {T[]} The filtered array of objects where the nested object property matches the operation.
 *
 * Example: Filter users where user.profile has all required keys:
 *   objectFilter(users, 'profile', ObjectOperEnum.HAS_ALL_KEYS, ['name', 'email'])
 */
export const objectFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  oper: Parameters<ObjectPredicate>[1],
  target: Parameters<ObjectPredicate>[2]
) => T[] = (collection, field, oper, target) => {
  // Guard clause: return empty array if input is not an array
  if (!Array.isArray(collection)) return [];

  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectPredicate(source, oper, target);
  });
};
