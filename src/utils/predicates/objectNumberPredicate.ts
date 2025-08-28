import { numberPredicate } from './numberPredicate';
import { NumberOper } from '../../types/numberOperation';
import { NumberOperEnum } from '../../enums/numberOperation';
import { ValueOf } from '../../types/utility';

// Type for object number predicate function
export type ObjectNumberPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: NumberOper | ValueOf<NumberOperEnum>,
  target: number
) => boolean;

/**
 * Delegates number operations on an object property to numberPredicate.
 * @param obj - The object containing the number property.
 * @param key - The key of the property to test.
 * @param oper - The number operation to apply.
 * @param target - The target number value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectNumberPredicate: ObjectNumberPredicate = (obj, key, oper, target) => {
  // Guard clause: return false if the property is not a number
  if (typeof obj[key] !== 'number') return false;

  return numberPredicate(obj[key] as number, oper, target);
};
