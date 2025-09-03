import { NumberStateOperEnum } from '../../enums/numberOperation';
import { EnumOrString } from '../../types';

// Type definition for the number state predicate function
export type NumberStatePredicate = (source: number, oper: EnumOrString<typeof NumberStateOperEnum>) => boolean;

/**
 * Predicate for number state operations (integer, float, positive, negative, zero, not zero).
 * @param source - The source number value.
 * @param oper - The operator to apply (see NumberStateOperEnum).
 * @returns Result of the predicate.
 * @example
 * numberStatePredicate(5, 'isInteger'); // true
 * numberStatePredicate(5.5, 'isFloat'); // true
 * numberStatePredicate(-1, 'isNegative'); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export function numberStatePredicate(source: number, oper: EnumOrString<typeof NumberStateOperEnum>): boolean {
  // If operation is IS_INTEGER, check if source is integer
  if (oper === NumberStateOperEnum.IS_INTEGER) {
    return Number.isInteger(source);
  }
  // If operation is IS_FLOAT, check if source is a float (finite and not integer)
  if (oper === NumberStateOperEnum.IS_FLOAT) {
    return Number.isFinite(source) && !Number.isInteger(source);
  }
  // If operation is IS_POSITIVE, check if source is positive
  if (oper === NumberStateOperEnum.IS_POSITIVE) {
    return source > 0;
  }
  // If operation is IS_NEGATIVE, check if source is negative
  if (oper === NumberStateOperEnum.IS_NEGATIVE) {
    return source < 0;
  }
  // If operation is IS_ZERO, check if source is zero
  if (oper === NumberStateOperEnum.IS_ZERO) {
    return source === 0;
  }
  // If operation is IS_NOT_ZERO, check if source is not zero
  if (oper === NumberStateOperEnum.IS_NOT_ZERO) {
    return source !== 0;
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported number state predicate operation: ${oper}`);
}
