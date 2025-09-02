/**
 * Enum for string size operations (length comparisons).
 */
export enum StringSizeOperEnum {
  LENGTH_EQUALS = 'lengthEquals',
  LENGTH_GREATER_THAN = 'lengthGreaterThan',
  LENGTH_GREATER_THAN_OR_EQUALS = 'lengthGreaterThanOrEquals',
  LENGTH_LESS_THAN = 'lengthLessThan',
  LENGTH_LESS_THAN_OR_EQUALS = 'lengthLessThanOrEquals',
}
/**
 * Enum for string operations.
 * Used to specify comparison and pattern operations for strings.
 * @enum {'equals' | 'not_equals' | 'includes' | 'excludes' | 'starts_with' | 'ends_with' | 'matches'}
 */
export enum StringOperEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  MATCHES = 'matches',
}

/**
 * Enum for string boolean operations.
 * Used to specify boolean checks on strings (empty/not empty).
 * @enum {'is_empty' | 'is_not_empty'}
 */
export enum StringStateOperEnum {
  IS_EMPTY = 'is_empty',
  IS_NOT_EMPTY = 'is_not_empty',
}
