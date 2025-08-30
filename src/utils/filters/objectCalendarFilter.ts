import { ByType } from '../../types/utility';
import { calendarPredicate } from '../predicates/calendarPredicate';
import { CalendarOperEnum } from '../../enums/calendarOperation';

/**
 * Filters a collection of objects based on a calendar/date property within a nested object using calendar operations.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the date property within the nested object to test.
 * @param {CalendarOperEnum} oper - The calendar operation to apply.
 * @param {Date} [today] - The reference date for calendar operations (optional).
 * @returns {T[]} The filtered array of objects where the calendar property matches the operation.
 *
 * Example: Filter users where user.profile.birthdate is today:
 *   objectCalendarFilter(users, 'profile', 'birthdate', CalendarOperEnum.IS_TODAY, new Date())
 */
export function objectCalendarFilter<T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: string,
  oper: CalendarOperEnum,
  today?: Date
): T[] {
  if (!Array.isArray(collection)) return [];
  return collection.filter((item) => {
    const obj = item[field] as Record<string, any>;
    return obj && calendarPredicate(obj[key], oper, today);
  });
}
