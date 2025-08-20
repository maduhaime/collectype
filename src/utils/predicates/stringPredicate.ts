import { StringOperEnum } from '../../enums/stringOperation';
import { StringPredicate } from '../../types/predicate';

/**
 * Predicate function for string values.
 * Used to evaluate a string value against a target using the specified operator from StringOperEnum.
 * Supports equality, inclusion, exclusion, pattern matching, and position checks.
 *
 * @param source - The source string value to test.
 * @param oper - The string operation to apply. Must be a value from StringOperEnum.
 * @param target - The target string value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 * @throws Error if an unsupported operator is provided.
 */
export const stringPredicate: StringPredicate = (source, oper, target) => {
  // Returns true if source equals target
  if (oper === StringOperEnum.EQUALS) return source === target;

  // Returns true if source does not equal target
  if (oper === StringOperEnum.NOT_EQUALS) return source !== target;

  // Returns true if source includes target substring
  if (oper === StringOperEnum.INCLUDES) return source.includes(target);

  // Returns true if source does not include target substring
  if (oper === StringOperEnum.EXCLUDES) return !source.includes(target);

  // Returns true if source starts with target substring
  if (oper === StringOperEnum.STARTS_WITH) return source.startsWith(target);

  // Returns true if source ends with target substring
  if (oper === StringOperEnum.ENDS_WITH) return source.endsWith(target);

  // Returns true if source matches target regex pattern
  if (oper === StringOperEnum.MATCHES) return new RegExp(target).test(source);

  // Throws error for unsupported operators
  throw new Error(`Unsupported string predicate operator: ${oper}`);
};
