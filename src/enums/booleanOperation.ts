/**
 * Enum for boolean operations (equality checks).
 * Used to specify boolean comparison operations in the API.
 *
 * @enum {'equals' | 'not_equals'}
 *
 * @example
 * if (oper === BooleanOperEnum.EQUALS) { ... }
 */
export enum BooleanOperEnum {
  /** Checks if values are equal. */
  EQUALS = 'equals',
  /** Checks if values are not equal. */
  NOT_EQUALS = 'not_equals',
}
