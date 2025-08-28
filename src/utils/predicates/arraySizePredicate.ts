import { ArraySizeOper } from '../../types/arrayOperation';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { ValueOf } from '../../types/utility';

// Type for array size predicate function
export type ArraySizePredicate = <T>(
  arr: T[],
  oper: ArraySizeOper | ValueOf<ArraySizeOperEnum>,
  num?: number
) => boolean;

/**
 * Evaluates an operation on the size of an array.
 * Supports equality, comparison, emptiness, etc.
 * @template T
 * @param arr - The array to test
 * @param oper - The operation to perform (see ArraySizeOperEnum)
 * @param num - The size value to compare (if applicable)
 * @returns {boolean} Result of the operation
 */
export const arraySizePredicate: ArraySizePredicate = (arr, oper, num) => {
  switch (oper) {
    case ArraySizeOperEnum.LENGTH_EQUALS:
      return arr.length === num;
    case ArraySizeOperEnum.LENGTH_GREATER_THAN:
      return arr.length > (num ?? 0);
    case ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS:
      return arr.length >= (num ?? 0);
    case ArraySizeOperEnum.LENGTH_LESS_THAN:
      return arr.length < (num ?? 0);
    case ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS:
      return arr.length <= (num ?? 0);
    case ArraySizeOperEnum.IS_EMPTY:
      return arr.length === 0;
    case ArraySizeOperEnum.IS_NOT_EMPTY:
      return arr.length > 0;
    default:
      throw new Error(`Unsupported array size predicate operator: ${oper}`);
  }
};
