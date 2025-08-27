import {
  objectKeysOperEnum,
  objectComparisonOperEnum,
  objectStringPatternOperEnum,
  objectInclusionOperEnum,
} from '../enums/objectOperation';

/**
 * Type representing operations for key presence (single or multiple keys).
 */
export type PresenceKeyOper = `${objectKeysOperEnum}`;

/**
 * Type representing value comparison operations (numbers, null, undefined, type, empty, etc).
 */
export type ValueComparisonOper = `${objectComparisonOperEnum}`;

/**
 * Type representing string pattern matching operations.
 */
export type StringPatternOper = `${objectStringPatternOperEnum}`;

/**
 * Type representing inclusion operations (in, not in, array contains, etc).
 */
export type InclusionOper = `${objectInclusionOperEnum}`;
