import { dateRangePredicate } from './dateRangePredicate';
import { RangeOper } from '../../types/rangeOperation';
import { RangeOperEnum } from '../../enums/rangeOperation';
import { ValueOf } from '../../types/utility';

// Type for object date range predicate function
export type ObjectDateRangePredicate = (
  obj: Record<string, any>,
  key: string,
  oper: RangeOper | ValueOf<RangeOperEnum>,
  min: Date,
  max: Date
) => boolean;

/**
 * Delegates date range operations on an object property to dateRangePredicate.
 * @param obj - The object containing the date property.
 * @param key - The key of the property to test.
 * @param oper - The range operation to apply.
 * @param min - The minimum date bound.
 * @param max - The maximum date bound.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectDateRangePredicate: ObjectDateRangePredicate = (obj, key, oper, min, max) => {
  if (!(obj[key] instanceof Date)) return false;
  return dateRangePredicate(obj[key] as Date, oper, min, max);
};
