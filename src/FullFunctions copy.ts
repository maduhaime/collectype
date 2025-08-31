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
  // Object Array filters
  // ===========================

  objArrayEquals<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.EQUALS, target);
    });
  }

  objArraySetEquals<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.SET_EQUALS, target);
    });
  }

  objArrayIncludes<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.INCLUDES, target);
    });
  }

  objArrayExcludes<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.EXCLUDES, target);
    });
  }

  objArraySomeEquals<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.SOME_EQUALS, target);
    });
  }

  objArrayEveryEquals<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.EVERY_EQUALS, target);
    });
  }

  objArrayIsSubsetOf<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.IS_SUBSET_OF, target);
    });
  }

  objArrayIsSupersetOf<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.IS_SUPERSET_OF, target);
    });
  }

  objArrayStartsWith<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.STARTS_WITH, target);
    });
  }

  objArrayEndsWith<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.ENDS_WITH, target);
    });
  }

  objArrayContainsSubsequence<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.CONTAINS_SUBSEQUENCE, target);
    });
  }

  objArrayIntersects<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.INTERSECTS, target);
    });
  }

  objArrayDisjoint<K extends keyof ByType<T, any[]>>(field: K, key: string, target: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayPredicate(arr, ArrayOperEnum.DISJOINT, target);
    });
  }

  // ===========================
  // Object Array index filters
  // ===========================

  objArrayIndexEquals<K extends keyof ByType<T, any[]>>(field: K, key: string, index: number, target: any): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, index, target);
    });
  }

  objArrayIndexNotEquals<K extends keyof ByType<T, any[]>>(field: K, key: string, index: number, target: any): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, index, target);
    });
  }

  objArrayIndexIn<K extends keyof ByType<T, any[]>>(field: K, key: string, index: number, targets: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_IN, index, targets);
    });
  }

  objArrayIndexNotIn<K extends keyof ByType<T, any[]>>(field: K, key: string, index: number, targets: any[]): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, index, targets);
    });
  }

  objArrayIndexGreaterThan<K extends keyof ByType<T, any[]>>(field: K, key: string, index: number, target: any): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN, index, target);
    });
  }

  objArrayIndexGreaterThanOrEquals<K extends keyof ByType<T, any[]>>(
    field: K,
    key: string,
    index: number,
    target: any
  ): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, index, target);
    });
  }

  objArrayIndexLessThan<K extends keyof ByType<T, any[]>>(field: K, key: string, index: number, target: any): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN, index, target);
    });
  }

  objArrayIndexLessThanOrEquals<K extends keyof ByType<T, any[]>>(
    field: K,
    key: string,
    index: number,
    target: any
  ): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS, index, target);
    });
  }

  // ===========================
  // Object Array size filters
  // ===========================

  objArrayLengthEquals<K extends keyof ByType<T, any[]>>(field: K, key: string, n: number): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_EQUALS, n);
    });
  }

  objArrayLengthGreaterThan<K extends keyof ByType<T, any[]>>(field: K, key: string, n: number): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN, n);
    });
  }

  objArrayLengthGreaterThanOrEquals<K extends keyof ByType<T, any[]>>(field: K, key: string, n: number): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, n);
    });
  }

  objArrayLengthLessThan<K extends keyof ByType<T, any[]>>(field: K, key: string, n: number): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, n);
    });
  }

  objArrayLengthLessThanOrEquals<K extends keyof ByType<T, any[]>>(field: K, key: string, n: number): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, n);
    });
  }

  objArrayIsEmpty<K extends keyof ByType<T, any[]>>(field: K, key: string): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.IS_EMPTY);
    });
  }

  objArrayIsNotEmpty<K extends keyof ByType<T, any[]>>(field: K, key: string): this {
    return this.where((item: T) => {
      const arr = item[field][key as keyof T[K]] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.IS_NOT_EMPTY);
    });
  }

  // ===========================
  // Object Boolean filters
  // ===========================

  objBooleanEquals<K extends keyof ByType<T, boolean>>(field: K, key: string, target: boolean): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as boolean;
      return booleanPredicate(source, BooleanOperEnum.EQUALS, target);
    });
  }

  objBooleanNotEquals<K extends keyof ByType<T, boolean>>(field: K, key: string, target: boolean): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as boolean;
      return booleanPredicate(source, BooleanOperEnum.NOT_EQUALS, target);
    });
  }

  // ===========================
  // Object Date filters
  // ===========================

  objDateEquals<K extends keyof ByType<T, Date>>(field: K, key: string, target: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return datePredicate(source, DateOperEnum.EQUALS, target);
    });
  }

  objDateNotEquals<K extends keyof ByType<T, Date>>(field: K, key: string, target: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return datePredicate(source, DateOperEnum.NOT_EQUALS, target);
    });
  }

  objDateOccursBefore<K extends keyof ByType<T, Date>>(field: K, key: string, target: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_BEFORE, target);
    });
  }

  objDateOccursOnOrBefore<K extends keyof ByType<T, Date>>(field: K, key: string, target: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_ON_OR_BEFORE, target);
    });
  }

  objDateOccursAfter<K extends keyof ByType<T, Date>>(field: K, key: string, target: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_AFTER, target);
    });
  }

  objDateOccursOnOrAfter<K extends keyof ByType<T, Date>>(field: K, key: string, target: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_ON_OR_AFTER, target);
    });
  }

  // ===========================
  // Object Calendar filters
  // ===========================

  objDateIsToday<K extends keyof ByType<T, Date>>(field: K, key: string, today: Date = new Date()): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_TODAY, today);
    });
  }

  objDateIsYesterday<K extends keyof ByType<T, Date>>(field: K, key: string, today: Date = new Date()): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_YESTERDAY, today);
    });
  }

  objDateIsBeforeToday<K extends keyof ByType<T, Date>>(field: K, key: string, today: Date = new Date()): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_BEFORE_TODAY, today);
    });
  }

  objDateIsAfterToday<K extends keyof ByType<T, Date>>(field: K, key: string, today: Date = new Date()): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_AFTER_TODAY, today);
    });
  }

  objDateIsFuture<K extends keyof ByType<T, Date>>(field: K, key: string, today: Date = new Date()): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_FUTURE, today);
    });
  }

  objDateIsPast<K extends keyof ByType<T, Date>>(field: K, key: string, today: Date = new Date()): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_PAST, today);
    });
  }

  objDateIsWeekend<K extends keyof ByType<T, Date>>(field: K, key: string, today: Date = new Date()): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_WEEKEND, today);
    });
  }

  objDateIsWeekday<K extends keyof ByType<T, Date>>(field: K, key: string, today: Date = new Date()): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_WEEKDAY, today);
    });
  }

  // ===========================
  // Object Date range filters
  // ===========================

  objDateInRange<K extends keyof ByType<T, Date>>(field: K, key: string, min: Date, max: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return dateRangePredicate(source, RangeOperEnum.IN_RANGE, min, max);
    });
  }

  objDateOutRange<K extends keyof ByType<T, Date>>(field: K, key: string, min: Date, max: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return dateRangePredicate(source, RangeOperEnum.OUT_RANGE, min, max);
    });
  }

  objDateStrictInRange<K extends keyof ByType<T, Date>>(field: K, key: string, min: Date, max: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return dateRangePredicate(source, RangeOperEnum.STRICT_IN_RANGE, min, max);
    });
  }

  objDateStrictOutRange<K extends keyof ByType<T, Date>>(field: K, key: string, min: Date, max: Date): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as Date;
      return dateRangePredicate(source, RangeOperEnum.STRICT_OUT_RANGE, min, max);
    });
  }

  // ===========================
  // Object Number filters
  // ===========================

  objNumberEquals<K extends keyof ByType<T, number>>(field: K, key: string, target: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberPredicate(source, NumberOperEnum.EQUALS, target);
    });
  }

  objNumberNotEquals<K extends keyof ByType<T, number>>(field: K, key: string, target: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberPredicate(source, NumberOperEnum.NOT_EQUALS, target);
    });
  }

  objNumberLessThan<K extends keyof ByType<T, number>>(field: K, key: string, target: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberPredicate(source, NumberOperEnum.LESS_THAN, target);
    });
  }

  objNumberLessThanOrEquals<K extends keyof ByType<T, number>>(field: K, key: string, target: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberPredicate(source, NumberOperEnum.LESS_THAN_OR_EQUALS, target);
    });
  }

  objNumberGreaterThan<K extends keyof ByType<T, number>>(field: K, key: string, target: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberPredicate(source, NumberOperEnum.GREATER_THAN, target);
    });
  }

  objNumberGreaterThanOrEquals<K extends keyof ByType<T, number>>(field: K, key: string, target: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberPredicate(source, NumberOperEnum.GREATER_THAN_OR_EQUALS, target);
    });
  }

  // ===========================
  // Object Number range filters
  // ===========================

  objNumberInRange<K extends keyof ByType<T, number>>(field: K, key: string, min: number, max: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberRangePredicate(source, RangeOperEnum.IN_RANGE, min, max);
    });
  }

  objNumberOutRange<K extends keyof ByType<T, number>>(field: K, key: string, min: number, max: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberRangePredicate(source, RangeOperEnum.OUT_RANGE, min, max);
    });
  }

  objNumberStrictInRange<K extends keyof ByType<T, number>>(field: K, key: string, min: number, max: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberRangePredicate(source, RangeOperEnum.STRICT_IN_RANGE, min, max);
    });
  }

  objNumberStrictOutRange<K extends keyof ByType<T, number>>(field: K, key: string, min: number, max: number): this {
    return this.where((item: T) => {
      const source = item[field][key as keyof T[K]] as number;
      return numberRangePredicate(source, RangeOperEnum.STRICT_OUT_RANGE, min, max);
    });
  }

  // ===========================
  // Object String filters
  // ===========================

  objStringEquals<K extends keyof ByType<T, string>>(field: K, key: string, target: string): this {
    return this.where((item: T) => {
      const str = item[field][key as keyof T[K]] as string;
      return stringPredicate(str, StringOperEnum.EQUALS, target);
    });
  }

  objStringNotEquals<K extends keyof ByType<T, string>>(field: K, key: string, target: string): this {
    return this.where((item: T) => {
      const str = item[field][key as keyof T[K]] as string;
      return stringPredicate(str, StringOperEnum.NOT_EQUALS, target);
    });
  }

  objStringIncludes<K extends keyof ByType<T, string>>(field: K, key: string, target: string): this {
    return this.where((item: T) => {
      const str = item[field][key as keyof T[K]] as string;
      return stringPredicate(str, StringOperEnum.INCLUDES, target);
    });
  }

  objStringExcludes<K extends keyof ByType<T, string>>(field: K, key: string, target: string): this {
    return this.where((item: T) => {
      const str = item[field][key as keyof T[K]] as string;
      return stringPredicate(str, StringOperEnum.EXCLUDES, target);
    });
  }

  objStringStartsWith<K extends keyof ByType<T, string>>(field: K, key: string, target: string): this {
    return this.where((item: T) => {
      const str = item[field][key as keyof T[K]] as string;
      return stringPredicate(str, StringOperEnum.STARTS_WITH, target);
    });
  }

  objStringEndsWith<K extends keyof ByType<T, string>>(field: K, key: string, target: string): this {
    return this.where((item: T) => {
      const str = item[field][key as keyof T[K]] as string;
      return stringPredicate(str, StringOperEnum.ENDS_WITH, target);
    });
  }

  objStringMatches<K extends keyof ByType<T, string>>(field: K, key: string, pattern: string): this {
    return this.where((item: T) => {
      const str = item[field][key as keyof T[K]] as string;
      return stringPredicate(str, StringOperEnum.MATCHES, pattern);
    });
  }

  // ===========================
  // Object String state filters
  // ===========================

  objStringIsEmpty<K extends keyof ByType<T, string>>(field: K, key: string): this {
    return this.where((item: T) => {
      const str = item[field][key as keyof T[K]] as string;
      return stringStatePredicate(str, StringStateOperEnum.IS_EMPTY);
    });
  }

  objStringIsNotEmpty<K extends keyof ByType<T, string>>(field: K, key: string): this {
    return this.where((item: T) => {
      const str = item[field][key as keyof T[K]] as string;
      return stringStatePredicate(str, StringStateOperEnum.IS_NOT_EMPTY);
    });
  }
}
