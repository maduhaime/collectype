import { ArrayIndexOper } from '../../types/arrayOperation';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';

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
  oper: ArrayIndexOper | ValueOf<ArrayIndexOperEnum>,
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
  switch (oper) {
    case ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS:
      return arr[index] === target;
    case ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS:
      return arr[index] !== target;
    case ArrayIndexOperEnum.VALUE_AT_INDEX_IN:
      return Array.isArray(target) ? (target as T[]).includes(arr[index]) : false;
    case ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN:
      return Array.isArray(target) ? !(target as T[]).includes(arr[index]) : false;
    case ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN:
      return target !== undefined && target !== null && arr[index] > target;
    case ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS:
      return target !== undefined && target !== null && arr[index] >= target;
    case ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN:
      return target !== undefined && target !== null && arr[index] < target;
    case ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS:
      return target !== undefined && target !== null && arr[index] <= target;
    default:
      throw new Error(`Unsupported array index predicate operator: ${oper}`);
  }
};
