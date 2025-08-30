import { ByType } from '../../types/utility';
import { datePredicate } from '../predicates/datePredicate';
import { DateOperEnum } from '../../enums/dateOperation';

/**
 * Filters a collection of objects based on a date property within a nested object using date operations.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the date property within the nested object to test.
 * @param {DateOperEnum} oper - The date operation to apply.
 * @param {Date} target - The target date value for comparison.
 * @returns {T[]} The filtered array of objects where the date property matches the operation.
 *
 * Example: Filter users where user.profile.birthdate equals today:
 *   objectDateFilter(users, 'profile', 'birthdate', DateOperEnum.EQUALS, new Date())
 */
export function objectDateFilter<T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: string,
  oper: DateOperEnum,
  target: Date
): T[] {
  if (!Array.isArray(collection)) return [];
  return collection.filter((item) => {
    const obj = item[field] as Record<string, any>;
    return obj && datePredicate(obj[key], oper, target);
  });
}
