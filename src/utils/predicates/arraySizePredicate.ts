import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { EnumOrString } from '../../types';

// Type for array size predicate function
export type ArraySizePredicate = <T>(arr: T[], oper: EnumOrString<typeof ArraySizeOperEnum>, num?: number) => boolean;

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
  // Check if array length equals num
  if (oper === ArraySizeOperEnum.LENGTH_EQUALS) return arr.length === num;

  // Check if array length is greater than num
  if (oper === ArraySizeOperEnum.LENGTH_GREATER_THAN) return arr.length > (num ?? 0);

  // Check if array length is greater than or equal to num
  if (oper === ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS) return arr.length >= (num ?? 0);

  // Check if array length is less than num
  if (oper === ArraySizeOperEnum.LENGTH_LESS_THAN) return arr.length < (num ?? 0);

  // Check if array length is less than or equal to num
  if (oper === ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS) return arr.length <= (num ?? 0);

  // Check if array is empty
  if (oper === ArraySizeOperEnum.IS_EMPTY) return arr.length === 0;

  // Check if array is not empty
  if (oper === ArraySizeOperEnum.IS_NOT_EMPTY) return arr.length > 0;

  // Unsupported operator
  throw new Error(`Unsupported array size predicate operator: ${oper}`);
};
