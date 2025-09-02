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
 * @param source - The source date value.
 * @param oper - The range operator to apply. Must be a value from RangeOperEnum.
 * @param min - The minimum date bound.
 * @param max - The maximum date bound.
 * @returns {boolean} Result of the predicate.
 * @throws Error if an unsupported operator is provided.
 */
export const dateRangePredicate: DateRangePredicate = (source, oper, min, max) => {
  const time = source.getTime();

  // Returns true if source date is within the inclusive range [min, max]
  if (oper === RangeOperEnum.IN_RANGE) return time >= min.getTime() && time <= max.getTime();

  // Returns true if source date is outside the inclusive range [min, max]
  if (oper === RangeOperEnum.OUT_RANGE) return time < min.getTime() || time > max.getTime();

  // Returns true if source date is strictly within the range (min, max)
  if (oper === RangeOperEnum.STRICT_IN_RANGE) return time > min.getTime() && time < max.getTime();

  // Returns true if source date is strictly outside the range (min, max)
  if (oper === RangeOperEnum.STRICT_OUT_RANGE) return time <= min.getTime() || time >= max.getTime();

  // Throws error for unsupported operators
  throw new Error(`Unsupported date range predicate operation: ${oper}`);
};
