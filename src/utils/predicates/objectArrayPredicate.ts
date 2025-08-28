import { arrayPredicate } from './arrayPredicate';
import { ObjectArrayPredicate } from '@/types/predicate';

/**
 * Object array predicate: delegates array operations on an object property to arrayPredicate.
 * @param obj - The object containing the array property.
 * @param key - The key of the property to test.
 * @param oper - The array operation to apply.
 * @param target - The target value(s) for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectArrayPredicate: ObjectArrayPredicate = (obj, key, oper, target) => {
  if (!Array.isArray(obj[key])) return false;
  return arrayPredicate(obj[key], oper, target);
};
