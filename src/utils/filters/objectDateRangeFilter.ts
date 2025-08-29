import { ByType } from '@/types/utility';
import { objectDateRangePredicate, ObjectDateRangePredicate } from '../predicates/objectDateRangePredicate';

/**
 * Filters a collection of objects based on a date property within a nested object, checking if it falls within a date range.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the date property within the nested object to test.
 * @param {ObjectDateRangePredicate[2]} oper - The range operation to apply.
 * @param {ObjectDateRangePredicate[3]} min - The minimum date bound.
 * @param {ObjectDateRangePredicate[4]} max - The maximum date bound.
 * @returns {T[]} The filtered array of objects where the date property is within the range.
 *
 * Example: Filter users where user.profile.birthdate is in 2020:
 *   objectDateRangeFilter(users, 'profile', 'birthdate', RangeOperEnum.IN_RANGE, new Date('2020-01-01'), new Date('2020-12-31'))
 */
export const objectDateRangeFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectDateRangePredicate>[1],
  oper: Parameters<ObjectDateRangePredicate>[2],
  min: Parameters<ObjectDateRangePredicate>[3],
  max: Parameters<ObjectDateRangePredicate>[4]
) => T[] = (collection, field, key, oper, min, max) => {
  // Guard clause: return empty array if input is not an array
  if (!Array.isArray(collection)) return [];

  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectDateRangePredicate(source, key, oper, min, max);
  });
};
