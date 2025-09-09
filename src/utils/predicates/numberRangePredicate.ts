import { RangeOperEnum } from '../../enums/rangeOperation';
import { EnumOrString } from '../../types';

// Type definition for number range predicate function
export type NumberRangePredicate = (
  source: number,
  oper: EnumOrString<typeof RangeOperEnum>,
  min: number,
  max: number
) => boolean;

/**
 * Evaluates a number value against a range using the specified operator.
 * Supports inclusive and strict range checks.
 *
 * @template {number} source - The source number value.
 * @template {string} oper - The range operation to apply (should be a string value matching RangeOperEnum).
 * @template {number} min - The minimum bound.
 * @template {number} max - The maximum bound.
 * @returns {boolean} The result of the predicate evaluation.
 *
 * @example
 * const num = 10;
 * numberRangePredicate(num, 'inRange', 5, 15); // true
 * numberRangePredicate(num, 'outRange', 20, 30); // true
 * numberRangePredicate(num, 'strictInRange', 9, 11); // true
 * numberRangePredicate(num, 'strictOutRange', 10, 10); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const numberRangePredicate: NumberRangePredicate = (source, oper, min, max) => {
  // Condition: Returns true if source is within the inclusive range [min, max]
  if (oper === RangeOperEnum.IN_RANGE) return source >= min && source <= max;

  // Condition: Returns true if source is outside the inclusive range [min, max]
  if (oper === RangeOperEnum.OUT_RANGE) return source < min || source > max;

  // Condition: Returns true if source is strictly within the range (min, max)
  if (oper === RangeOperEnum.STRICT_IN_RANGE) return source > min && source < max;

  // Condition: Returns true if source is strictly outside the range (min, max)
  if (oper === RangeOperEnum.STRICT_OUT_RANGE) return source <= min || source >= max;

  // Throw: Unsupported operator provided
  throw new Error(`Unsupported number range predicate operation: ${oper}`);
};
