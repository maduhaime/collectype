export enum ArrayOperEnum {
  // Membership
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
  // Quantifier
  SOME_EQUALS = 'someEquals',
  EVERY_EQUALS = 'everyEquals',
  // Relationship
  EQUALS = 'equals',
  SET_EQUALS = 'setEquals',
  IS_SUBSET_OF = 'isSubsetOf',
  IS_SUPERSET_OF = 'isSupersetOf',
  // Sequence
  STARTS_WITH = 'startsWith',
  ENDS_WITH = 'endsWith',
  CONTAINS_SUBSEQUENCE = 'containsSubsequence',
  // Comparaison
  INTERSECTS = 'intersects',
  DISJOINT = 'disjoint',
}

export enum ArrayIndexOperEnum {
  VALUE_AT_INDEX_EQUALS = 'valueAtIndexEquals',
  VALUE_AT_INDEX_NOT_EQUALS = 'valueAtIndexNotEquals',
  VALUE_AT_INDEX_IN = 'valueAtIndexIn',
  VALUE_AT_INDEX_NOT_IN = 'valueAtIndexNotIn',
  VALUE_AT_INDEX_GREATER_THAN = 'valueAtIndexGreaterThan',
  VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS = 'valueAtIndexGreaterThanOrEquals',
  VALUE_AT_INDEX_LESS_THAN = 'valueAtIndexLessThan',
  VALUE_AT_INDEX_LESS_THAN_OR_EQUALS = 'valueAtIndexLessThanOrEquals',
}

export enum ArraySizeOperEnum {
  LENGTH_EQUALS = 'lengthEquals',
  LENGTH_GREATER_THAN = 'lengthGreaterThan',
  LENGTH_GREATER_THAN_OR_EQUALS = 'lengthGreaterThanOrEquals',
  LENGTH_LESS_THAN = 'lengthLessThan',
  LENGTH_LESS_THAN_OR_EQUALS = 'lengthLessThanOrEquals',
}

export enum ArrayStateOperEnum {
  IS_EMPTY = 'isEmpty',
  IS_NOT_EMPTY = 'isNotEmpty',
}
