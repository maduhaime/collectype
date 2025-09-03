import { ArrayStateOperEnum } from '../../enums/arrayOperation';

/**
 * Predicate for array state operations (empty, not empty).
 *
 * @param arr - The array to check.
 * @param oper - The operation to perform (IS_EMPTY, IS_NOT_EMPTY).
 * @returns {boolean} True if the array matches the state, false otherwise.
 *
 * @example
 * arrayStatePredicate([1, 2], ArrayStateOperEnum.IS_EMPTY); // false
 * arrayStatePredicate([], ArrayStateOperEnum.IS_EMPTY); // true
 * arrayStatePredicate([1], ArrayStateOperEnum.IS_NOT_EMPTY); // true
 */
export function arrayStatePredicate<T>(arr: T[], oper: ArrayStateOperEnum): boolean {
  // If the operation is IS_EMPTY, check if array is empty
  if (oper === ArrayStateOperEnum.IS_EMPTY) {
    return arr.length === 0;
  }
  // If the operation is IS_NOT_EMPTY, check if array is not empty
  if (oper === ArrayStateOperEnum.IS_NOT_EMPTY) {
    return arr.length > 0;
  }
  // If the operation is unsupported, throw an error
  throw new Error(`Unsupported array state predicate operation: ${oper}`);
}
