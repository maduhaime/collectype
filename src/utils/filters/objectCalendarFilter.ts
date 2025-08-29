import { ByType } from '@/types/utility';
import { objectCalendarPredicate, ObjectCalendarPredicate } from '../predicates/objectCalendarPredicate';

/**
 * Filters a collection of objects based on a calendar/date property within a nested object using calendar operations.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the date property within the nested object to test.
 * @param {ObjectCalendarPredicate[2]} oper - The calendar operation to apply.
 * @param {ObjectCalendarPredicate[3]} [today] - The reference date for calendar operations (optional).
 * @returns {T[]} The filtered array of objects where the calendar property matches the operation.
 *
 * Example: Filter users where user.profile.birthdate is today:
 *   objectCalendarFilter(users, 'profile', 'birthdate', CalendarOperEnum.IS_TODAY, new Date())
 */
export const objectCalendarFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectCalendarPredicate>[1],
  oper: Parameters<ObjectCalendarPredicate>[2],
  today?: Parameters<ObjectCalendarPredicate>[3]
) => T[] = (collection, field, key, oper, today) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectCalendarPredicate(source, key, oper, today);
  });
};
