import { RangeOperEnum } from '../enums/rangeOperation';

/**
 * Type representing possible range operations.
 * @typedef {'in_range' | 'out_range' | 'strict_in_range' | 'strict_out_range'} RangeOper
 */
export type RangeOper = `${RangeOperEnum}`;
