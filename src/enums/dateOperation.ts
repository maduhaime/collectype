/**
 * Enum for date operations.
 * Used to specify comparison and equality operations for dates.
 * @enum {'equals' | 'occurs_after' | 'occurs_on_or_after' | 'occurs_before' | 'occurs_on_or_before' | 'not_equals' | 'same_day' | 'same_month' | 'same_year'}
 */
export enum DateOperEnum {
  EQUALS = 'equals',
  OCCURS_AFTER = 'occurs_after',
  OCCURS_ON_OR_AFTER = 'occurs_on_or_after',
  OCCURS_BEFORE = 'occurs_before',
  OCCURS_ON_OR_BEFORE = 'occurs_on_or_before',
  NOT_EQUALS = 'not_equals',
  SAME_DAY = 'same_day',
  SAME_MONTH = 'same_month',
  SAME_YEAR = 'same_year',
}
