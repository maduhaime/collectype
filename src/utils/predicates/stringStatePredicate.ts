import { StringStateOperEnum } from '../../enums/stringOperation';
import { StringStateOper } from '../../types/stringOperation';
import { ValueOf } from '../../types/utility';

// Type for string state predicate function
export type StringStatePredicate = (source: string, oper: StringStateOper | ValueOf<StringStateOperEnum>) => boolean;

/**
 * Evaluates a string value according to a state operation from StringStateOperEnum.
 * @param source - The string value to check.
 * @param oper - The state operation to apply (IS_EMPTY, IS_NOT_EMPTY).
 * @returns {boolean} True if the string matches the state, false otherwise.
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
