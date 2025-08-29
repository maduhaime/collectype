import { ByType } from '@/types/utility';
import { objectDatePredicate, ObjectDatePredicate } from '../predicates/objectDatePredicate';

/**
 * Filters a collection of objects based on a date property within a nested object using date operations.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the date property within the nested object to test.
 * @param {ObjectDatePredicate[2]} oper - The date operation to apply.
 * @param {ObjectDatePredicate[3]} target - The target date value for comparison.
 * @returns {T[]} The filtered array of objects where the date property matches the operation.
 *
 * Example: Filter users where user.profile.birthdate equals today:
 *   objectDateFilter(users, 'profile', 'birthdate', DateOperEnum.EQUALS, new Date())
 */
export const objectDateFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectDatePredicate>[1],
  oper: Parameters<ObjectDatePredicate>[2],
  target: Parameters<ObjectDatePredicate>[3]
) => T[] = (collection, field, key, oper, target) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectDatePredicate(source, key, oper, target);
  });
};
