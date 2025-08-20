import { StringOperEnum } from '../enums/stringOperation';

/**
 * Type representing possible string operations.
 * Used for type safety in string comparison and pattern functions.
 * @typedef {'equals' | 'not_equals' | 'includes' | 'excludes' | 'starts_with' | 'ends_with' | 'matches'} StringOper
 */
export type StringOper = `${StringOperEnum}`;
