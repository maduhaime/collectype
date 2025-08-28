import { numberPredicate } from './numberPredicate';
import { ObjectNumberPredicate } from '@/types/predicate';

/**
 * Object number predicate: delegates number operations on an object property to numberPredicate.
 * @param obj - The object containing the number property.
 * @param key - The key of the property to test.
 * @param oper - The number operation to apply.
 * @param target - The target number value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectNumberPredicate: ObjectNumberPredicate = (obj, key, oper, target) => {
  if (typeof obj[key] !== 'number') return false;
  return numberPredicate(obj[key] as number, oper, target);
};
