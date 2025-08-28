import { arrayIndexPredicate } from '../predicates/arrayIndexPredicate';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';
import { ByType } from '../../types/utility';

/**
 * Generic filter for array index operations (equals, not equals, in, not in).
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {ArrayIndexOperEnum} oper - The index operation to perform.
 * @param {number} index - The index to check in the array.
 * @param {any|any[]} target - The value or array to compare at the index.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayIndexFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  oper: ArrayIndexOperEnum,
  index: number,
  target: any | any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;

    // Guard clause: return false if the field is not an array
    if (!Array.isArray(arr)) return false;

    // Check for VALUE_AT_INDEX_EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS
    if (
      oper === ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS ||
      oper === ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN ||
      oper === ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS ||
      oper === ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN ||
      oper === ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS
    ) {
      // If index is out of bounds, return false
      if (index < 0 || index >= arr.length) return false;

      // Delegate to arrayIndexPredicate
      return arrayIndexPredicate(arr, oper, index, target);
    }

    // Check for VALUE_AT_INDEX_NOT_EQUALS
    if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS) {
      // If index is out of bounds, return true
      if (index < 0 || index >= arr.length) return true;

      // Delegate to arrayIndexPredicate
      return arrayIndexPredicate(arr, oper, index, target);
    }

    // Check for VALUE_AT_INDEX_IN
    if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_IN) {
      // If index is out of bounds, return false
      if (index < 0 || index >= arr.length) return false;

      // Delegate to arrayIndexPredicate
      return arrayIndexPredicate(arr, oper, index, target);
    }

    // Check for VALUE_AT_INDEX_NOT_IN
    if (oper === ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN) {
      // If index is out of bounds, return true
      if (index < 0 || index >= arr.length) return true;

      // Delegate to arrayIndexPredicate
      return arrayIndexPredicate(arr, oper, index, target);
    }

    // Unsupported operator
    return false;
  });
}
