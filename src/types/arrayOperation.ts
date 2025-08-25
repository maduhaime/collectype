import { ArrayOperEnum, ArrayIndexOperEnum, ArraySizeOperEnum } from '../enums/arrayOperation';

/**
 * Type representing all possible array operations (membership, quantifier, relationship, sequence, comparison).
 * @typedef {'includes' | 'excludes' | 'someEquals' | 'everyEquals' | 'equals' | 'setEquals' | 'isSubsetOf' | 'isSupersetOf' | 'startsWith' | 'endsWith' | 'containsSubsequence' | 'intersects' | 'disjoint'} ArrayOperType
 */
export type ArrayOper = `${ArrayOperEnum}`;

/**
 * Type representing all possible array index operations.
 * @typedef {'valueAtIndexEquals' | 'valueAtIndexNotEquals' | 'valueAtIndexIn' | 'valueAtIndexNotIn'} ArrayIndexOperType
 */
export type ArrayIndexOper = `${ArrayIndexOperEnum}`;

/**
 * Type representing all possible array size operations.
 * @typedef {'lengthEquals' | 'lengthGreaterThan' | 'lengthLessThan' | 'isEmpty' | 'isNotEmpty'} ArraySizeOperType
 */
export type ArraySizeOper = `${ArraySizeOperEnum}`;
