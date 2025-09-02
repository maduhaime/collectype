import { ArrayIndexOperEnum } from '../../enums/arrayOperation';
import { EnumOrString } from '../../types';

/**
 * Predicate for array index-based operations.
 * @template T
 * @param arr - The array to check.
 * @param oper - The index operation to perform (see ArrayIndexOperType).
 * @param index - The index to check.
 * @param target - The value or values to compare.
 * @returns {boolean} Result of the index operation.
 */
export type ArrayIndexPredicate = <T>(
  arr: T[],
  oper: EnumOrString<typeof ArrayIndexOperEnum>,
  index: number,
  target?: T | T[]
) => boolean;
import { ValueOf } from '../../types/utility';

/**
 * Evaluates an operation on an array element at a given index.
 * Supports equality, inclusion, exclusion, etc. at the specified index.
 * @template T
 * @param {T[]} arr - The array to test
 * @param {ValueOf<ArrayIndexOperEnum>} oper - The operation to perform (see ArrayIndexOperEnum)
 * @param {number} index - The index to test
 * @param {T|T[]} [target] - The value or array to compare, depending on the operation
 * @returns {boolean} Result of the operation
 */
export const arrayIndexPredicate: ArrayIndexPredicate = <T>(
  arr: T[],
  oper: ValueOf<ArrayIndexOperEnum>,
  index: number,
  target?: T | T[]
): boolean => {
  // Check if value at index equals target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS) return arr[index] === target;

  // Check if value at index does not equal target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS) return arr[index] !== target;

  // Check if value at index is in target array
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_IN)
    return Array.isArray(target) ? (target as T[]).includes(arr[index]) : false;

  // Check if value at index is not in target array
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN)
    return Array.isArray(target) ? !(target as T[]).includes(arr[index]) : false;

  // Check if value at index is greater than target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN)
    return target !== undefined && target !== null && arr[index] > target;

  // Check if value at index is greater than or equal to target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS)
    return target !== undefined && target !== null && arr[index] >= target;

  // Check if value at index is less than target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN)
    return target !== undefined && target !== null && arr[index] < target;

  // Check if value at index is less than or equal to target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS)
    return target !== undefined && target !== null && arr[index] <= target;

  // Unsupported operator
  throw new Error(`Unsupported array index predicate operation: ${oper}`);
};
