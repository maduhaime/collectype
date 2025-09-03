import { ArrayStateOperEnum } from '../../enums/arrayOperation';

/**
 * Predicate for array state operations (empty, not empty).
 * @paramType T - The type of array elements.
 * @param arr - The array to check.
 * @param oper - The operation to perform (see ArrayStateOperEnum).
 * @returns Result of the operation.
 * @example
 * // DummyType is a placeholder for your type
 * arrayStatePredicate<DummyType>(['A', 'B'], 'isEmpty'); // false
 * arrayStatePredicate<DummyType>([], 'isEmpty'); // true
 * arrayStatePredicate<DummyType>(['A'], 'isNotEmpty'); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unsupported operator is provided.
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
