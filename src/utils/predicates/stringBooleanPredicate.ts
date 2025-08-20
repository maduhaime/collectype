import { StringBooleanOperEnum } from '../../enums/stringBooleanOperation';
import { StringBooleanPredicate } from '../../types/predicate';

/**
 * Predicate function for string boolean operations.
 * Used to evaluate a string value for empty/not empty checks.
 *
 * @param source - The source string value to test.
 * @param oper - The string boolean operation to apply. Must be a value from StringBooleanOperEnum.
 * @returns {boolean} The result of the predicate evaluation.
 * @throws Error if an unsupported operator is provided.
 */
export const stringBooleanPredicate: StringBooleanPredicate = (source: string, oper) => {
  // Check if string is empty
  if (oper === StringBooleanOperEnum.IS_EMPTY) return source === '';

  // Check if string is not empty
  if (oper === StringBooleanOperEnum.IS_NOT_EMPTY) return source.length > 0;

  // Throw error for unsupported operators
  throw new Error(`Unsupported string boolean predicate operator: ${oper}`);
};
