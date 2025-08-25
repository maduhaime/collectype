import { arraySizePredicate } from '../predicates/arraySizePredicate';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { ByType } from '../../types/utility';

/**
 * Filters a collection where the array field has a length equal to n.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {number} n - The length to compare.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayLengthEqualsFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  n: number
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    if (!Array.isArray(arr)) return false;
    return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_EQUALS, n);
  });
}

/**
 * Filters a collection where the array field has a length greater than n.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {number} n - The length to compare.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayLengthGreaterThanFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  n: number
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    if (!Array.isArray(arr)) return false;
    return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN, n);
  });
}

/**
 * Filters a collection where the array field has a length less than n.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {number} n - The length to compare.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayLengthLessThanFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  n: number
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    if (!Array.isArray(arr)) return false;
    return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, n);
  });
}

/**
 * Filters a collection where the array field is empty.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayIsEmptyFilter<T, K extends keyof ByType<T, any[]>>(collection: T[], field: K): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arraySizePredicate(arr, ArraySizeOperEnum.IS_EMPTY);
  });
}

/**
 * Filters a collection where the array field is not empty.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayIsNotEmptyFilter<T, K extends keyof ByType<T, any[]>>(collection: T[], field: K): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arraySizePredicate(arr, ArraySizeOperEnum.IS_NOT_EMPTY);
  });
}
