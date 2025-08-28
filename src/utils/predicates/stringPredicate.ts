import { StringOper } from '../../types/stringOperation';
import { StringOperEnum } from '../../enums/stringOperation';
import { ValueOf } from '../../types/utility';

// Type for string predicate function
export type StringPredicate = (
  source: string,
  oper: StringOper | ValueOf<StringOperEnum>,
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
