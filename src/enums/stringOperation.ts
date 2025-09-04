/**
 * Enum for string size operations (length comparisons).
 * Used to specify operations comparing string length.
 *
 * @enum {'lengthEquals' | 'lengthGreaterThan' | 'lengthGreaterThanOrEquals' | 'lengthLessThan' | 'lengthLessThanOrEquals'}
 *
 * @example
 * if (oper === StringSizeOperEnum.LENGTH_EQUALS) { ... }
 */
export enum StringSizeOperEnum {
  /** Checks if string length equals a value. */
  LENGTH_EQUALS = 'lengthEquals',
  /** Checks if string length is greater than a value. */
  LENGTH_GREATER_THAN = 'lengthGreaterThan',
  /** Checks if string length is greater than or equal to a value. */
  LENGTH_GREATER_THAN_OR_EQUALS = 'lengthGreaterThanOrEquals',
  /** Checks if string length is less than a value. */
  LENGTH_LESS_THAN = 'lengthLessThan',
  /** Checks if string length is less than or equal to a value. */
  LENGTH_LESS_THAN_OR_EQUALS = 'lengthLessThanOrEquals',
}

/**
 * Enum for string operations (comparison and pattern).
 * Used to specify operations like equals, includes, starts with, etc.
 *
 * @enum {'equals' | 'not_equals' | 'includes' | 'excludes' | 'starts_with' | 'ends_with' | 'matches'}
 *
 * @example
 * if (oper === StringOperEnum.MATCHES) { ... }
 */
export enum StringOperEnum {
  /** Checks if strings are equal. */
  EQUALS = 'equals',
  /** Checks if strings are not equal. */
  NOT_EQUALS = 'not_equals',
  /** Checks if string includes a substring. */
  INCLUDES = 'includes',
  /** Checks if string excludes a substring. */
  EXCLUDES = 'excludes',
  /** Checks if string starts with a substring. */
  STARTS_WITH = 'starts_with',
  /** Checks if string ends with a substring. */
  ENDS_WITH = 'ends_with',
  /** Checks if string matches a pattern. */
  MATCHES = 'matches',
}

/**
 * Enum for string boolean operations (empty/not empty checks).
 * Used to specify checks on string emptiness.
 *
 * @enum {'is_empty' | 'is_not_empty'}
 *
 * @example
 * if (oper === StringStateOperEnum.IS_EMPTY) { ... }
 */
export enum StringStateOperEnum {
  /** Checks if string is empty. */
  IS_EMPTY = 'is_empty',
  /** Checks if string is not empty. */
  IS_NOT_EMPTY = 'is_not_empty',
}

/**
 * Enum for string membership operations (isOneOf/isNotOneOf).
 * Used to specify membership checks against an array of strings.
 *
 * @enum {'isOneOf' | 'isNotOneOf'}
 *
 * @example
 * if (oper === StringMembershipOperEnum.IS_ONE_OF) { ... }
 */
export enum StringMembershipOperEnum {
  /** Checks if string is in the array. */
  IS_ONE_OF = 'isOneOf',
  /** Checks if string is not in the array. */
  IS_NOT_ONE_OF = 'isNotOneOf',
}
