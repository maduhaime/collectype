import { RangeOperEnum } from '../../enums/rangeOperation';
import { EnumOrString } from '../../types';

// Type for number range predicate function
export type NumberRangePredicate = (
  source: number,
  oper: EnumOrString<typeof RangeOperEnum>,
  min: number,
  max: number
) => boolean;

/**
 * Evaluates a number value against a range using the specified operator.
 * Supports inclusive and strict range checks.
 * @param source - The source number value.
 * @param oper - The range operation to apply. Must be a value from RangeOperEnum.
 * @param min - The minimum bound.
 * @param max - The maximum bound.
 * @returns {boolean} The result of the predicate evaluation.
 * @throws Error if an unsupported operator is provided.
 */
export const numberRangePredicate: NumberRangePredicate = (source, oper, min, max) => {
  // Returns true if source is within the inclusive range [min, max]
  if (oper === RangeOperEnum.IN_RANGE) return source >= min && source <= max;

  // Returns true if source is outside the inclusive range [min, max]
  if (oper === RangeOperEnum.OUT_RANGE) return source < min || source > max;

  // Returns true if source is strictly within the range (min, max)
  if (oper === RangeOperEnum.STRICT_IN_RANGE) return source > min && source < max;

  // Returns true if source is strictly outside the range (min, max)
  if (oper === RangeOperEnum.STRICT_OUT_RANGE) return source <= min || source >= max;

  // Throws error for unsupported operators
  throw new Error(`Unsupported number range predicate operation: ${oper}`);
};
