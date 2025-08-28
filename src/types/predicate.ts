import { ArrayOper, ArrayIndexOper, ArraySizeOper } from './arrayOperation';
import { ArrayOperEnum, ArrayIndexOperEnum, ArraySizeOperEnum } from '../enums/arrayOperation';
import { BooleanOper } from './booleanOperation';
import { BooleanOperEnum } from '../enums/booleanOperation';
import { CalendarOper } from './calendarOperation';
import { CalendarOperEnum } from '../enums/calendarOperation';
import { DateOper } from './dateOperation';
import { DateOperEnum } from '../enums/dateOperation';
import { NumberOper } from './numberOperation';
import { NumberOperEnum } from '../enums/numberOperation';
import { ObjectOper } from './objectOperation';
import { ObjectOperEnum } from '@/enums/objectOperation';
import { RangeOper } from './rangeOperation';
import { RangeOperEnum } from '../enums/rangeOperation';
import { StringStateOper, StringOper } from './stringOperation';
import { StringStateOperEnum, StringOperEnum } from '../enums/stringOperation';
import { ValueOf } from './utility';

/**
 * Predicate for array index-based operations.
 * @template T
 * @param arr - The array to check.
 * @param oper - The index operation to perform (see ArrayIndexOperType).
 * @param index - The index to check.
 * @param target - The value or values to compare.
 * @returns {boolean} Result of the index operation.
 */
export type ArrayIndexPredicate = <T>(
  arr: T[],
  oper: ArrayIndexOper | ValueOf<ArrayIndexOperEnum>,
  index: number,
  target?: T | T[]
) => boolean;

/**
 * Generic predicate for array operations.
 * @template T
 * @param arr - The array to check.
 * @param oper - The array operation to perform (see ArrayOperType).
 * @param target - The value or values to check, depending on the operation.
 * @returns {boolean} Result of the operation.
 */
export type ArrayPredicate = <T>(arr: T[], oper: ArrayOper | ValueOf<ArrayOperEnum>, target?: T | T[]) => boolean;

/**
 * Predicate for array size-based operations.
 * @template T
 * @param arr - The array to check.
 * @param oper - The size operation to perform (see ArraySizeOperType).
 * @param num - The length to compare (if applicable).
 * @returns {boolean} Result of the size operation.
 */
export type ArraySizePredicate = <T>(
  arr: T[],
  oper: ArraySizeOper | ValueOf<ArraySizeOperEnum>,
  num?: number
) => boolean;

/**
 * Predicate for boolean values.
 * Evaluates a boolean value against a target using the specified operator.
 * @param source - The source boolean value.
 * @param oper - The operator to apply. Must be a value from BooleanOperEnum.
 * @param target - The target boolean value.
 * @returns {boolean} Result of the predicate.
 */
export type BooleanPredicate = (
  source: boolean,
  oper: BooleanOper | ValueOf<BooleanOperEnum>,
  target: boolean
) => boolean;

/**
 * Predicate for calendar-based date values.
 * Evaluates a date value against calendar operations (weekday, weekend, today, etc.).
 * @param source - The source date value.
 * @param oper - The calendar operator to apply. Must be a value from CalendarOperEnum.
 * @param today - The reference date for operations like IS_TODAY, IS_YESTERDAY, etc. Optional, defaults to current date.
 * @returns {boolean} Result of the predicate.
 */
export type CalendarPredicate = (source: Date, oper: CalendarOper | ValueOf<CalendarOperEnum>, today?: Date) => boolean;

/**
 * Predicate for date values.
 * Evaluates a date value against a target using the specified operator.
 * @param source - The source date value.
 * @param oper - The operator to apply. Must be a value from DateOperEnum.
 * @param target - The target date value.
 * @returns {boolean} Result of the predicate.
 */
export type DatePredicate = (source: Date, oper: DateOper | ValueOf<DateOperEnum>, target: Date) => boolean;

/**
 * Predicate for date ranges.
 * Evaluates a date value against a range using the specified operator.
 * @param source - The source date value.
 * @param oper - The range operator to apply. Must be a value from RangeOperEnum.
 * @param min - The minimum date bound.
 * @param max - The maximum date bound.
 * @returns {boolean} Result of the predicate.
 */
export type DateRangePredicate = (
  source: Date,
  oper: RangeOper | ValueOf<RangeOperEnum>,
  min: Date,
  max: Date
) => boolean;

/**
 * Predicate for array index-based operations on object properties.
 * Applies an array index operation to the value at obj[key] if it is an array.
 * @param obj - The object containing the array property.
 * @param key - The key of the property to test.
 * @param oper - The array index operation to perform (from ArrayIndexOperEnum).
 * @param index - The index to check.
 * @param target - The value or values to compare.
 * @returns {boolean} Result of the index operation.
 */
export type ObjectArrayIndexPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: ArrayIndexOper | ValueOf<ArrayIndexOperEnum>,
  index: number,
  target?: any | any[]
) => boolean;

/**
 * Predicate for array operations on object properties.
 * Applies an array operation to the value at obj[key] if it is an array.
 * @param obj - The object containing the array property.
 * @param key - The key of the property to test.
 * @param oper - The array operation to perform (from ArrayOperEnum).
 * @param target - The value or values to check, depending on the operation.
 * @returns {boolean} Result of the operation.
 */
export type ObjectArrayPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: ArrayOper | ValueOf<ArrayOperEnum>,
  target?: any | any[]
) => boolean;

/**
 * Predicate for array size-based operations on object properties.
 * Applies an array size operation to the value at obj[key] if it is an array.
 * @param obj - The object containing the array property.
 * @param key - The key of the property to test.
 * @param oper - The array size operation to perform (from ArraySizeOperEnum).
 * @param num - The length to compare (if applicable).
 * @returns {boolean} Result of the size operation.
 */
export type ObjectArraySizePredicate = (
  obj: Record<string, any>,
  key: string,
  oper: ArraySizeOper | ValueOf<ArraySizeOperEnum>,
  num?: number
) => boolean;

/**
 * Predicate for boolean values on object properties.
 * Delegates to booleanPredicate for the value at obj[key].
 * @param obj - The object containing the boolean property.
 * @param key - The key of the property to test.
 * @param oper - The boolean operation to apply (from BooleanOperEnum).
 * @param target - The target boolean value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export type ObjectBooleanPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: BooleanOper | ValueOf<BooleanOperEnum>,
  target: boolean
) => boolean;

/**
 * Predicate for calendar-based date values on object properties.
 * Delegates to calendarPredicate for the value at obj[key].
 * @param obj - The object containing the date property.
 * @param key - The key of the property to test.
 * @param oper - The calendar operation to apply (from CalendarOperEnum).
 * @param today - The reference date for calendar operations (optional).
 * @returns {boolean} The result of the predicate evaluation.
 */
export type ObjectCalendarPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: CalendarOper | ValueOf<CalendarOperEnum>,
  today?: Date
) => boolean;

/**
 * Predicate for date values on object properties.
 * Delegates to datePredicate for the value at obj[key].
 * @param obj - The object containing the date property.
 * @param key - The key of the property to test.
 * @param oper - The date operation to apply (from DateOperEnum).
 * @param target - The target date value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export type ObjectDatePredicate = (
  obj: Record<string, any>,
  key: string,
  oper: DateOper | ValueOf<DateOperEnum>,
  target: Date
) => boolean;

/**
 * Predicate for date range values on object properties.
 * Delegates to dateRangePredicate for the value at obj[key].
 * @param obj - The object containing the date property.
 * @param key - The key of the property to test.
 * @param oper - The range operation to apply (from RangeOperEnum).
 * @param min - The minimum date bound.
 * @param max - The maximum date bound.
 * @returns {boolean} The result of the predicate evaluation.
 */
export type ObjectDateRangePredicate = (
  obj: Record<string, any>,
  key: string,
  oper: RangeOper | ValueOf<RangeOperEnum>,
  min: Date,
  max: Date
) => boolean;

/**
 * Predicate for generic object operations (e.g. key presence, value inclusion, etc.).
 * @param obj - The object to check.
 * @param oper - The object operation to perform (from ObjectOperEnum).
 * @param target - The value or values to check, depending on the operation.
 * @returns {boolean} Result of the operation.
 */
export type ObjectPredicate = (
  obj: Record<string, any>,
  oper: ObjectOper | ValueOf<ObjectOperEnum>,
  target: string | string[]
) => boolean;

/**
 * Predicate for number values on object properties.
 * Delegates to numberPredicate for the value at obj[key].
 * @param obj - The object containing the number property.
 * @param key - The key of the property to test.
 * @param oper - The number operation to apply (from NumberOperEnum).
 * @param target - The target number value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export type ObjectNumberPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: NumberOper | ValueOf<NumberOperEnum>,
  target: number
) => boolean;

/**
 * Predicate for number range values on object properties.
 * Delegates to numberRangePredicate for the value at obj[key].
 * @param obj - The object containing the number property.
 * @param key - The key of the property to test.
 * @param oper - The range operation to apply (from RangeOperEnum).
 * @param min - The minimum number bound.
 * @param max - The maximum number bound.
 * @returns {boolean} The result of the predicate evaluation.
 */
export type ObjectNumberRangePredicate = (
  obj: Record<string, any>,
  key: string,
  oper: RangeOper | ValueOf<RangeOperEnum>,
  min: number,
  max: number
) => boolean;

/**
 * Predicate for string state checks on object properties (e.g. empty, not empty).
 * Delegates to stringStatePredicate for the value at obj[key].
 * @param obj - The object containing the string property.
 * @param key - The key of the property to test.
 * @param oper - The state operation to apply (IS_EMPTY, IS_NOT_EMPTY).
 * @returns {boolean} True if the string matches the state, false otherwise.
 */
export type ObjectStringStatePredicate = (
  obj: Record<string, any>,
  key: string,
  oper: StringStateOper | ValueOf<StringStateOperEnum>
) => boolean;

/**
 * Predicate for string values on object properties.
 * Delegates to stringPredicate for the value at obj[key].
 * @param obj - The object containing the string property.
 * @param key - The key of the property to test.
 * @param oper - The string operation to apply (from StringOperEnum).
 * @param target - The target string value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export type ObjectStringPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: StringOper | ValueOf<StringOperEnum>,
  target: string | RegExp
) => boolean;

/**
 * Predicate for string state checks (e.g. empty, not empty).
 * Evaluates a string value according to a state operation from StringStateOperEnum.
 * @param source - The string value to check.
 * @param oper - The state operation to apply (IS_EMPTY, IS_NOT_EMPTY).
 * @returns {boolean} True if the string matches the state, false otherwise.
 */
export type StringStatePredicate = (source: string, oper: StringStateOper | ValueOf<StringStateOperEnum>) => boolean;

/**
 * Predicate for string values.
 * Evaluates a string value against a target using the specified operator.
 * @param source - The source string value.
 * @param oper - The operator to apply. Must be a value from StringOperEnum.
 * @param target - The target string value.
 * @returns {boolean} Result of the predicate.
 */
export type StringPredicate = (
  source: string,
  oper: StringOper | ValueOf<StringOperEnum>,
  target: string | RegExp
) => boolean;
