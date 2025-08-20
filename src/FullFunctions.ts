import { BaseFunctions } from './BaseFunctions';
import { booleanFilter } from './utils/filters/booleanFilter';
import { BooleanOperEnum } from './enums/booleanOperation';
import { ByType } from './types/utility';
import { dateFilter } from './utils/filters/dateFilter';
import { calendarFilter } from './utils/filters/calendarFilter';
import { DateOperEnum } from './enums/dateOperation';
import { CalendarOperEnum } from './enums/calendarOperation';
import { dateRangeFilter } from './utils/filters/dateRangeFilter';
import { numberFilter } from './utils/filters/numberFilter';
import { NumberOperEnum } from './enums/numberOperation';
import { rangeFilter } from './utils/filters/numberRangeFilter';
import { RangeOperEnum } from './enums/rangeOperation';
import { stringFilter } from './utils/filters/stringFilter';
import { StringOperEnum } from './enums/stringOperation';
import { stringBooleanFilter } from './utils/filters/stringBooleanFilter';
import { StringBooleanOperEnum } from './enums/stringBooleanOperation';

/**
 * Implementation of BaseFunctions, adding extra chainable utilities.
 * Provides chainable filter methods for boolean, date, date range, number, number range, and string fields.
 */
export class FullFunctions<T> extends BaseFunctions<T> {
  constructor(items: T[]) {
    super(items);
  }

  // ===========================
  // Boolean filters
  // ===========================

  /**
   * Filters items where the given boolean field equals the target value.
   */
  booleanEquals<K extends keyof ByType<T, boolean>>(field: K, target: boolean): this {
    this._items = booleanFilter(this._items, field, BooleanOperEnum.EQUALS, target);
    return this;
  }

  /**
   * Filters items where the given boolean field does not equal the target value.
   */
  booleanNotEquals<K extends keyof ByType<T, boolean>>(field: K, target: boolean): this {
    this._items = booleanFilter(this._items, field, BooleanOperEnum.NOT_EQUALS, target);
    return this;
  }

  // ===========================
  // Date filters
  // ===========================

  /**
   * Filters items where the given date field equals the target value.
   */
  dateEquals<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    this._items = dateFilter(this._items, field, DateOperEnum.EQUALS, target);
    return this;
  }

  /**
   * Filters items where the given date field does not equal the target value.
   */
  dateNotEquals<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    this._items = dateFilter(this._items, field, DateOperEnum.NOT_EQUALS, target);
    return this;
  }

  /**
   * Filters items where the given date field occurs before the target value.
   */
  dateOccursBefore<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    this._items = dateFilter(this._items, field, DateOperEnum.OCCURS_BEFORE, target);
    return this;
  }

  /**
   * Filters items where the given date field occurs on or before the target value.
   */
  dateOccursOnOrBefore<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    this._items = dateFilter(this._items, field, DateOperEnum.OCCURS_ON_OR_BEFORE, target);
    return this;
  }

  /**
   * Filters items where the given date field occurs after the target value.
   */
  dateOccursAfter<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    this._items = dateFilter(this._items, field, DateOperEnum.OCCURS_AFTER, target);
    return this;
  }

  /**
   * Filters items where the given date field occurs on or after the target value.
   */
  dateOccursOnOrAfter<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    this._items = dateFilter(this._items, field, DateOperEnum.OCCURS_ON_OR_AFTER, target);
    return this;
  }

  // ===========================
  // Calendar filters
  // ===========================

  /**
   * Filters items where the given date field is today.
   * @param field - The date field to filter on.
   * @param today - Optional reference date, defaults to new Date().
   */
  dateIsToday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    this._items = calendarFilter(this._items, field, CalendarOperEnum.IS_TODAY, today);
    return this;
  }

  /**
   * Filters items where the given date field is yesterday.
   * @param field - The date field to filter on.
   * @param today - Optional reference date, defaults to new Date().
   */
  dateIsYesterday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    this._items = calendarFilter(this._items, field, CalendarOperEnum.IS_YESTERDAY, today);
    return this;
  }

  /**
   * Filters items where the given date field is before today.
   * @param field - The date field to filter on.
   * @param today - Optional reference date, defaults to new Date().
   */
  dateIsBeforeToday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    this._items = calendarFilter(this._items, field, CalendarOperEnum.IS_BEFORE_TODAY, today);
    return this;
  }

  /**
   * Filters items where the given date field is after today.
   * @param field - The date field to filter on.
   * @param today - Optional reference date, defaults to new Date().
   */
  dateIsAfterToday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    this._items = calendarFilter(this._items, field, CalendarOperEnum.IS_AFTER_TODAY, today);
    return this;
  }

  /**
   * Filters items where the given date field is in the future.
   * @param field - The date field to filter on.
   * @param today - Optional reference date, defaults to new Date().
   */
  dateIsFuture<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    this._items = calendarFilter(this._items, field, CalendarOperEnum.IS_FUTURE, today);
    return this;
  }

  /**
   * Filters items where the given date field is in the past.
   * @param field - The date field to filter on.
   * @param today - Optional reference date, defaults to new Date().
   */
  dateIsPast<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    this._items = calendarFilter(this._items, field, CalendarOperEnum.IS_PAST, today);
    return this;
  }

  /**
   * Filters items where the given date field is a weekend.
   * @param field - The date field to filter on.
   * @param today - Optional reference date, defaults to new Date().
   */
  dateIsWeekend<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    this._items = calendarFilter(this._items, field, CalendarOperEnum.IS_WEEKEND, today);
    return this;
  }

  /**
   * Filters items where the given date field is a weekday.
   * @param field - The date field to filter on.
   * @param today - Optional reference date, defaults to new Date().
   */
  dateIsWeekday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    this._items = calendarFilter(this._items, field, CalendarOperEnum.IS_WEEKDAY, today);
    return this;
  }

  // ===========================
  // Date range filters
  // ===========================

  /**
   * Filters items where the given date field is within the inclusive range [min, max].
   */
  dateInRange<K extends keyof ByType<T, Date>>(field: K, min: Date, max: Date): this {
    this._items = dateRangeFilter(this._items, field, RangeOperEnum.IN_RANGE, min, max);
    return this;
  }

  /**
   * Filters items where the given date field is outside the inclusive range [min, max].
   */
  dateOutRange<K extends keyof ByType<T, Date>>(field: K, min: Date, max: Date): this {
    this._items = dateRangeFilter(this._items, field, RangeOperEnum.OUT_RANGE, min, max);
    return this;
  }

  /**
   * Filters items where the given date field is strictly within the range (min, max).
   */
  dateStrictInRange<K extends keyof ByType<T, Date>>(field: K, min: Date, max: Date): this {
    this._items = dateRangeFilter(this._items, field, RangeOperEnum.STRICT_IN_RANGE, min, max);
    return this;
  }

  /**
   * Filters items where the given date field is strictly outside the range (min, max).
   */
  dateStrictOutRange<K extends keyof ByType<T, Date>>(field: K, min: Date, max: Date): this {
    this._items = dateRangeFilter(this._items, field, RangeOperEnum.STRICT_OUT_RANGE, min, max);
    return this;
  }

  // ===========================
  // Number filters
  // ===========================

  /**
   * Filters items where the given number field equals the target value.
   */
  numberEquals<K extends keyof ByType<T, number>>(field: K, target: number): this {
    this._items = numberFilter(this._items, field, NumberOperEnum.EQUALS, target);
    return this;
  }

  /**
   * Filters items where the given number field does not equal the target value.
   */
  numberNotEquals<K extends keyof ByType<T, number>>(field: K, target: number): this {
    this._items = numberFilter(this._items, field, NumberOperEnum.NOT_EQUALS, target);
    return this;
  }

  /**
   * Filters items where the given number field is less than the target value.
   */
  numberLessThan<K extends keyof ByType<T, number>>(field: K, target: number): this {
    this._items = numberFilter(this._items, field, NumberOperEnum.LESS_THAN, target);
    return this;
  }

  /**
   * Filters items where the given number field is less than or equal to the target value.
   */
  numberLessThanOrEquals<K extends keyof ByType<T, number>>(field: K, target: number): this {
    this._items = numberFilter(this._items, field, NumberOperEnum.LESS_THAN_OR_EQUALS, target);
    return this;
  }

  /**
   * Filters items where the given number field is greater than the target value.
   */
  numberGreaterThan<K extends keyof ByType<T, number>>(field: K, target: number): this {
    this._items = numberFilter(this._items, field, NumberOperEnum.GREATER_THAN, target);
    return this;
  }

  /**
   * Filters items where the given number field is greater than or equal to the target value.
   */
  numberGreaterThanOrEquals<K extends keyof ByType<T, number>>(field: K, target: number): this {
    this._items = numberFilter(this._items, field, NumberOperEnum.GREATER_THAN_OR_EQUALS, target);
    return this;
  }

  // ===========================
  // Number range filters
  // ===========================

  /**
   * Filters items where the given number field is within the inclusive range [min, max].
   */
  numberInRange<K extends keyof ByType<T, number>>(field: K, min: number, max: number): this {
    this._items = rangeFilter(this._items, field, RangeOperEnum.IN_RANGE, min, max);
    return this;
  }

  /**
   * Filters items where the given number field is outside the inclusive range [min, max].
   */
  numberOutRange<K extends keyof ByType<T, number>>(field: K, min: number, max: number): this {
    this._items = rangeFilter(this._items, field, RangeOperEnum.OUT_RANGE, min, max);
    return this;
  }

  /**
   * Filters items where the given number field is strictly within the range (min, max).
   */
  numberStrictInRange<K extends keyof ByType<T, number>>(field: K, min: number, max: number): this {
    this._items = rangeFilter(this._items, field, RangeOperEnum.STRICT_IN_RANGE, min, max);
    return this;
  }

  /**
   * Filters items where the given number field is strictly outside the range (min, max).
   */
  numberStrictOutRange<K extends keyof ByType<T, number>>(field: K, min: number, max: number): this {
    this._items = rangeFilter(this._items, field, RangeOperEnum.STRICT_OUT_RANGE, min, max);
    return this;
  }

  // ===========================
  // String filters
  // ===========================

  /**
   * Filters items where the given string field equals the target value.
   */
  stringEquals<K extends keyof ByType<T, string>>(field: K, target: string): this {
    this._items = stringFilter(this._items, field, StringOperEnum.EQUALS, target);
    return this;
  }

  /**
   * Filters items where the given string field does not equal the target value.
   */
  stringNotEquals<K extends keyof ByType<T, string>>(field: K, target: string): this {
    this._items = stringFilter(this._items, field, StringOperEnum.NOT_EQUALS, target);
    return this;
  }

  /**
   * Filters items where the given string field includes the target substring.
   */
  stringIncludes<K extends keyof ByType<T, string>>(field: K, target: string): this {
    this._items = stringFilter(this._items, field, StringOperEnum.INCLUDES, target);
    return this;
  }

  /**
   * Filters items where the given string field does not include the target substring.
   */
  stringExcludes<K extends keyof ByType<T, string>>(field: K, target: string): this {
    this._items = stringFilter(this._items, field, StringOperEnum.EXCLUDES, target);
    return this;
  }

  /**
   * Filters items where the given string field starts with the target substring.
   */
  stringStartsWith<K extends keyof ByType<T, string>>(field: K, target: string): this {
    this._items = stringFilter(this._items, field, StringOperEnum.STARTS_WITH, target);
    return this;
  }

  /**
   * Filters items where the given string field ends with the target substring.
   */
  stringEndsWith<K extends keyof ByType<T, string>>(field: K, target: string): this {
    this._items = stringFilter(this._items, field, StringOperEnum.ENDS_WITH, target);
    return this;
  }

  /**
   * Filters items where the given string field matches the regex pattern.
   */
  stringMatches<K extends keyof ByType<T, string>>(field: K, pattern: string): this {
    this._items = stringFilter(this._items, field, StringOperEnum.MATCHES, pattern);
    return this;
  }

  // ===========================
  // String boolean filters
  // ===========================

  /**
   * Filters items where the given string field is empty.
   */
  stringIsEmpty<K extends keyof ByType<T, string>>(field: K): this {
    this._items = stringBooleanFilter(this._items, field, StringBooleanOperEnum.IS_EMPTY);
    return this;
  }

  /**
   * Filters items where the given string field is not empty.
   */
  stringIsNotEmpty<K extends keyof ByType<T, string>>(field: K): this {
    this._items = stringBooleanFilter(this._items, field, StringBooleanOperEnum.IS_NOT_EMPTY);
    return this;
  }
}
