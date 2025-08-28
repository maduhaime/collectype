import { datePredicate } from './datePredicate';
import { DateOper } from '../../types/dateOperation';
import { DateOperEnum } from '../../enums/dateOperation';
import { ValueOf } from '../../types/utility';

// Type for object date predicate function
export type ObjectDatePredicate = (
  obj: Record<string, any>,
  key: string,
  oper: DateOper | ValueOf<DateOperEnum>,
  target: Date
) => boolean;

/**
 * Delegates date operations on an object property to datePredicate.
 * @param obj - The object containing the date property.
 * @param key - The key of the property to test.
 * @param oper - The date operation to apply.
 * @param target - The target date value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectDatePredicate: ObjectDatePredicate = (obj, key, oper, target) => {
  if (!(obj[key] instanceof Date)) return false;
  return datePredicate(obj[key] as Date, oper, target);
};
