import { ByType, ValueOf } from '../../types/utility';
import { CalendarOperEnum } from '../../enums/calendarOperation';
import { calendarPredicate } from '../predicates/calendarPredicate';

/**
 * Filters a collection of objects by a date field using the specified calendar operation.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the date field to filter by.
 * @param collection - The array of objects to filter.
 * @param field - The key of the date field to filter on.
 * @param oper - The calendar operation to apply. Must be a value from CalendarOperEnum.
 * @param today - The reference date for calendar operations (e.g. IS_TODAY, IS_YESTERDAY, IS_BEFORE_TODAY, etc.).
 * @returns {T[]} The filtered array of objects.
 */
export function calendarFilter<T, K extends keyof ByType<T, Date>>(
  collection: T[],
  field: K,
  oper: ValueOf<CalendarOperEnum>,
  today: Date
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as Date | undefined;
    if (typeof source === 'undefined') return false;
    return calendarPredicate(source, oper, today);
  });
}
