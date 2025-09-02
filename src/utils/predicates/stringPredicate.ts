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
 * @param target - The target string value.
 * @returns {boolean} Result of the predicate.
 * @throws Error if an unsupported operator is provided.
 */
export const stringPredicate: StringPredicate = (source, oper, target) => {
  // Check for strict equality
  if (oper === StringOperEnum.EQUALS) return source === target;

  // Check for strict inequality
  if (oper === StringOperEnum.NOT_EQUALS) return source !== target;

  // Check if source includes target
  if (oper === StringOperEnum.INCLUDES) return typeof target === 'string' ? source.includes(target) : false;

  // Check if source excludes target
  if (oper === StringOperEnum.EXCLUDES) return typeof target === 'string' ? !source.includes(target) : false;

  // Check if source starts with target
  if (oper === StringOperEnum.STARTS_WITH) return typeof target === 'string' ? source.startsWith(target) : false;

  // Check if source ends with target
  if (oper === StringOperEnum.ENDS_WITH) return typeof target === 'string' ? source.endsWith(target) : false;

  // Check if source matches target (regex or string)
  if (oper === StringOperEnum.MATCHES) {
    if (typeof target === 'string') return new RegExp(target).test(source);
    if (target instanceof RegExp) return target.test(source);
    return false;
  }

  // Unsupported operator
  throw new Error(`Unsupported string predicate operation: ${oper}`);
};
