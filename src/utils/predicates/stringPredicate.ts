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
  switch (oper) {
    case StringOperEnum.EQUALS:
      return source === target;
    case StringOperEnum.NOT_EQUALS:
      return source !== target;
    case StringOperEnum.INCLUDES:
      return typeof target === 'string' ? source.includes(target) : false;
    case StringOperEnum.EXCLUDES:
      return typeof target === 'string' ? !source.includes(target) : false;
    case StringOperEnum.STARTS_WITH:
      return typeof target === 'string' ? source.startsWith(target) : false;
    case StringOperEnum.ENDS_WITH:
      return typeof target === 'string' ? source.endsWith(target) : false;
    case StringOperEnum.MATCHES:
      if (typeof target === 'string') return new RegExp(target).test(source);
      if (target instanceof RegExp) return target.test(source);
      return false;
    default:
      throw new Error(`Unsupported string predicate operator: ${oper}`);
  }
};
