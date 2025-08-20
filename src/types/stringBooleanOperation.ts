import { StringBooleanOperEnum } from '../enums/stringBooleanOperation';

/**
 * Type representing possible string boolean operations.
 * Used for type safety in string boolean functions.
 * @typedef {'is_empty' | 'is_not_empty'} StringBooleanOper
 */
export type StringBooleanOper = `${StringBooleanOperEnum}`;
