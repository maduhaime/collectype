import { calendarPredicate } from './calendarPredicate';
import { CalendarOper } from '../../types/calendarOperation';
import { CalendarOperEnum } from '../../enums/calendarOperation';
import { ValueOf } from '../../types/utility';

// Type for object calendar predicate function
export type ObjectCalendarPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: CalendarOper | ValueOf<CalendarOperEnum>,
  today?: Date
) => boolean;

/**
 * Delegates calendar operations on an object property to calendarPredicate.
 * @param obj - The object containing the date property.
 * @param key - The key of the property to test.
 * @param oper - The calendar operation to apply.
 * @param today - The reference date for calendar operations (optional).
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectCalendarPredicate: ObjectCalendarPredicate = (obj, key, oper, today) => {
  // Guard clause: return false if the property is not a Date
  if (!(obj[key] instanceof Date)) return false;

  return calendarPredicate(obj[key] as Date, oper, today);
};
