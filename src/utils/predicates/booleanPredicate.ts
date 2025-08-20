import { BooleanOperEnum } from '../../enums/booleanOperation';
import { BooleanPredicate } from '../../types/predicate';

/**
 * Predicate function for boolean values.
 * Evaluates a boolean value against a target using the specified operator from BooleanOperEnum.
 *
 * @param source - The source boolean value to test.
 * @param oper - The boolean operation to apply. Must be a value from BooleanOperEnum.
 * @param target - The target boolean value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 * @throws Error if an unsupported operator is provided.
 */
export const booleanPredicate: BooleanPredicate = (source, oper, target) => {
  // Returns true if source equals target
  if (oper === BooleanOperEnum.EQUALS) return source === target;

  // Returns true if source does not equal target
  if (oper === BooleanOperEnum.NOT_EQUALS) return source !== target;

  // Throws error for unsupported operators
  throw new Error(`Unsupported boolean predicate operator: ${oper}`);
};
