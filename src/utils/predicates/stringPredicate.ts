import { StringOperEnum } from '../../enums/stringOperation';
import { EnumOrString } from '../../types';

// Type for string predicate function
export type StringPredicate = (
  source: string,
  oper: EnumOrString<typeof StringOperEnum>,
  target: string | RegExp
) => boolean;

/**
 * Evaluates a string value against a target using the specified operator.
 * Supports equality, inclusion, exclusion, pattern matching, and position checks.
 * @param source - The source string value.
 * @param oper - The operator to apply. Must be a value from StringOperEnum.
 * @param target - The target string value or RegExp.
 * @returns Result of the predicate.
 * @example
 * stringPredicate('abc', 'equals', 'abc'); // true
 * stringPredicate('abc', 'matches', /^a/); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const stringPredicate: StringPredicate = (source, oper, target) => {
  // If operation is EQUALS, check strict equality
  if (oper === StringOperEnum.EQUALS) {
    return source === target;
  }
  // If operation is NOT_EQUALS, check strict inequality
  if (oper === StringOperEnum.NOT_EQUALS) {
    return source !== target;
  }
  // If operation is INCLUDES, check if source includes target
  if (oper === StringOperEnum.INCLUDES) {
    return typeof target === 'string' ? source.includes(target) : false;
  }
  // If operation is EXCLUDES, check if source excludes target
  if (oper === StringOperEnum.EXCLUDES) {
    return typeof target === 'string' ? !source.includes(target) : false;
  }
  // If operation is STARTS_WITH, check if source starts with target
  if (oper === StringOperEnum.STARTS_WITH) {
    return typeof target === 'string' ? source.startsWith(target) : false;
  }
  // If operation is ENDS_WITH, check if source ends with target
  if (oper === StringOperEnum.ENDS_WITH) {
    return typeof target === 'string' ? source.endsWith(target) : false;
  }
  // If operation is MATCHES, check if source matches target (string or RegExp)
  if (oper === StringOperEnum.MATCHES) {
    // If target is a string, create a RegExp from it
    if (typeof target === 'string') return new RegExp(target).test(source);
    // If target is a RegExp, use it directly
    if (target instanceof RegExp) return target.test(source);
    // Any other type returns false
    return false;
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported string predicate operation: ${oper}`);
};
