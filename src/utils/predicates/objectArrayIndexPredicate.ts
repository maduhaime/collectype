import { arrayIndexPredicate } from './arrayIndexPredicate';
import { ObjectArrayIndexPredicate } from '@/types/predicate';

/**
 * Object array index predicate: delegates array index operations on an object property to arrayIndexPredicate.
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
