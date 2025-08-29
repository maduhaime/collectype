import { ByType } from '@/types/utility';
import { objectArrayPredicate, ObjectArrayPredicate } from '../predicates/objectArrayPredicate';

/**
 * Filters a collection of objects based on an array property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the array property within the nested object to test.
 * @param {ObjectArrayPredicate[2]} oper - The array operation to apply.
 * @param {ObjectArrayPredicate[3]} [target] - The target value(s) for comparison (optional).
 * @returns {T[]} The filtered array of objects where the array property matches the operation.
 *
 * Example: Filter users where user.profile.tags includes 'admin':
 *   objectArrayFilter(users, 'profile', 'tags', ArrayOperEnum.INCLUDES, 'admin')
 */
export const objectArrayFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectArrayPredicate>[1],
  oper: Parameters<ObjectArrayPredicate>[2],
  target?: Parameters<ObjectArrayPredicate>[3]
) => T[] = (collection, field, key, oper, target) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectArrayPredicate(source, key, oper, target);
  });
};
