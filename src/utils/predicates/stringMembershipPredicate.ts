import { StringMembershipOperEnum } from '../../enums/stringOperation';
import { EnumOrString } from '../../types';

// Type for string membership predicate function
export type StringMembershipPredicate = (
  source: string,
  oper: EnumOrString<typeof StringMembershipOperEnum>,
  target: string[]
) => boolean;

/**
 * Evaluates whether a string value is (or is not) a member of a target array, using the specified operator.
 * @param source - The source string value.
 * @param oper - The operator to apply. Must be a value from StringMembershipOperEnum.
 * @param target - The target array of strings.
 * @returns {boolean} True if the object matches the operation, false otherwise.
 * @example
 * stringMembershipPredicate('abc', StringMembershipOperEnum.IS_ONE_OF, ['abc','def','ghi']); // true
 * stringMembershipPredicate('xyz', StringMembershipOperEnum.IS_NOT_ONE_OF, ['abc','def','ghi']); // true
 * @throws {Error} If an unsupported operator is provided.
 */
export const stringMembershipPredicate: StringMembershipPredicate = (source, oper, target) => {
  // If operation is IS_ONE_OF, check if source is in target
  if (oper === StringMembershipOperEnum.IS_ONE_OF) {
    return target.includes(source);
  }
  // If operation is IS_NOT_ONE_OF, check if source is not in target
  if (oper === StringMembershipOperEnum.IS_NOT_ONE_OF) {
    return !target.includes(source);
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported string membership predicate operation: ${oper}`);
};
