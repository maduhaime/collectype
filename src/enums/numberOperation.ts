/**
 * Enum for number operations (comparison and equality).
 * Used to specify operations like equals, less than, greater than, etc.
 *
 * @enum {'equals' | 'not_equals' | 'less_than' | 'less_than_or_equals' | 'greater_than' | 'greater_than_or_equals'}
 *
 * @example
 * if (oper === NumberOperEnum.LESS_THAN) { ... }
 */
export enum NumberOperEnum {
  /** Checks if numbers are equal. */
  EQUALS = 'equals',
  /** Checks if numbers are not equal. */
  NOT_EQUALS = 'not_equals',
  /** Checks if number is less than another. */
  LESS_THAN = 'less_than',
  /** Checks if number is less than or equal to another. */
  LESS_THAN_OR_EQUALS = 'less_than_or_equals',
  /** Checks if number is greater than another. */
  GREATER_THAN = 'greater_than',
  /** Checks if number is greater than or equal to another. */
  GREATER_THAN_OR_EQUALS = 'greater_than_or_equals',
}

/**
 * Enum for number state operations (integer, float, sign, zero checks).
 * Used to specify checks like is integer, is positive, is zero, etc.
 *
 * @enum {'is_integer' | 'is_float' | 'is_positive' | 'is_negative' | 'is_zero' | 'is_not_zero'}
 *
 * @example
 * if (oper === NumberStateOperEnum.IS_INTEGER) { ... }
 */
export enum NumberStateOperEnum {
  /** Checks if number is an integer. */
  IS_INTEGER = 'is_integer',
  /** Checks if number is a float. */
  IS_FLOAT = 'is_float',
  /** Checks if number is positive. */
  IS_POSITIVE = 'is_positive',
  /** Checks if number is negative. */
  IS_NEGATIVE = 'is_negative',
  /** Checks if number is zero. */
  IS_ZERO = 'is_zero',
  /** Checks if number is not zero. */
  IS_NOT_ZERO = 'is_not_zero',
}
