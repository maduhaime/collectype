import { BooleanOperEnum } from '../enums/booleanOperation';
import { CalendarOperEnum } from '../enums/calendarOperation';
import { DateOperEnum } from '../enums/dateOperation';
import { NumberOperEnum } from '../enums/numberOperation';
import { RangeOperEnum } from '../enums/rangeOperation';
import { StringBooleanOperEnum } from '../enums/stringBooleanOperation';
import { StringOperEnum } from '../enums/stringOperation';
import { ValueOf } from './utility';

/**
 * Generic predicate type for filtering or testing values.
 * Accepts any number of arguments and returns a boolean.
 *
 * @example
 * const isPositive: Predicate = (n) => n > 0;
 */
export type Predicate = (...args: any[]) => boolean;

/**
 * Predicate for boolean values.
 * Evaluates a boolean value against a target using the specified operator.
 * @param source - The source boolean value.
 * @param oper - The operator to apply. Must be a value from BooleanOperEnum.
 * @param target - The target boolean value.
 * @returns {boolean} Result of the predicate.
 */
export type BooleanPredicate = (source: boolean, oper: ValueOf<BooleanOperEnum>, target: boolean) => boolean;

/**
 * Predicate for calendar-based date values.
 * Evaluates a date value against calendar operations (weekday, weekend, today, etc.).
 * @param source - The source date value.
 * @param oper - The calendar operator to apply. Must be a value from CalendarOperEnum.
 * @param today - The reference date for operations like IS_TODAY, IS_YESTERDAY, etc. Optional, defaults to current date.
 * @returns {boolean} Result of the predicate.
 */
export type CalendarPredicate = (source: Date, oper: ValueOf<CalendarOperEnum>, today?: Date) => boolean;

/**
 * Predicate for number values.
 * Evaluates a number value against a target using the specified operator.
 * @param source - The source number value.
 * @param oper - The operator to apply. Must be a value from NumberOperEnum.
 * @param target - The target number value.
 * @returns {boolean} Result of the predicate.
 */
export type NumberPredicate = (source: number, oper: ValueOf<NumberOperEnum>, target: number) => boolean;

/**
 * Predicate for number ranges.
 * Evaluates a number value against a range using the specified operator.
 * @param source - The source number value.
 * @param oper - The range operator to apply. Must be a value from RangeOperEnum.
 * @param min - The minimum bound.
 * @param max - The maximum bound.
 * @returns {boolean} Result of the predicate.
 */
export type NumberRangePredicate = (source: number, oper: ValueOf<RangeOperEnum>, min: number, max: number) => boolean;

/**
 * Predicate for string values.
 * Evaluates a string value against a target using the specified operator.
 * @param source - The source string value.
 * @param oper - The operator to apply. Must be a value from StringOperEnum.
 * @param target - The target string value.
 * @returns {boolean} Result of the predicate.
 */
export type StringPredicate = (source: string, oper: ValueOf<StringOperEnum>, target: string) => boolean;

/**
 * Predicate for string values.
 * Evaluates a string value against a target using the specified operator.
 * @param source - The source string value.
 * @param oper - The operator to apply. Must be a value from StringOperEnum.
 * @returns {boolean} Result of the predicate.
 */
export type StringBooleanPredicate = (source: string, oper: ValueOf<StringBooleanOperEnum>) => boolean;

/**
 * Predicate for date values.
 * Evaluates a date value against a target using the specified operator.
 * @param source - The source date value.
 * @param oper - The operator to apply. Must be a value from DateOperEnum.
 * @param target - The target date value.
 * @returns {boolean} Result of the predicate.
 */
export type DatePredicate = (source: Date, oper: ValueOf<DateOperEnum>, target: Date) => boolean;

/**
 * Predicate for date ranges.
 * Evaluates a date value against a range using the specified operator.
 * @param source - The source date value.
 * @param oper - The range operator to apply. Must be a value from RangeOperEnum.
 * @param min - The minimum date bound.
 * @param max - The maximum date bound.
 * @returns {boolean} Result of the predicate.
 */
export type DateRangePredicate = (source: Date, oper: ValueOf<RangeOperEnum>, min: Date, max: Date) => boolean;
