/**
 * @enum {string}
 * @description
 * Operations that require a single key (e.g. presence, single value comparison).
 */

/**
 * @enum {string}
 * Operations for key presence (single or multiple keys)
 */
export enum objectKeysOperEnum {
  HAS_KEY = 'hasKey',
  HAS_ANY_KEY = 'hasAnyKey',
  HAS_ALL_KEYS = 'hasAllKeys',
  HAS_EXACT_KEYS = 'hasExactKeys',
  HAS_NO_KEYS = 'hasNoKeys',
}

/**
 * @enum {string}
 * Operations for value comparison (numbers, null, undefined, type, empty, etc)
 */
export enum objectComparisonOperEnum {
  KEY_EQUALS = 'keyEquals',
  KEY_NOT_EQUALS = 'keyNotEquals',
  KEY_GREATER_THAN = 'keyGreaterThan',
  KEY_GREATER_THAN_OR_EQUALS = 'keyGreaterThanOrEquals',
  KEY_LESS_THAN = 'keyLessThan',
  KEY_LESS_THAN_OR_EQUALS = 'keyLessThanOrEquals',
  KEY_IS_EMPTY = 'keyIsEmpty',
  KEY_IS_NOT_EMPTY = 'keyIsNotEmpty',
  KEY_IS_NULL = 'keyIsNull',
  KEY_IS_UNDEFINED = 'keyIsUndefined',
  KEY_IS_TYPE = 'keyIsType',
}

/**
 * @enum {string}
 * Operations for string pattern matching
 */
export enum objectStringPatternOperEnum {
  KEY_STARTS_WITH = 'keyStartsWith',
  KEY_ENDS_WITH = 'keyEndsWith',
  KEY_CONTAINS = 'keyContains',
  KEY_MATCHES_REGEX = 'keyMatchesRegex',
}

/**
 * @enum {string}
 * Operations for inclusion (in, not in, array contains, etc)
 */
export enum objectInclusionOperEnum {
  KEY_IN = 'keyIn',
  KEY_NOT_IN = 'keyNotIn',
  KEY_ARRAY_CONTAINS_ANY = 'keyArrayContainsAny',
  KEY_ARRAY_CONTAINS_ALL = 'keyArrayContainsAll',
}
