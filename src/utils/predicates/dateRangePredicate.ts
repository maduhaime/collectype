import { RangeOperEnum } from '../../enums/rangeOperation';
import { EnumOrString } from '../../types';

// Type for date range predicate function
export type DateRangePredicate = (
  source: Date,
  oper: EnumOrString<typeof RangeOperEnum>,
  min: Date,
  max: Date
) => boolean;

/**
 * Evaluates a date value against a range using the specified operator.
 * Supported operators: IN_RANGE, OUT_RANGE, STRICT_IN_RANGE, STRICT_OUT_RANGE.
 * @paramType DummyType - The type of the date value (for example purposes).
 * @param source - The source date value.
 * @param oper - The range operator to apply (see RangeOperEnum).
 * @param min - The minimum date bound.
 * @param max - The maximum date bound.
 * @returns Result of the predicate.
 * @example
 * dateRangePredicate(new Date('2023-01-01'), 'inRange', new Date('2023-01-01'), new Date('2023-01-31')); // true
 * dateRangePredicate(new Date('2023-01-01'), 'strictOutRange', new Date('2023-01-02'), new Date('2023-01-30')); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const dateRangePredicate: DateRangePredicate = (source, oper, min, max) => {
  const time = source.getTime();

  // If operation is IN_RANGE, check if source date is within the inclusive range [min, max]
  if (oper === RangeOperEnum.IN_RANGE) {
    return time >= min.getTime() && time <= max.getTime();
  }
  // If operation is OUT_RANGE, check if source date is outside the inclusive range [min, max]
  if (oper === RangeOperEnum.OUT_RANGE) {
    return time < min.getTime() || time > max.getTime();
  }
  // If operation is STRICT_IN_RANGE, check if source date is strictly within the range (min, max)
  if (oper === RangeOperEnum.STRICT_IN_RANGE) {
    return time > min.getTime() && time < max.getTime();
  }
  // If operation is STRICT_OUT_RANGE, check if source date is strictly outside the range (min, max)
  if (oper === RangeOperEnum.STRICT_OUT_RANGE) {
    return time <= min.getTime() || time >= max.getTime();
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported date range predicate operation: ${oper}`);
};
