/**
 * Enum for date operations (comparison and equality).
 * Used to specify operations like equals, occurs after, same day, etc.
 *
 * @enum {'equals' | 'occurs_after' | 'occurs_on_or_after' | 'occurs_before' | 'occurs_on_or_before' | 'not_equals' | 'same_day' | 'same_month' | 'same_year'}
 *
 * @example
 * if (oper === DateOperEnum.SAME_DAY) { ... }
 */
export enum DateOperEnum {
  /** Checks if dates are equal. */
  EQUALS = 'equals',
  /** Checks if date occurs after another. */
  OCCURS_AFTER = 'occurs_after',
  /** Checks if date occurs on or after another. */
  OCCURS_ON_OR_AFTER = 'occurs_on_or_after',
  /** Checks if date occurs before another. */
  OCCURS_BEFORE = 'occurs_before',
  /** Checks if date occurs on or before another. */
  OCCURS_ON_OR_BEFORE = 'occurs_on_or_before',
  /** Checks if dates are not equal. */
  NOT_EQUALS = 'not_equals',
  /** Checks if dates are on the same day. */
  SAME_DAY = 'same_day',
  /** Checks if dates are in the same month. */
  SAME_MONTH = 'same_month',
  /** Checks if dates are in the same year. */
  SAME_YEAR = 'same_year',
}
