import { ArrayIndexOperEnum } from '../../enums/arrayOperation';
import { EnumOrString } from '../../types';

// Type for array index predicate function
export type ArrayIndexPredicate = <T>(
  arr: T[],
  oper: EnumOrString<typeof ArrayIndexOperEnum>,
  index: number,
  target?: T | T[]
) => boolean;

/**
 * Evaluates an operation on an array element at a given index.
 * Supports equality, inclusion, exclusion, etc. at the specified index.
 * @paramType T - The type of array elements.
 * @param arr - The array to test.
 * @param oper - The operation to perform (see ArrayIndexOperEnum).
 * @param index - The index to test.
 * @param target - The value or array to compare, depending on the operation.
 * @returns Result of the operation.
 * @example
 * // DummyType is a placeholder for your type
 * arrayIndexPredicate<DummyType>(['A', 'B', 'C'], 'valueAtIndexEquals', 1, 'B'); // true
 * arrayIndexPredicate<DummyType>(['A', 'B', 'C'], 'valueAtIndexIn', 1, ['A', 'B']); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const arrayIndexPredicate: ArrayIndexPredicate = <T>(
  arr: T[],
  oper: EnumOrString<typeof ArrayIndexOperEnum>,
  index: number,
  target?: T | T[]
): boolean => {
  // If operation is VALUE_AT_INDEX_EQUALS, check equality
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS) {
    return arr[index] === target;
  }
  // If operation is VALUE_AT_INDEX_NOT_EQUALS, check inequality
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS) {
    return arr[index] !== target;
  }
  // If operation is VALUE_AT_INDEX_IN, check if value at index is in target array
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_IN) {
    return Array.isArray(target) ? (target as T[]).includes(arr[index]) : false;
  }
  // If operation is VALUE_AT_INDEX_NOT_IN, check if value at index is not in target array
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN) {
    return Array.isArray(target) ? !(target as T[]).includes(arr[index]) : false;
  }
  // If operation is VALUE_AT_INDEX_GREATER_THAN, check if value at index is greater than target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN) {
    return target !== undefined && target !== null && arr[index] > target;
  }
  // If operation is VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, check if value at index is greater than or equal to target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS) {
    return target !== undefined && target !== null && arr[index] >= target;
  }
  // If operation is VALUE_AT_INDEX_LESS_THAN, check if value at index is less than target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN) {
    return target !== undefined && target !== null && arr[index] < target;
  }
  // If operation is VALUE_AT_INDEX_LESS_THAN_OR_EQUALS, check if value at index is less than or equal to target
  if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS) {
    return target !== undefined && target !== null && arr[index] <= target;
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported array index predicate operation: ${oper}`);
};
