import { StringOperEnum, StringStateOperEnum } from '../enums/stringOperation';

/**
 * Type representing possible string operations.
 * Used for type safety in string comparison and pattern functions.
 * @typedef {'equals' | 'not_equals' | 'includes' | 'excludes' | 'starts_with' | 'ends_with' | 'matches'} StringOper
 */
export type StringOper = `${StringOperEnum}`;

/**
 * Type representing possible string state operations.
 * Used for type safety in string state functions.
 * @typedef {'is_empty' | 'is_not_empty'} StringStateOper
 */
export type StringStateOper = `${StringStateOperEnum}`;
