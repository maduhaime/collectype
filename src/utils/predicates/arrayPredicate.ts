import { ArrayOperEnum } from '../../enums/arrayOperation';
import { EnumOrString } from '../../types';
import { isSupersetWithDuplicates } from '../helpers/isSupersetWithDuplicates';
import { containsSubsequence } from '../helpers/containsSubsequence';
import { setEquals } from '../helpers/setEquals';

// Type for array predicate function
export type ArrayPredicate = <T>(arr: T[], oper: EnumOrString<typeof ArrayOperEnum>, target?: T | T[]) => boolean;

/**
 * Evaluates an operation on an array according to the provided operator.
 * Supports inclusion, equality, subset, sequence, and other array operations.
 * @template T - The type of array elements.
 * @param arr - The array to test.
 * @param oper - The operation to perform (see ArrayOperEnum).
 * @param target - The value or array to compare, depending on the operation.
 * @returns Result of the operation.
 * @example
 * // DummyType is a placeholder for your type
 * arrayPredicate<DummyType, typeof ctx>(['A', 'B'], 'includes', 'A'); // true
 * arrayPredicate<DummyType, typeof ctx>(['A', 'B'], 'equals', ['A', 'B']); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
 */
export const arrayPredicate: ArrayPredicate = <T>(
  arr: T[],
  oper: EnumOrString<typeof ArrayOperEnum>,
  target?: T | T[]
) => {
  // Design choice: empty objects/arrays are not considered 'usable' for inclusion/exclusion logic.
  // They are ignored and always return false for INCLUDES/EXCLUDES/SOME_EQUALS/EVERY_EQUALS/SUBSET.
  const value = target as T;

  // For inclusion/exclusion logic, empty arrays are ignored
  if (arr.length === 0) {
    if (
      oper === ArrayOperEnum.INCLUDES ||
      oper === ArrayOperEnum.EXCLUDES ||
      oper === ArrayOperEnum.SOME_EQUALS ||
      oper === ArrayOperEnum.EVERY_EQUALS ||
      oper === ArrayOperEnum.IS_SUBSET_OF
    ) {
      return false;
    }
  }

  // If operation is INCLUDES, check if array includes value
  if (oper === ArrayOperEnum.INCLUDES) {
    return arr.includes(value);
  }
  // If operation is EXCLUDES, check if array does not include value
  if (oper === ArrayOperEnum.EXCLUDES) {
    return !arr.includes(value);
  }
  // If operation is SOME_EQUALS, check if any element equals value
  if (oper === ArrayOperEnum.SOME_EQUALS) {
    return arr.some((v) => v === value);
  }
  // If operation is EVERY_EQUALS, check if all elements equal value
  if (oper === ArrayOperEnum.EVERY_EQUALS) {
    return arr.length > 0 && arr.every((v) => v === value);
  }

  const targetArr = target as T[];

  // If operation is EQUALS, check strict array equality
  if (oper === ArrayOperEnum.EQUALS) {
    return arr.length === targetArr.length && arr.every((v, i) => v === targetArr[i]);
  }
  // If operation is SET_EQUALS, check set equality
  if (oper === ArrayOperEnum.SET_EQUALS) {
    return setEquals(arr, targetArr);
  }
  // If operation is IS_SUBSET_OF, check if array is subset of targetArr
  if (oper === ArrayOperEnum.IS_SUBSET_OF) {
    return arr.length > 0 && arr.every((v) => targetArr.includes(v));
  }
  // ...existing code...

  // Check if arr is a superset of targetArr (all elements of targetArr in arr, including duplicates)
  if (oper === ArrayOperEnum.IS_SUPERSET_OF) return isSupersetWithDuplicates(arr, targetArr);

  // Check if arr starts with targetArr
  if (oper === ArrayOperEnum.STARTS_WITH) return targetArr.every((v, i) => arr[i] === v);

  // Check if arr ends with targetArr
  if (oper === ArrayOperEnum.ENDS_WITH) return targetArr.every((v, i) => arr[arr.length - targetArr.length + i] === v);

  // Check if arr contains targetArr as a contiguous subsequence
  if (oper === ArrayOperEnum.CONTAINS_SUBSEQUENCE) return containsSubsequence(arr, targetArr);

  // Check if arr and targetArr have any elements in common
  if (oper === ArrayOperEnum.INTERSECTS) return arr.some((v) => targetArr.includes(v));

  // Check if arr and targetArr are disjoint
  if (oper === ArrayOperEnum.DISJOINT) return arr.every((v) => !targetArr.includes(v));

  // Unsupported operator
  throw new Error(`Unsupported array predicate operation: ${oper}`);
};
