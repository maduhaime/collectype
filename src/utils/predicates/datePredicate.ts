import { DateOperEnum } from '../../enums/dateOperation';
import { EnumOrString } from '../../types';

// Type for date predicate function
export type DatePredicate = (source: Date, oper: EnumOrString<typeof DateOperEnum>, target: Date) => boolean;

/**
 * Evaluates a date value against a target using the specified operator.
 * Supports equality, comparison, relative date checks, and calendar-based checks.
 * @param source - The source date value.
 * @param oper - The operator to apply. Must be a value from DateOperEnum.
 * @param target - The target date value.
 * @returns Result of the predicate.
 * @example
 * datePredicate(new Date('2023-01-01'), 'equals', new Date('2023-01-01')); // true
 * datePredicate(new Date('2023-01-01'), 'occursBefore', new Date('2023-02-01')); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const datePredicate: DatePredicate = (source, oper, target) => {
  // If operation is EQUALS, check strict date equality (timestamp)
  if (oper === DateOperEnum.EQUALS) {
    return source.getTime() === target.getTime();
  }
  // If operation is NOT_EQUALS, check strict date inequality (timestamp)
  if (oper === DateOperEnum.NOT_EQUALS) {
    return source.getTime() !== target.getTime();
  }
  // If operation is OCCURS_BEFORE, check if source is before target
  if (oper === DateOperEnum.OCCURS_BEFORE) {
    return source.getTime() < target.getTime();
  }
  // If operation is OCCURS_ON_OR_BEFORE, check if source is on or before target
  if (oper === DateOperEnum.OCCURS_ON_OR_BEFORE) {
    return source.getTime() <= target.getTime();
  }
  // If operation is OCCURS_AFTER, check if source is after target
  if (oper === DateOperEnum.OCCURS_AFTER) {
    return source.getTime() > target.getTime();
  }
  // If operation is OCCURS_ON_OR_AFTER, check if source is on or after target
  if (oper === DateOperEnum.OCCURS_ON_OR_AFTER) {
    return source.getTime() >= target.getTime();
  }
  // If operation is SAME_DAY, check if source and target are the same day (UTC)
  if (oper === DateOperEnum.SAME_DAY) {
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    const targetUTC = Date.UTC(target.getUTCFullYear(), target.getUTCMonth(), target.getUTCDate());
    return sourceUTC === targetUTC;
  }
  // If operation is SAME_MONTH, check if source and target are in the same month and year
  if (oper === DateOperEnum.SAME_MONTH) {
    return source.getUTCFullYear() === target.getUTCFullYear() && source.getUTCMonth() === target.getUTCMonth();
  }
  // If operation is SAME_YEAR, check if source and target are in the same year
  if (oper === DateOperEnum.SAME_YEAR) {
    return source.getUTCFullYear() === target.getUTCFullYear();
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported date predicate operation: ${oper}`);
};
