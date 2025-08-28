import { booleanPredicate } from './booleanPredicate';
import { BooleanOper } from '../../types/booleanOperation';
import { BooleanOperEnum } from '../../enums/booleanOperation';
import { ValueOf } from '../../types/utility';

// Type for object boolean predicate function
export type ObjectBooleanPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: BooleanOper | ValueOf<BooleanOperEnum>,
  target: boolean
) => boolean;

/**
 * Delegates boolean operations on an object property to booleanPredicate.
 * @param obj - The object containing the boolean property.
 * @param key - The key of the property to test.
 * @param oper - The boolean operation to apply.
 * @param target - The target boolean value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectBooleanPredicate: ObjectBooleanPredicate = (obj, key, oper, target) => {
  // Guard clause: return false if the property is not a boolean
  if (typeof obj[key] !== 'boolean') return false;

  return booleanPredicate(obj[key] as boolean, oper, target);
};
