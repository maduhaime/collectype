import { ByType, ValueOf } from '../../types/utility';
import { dateRangePredicate } from '../predicates/dateRangePredicate';
import { RangeOperEnum } from '../../enums/rangeOperation';

/**
 * Filters a collection of objects by a date field using range-based operations.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the date field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the date field to filter on.
 * @param {ValueOf<RangeOperEnum>} oper - The range operation to apply.
 * @param {Date} min - The minimum date bound.
 * @param {Date} max - The maximum date bound.
 * @returns {T[]} The filtered array of objects.
 */
export function dateRangeFilter<T, K extends keyof ByType<T, Date>>(
  collection: T[],
  field: K,
  oper: ValueOf<RangeOperEnum>,
  min: Date,
  max: Date
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as Date | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return dateRangePredicate(source, oper, min, max);
  });
}
