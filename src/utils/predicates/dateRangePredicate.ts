import { RangeOperEnum } from '../../enums/rangeOperation';
import { DateRangePredicate } from '../../types/predicate';

/**
 * Predicate function for date ranges.
 * Evaluates a date value against a range using the specified operator from RangeOperEnum.
 *
 * Supported operators:
 * - IN_RANGE: Checks if source date is within the inclusive range [min, max].
 * - OUT_RANGE: Checks if source date is outside the inclusive range [min, max].
 * - STRICT_IN_RANGE: Checks if source date is strictly within the range (min, max).
 * - STRICT_OUT_RANGE: Checks if source date is strictly outside the range (min, max).
 *
 * @param source - The source date value to test.
 * @param oper - The range operation to apply. Must be a value from RangeOperEnum.
 * @param min - The minimum date bound.
 * @param max - The maximum date bound.
 * @returns {boolean} The result of the predicate evaluation.
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
  throw new Error(`Unsupported date range predicate operator: ${oper}`);
};
