import { stringPredicate } from './stringPredicate';
import { StringOper } from '../../types/stringOperation';
import { StringOperEnum } from '../../enums/stringOperation';
import { ValueOf } from '../../types/utility';

// Type for object string predicate function
export type ObjectStringPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: StringOper | ValueOf<StringOperEnum>,
  target: string | RegExp
) => boolean;

/**
 * Delegates string operations on an object property to stringPredicate.
 * @param obj - The object containing the string property.
 * @param key - The key of the property to test.
 * @param oper - The string operation to apply (from StringOperEnum).
 * @param target - The target string value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 */
export const objectStringPredicate: ObjectStringPredicate = (obj, key, oper, target): boolean => {
  if (typeof obj[key] !== 'string') return false;
  return stringPredicate(obj[key] as string, oper, target);
};
