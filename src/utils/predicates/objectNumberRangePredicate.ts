import { numberRangePredicate } from './numberRangePredicate';
import { ObjectNumberRangePredicate } from '@/types/predicate';

/**
 * Object number range predicate: delegates number range operations on an object property to numberRangePredicate.
 * @param obj - The object containing the number property.
 * @param key - The key of the property to test.
 * @param oper - The range operation to apply.
 * @param min - The minimum number bound.
 * @param max - The maximum number bound.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectNumberRangePredicate: ObjectNumberRangePredicate = (obj, key, oper, min, max) => {
  if (typeof obj[key] !== 'number') return false;
  return numberRangePredicate(obj[key] as number, oper, min, max);
};
