/**
 * Enum for range operations (range inclusion/exclusion).
 * Used to specify checks like in range, out of range, strict in/out.
 *
 * @enum {'in_range' | 'out_range' | 'strict_in_range' | 'strict_out_range'}
 *
 * @example
 * if (oper === RangeOperEnum.IN_RANGE) { ... }
 */
export enum RangeOperEnum {
  /** Checks if value is in range (inclusive). */
  IN_RANGE = 'in_range',
  /** Checks if value is out of range (inclusive). */
  OUT_RANGE = 'out_range',
  /** Checks if value is strictly in range (exclusive). */
  STRICT_IN_RANGE = 'strict_in_range',
  /** Checks if value is strictly out of range (exclusive). */
  STRICT_OUT_RANGE = 'strict_out_range',
}
