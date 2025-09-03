import { BooleanOperEnum } from '../../enums/booleanOperation';
import { EnumOrString } from '../../types';

// Type for boolean predicate function
export type BooleanPredicate = (
  source: boolean,
  oper: EnumOrString<typeof BooleanOperEnum>,
  target: boolean
) => boolean;

/**
 * Evaluates a boolean value against a target using the specified operator.
 * @param source - The source boolean value.
 * @param oper - The operator to apply (see BooleanOperEnum).
 * @param target - The target boolean value.
 * @returns Result of the predicate.
 * @example
 * booleanPredicate(true, 'equals', true); // true
 * booleanPredicate(false, 'notEquals', true); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const booleanPredicate: BooleanPredicate = (source, oper, target) => {
  // If operation is EQUALS, check strict equality
  if (oper === BooleanOperEnum.EQUALS) {
    return source === target;
  }
  // If operation is NOT_EQUALS, check strict inequality
  if (oper === BooleanOperEnum.NOT_EQUALS) {
    return source !== target;
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported boolean predicate operation: ${oper}`);
};
