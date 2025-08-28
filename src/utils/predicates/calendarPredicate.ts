import { CalendarOperEnum } from '../../enums/calendarOperation';
import { CalendarOper } from '../../types/calendarOperation';

import { ValueOf } from '../../types/utility';

// Type for calendar predicate function
export type CalendarPredicate = (source: Date, oper: CalendarOper | ValueOf<CalendarOperEnum>, today?: Date) => boolean;

/**
 * Evaluates a date value against calendar operations (weekday, weekend, today, etc.).
 * @param source - The source date value.
 * @param oper - The calendar operator to apply. Must be a value from CalendarOperEnum.
 * @param today - The reference date for operations like IS_TODAY, IS_YESTERDAY, etc. Optional, defaults to current date.
 * @returns {boolean} Result of the predicate.
 * @throws Error if an unsupported operator is provided.
 */
export const calendarPredicate: CalendarPredicate = (source, oper, today = new Date()) => {
  // Returns true if source date is before today (UTC midnight)
  if (oper === CalendarOperEnum.IS_BEFORE_TODAY) {
    const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    return sourceUTC < todayUTC;
  }

  // Returns true if source date is after today (UTC midnight)
  if (oper === CalendarOperEnum.IS_AFTER_TODAY) {
    const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    return sourceUTC > todayUTC;
  }

  // Returns true if source date is today (UTC midnight)
  if (oper === CalendarOperEnum.IS_TODAY) {
    const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    return sourceUTC === todayUTC;
  }

  // Returns true if source date is yesterday (UTC midnight)
  if (oper === CalendarOperEnum.IS_YESTERDAY) {
    const yesterday = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1);
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    const yesterdayUTC = Date.UTC(yesterday.getUTCFullYear(), yesterday.getUTCMonth(), yesterday.getUTCDate());
    return sourceUTC === yesterdayUTC;
  }

  // Returns true if source date is a weekend (Saturday or Sunday)
  if (oper === CalendarOperEnum.IS_WEEKEND) {
    const day = source.getUTCDay();
    return day === 0 || day === 6;
  }

  // Returns true if source date is a weekday (Monday to Friday)
  if (oper === CalendarOperEnum.IS_WEEKDAY) {
    const day = source.getUTCDay();
    return day >= 1 && day <= 5;
  }

  // Returns true if source date is in the future (timestamp)
  if (oper === CalendarOperEnum.IS_FUTURE) {
    return source.getTime() > Date.now();
  }

  // Returns true if source date is in the past (timestamp)
  if (oper === CalendarOperEnum.IS_PAST) {
    return source.getTime() < Date.now();
  }

  // Throws error for unsupported operators
  throw new Error(`Unsupported date predicate operator: ${oper}`);
};
