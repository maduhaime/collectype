import { stringStatePredicate } from './stringStatePredicate';
import { ObjectStringStatePredicate } from '@/types/predicate';

/**
 * Object string predicate: delegates string operations on an object property to stringPredicate.
 *
 * @param obj - The object containing the string property.
 * @param key - The key of the property to test.
 * @param oper - The string operation to apply (from StringOperEnum).
 * @param target - The target string value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectStringStatePredicate: ObjectStringStatePredicate = (obj, key, oper): boolean => {
  if (typeof obj[key] !== 'string') return false;
  return stringStatePredicate(obj[key] as string, oper);
};
