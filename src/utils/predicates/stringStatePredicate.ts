import { StringStateOperEnum } from '../../enums/stringOperation';
import { StringStatePredicate } from '../../types/predicate';

/**
 * Predicate function for string state checks (empty, not empty, etc).
 * @param source - The source string value to test.
 * @param oper - The string state operation to apply. Must be a value from StringStateOperEnum.
 * @returns {boolean} The result of the predicate evaluation.
 * @throws Error if an unsupported operator is provided.
 */
export const stringStatePredicate: StringStatePredicate = (source, oper) => {
  switch (oper) {
    case StringStateOperEnum.IS_EMPTY:
      return source === '';
    case StringStateOperEnum.IS_NOT_EMPTY:
      return source.length > 0;
    default:
      throw new Error(`Unsupported string state predicate operator: ${oper}`);
  }
};
