import { calendarPredicate } from './calendarPredicate';
import { ObjectCalendarPredicate } from '@/types/predicate';

/**
 * Object calendar predicate: delegates calendar operations on an object property to calendarPredicate.
 * @param obj - The object containing the date property.
 * @param key - The key of the property to test.
 * @param oper - The calendar operation to apply.
 * @param today - The reference date for calendar operations (optional).
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectCalendarPredicate: ObjectCalendarPredicate = (obj, key, oper, today) => {
  if (!(obj[key] instanceof Date)) return false;
  return calendarPredicate(obj[key] as Date, oper, today);
};
