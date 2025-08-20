import { NumberOperEnum } from '../enums/numberOperation';

/**
 * Type representing possible number operations.
 * @typedef {'equals' | 'not_equals' | 'less_than' | 'less_than_or_equals' | 'greater_than' | 'greater_than_or_equals' | 'is_integer' | 'is_float' | 'is_positive' | 'is_negative' | 'is_zero' | 'is_not_zero'} NumberOper
 */
export type NumberOper = `${NumberOperEnum}`;
