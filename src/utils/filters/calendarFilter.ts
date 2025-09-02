import { ByType } from '../../types/utility';
import { calendarPredicate, CalendarPredicate } from '../predicates/calendarPredicate';

/**
 * Filters a collection of objects by a date field using the specified calendar operation.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the date field to filter by.
 * @param collection - The array of objects to filter.
 * @param field - The key of the date field to filter on.
 * @param {CalendarOperEnum} oper - The calendar operation to apply.
 * @param today - The reference date for calendar operations (e.g. IS_TODAY, IS_YESTERDAY, IS_BEFORE_TODAY, etc.).
 * @returns {T[]} The filtered array of objects.
 */
export function calendarFilter<T, K extends keyof ByType<T, Date>>(
  collection: T[],
  field: K,
  oper: Parameters<CalendarPredicate>[1],
  today: Parameters<CalendarPredicate>[2]
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as Date | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return calendarPredicate(source, oper, today);
  });
}
