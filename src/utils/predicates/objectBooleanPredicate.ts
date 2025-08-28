import { booleanPredicate } from './booleanPredicate';
import { ObjectBooleanPredicate } from '@/types/predicate';

/**
 * Object boolean predicate: delegates boolean operations on an object property to booleanPredicate.
 * @param obj - The object containing the boolean property.
 * @param key - The key of the property to test.
 * @param oper - The boolean operation to apply.
 * @param target - The target boolean value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectBooleanPredicate: ObjectBooleanPredicate = (obj, key, oper, target) => {
  if (typeof obj[key] !== 'boolean') return false;
  return booleanPredicate(obj[key] as boolean, oper, target);
};
