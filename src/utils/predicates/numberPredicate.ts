import { NumberOperEnum } from '../../enums/numberOperation';
import { NumberPredicate } from '../../types/predicate';

/**
 * Predicate function for number values.
 * Used to evaluate a number value against a target using the specified operator from NumberOperEnum.
 * Supports equality, comparison, integer/float checks, and zero/positive/negative checks.
 *
 * @param source - The source number value to test.
 * @param oper - The number operation to apply. Must be a value from NumberOperEnum.
 * @param target - The target number value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 * @throws Error if an unsupported operator is provided.
 */
export const numberPredicate: NumberPredicate = (source, oper, target) => {
  // Returns true if source equals target
  if (oper === NumberOperEnum.EQUALS) return source === target;

  // Returns true if source does not equal target
  if (oper === NumberOperEnum.NOT_EQUALS) return source !== target;

  // Returns true if source is less than target
  if (oper === NumberOperEnum.LESS_THAN) return source < target;

  // Returns true if source is less than or equal to target
  if (oper === NumberOperEnum.LESS_THAN_OR_EQUALS) return source <= target;

  // Returns true if source is greater than target
  if (oper === NumberOperEnum.GREATER_THAN) return source > target;

  // Returns true if source is greater than or equal to target
  if (oper === NumberOperEnum.GREATER_THAN_OR_EQUALS) return source >= target;

  // Returns true if source is an integer
  if (oper === NumberOperEnum.IS_INTEGER) return Number.isInteger(source);

  // Returns true if source is a float (finite and not integer)
  if (oper === NumberOperEnum.IS_FLOAT) return Number.isFinite(source) && !Number.isInteger(source);

  // Returns true if source is positive
  if (oper === NumberOperEnum.IS_POSITIVE) return source > 0;

  // Returns true if source is negative
  if (oper === NumberOperEnum.IS_NEGATIVE) return source < 0;

  // Returns true if source is zero
  if (oper === NumberOperEnum.IS_ZERO) return source === 0;

  // Returns true if source is not zero
  if (oper === NumberOperEnum.IS_NOT_ZERO) return source !== 0;

  // Throws error for unsupported operators
  throw new Error(`Unsupported number predicate operator: ${oper}`);
};
