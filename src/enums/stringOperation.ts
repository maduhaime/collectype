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
