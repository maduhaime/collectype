import { ByType } from '@/types/utility';
import { objectNumberPredicate, ObjectNumberPredicate } from '../predicates/objectNumberPredicate';

/**
 * Filters a collection of objects based on a number property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the number property within the nested object to test.
 * @param {ObjectNumberPredicate[2]} oper - The number operation to apply.
 * @param {ObjectNumberPredicate[3]} target - The target number value for comparison.
 * @returns {T[]} The filtered array of objects where the number property matches the operation.
 *
 * Example: Filter users where user.profile.age is greater than 18:
 *   objectNumberFilter(users, 'profile', 'age', NumberOperEnum.GREATER_THAN, 18)
 */
export const objectNumberFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectNumberPredicate>[1],
  oper: Parameters<ObjectNumberPredicate>[2],
  target: Parameters<ObjectNumberPredicate>[3]
) => T[] = (collection, field, key, oper, target) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectNumberPredicate(source, key, oper, target);
  });
};
