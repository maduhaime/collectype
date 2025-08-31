import { ArrayIndexOperEnum, ArrayOperEnum, ArraySizeOperEnum } from './enums/arrayOperation';
import { arrayIndexPredicate } from './utils/predicates/arrayIndexPredicate';
import { arrayPredicate } from './utils/predicates/arrayPredicate';
import { arraySizePredicate } from './utils/predicates/arraySizePredicate';
import { BaseFunctions } from './BaseFunctions';
import { BooleanOperEnum } from './enums/booleanOperation';
import { booleanPredicate } from './utils/predicates/booleanPredicate';
import { ByType } from './types/utility';
import { CalendarOperEnum } from './enums/calendarOperation';
import { calendarPredicate } from './utils/predicates/calendarPredicate';
import { DateOperEnum } from './enums/dateOperation';
import { datePredicate } from './utils/predicates/datePredicate';
import { dateRangePredicate } from './utils/predicates/dateRangePredicate';
import { NumberOperEnum } from './enums/numberOperation';
import { numberPredicate } from './utils/predicates/numberPredicate';
import { numberRangePredicate } from './utils/predicates/numberRangePredicate';
import { RangeOperEnum } from './enums/rangeOperation';
import { stringPredicate } from './utils/predicates/stringPredicate';
import { StringOperEnum, StringStateOperEnum } from './enums/stringOperation';
import { stringStatePredicate } from './utils/predicates/stringStatePredicate';

export class FullFunctions<T> extends BaseFunctions<T> {
  // ===========================
  // Array filters
  // ===========================

  arrayEquals<K extends keyof ByType<this, any[]>>(field: K, target: any[]): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.EQUALS, target));
  }

  arraySetEquals<K extends keyof ByType<this, any[]>>(field: K, target: any[]): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.SET_EQUALS, target));
  }

  arrayIncludes<K extends keyof ByType<this, any[]>>(field: K, target: any): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.INCLUDES, target));
  }

  arrayExcludes<K extends keyof ByType<this, any[]>>(field: K, target: any): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.EXCLUDES, target));
  }

  arraySomeEquals<K extends keyof ByType<this, any[]>>(field: K, target: any): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.SOME_EQUALS, target));
  }

  arrayEveryEquals<K extends keyof ByType<this, any[]>>(field: K, target: any): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.EVERY_EQUALS, target));
  }

  arrayIsSubsetOf<K extends keyof ByType<this, any[]>>(field: K, target: any[]): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.IS_SUBSET_OF, target));
  }

  arrayIsSupersetOf<K extends keyof ByType<this, any[]>>(field: K, target: any[]): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.IS_SUPERSET_OF, target));
  }

  arrayStartsWith<K extends keyof ByType<this, any[]>>(field: K, target: any[]): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.STARTS_WITH, target));
  }

  arrayEndsWith<K extends keyof ByType<this, any[]>>(field: K, target: any[]): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.ENDS_WITH, target));
  }

  arrayContainsSubsequence<K extends keyof ByType<this, any[]>>(field: K, target: any[]): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.CONTAINS_SUBSEQUENCE, target));
  }

  arrayIntersects<K extends keyof ByType<this, any[]>>(field: K, target: any[]): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.INTERSECTS, target));
  }

  arrayDisjoint<K extends keyof ByType<this, any[]>>(field: K, target: any[]): this {
    return this.where((item: any) => arrayPredicate(item[field] as any, ArrayOperEnum.DISJOINT, target));
  }

  // ===========================
  // Array index filters
  // ===========================

  arrayIndexEquals<K extends keyof ByType<this, any[]>>(field: K, index: number, target: any): this {
    return this.where((item: any) =>
      arrayIndexPredicate(item[field] as any[], ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, index, target)
    );
  }

  arrayIndexNotEquals<K extends keyof ByType<this, any[]>>(field: K, index: number, target: any): this {
    return this.where((item: any) =>
      arrayIndexPredicate(item[field] as any[], ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, index, target)
    );
  }

  arrayIndexIn<K extends keyof ByType<this, any[]>>(field: K, index: number, targets: any[]): this {
    return this.where((item: any) =>
      arrayIndexPredicate(item[field] as any[], ArrayIndexOperEnum.VALUE_AT_INDEX_IN, index, targets)
    );
  }

  arrayIndexNotIn<K extends keyof ByType<this, any[]>>(field: K, index: number, targets: any[]): this {
    return this.where((item: any) =>
      arrayIndexPredicate(item[field] as any[], ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, index, targets)
    );
  }

  arrayIndexGreaterThan<K extends keyof ByType<this, any[]>>(field: K, index: number, target: any): this {
    return this.where((item: any) =>
      arrayIndexPredicate(item[field] as any[], ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN, index, target)
    );
  }

  arrayIndexGreaterThanOrEquals<K extends keyof ByType<this, any[]>>(field: K, index: number, target: any): this {
    return this.where((item: any) =>
      arrayIndexPredicate(item[field] as any[], ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, index, target)
    );
  }

  arrayIndexLessThan<K extends keyof ByType<this, any[]>>(field: K, index: number, target: any): this {
    return this.where((item: any) =>
      arrayIndexPredicate(item[field] as any[], ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN, index, target)
    );
  }

  arrayIndexLessThanOrEquals<K extends keyof ByType<this, any[]>>(field: K, index: number, target: any): this {
    return this.where((item: any) =>
      arrayIndexPredicate(item[field] as any[], ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS, index, target)
    );
  }

  // ===========================
  // Array size filters
  // ===========================

  arrayLengthEquals<K extends keyof ByType<T, any[]>>(field: K, n: number): this {
    return this.where((item) => arraySizePredicate(item[field] as any[], ArraySizeOperEnum.LENGTH_EQUALS, n));
  }

  arrayLengthGreaterThan<K extends keyof ByType<T, any[]>>(field: K, n: number): this {
    return this.where((item) => arraySizePredicate(item[field] as any[], ArraySizeOperEnum.LENGTH_GREATER_THAN, n));
  }

  arrayLengthGreaterThanOrEquals<K extends keyof ByType<T, any[]>>(field: K, n: number): this {
    return this.where((item) =>
      arraySizePredicate(item[field] as any[], ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, n)
    );
  }

  arrayLengthLessThan<K extends keyof ByType<T, any[]>>(field: K, n: number): this {
    return this.where((item) => arraySizePredicate(item[field] as any[], ArraySizeOperEnum.LENGTH_LESS_THAN, n));
  }

  arrayLengthLessThanOrEquals<K extends keyof ByType<T, any[]>>(field: K, n: number): this {
    return this.where((item) =>
      arraySizePredicate(item[field] as any[], ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, n)
    );
  }

  arrayIsEmpty<K extends keyof ByType<T, any[]>>(field: K): this {
    return this.where((item) => arraySizePredicate(item[field] as any[], ArraySizeOperEnum.IS_EMPTY));
  }

  arrayIsNotEmpty<K extends keyof ByType<T, any[]>>(field: K): this {
    return this.where((item) => arraySizePredicate(item[field] as any[], ArraySizeOperEnum.IS_NOT_EMPTY));
  }

  // ===========================
  // Boolean filters
  // ===========================

  booleanEquals<K extends keyof ByType<T, boolean>>(field: K, target: boolean): this {
    return this.where((item) => booleanPredicate(item[field] as boolean, BooleanOperEnum.EQUALS, target));
  }

  booleanNotEquals<K extends keyof ByType<T, boolean>>(field: K, target: boolean): this {
    return this.where((item) => booleanPredicate(item[field] as boolean, BooleanOperEnum.NOT_EQUALS, target));
  }

  // ===========================
  // Date filters
  // ===========================

  dateEquals<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    return this.where((item) => datePredicate(item[field] as Date, DateOperEnum.EQUALS, target));
  }

  dateNotEquals<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    return this.where((item) => datePredicate(item[field] as Date, DateOperEnum.NOT_EQUALS, target));
  }

  dateOccursBefore<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    return this.where((item) => datePredicate(item[field] as Date, DateOperEnum.OCCURS_BEFORE, target));
  }

  dateOccursOnOrBefore<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    return this.where((item) => datePredicate(item[field] as Date, DateOperEnum.OCCURS_ON_OR_BEFORE, target));
  }

  dateOccursAfter<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    return this.where((item) => datePredicate(item[field] as Date, DateOperEnum.OCCURS_AFTER, target));
  }

  dateOccursOnOrAfter<K extends keyof ByType<T, Date>>(field: K, target: Date): this {
    return this.where((item) => datePredicate(item[field] as Date, DateOperEnum.OCCURS_ON_OR_AFTER, target));
  }

  // ===========================
  // Calendar filters
  // ===========================

  dateIsToday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    return this.where((item) => calendarPredicate(item[field] as Date, CalendarOperEnum.IS_TODAY, today));
  }

  dateIsYesterday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    return this.where((item) => calendarPredicate(item[field] as Date, CalendarOperEnum.IS_YESTERDAY, today));
  }

  dateIsBeforeToday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    return this.where((item) => calendarPredicate(item[field] as Date, CalendarOperEnum.IS_BEFORE_TODAY, today));
  }

  dateIsAfterToday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    return this.where((item) => calendarPredicate(item[field] as Date, CalendarOperEnum.IS_AFTER_TODAY, today));
  }

  dateIsFuture<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    return this.where((item) => calendarPredicate(item[field] as Date, CalendarOperEnum.IS_FUTURE, today));
  }

  dateIsPast<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    return this.where((item) => calendarPredicate(item[field] as Date, CalendarOperEnum.IS_PAST, today));
  }

  dateIsWeekend<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    return this.where((item) => calendarPredicate(item[field] as Date, CalendarOperEnum.IS_WEEKEND, today));
  }

  dateIsWeekday<K extends keyof ByType<T, Date>>(field: K, today: Date = new Date()): this {
    return this.where((item) => calendarPredicate(item[field] as Date, CalendarOperEnum.IS_WEEKDAY, today));
  }

  // ===========================
  // Date range filters
  // ===========================

  dateInRange<K extends keyof ByType<T, Date>>(field: K, min: Date, max: Date): this {
    return this.where((item) => dateRangePredicate(item[field] as Date, RangeOperEnum.IN_RANGE, min, max));
  }

  dateOutRange<K extends keyof ByType<T, Date>>(field: K, min: Date, max: Date): this {
    return this.where((item) => dateRangePredicate(item[field] as Date, RangeOperEnum.OUT_RANGE, min, max));
  }

  dateStrictInRange<K extends keyof ByType<T, Date>>(field: K, min: Date, max: Date): this {
    return this.where((item) => dateRangePredicate(item[field] as Date, RangeOperEnum.STRICT_IN_RANGE, min, max));
  }

  dateStrictOutRange<K extends keyof ByType<T, Date>>(field: K, min: Date, max: Date): this {
    return this.where((item) => dateRangePredicate(item[field] as Date, RangeOperEnum.STRICT_OUT_RANGE, min, max));
  }

  // ===========================
  // Number filters
  // ===========================

  numberEquals<K extends keyof ByType<T, number>>(field: K, target: number): this {
    return this.where((item) => numberPredicate(item[field] as number, NumberOperEnum.EQUALS, target));
  }

  numberNotEquals<K extends keyof ByType<T, number>>(field: K, target: number): this {
    return this.where((item) => numberPredicate(item[field] as number, NumberOperEnum.NOT_EQUALS, target));
  }

  numberLessThan<K extends keyof ByType<T, number>>(field: K, target: number): this {
    return this.where((item) => numberPredicate(item[field] as number, NumberOperEnum.LESS_THAN, target));
  }

  numberLessThanOrEquals<K extends keyof ByType<T, number>>(field: K, target: number): this {
    return this.where((item) => numberPredicate(item[field] as number, NumberOperEnum.LESS_THAN_OR_EQUALS, target));
  }

  numberGreaterThan<K extends keyof ByType<T, number>>(field: K, target: number): this {
    return this.where((item) => numberPredicate(item[field] as number, NumberOperEnum.GREATER_THAN, target));
  }

  numberGreaterThanOrEquals<K extends keyof ByType<T, number>>(field: K, target: number): this {
    return this.where((item) => numberPredicate(item[field] as number, NumberOperEnum.GREATER_THAN_OR_EQUALS, target));
  }

  // ===========================
  // Number range filters
  // ===========================

  numberInRange<K extends keyof ByType<T, number>>(field: K, min: number, max: number): this {
    return this.where((item) => numberRangePredicate(item[field] as number, RangeOperEnum.IN_RANGE, min, max));
  }

  numberOutRange<K extends keyof ByType<T, number>>(field: K, min: number, max: number): this {
    return this.where((item) => numberRangePredicate(item[field] as number, RangeOperEnum.OUT_RANGE, min, max));
  }

  numberStrictInRange<K extends keyof ByType<T, number>>(field: K, min: number, max: number): this {
    return this.where((item) => numberRangePredicate(item[field] as number, RangeOperEnum.STRICT_IN_RANGE, min, max));
  }

  numberStrictOutRange<K extends keyof ByType<T, number>>(field: K, min: number, max: number): this {
    return this.where((item) => numberRangePredicate(item[field] as number, RangeOperEnum.STRICT_OUT_RANGE, min, max));
  }

  // ===========================
  // String filters
  // ===========================

  stringEquals<K extends keyof ByType<T, string>>(field: K, target: string): this {
    return this.where((item) => stringPredicate(item[field] as string, StringOperEnum.EQUALS, target));
  }

  stringNotEquals<K extends keyof ByType<T, string>>(field: K, target: string): this {
    return this.where((item) => stringPredicate(item[field] as string, StringOperEnum.NOT_EQUALS, target));
  }

  stringIncludes<K extends keyof ByType<T, string>>(field: K, target: string): this {
    return this.where((item) => stringPredicate(item[field] as string, StringOperEnum.INCLUDES, target));
  }

  stringExcludes<K extends keyof ByType<T, string>>(field: K, target: string): this {
    return this.where((item) => stringPredicate(item[field] as string, StringOperEnum.EXCLUDES, target));
  }

  stringStartsWith<K extends keyof ByType<T, string>>(field: K, target: string): this {
    return this.where((item) => stringPredicate(item[field] as string, StringOperEnum.STARTS_WITH, target));
  }

  stringEndsWith<K extends keyof ByType<T, string>>(field: K, target: string): this {
    return this.where((item) => stringPredicate(item[field] as string, StringOperEnum.ENDS_WITH, target));
  }

  stringMatches<K extends keyof ByType<T, string>>(field: K, pattern: string): this {
    return this.where((item) => stringPredicate(item[field] as string, StringOperEnum.MATCHES, pattern));
  }

  // ===========================
  // String state filters
  // ===========================

  stringIsEmpty<K extends keyof ByType<T, string>>(field: K): this {
    return this.where((item) => stringStatePredicate(item[field] as string, StringStateOperEnum.IS_EMPTY));
  }

  stringIsNotEmpty<K extends keyof ByType<T, string>>(field: K): this {
    return this.where((item) => stringStatePredicate(item[field] as string, StringStateOperEnum.IS_NOT_EMPTY));
  }
}
