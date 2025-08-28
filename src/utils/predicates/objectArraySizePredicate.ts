import { arraySizePredicate } from './arraySizePredicate';
import { ObjectArraySizePredicate } from '@/types/predicate';

/**
 * Object array size predicate: delegates array size operations on an object property to arraySizePredicate.
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
