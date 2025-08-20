/**
 * Enum for calendar operations.
 * Used to specify calendar-based checks on dates such as weekday, weekend, today, yesterday, future, and past.
 * @enum {'is_after_today' | 'is_before_today' | 'is_future' | 'is_past' | 'is_today' | 'is_weekday' | 'is_weekend' | 'is_yesterday'}
 */
export enum CalendarOperEnum {
  IS_AFTER_TODAY = 'is_after_today',
  IS_BEFORE_TODAY = 'is_before_today',
  IS_FUTURE = 'is_future',
  IS_PAST = 'is_past',
  IS_TODAY = 'is_today',
  IS_WEEKDAY = 'is_weekday',
  IS_WEEKEND = 'is_weekend',
  IS_YESTERDAY = 'is_yesterday',
}
