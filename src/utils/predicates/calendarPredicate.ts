import { CalendarOperEnum } from '../../enums/calendarOperation';
import { EnumOrString } from '../../types';

// Type for calendar predicate function
export type CalendarPredicate = (source: Date, oper: EnumOrString<typeof CalendarOperEnum>, today?: Date) => boolean;

/**
 * Evaluates a date value against calendar operations (weekday, weekend, today, etc.).
 * @param source - The source date value.
 * @param oper - The calendar operator to apply (see CalendarOperEnum).
 * @param today - The reference date for operations like IS_TODAY, IS_YESTERDAY, etc. Optional, defaults to current date.
 * @returns Result of the predicate.
 * @example
 * calendarPredicate(new Date('2023-01-01'), 'isToday', new Date('2023-01-01')); // true
 * calendarPredicate(new Date('2023-01-01'), 'isWeekend'); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const calendarPredicate: CalendarPredicate = (source, oper, today = new Date()) => {
  // If operation is IS_BEFORE_TODAY, check if source date is before today (UTC midnight)
  if (oper === CalendarOperEnum.IS_BEFORE_TODAY) {
    const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    return sourceUTC < todayUTC;
  }
  // If operation is IS_AFTER_TODAY, check if source date is after today (UTC midnight)
  if (oper === CalendarOperEnum.IS_AFTER_TODAY) {
    const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    return sourceUTC > todayUTC;
  }
  // If operation is IS_TODAY, check if source date is today (UTC midnight)
  if (oper === CalendarOperEnum.IS_TODAY) {
    const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    return sourceUTC === todayUTC;
  }
  // If operation is IS_YESTERDAY, check if source date is yesterday (UTC midnight)
  if (oper === CalendarOperEnum.IS_YESTERDAY) {
    const yesterday = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1);
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    const yesterdayUTC = Date.UTC(yesterday.getUTCFullYear(), yesterday.getUTCMonth(), yesterday.getUTCDate());
    return sourceUTC === yesterdayUTC;
  }
  // If operation is IS_WEEKEND, check if source date is a weekend (Saturday or Sunday)
  if (oper === CalendarOperEnum.IS_WEEKEND) {
    const day = source.getUTCDay();
    return day === 0 || day === 6;
  }
  // If operation is IS_WEEKDAY, check if source date is a weekday (Monday to Friday)
  if (oper === CalendarOperEnum.IS_WEEKDAY) {
    const day = source.getUTCDay();
    return day >= 1 && day <= 5;
  }
  // If operation is IS_FUTURE, check if source date is in the future (timestamp)
  if (oper === CalendarOperEnum.IS_FUTURE) {
    return source.getTime() > Date.now();
  }
  // If operation is IS_PAST, check if source date is in the past (timestamp)
  if (oper === CalendarOperEnum.IS_PAST) {
    return source.getTime() < Date.now();
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported calendar predicate operation: ${oper}`);
};
