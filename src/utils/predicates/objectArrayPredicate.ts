import { arrayPredicate } from './arrayPredicate';
import { ArrayOper } from '../../types/arrayOperation';
import { ArrayOperEnum } from '../../enums/arrayOperation';
import { ValueOf } from '../../types/utility';

// Type for object array predicate function
export type ObjectArrayPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: ArrayOper | ValueOf<ArrayOperEnum>,
  target?: any | any[]
) => boolean;

/**
 * Delegates array operations on an object property to arrayPredicate.
 * @param obj - The object containing the array property.
 * @param key - The key of the property to test.
 * @param oper - The array operation to apply.
 * @param target - The target value(s) for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectArrayPredicate: ObjectArrayPredicate = (obj, key, oper, target) => {
  // Guard clause: return false if the property is not an array
  if (!Array.isArray(obj[key])) return false;

  return arrayPredicate(obj[key], oper, target);
};
