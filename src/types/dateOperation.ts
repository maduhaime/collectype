import { DateOperEnum } from '../enums/dateOperation';

/**
 * Type representing possible date operations.
 * Used for type safety in date comparison functions.
 * @typedef {'equals' | 'occurs_after' | 'occurs_on_or_after' | 'occurs_before' | 'occurs_on_or_before' | 'not_equals' | 'same_day' | 'same_month' | 'same_year'} DateOper
 */
export type DateOper = `${DateOperEnum}`;
