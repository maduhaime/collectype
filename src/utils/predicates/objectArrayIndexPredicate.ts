import { arrayIndexPredicate } from './arrayIndexPredicate';
import { ArrayIndexOper } from '../../types/arrayOperation';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';
import { ValueOf } from '../../types/utility';

// Type for object array index predicate function
export type ObjectArrayIndexPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: ArrayIndexOper | ValueOf<ArrayIndexOperEnum>,
  index: number,
  target?: any | any[]
) => boolean;

/**
 * Delegates array index operations on an object property to arrayIndexPredicate.
 * @param obj - The object containing the array property.
 * @param key - The key of the property to test.
 * @param oper - The array index operation to apply.
 * @param index - The index to check.
 * @param target - The target value(s) for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectArrayIndexPredicate: ObjectArrayIndexPredicate = (obj, key, oper, index, target) => {
  if (!Array.isArray(obj[key])) return false;
  return arrayIndexPredicate(obj[key], oper, index, target);
};
