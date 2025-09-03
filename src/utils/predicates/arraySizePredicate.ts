import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { EnumOrString } from '../../types';

// Type for array size predicate function
export type ArraySizePredicate = <T>(arr: T[], oper: EnumOrString<typeof ArraySizeOperEnum>, num?: number) => boolean;

/**
 * Evaluates an operation on the size of an array.
 * Supports equality, comparison, emptiness, etc.
 * @paramType T - The type of array elements.
 * @param arr - The array to test.
 * @param oper - The operation to perform (see ArraySizeOperEnum).
 * @param num - The size value to compare (if applicable).
 * @returns Result of the operation.
 * @example
 * // DummyType is a placeholder for your type
 * arraySizePredicate<DummyType>(['A', 'B', 'C'], 'lengthEquals', 3); // true
 * arraySizePredicate<DummyType>(['A', 'B', 'C'], 'lengthGreaterThan', 2); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const arraySizePredicate: ArraySizePredicate = (arr, oper, num) => {
  // If operation is LENGTH_EQUALS, check equality
  if (oper === ArraySizeOperEnum.LENGTH_EQUALS) {
    return arr.length === num;
  }
  // If operation is LENGTH_GREATER_THAN, check greater than
  if (oper === ArraySizeOperEnum.LENGTH_GREATER_THAN) {
    return arr.length > (num ?? 0);
  }
  // If operation is LENGTH_GREATER_THAN_OR_EQUALS, check greater than or equal
  if (oper === ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS) {
    return arr.length >= (num ?? 0);
  }
  // If operation is LENGTH_LESS_THAN, check less than
  if (oper === ArraySizeOperEnum.LENGTH_LESS_THAN) {
    return arr.length < (num ?? 0);
  }
  // If operation is LENGTH_LESS_THAN_OR_EQUALS, check less than or equal
  if (oper === ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS) {
    return arr.length <= (num ?? 0);
  }
  // If operation is unsupported, throw error
  throw new Error(`Unsupported array size predicate operation: ${oper}`);
  // ...existing code...
};
