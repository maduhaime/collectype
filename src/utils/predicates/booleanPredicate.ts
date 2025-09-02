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
 * @param oper - The operator to apply. Must be a value from BooleanOperEnum.
 * @param target - The target boolean value.
 * @returns {boolean} Result of the predicate.
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
