import { DateOperEnum } from '../../enums/dateOperation';
import { DatePredicate } from '../../types/predicate';

/**
 * Predicate function for date values.
 * Used to evaluate a date value against a target using the specified operator from DateOperEnum.
 * Supports equality, comparison, relative date checks, and calendar-based checks.
 *
 * @param source - The source date value to test.
 * @param oper - The date operation to apply. Must be a value from DateOperEnum.
 * @param target - The target date value for comparison.
 * @returns {boolean} The result of the predicate evaluation.
 * @throws Error if an unsupported operator is provided.
 */
export const datePredicate: DatePredicate = (source, oper, target) => {
  // Returns true if source date equals target date (timestamp)
  if (oper === DateOperEnum.EQUALS) return source.getTime() === target.getTime();

  // Returns true if source date does not equal target date (timestamp)
  if (oper === DateOperEnum.NOT_EQUALS) return source.getTime() !== target.getTime();

  // Returns true if source date is less than target date
  if (oper === DateOperEnum.OCCURS_BEFORE) return source.getTime() < target.getTime();

  // Returns true if source date is less than or equal to target date
  if (oper === DateOperEnum.OCCURS_ON_OR_BEFORE) return source.getTime() <= target.getTime();

  // Returns true if source date is greater than target date
  if (oper === DateOperEnum.OCCURS_AFTER) return source.getTime() > target.getTime();

  // Returns true if source date is greater than or equal to target date
  if (oper === DateOperEnum.OCCURS_ON_OR_AFTER) return source.getTime() >= target.getTime();

  // Returns true if source date is the same day as target date (UTC midnight)
  if (oper === DateOperEnum.SAME_DAY) {
    const sourceUTC = Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate());
    const targetUTC = Date.UTC(target.getUTCFullYear(), target.getUTCMonth(), target.getUTCDate());
    return sourceUTC === targetUTC;
  }

  // Returns true if source date is in the same month and year as target date
  if (oper === DateOperEnum.SAME_MONTH) {
    return source.getUTCFullYear() === target.getUTCFullYear() && source.getUTCMonth() === target.getUTCMonth();
  }

  // Returns true if source date is in the same year as target date
  if (oper === DateOperEnum.SAME_YEAR) {
    // Use UTC year to avoid timezone issues
    return source.getUTCFullYear() === target.getUTCFullYear();
  }

  // Throws error for unsupported operators
  throw new Error(`Unsupported date predicate operator: ${oper}`);
};
