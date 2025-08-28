import { StringStateOper } from '../../types/stringOperation';
import { StringStateOperEnum } from '../../enums/stringOperation';
import { stringStatePredicate } from './stringStatePredicate';
import { ValueOf } from '../../types/utility';

// Type for object string state predicate function
export type ObjectStringStatePredicate = (
  obj: Record<string, any>,
  key: string,
  oper: StringStateOper | ValueOf<StringStateOperEnum>
) => boolean;

/**
 * Delegates string state operations on an object property to stringStatePredicate.
 * @param obj - The object containing the string property.
 * @param key - The key of the property to test.
 * @param oper - The state operation to apply (IS_EMPTY, IS_NOT_EMPTY).
 * @returns {boolean} True if the string matches the state, false otherwise.
 */
export const objectStringStatePredicate: ObjectStringStatePredicate = (obj, key, oper): boolean => {
  // Check if the property is a string
  if (typeof obj[key] !== 'string') return false;
  return stringStatePredicate(obj[key] as string, oper);
};
