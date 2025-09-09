import { NumberOperEnum } from '../../enums/numberOperation';
import { EnumOrString } from '../../types';

// Type for number predicate function
export type NumberPredicate = (source: number, oper: EnumOrString<typeof NumberOperEnum>, target: number) => boolean;

/**
 * Evaluates a number value against a target using the specified operator.
 * Supports equality and comparison checks.
 * @template DummyType - The type of the number value (for example purposes).
 * @param source - The source number value.
 * @param oper - The operator to apply (see NumberOperEnum).
 * @param target - The target number value.
 * @returns Result of the predicate.
 * @example
 * numberPredicate(5, 'equals', 5); // true
 * numberPredicate(5, 'lessThan', 10); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const numberPredicate: NumberPredicate = (source, oper, target) => {
  // If operation is EQUALS, check strict equality
  if (oper === NumberOperEnum.EQUALS) {
    return source === target;
  }
  // If operation is NOT_EQUALS, check strict inequality
  if (oper === NumberOperEnum.NOT_EQUALS) {
    return source !== target;
  }
  // If operation is LESS_THAN, check less than
  if (oper === NumberOperEnum.LESS_THAN) {
    return source < target;
  }
  // If operation is LESS_THAN_OR_EQUALS, check less than or equal
  if (oper === NumberOperEnum.LESS_THAN_OR_EQUALS) {
    return source <= target;
  }
  // If operation is GREATER_THAN, check greater than
  if (oper === NumberOperEnum.GREATER_THAN) {
    return source > target;
  }
  // If operation is GREATER_THAN_OR_EQUALS, check greater than or equal
  if (oper === NumberOperEnum.GREATER_THAN_OR_EQUALS) {
    return source >= target;
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported number predicate operation: ${oper}`);
};
