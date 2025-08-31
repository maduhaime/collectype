import { ByType } from '../../types/utility';
import { dateRangePredicate, DateRangePredicate } from '../predicates/dateRangePredicate';

/**
 * Filters a collection of objects based on a date property within a nested object, checking if it falls within a date range.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the date property within the nested object to test.
 * @param {RangeOper | ValueOf<RangeOperEnum>} oper - The range operation to apply.
 * @param {Date} min - The minimum date bound.
 * @param {Date} max - The maximum date bound.
 * @returns {T[]} The filtered array of objects where the date property is within the range.
 *
 * Example: Filter users where user.profile.birthdate is in 2020:
 *   objectDateRangeFilter(users, 'profile', 'birthdate', RangeOperEnum.IN_RANGE, new Date('2020-01-01'), new Date('2020-12-31'))
 */
export function objectDateRangeFilter<T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: string,
  oper: Parameters<DateRangePredicate>[1],
  min: Parameters<DateRangePredicate>[2],
  max: Parameters<DateRangePredicate>[3]
): T[] {
  if (!Array.isArray(collection)) return [];
  return collection.filter((item) => {
    const obj = item[field] as Record<string, any>;
    return obj && dateRangePredicate(obj[key], oper, min, max);
  });
}
