/**
 * Enum for calendar operations (date-based checks).
 * Used to specify checks like weekday, weekend, today, yesterday, future, and past.
 *
 * @enum {'is_after_today' | 'is_before_today' | 'is_future' | 'is_past' | 'is_today' | 'is_weekday' | 'is_weekend' | 'is_yesterday'}
 *
 * @example
 * if (oper === CalendarOperEnum.IS_TODAY) { ... }
 */
export enum CalendarOperEnum {
  /** Checks if date is after today. */
  IS_AFTER_TODAY = 'is_after_today',
  /** Checks if date is before today. */
  IS_BEFORE_TODAY = 'is_before_today',
  /** Checks if date is in the future. */
  IS_FUTURE = 'is_future',
  /** Checks if date is in the past. */
  IS_PAST = 'is_past',
  /** Checks if date is today. */
  IS_TODAY = 'is_today',
  /** Checks if date is a weekday. */
  IS_WEEKDAY = 'is_weekday',
  /** Checks if date is a weekend. */
  IS_WEEKEND = 'is_weekend',
  /** Checks if date is yesterday. */
  IS_YESTERDAY = 'is_yesterday',
}
