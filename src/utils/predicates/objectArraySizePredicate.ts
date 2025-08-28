import { arraySizePredicate } from './arraySizePredicate';
import { ArraySizeOper } from '../../types/arrayOperation';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { ValueOf } from '../../types/utility';

// Type for object array size predicate function
export type ObjectArraySizePredicate = (
  obj: Record<string, any>,
  key: string,
  oper: ArraySizeOper | ValueOf<ArraySizeOperEnum>,
  num?: number
) => boolean;

/**
 * Delegates array size operations on an object property to arraySizePredicate.
 * @param obj - The object containing the array property.
 * @param key - The key of the property to test.
 * @param oper - The array size operation to apply.
 * @param num - The size value to compare (if applicable).
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectArraySizePredicate: ObjectArraySizePredicate = (obj, key, oper, num) => {
  if (!Array.isArray(obj[key])) return false;
  return arraySizePredicate(obj[key], oper, num);
};
