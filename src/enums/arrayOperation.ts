/**
 * Enum for array operations (membership, quantifier, relationship, sequence, comparison).
 * Used to specify the type of operation to perform on arrays in the API.
 *
 * @enum {'includes' | 'excludes' | 'someEquals' | 'everyEquals' | 'equals' | 'setEquals' | 'isSubsetOf' | 'isSupersetOf' | 'startsWith' | 'endsWith' | 'containsSubsequence' | 'intersects' | 'disjoint'}
 *
 * @example
 * if (oper === ArrayOperEnum.INCLUDES) { ... }
 */
export enum ArrayOperEnum {
  /** Checks if array includes a value. */
  INCLUDES = 'includes',
  /** Checks if array excludes a value. */
  EXCLUDES = 'excludes',
  /** Checks if some elements equal a value. */
  SOME_EQUALS = 'someEquals',
  /** Checks if every element equals a value. */
  EVERY_EQUALS = 'everyEquals',
  /** Checks if arrays are equal. */
  EQUALS = 'equals',
  /** Checks if arrays are set-equal (same unique elements). */
  SET_EQUALS = 'setEquals',
  /** Checks if array is a subset of another. */
  IS_SUBSET_OF = 'isSubsetOf',
  /** Checks if array is a superset of another. */
  IS_SUPERSET_OF = 'isSupersetOf',
  /** Checks if array starts with a sequence. */
  STARTS_WITH = 'startsWith',
  /** Checks if array ends with a sequence. */
  ENDS_WITH = 'endsWith',
  /** Checks if array contains a subsequence. */
  CONTAINS_SUBSEQUENCE = 'containsSubsequence',
  /** Checks if arrays intersect. */
  INTERSECTS = 'intersects',
  /** Checks if arrays are disjoint. */
  DISJOINT = 'disjoint',
}

/**
 * Enum for array index operations (value at index comparisons).
 * Used to specify operations on array elements at specific indices.
 *
 * @enum {'valueAtIndexEquals' | 'valueAtIndexNotEquals' | 'valueAtIndexIn' | 'valueAtIndexNotIn' | 'valueAtIndexGreaterThan' | 'valueAtIndexGreaterThanOrEquals' | 'valueAtIndexLessThan' | 'valueAtIndexLessThanOrEquals'}
 *
 * @example
 * if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS) { ... }
 */
export enum ArrayIndexOperEnum {
  /** Checks if value at index equals a value. */
  VALUE_AT_INDEX_EQUALS = 'valueAtIndexEquals',
  /** Checks if value at index does not equal a value. */
  VALUE_AT_INDEX_NOT_EQUALS = 'valueAtIndexNotEquals',
  /** Checks if value at index is in a set. */
  VALUE_AT_INDEX_IN = 'valueAtIndexIn',
  /** Checks if value at index is not in a set. */
  VALUE_AT_INDEX_NOT_IN = 'valueAtIndexNotIn',
  /** Checks if value at index is greater than a value. */
  VALUE_AT_INDEX_GREATER_THAN = 'valueAtIndexGreaterThan',
  /** Checks if value at index is greater than or equal to a value. */
  VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS = 'valueAtIndexGreaterThanOrEquals',
  /** Checks if value at index is less than a value. */
  VALUE_AT_INDEX_LESS_THAN = 'valueAtIndexLessThan',
  /** Checks if value at index is less than or equal to a value. */
  VALUE_AT_INDEX_LESS_THAN_OR_EQUALS = 'valueAtIndexLessThanOrEquals',
}

/**
 * Enum for array size operations (length comparisons).
 * Used to specify operations comparing array length.
 *
 * @enum {'lengthEquals' | 'lengthGreaterThan' | 'lengthGreaterThanOrEquals' | 'lengthLessThan' | 'lengthLessThanOrEquals'}
 *
 * @example
 * if (oper === ArraySizeOperEnum.LENGTH_EQUALS) { ... }
 */
export enum ArraySizeOperEnum {
  /** Checks if array length equals a value. */
  LENGTH_EQUALS = 'lengthEquals',
  /** Checks if array length is greater than a value. */
  LENGTH_GREATER_THAN = 'lengthGreaterThan',
  /** Checks if array length is greater than or equal to a value. */
  LENGTH_GREATER_THAN_OR_EQUALS = 'lengthGreaterThanOrEquals',
  /** Checks if array length is less than a value. */
  LENGTH_LESS_THAN = 'lengthLessThan',
  /** Checks if array length is less than or equal to a value. */
  LENGTH_LESS_THAN_OR_EQUALS = 'lengthLessThanOrEquals',
}

/**
 * Enum for array state operations (empty/non-empty checks).
 * Used to specify checks on whether an array is empty or not.
 *
 * @enum {'isEmpty' | 'isNotEmpty'}
 *
 * @example
 * if (oper === ArrayStateOperEnum.IS_EMPTY) { ... }
 */
export enum ArrayStateOperEnum {
  /** Checks if array is empty. */
  IS_EMPTY = 'isEmpty',
  /** Checks if array is not empty. */
  IS_NOT_EMPTY = 'isNotEmpty',
}
