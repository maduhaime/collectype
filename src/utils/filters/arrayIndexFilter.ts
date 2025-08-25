import { arrayIndexPredicate } from '../predicates/arrayIndexPredicate';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';
import { ByType } from '../../types/utility';

/**
 * Filters a collection where the value at the given index equals the target value.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {number} index - The index to check in the array.
 * @param {any} target - The value to compare at the index.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayIndexEqualsFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  index: number,
  target: any
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    if (!Array.isArray(arr)) return false;
    // Exclude if index is out of bounds (empty or too short), or value at index is in targets
    if (index < 0 || index >= arr.length) return false;
    return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, index, target);
  });
}

/**
 * Filters a collection where the value at the given index does not equal the target value.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {number} index - The index to check in the array.
 * @param {any} target - The value to compare at the index.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayIndexNotEqualsFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  index: number,
  target: any
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    if (!Array.isArray(arr)) return false;
    // Include if index is out of bounds (empty or too short), or value at index does not equal target
    if (index < 0 || index >= arr.length) return true;
    return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, index, target);
  });
}

/**
 * Filters a collection where the value at the given index is in the target list.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {number} index - The index to check in the array.
 * @param {any[]} targets - The values to check for inclusion at the index.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayIndexInFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  index: number,
  targets: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    if (!Array.isArray(arr)) return false;
    // Exclude if index is out of bounds (empty or too short), or value at index is in targets
    if (index < 0 || index >= arr.length) return false;
    return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_IN, index, targets);
  });
}

/**
 * Filters a collection where the value at the given index is not in the target list.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {number} index - The index to check in the array.
 * @param {any[]} targets - The values to check for exclusion at the index.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayIndexNotInFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  index: number,
  targets: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    if (!Array.isArray(arr)) return false;
    // Include if index is out of bounds (empty or too short), or value at index is not in targets
    if (index < 0 || index >= arr.length) return true;
    return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, index, targets);
  });
}
