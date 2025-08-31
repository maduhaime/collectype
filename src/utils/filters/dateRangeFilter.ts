import { ByType } from '../../types/utility';
import { dateRangePredicate, DateRangePredicate } from '../predicates/dateRangePredicate';
/**
 * Filters a collection of objects by a date field using range-based operations.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the date field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the date field to filter on.
 * @param {RangeOper | ValueOf<RangeOperEnum>} oper - The range operation to apply.
 * @param {Date} min - The minimum date bound.
 * @param {Date} max - The maximum date bound.
 * @returns {T[]} The filtered array of objects.
 */
export function dateRangeFilter<T, K extends keyof ByType<T, Date>>(
  collection: T[],
  field: K,
  oper: Parameters<DateRangePredicate>[1],
  min: Parameters<DateRangePredicate>[2],
  max: Parameters<DateRangePredicate>[3]
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as Date | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return dateRangePredicate(source, oper, min, max);
  });
}
