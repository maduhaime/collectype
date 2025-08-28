import { objectCalendarPredicate, ObjectCalendarPredicate } from '../predicates/objectCalendarPredicate';

// Type for objectCalendarFilter function.
export type ObjectCalendarFilter = (
  arr: Record<string, any>[],
  key: string,
  oper: Parameters<ObjectCalendarPredicate>[2],
  today?: Parameters<ObjectCalendarPredicate>[3]
) => Record<string, any>[];

/**
 * Filters an array of objects based on a calendar property using objectCalendarPredicate.
 * @param arr - The array of objects to filter.
 * @param key - The key of the calendar property to test.
 * @param oper - The calendar operation to apply.
 * @param today - The reference date for calendar operations (optional).
 * @returns {Array<Record<string, any>>} The filtered array.
 */
export const objectCalendarFilter: ObjectCalendarFilter = (arr, key, oper, today) => {
  // Guard clause: return empty array if arr is not an array
  if (!Array.isArray(arr)) return [];

  return arr.filter((obj) => objectCalendarPredicate(obj, key, oper, today));
};
