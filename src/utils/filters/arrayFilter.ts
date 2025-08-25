import { arrayPredicate } from '../predicates/arrayPredicate';
import { ArrayOperEnum } from '../../enums/arrayOperation';
import { ByType } from '../../types/utility';

/**
 * Filters a collection to keep objects whose array field includes the target value.
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {any} target - The value to check for inclusion.
 * @returns {T[]} The filtered array of objects.
 */
export function arrayIncludesFilter<T, K extends keyof ByType<T, any[]>>(collection: T[], field: K, target: any): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arrayPredicate(arr, ArrayOperEnum.INCLUDES, target);
  });
}

/**
 * Filters a collection to keep objects whose array field does not include the target value.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any} target
 * @returns {T[]}
 */
export function arrayExcludesFilter<T, K extends keyof ByType<T, any[]>>(collection: T[], field: K, target: any): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arrayPredicate(arr, ArrayOperEnum.EXCLUDES, target);
  });
}

/**
 * Filters a collection to keep objects where at least one element in the array field equals the target value.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any} target
 * @returns {T[]}
 */
export function arraySomeEqualsFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arrayPredicate(arr, ArrayOperEnum.SOME_EQUALS, target);
  });
}

/**
 * Filters a collection to keep objects where every element in the array field equals the target value.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any} target
 * @returns {T[]}
 */
export function arrayEveryEqualsFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    // Exclude empty arrays
    return Array.isArray(arr) && arr.length > 0 && arrayPredicate(arr, ArrayOperEnum.EVERY_EQUALS, target);
  });
}

/**
 * Filters a collection to keep objects whose array field is strictly equal to the target array (same order, same values).
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any[]} target
 * @returns {T[]}
 */
export function arrayEqualsFilter<T, K extends keyof ByType<T, any[]>>(collection: T[], field: K, target: any[]): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arrayPredicate(arr, ArrayOperEnum.EQUALS, target);
  });
}

/**
 * Filters a collection to keep objects whose array field and target array have the same elements (set equality, order does not matter).
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any[]} target
 * @returns {T[]}
 */
export function arraySetEqualsFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    // Exclude empty arrays unless target is also empty
    return (
      Array.isArray(arr) &&
      (arr.length > 0 || (Array.isArray(target) && target.length === 0)) &&
      arrayPredicate(arr, ArrayOperEnum.SET_EQUALS, target)
    );
  });
}

/**
 * Filters a collection to keep objects whose array field is a subset of the target array.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any[]} target
 * @returns {T[]}
 */
export function arrayIsSubsetOfFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    // Exclude empty arrays
    return Array.isArray(arr) && arr.length > 0 && arrayPredicate(arr, ArrayOperEnum.IS_SUBSET_OF, target);
  });
}

/**
 * Filters a collection to keep objects whose array field is a superset of the target array.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any[]} target
 * @returns {T[]}
 */
export function arrayIsSupersetOfFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    // Exclude empty arrays
    return Array.isArray(arr) && arr.length > 0 && arrayPredicate(arr, ArrayOperEnum.IS_SUPERSET_OF, target);
  });
}

/**
 * Filters a collection to keep objects whose array field starts with the target sequence.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any[]} target
 * @returns {T[]}
 */
export function arrayStartsWithFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arrayPredicate(arr, ArrayOperEnum.STARTS_WITH, target);
  });
}

/**
 * Filters a collection to keep objects whose array field ends with the target sequence.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any[]} target
 * @returns {T[]}
 */
export function arrayEndsWithFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arrayPredicate(arr, ArrayOperEnum.ENDS_WITH, target);
  });
}

/**
 * Filters a collection to keep objects whose array field contains the target subsequence.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any[]} target
 * @returns {T[]}
 */
export function arrayContainsSubsequenceFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arrayPredicate(arr, ArrayOperEnum.CONTAINS_SUBSEQUENCE, target);
  });
}

/**
 * Filters a collection to keep objects whose array field and target array have at least one element in common.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any[]} target
 * @returns {T[]}
 */
export function arrayIntersectsFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arrayPredicate(arr, ArrayOperEnum.INTERSECTS, target);
  });
}

/**
 * Filters a collection to keep objects whose array field and target array have no elements in common.
 * @template T
 * @template K
 * @param {T[]} collection
 * @param {K} field
 * @param {any[]} target
 * @returns {T[]}
 */
export function arrayDisjointFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  target: any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    return Array.isArray(arr) && arrayPredicate(arr, ArrayOperEnum.DISJOINT, target);
  });
}
