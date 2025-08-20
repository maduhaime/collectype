import { CalendarOperEnum } from '../enums/calendarOperation';

/**
 * Type representing possible calendar operations.
 * Used for type safety in calendar-based functions.
 * @typedef {'is_after_today' | 'is_before_today' | 'is_future' | 'is_past' | 'is_today' | 'is_weekday' | 'is_weekend' | 'is_yesterday'} CalendarOper
 */
export type CalendarOper = `${CalendarOperEnum}`;
