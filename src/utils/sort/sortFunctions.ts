import { hasNull } from '../primitives/null.js';
import { hasUndefined } from '../primitives/undefined.js';
import { SortDir } from '../../types/sort.js';
import { SortDirEnum } from '../../enums/sort.js';

/**
 * Sorts two values when at least one is undefined.
 *
 * @param a First value.
 * @param b Second value.
 * @param dir Sort direction ('asc' or 'desc').
 * @returns {number} Sorting order: -1, 0, or 1.
 * @throws Error if the sort direction is invalid.
 *
 * @example
 * sortUndefined(undefined, 5, 'asc'); // -1 (undefined first)
 * sortUndefined(5, undefined, 'desc'); // -1 (undefined last)
 * sortUndefined(undefined, undefined, 'asc'); // 0
 */
export function sortUndefined(a: unknown, b: unknown, dir: SortDir): number {
  if (a === undefined && b === undefined) return 0;
  if (dir === SortDirEnum.ASC) return a === undefined ? -1 : 1;
  if (dir === SortDirEnum.DESC) return a === undefined ? 1 : -1;
  throw new Error(`Invalid SortDir: ${dir}`);
}

/**
 * Sorts two values when at least one is null.
 *
 * @param a First value.
 * @param b Second value.
 * @param dir Sort direction ('asc' or 'desc').
 * @returns {number} Sorting order: -1, 0, or 1.
 * @throws Error if the sort direction is invalid.
 *
 * @example
 * sortNull(null, 5, 'asc'); // -1 (null first)
 * sortNull(5, null, 'desc'); // -1 (null last)
 * sortNull(null, null, 'asc'); // 0
 */
export function sortNull(a: unknown, b: unknown, dir: SortDir): number {
  if (a === null && b === null) return 0;
  if (dir === SortDirEnum.ASC) return a === null ? -1 : 1;
  if (dir === SortDirEnum.DESC) return a === null ? 1 : -1;
  throw new Error(`Invalid SortDir: ${dir}`);
}

/**
 * Sorts a collection by a string field.
 *
 * @param collection Array of items to sort.
 * @param field Field name to sort by (must be a string field).
 * @param dir Sort direction ('asc' or 'desc'). Default is 'asc'.
 * @returns {T[]} Sorted array.
 * @throws Error if the sort direction is invalid.
 *
 * @example
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: null },
 * ];
 * sortByStringField(users, 'name', 'asc'); // [null first, then Alice, then Bob]
 *
 * // Compositional usage:
 * const sorted = sortByStringField(items, 'label', 'desc');
 */
export function sortByStringField<T, K extends keyof T>(
  collection: T[],
  field: K,
  dir: SortDir = SortDirEnum.ASC
): T[] {
  return collection.sort((itemA: T, itemB: T) => {
    if (hasUndefined(itemA[field], itemB[field])) return sortUndefined(itemA[field], itemB[field], dir);
    if (hasNull(itemA[field], itemB[field])) return sortNull(itemA[field], itemB[field], dir);
    const a = String(itemA[field]);
    const b = String(itemB[field]);
    if (dir === SortDirEnum.ASC) return a.localeCompare(b);
    if (dir === SortDirEnum.DESC) return b.localeCompare(a);
    throw new Error(`Invalid SortDir: ${dir}`);
  });
}

/**
 * Sorts a collection by a number field.
 *
 * @param collection Array of items to sort.
 * @param field Field name to sort by (must be a number field).
 * @param dir Sort direction ('asc' or 'desc'). Default is 'asc'.
 * @returns {T[]} Sorted array.
 * @throws Error if the sort direction is invalid.
 *
 * @example
 * const products = [
 *   { id: 1, price: 10 },
 *   { id: 2, price: 5 },
 *   { id: 3, price: null },
 * ];
 * sortByNumberField(products, 'price', 'asc'); // [null first, then 5, then 10]
 *
 * // Compositional usage:
 * const sorted = sortByNumberField(items, 'qty', 'desc');
 */
export function sortByNumberField<T, K extends keyof T>(
  collection: T[],
  field: K,
  dir: SortDir = SortDirEnum.ASC
): T[] {
  return collection.sort((itemA: T, itemB: T) => {
    if (hasUndefined(itemA[field], itemB[field])) return sortUndefined(itemA[field], itemB[field], dir);
    if (hasNull(itemA[field], itemB[field])) return sortNull(itemA[field], itemB[field], dir);
    const a = Number(itemA[field]);
    const b = Number(itemB[field]);
    if (dir === SortDirEnum.ASC) return a - b;
    if (dir === SortDirEnum.DESC) return b - a;
    throw new Error(`Invalid SortDir: ${dir}`);
  });
}

/**
 * Sorts a collection by a date field.
 *
 * @param collection Array of items to sort.
 * @param field Field name to sort by (must be a Date field).
 * @param dir Sort direction ('asc' or 'desc'). Default is 'asc'.
 * @returns {T[]} Sorted array.
 * @throws Error if the sort direction is invalid.
 *
 * @example
 * const events = [
 *   { id: 1, date: new Date('2020-01-01') },
 *   { id: 2, date: new Date('2022-01-01') },
 *   { id: 3, date: null },
 * ];
 * sortByDateField(events, 'date', 'asc'); // [null first, then 2020, then 2022]
 *
 * // Compositional usage:
 * const sorted = sortByDateField(items, 'createdAt', 'desc');
 */
export function sortByDateField<T, K extends keyof T>(collection: T[], field: K, dir: SortDir = SortDirEnum.ASC): T[] {
  return collection.sort((itemA: T, itemB: T) => {
    if (hasUndefined(itemA[field], itemB[field])) return sortUndefined(itemA[field], itemB[field], dir);
    if (hasNull(itemA[field], itemB[field])) return sortNull(itemA[field], itemB[field], dir);
    const a = itemA[field] as Date;
    const b = itemB[field] as Date;
    if (dir === SortDirEnum.ASC) return a.getTime() - b.getTime();
    if (dir === SortDirEnum.DESC) return b.getTime() - a.getTime();
    throw new Error(`Invalid SortDir: ${dir}`);
  });
}

/**
 * Sorts a collection by a boolean field.
 *
 * @param collection Array of items to sort.
 * @param field Field name to sort by (must be a boolean field).
 * @param dir Sort direction ('asc' or 'desc'). Default is 'asc'.
 * @returns {T[]} Sorted array.
 * @throws Error if the sort direction is invalid.
 *
 * @example
 * const flags = [
 *   { id: 1, active: true },
 *   { id: 2, active: false },
 *   { id: 3, active: null },
 * ];
 * sortByBooleanField(flags, 'active', 'asc'); // [null first, then false, then true]
 *
 * // Compositional usage:
 * const sorted = sortByBooleanField(items, 'isActive', 'desc');
 */
export function sortByBooleanField<T, K extends keyof T>(
  collection: T[],
  field: K,
  dir: SortDir = SortDirEnum.ASC
): T[] {
  return collection.sort((itemA: T, itemB: T) => {
    if (hasUndefined(itemA[field], itemB[field])) return sortUndefined(itemA[field], itemB[field], dir);
    if (hasNull(itemA[field], itemB[field])) return sortNull(itemA[field], itemB[field], dir);
    const a = Boolean(itemA[field]);
    const b = Boolean(itemB[field]);
    if (dir === SortDirEnum.ASC) return Number(a) - Number(b);
    if (dir === SortDirEnum.DESC) return Number(b) - Number(a);
    throw new Error(`Invalid SortDir: ${dir}`);
  });
}
