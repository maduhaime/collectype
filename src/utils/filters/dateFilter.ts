import { ByType } from '../../types/utility';
import { datePredicate, DatePredicate } from '../predicates/datePredicate';

/**
 * Filters a collection of objects by a date field using the specified date operation.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the date field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the date field to filter on.
 * @param {DateOper | ValueOf<DateOperEnum>} oper - The date operation to apply.
 * @param {Date} target - The target date value for comparison.
 * @returns {T[]} The filtered array of objects.
 */
export function dateFilter<T, K extends keyof ByType<T, Date>>(
  collection: T[],
  field: K,
  oper: Parameters<DatePredicate>[1],
  target: Parameters<DatePredicate>[2]
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as Date | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return datePredicate(source, oper, target);
  });
}
