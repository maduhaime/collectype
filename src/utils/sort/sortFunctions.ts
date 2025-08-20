import { hasNull } from '../primitives/null';
import { hasUndefined } from '../primitives/undefined';
import { SortDir } from '../../types/sort';
import { SortDirEnum } from '../../enums/sort';

/**
 * Sorts two values when at least one is undefined.
 * @param a - First value.
 * @param b - Second value.
 * @param dir - Sort direction.
 * @returns Sorting order.
 */
export function sortUndefined(a: unknown, b: unknown, dir: SortDir): number {
  // Returns 0 if both values are undefined
  if (a === undefined && b === undefined) return 0;

  // Sorts undefined to the start or end depending on direction
  if (dir === SortDirEnum.ASC) return a === undefined ? -1 : 1;
  if (dir === SortDirEnum.DESC) return a === undefined ? 1 : -1;

  // Throw for invalid SortDir
  throw new Error(`Invalid SortDir: ${dir}`);
}

/**
 * Sorts two values when at least one is null.
 * @param a - First value.
 * @param b - Second value.
 * @param dir - Sort direction.
 * @returns Sorting order.
 */
export function sortNull(a: unknown, b: unknown, dir: SortDir): number {
  // Returns 0 if both values are null
  if (a === null && b === null) return 0;

  // Sorts null to the start or end depending on direction
  if (dir === SortDirEnum.ASC) return a === null ? -1 : 1;
  if (dir === SortDirEnum.DESC) return a === null ? 1 : -1;

  // Throw for invalid SortDir
  throw new Error(`Invalid SortDir: ${dir}`);
}

/**
 * Sorts a collection by a string field.
 * @param collection - Array of items.
 * @param field - Field to sort by.
 * @param dir - Sort direction.
 * @returns Sorted array.
 */
export function sortByStringField<T, K extends keyof T>(
  collection: T[],
  field: K,
  dir: SortDir = SortDirEnum.ASC
): T[] {
  return collection.sort((itemA: T, itemB: T) => {
    // Handle undefined values
    if (hasUndefined(itemA[field], itemB[field])) return sortUndefined(itemA[field], itemB[field], dir);

    // Handle null values
    if (hasNull(itemA[field], itemB[field])) return sortNull(itemA[field], itemB[field], dir);

    const a = String(itemA[field]);
    const b = String(itemB[field]);

    // Sort ascending
    if (dir === SortDirEnum.ASC) return a.localeCompare(b);
    // Sort descending
    if (dir === SortDirEnum.DESC) return b.localeCompare(a);

    // Throw for invalid SortDir
    throw new Error(`Invalid SortDir: ${dir}`);
  });
}

/**
 * Sorts a collection by a number field.
 * @param collection - Array of items.
 * @param field - Field to sort by.
 * @param dir - Sort direction.
 * @returns Sorted array.
 */
export function sortByNumberField<T, K extends keyof T>(
  collection: T[],
  field: K,
  dir: SortDir = SortDirEnum.ASC
): T[] {
  return collection.sort((itemA: T, itemB: T) => {
    // Handle undefined values
    if (hasUndefined(itemA[field], itemB[field])) return sortUndefined(itemA[field], itemB[field], dir);
    // Handle null values
    if (hasNull(itemA[field], itemB[field])) return sortNull(itemA[field], itemB[field], dir);

    const a = Number(itemA[field]);
    const b = Number(itemB[field]);

    // Sort ascending
    if (dir === SortDirEnum.ASC) return a - b;
    // Sort descending
    if (dir === SortDirEnum.DESC) return b - a;

    // Throw for invalid SortDir
    throw new Error(`Invalid SortDir: ${dir}`);
  });
}

/**
 * Sorts a collection by a date field.
 * @param collection - Array of items.
 * @param field - Field to sort by.
 * @param dir - Sort direction.
 * @returns Sorted array.
 */
export function sortByDateField<T, K extends keyof T>(collection: T[], field: K, dir: SortDir = SortDirEnum.ASC): T[] {
  return collection.sort((itemA: T, itemB: T) => {
    // Handle undefined values
    if (hasUndefined(itemA[field], itemB[field])) return sortUndefined(itemA[field], itemB[field], dir);
    // Handle null values
    if (hasNull(itemA[field], itemB[field])) return sortNull(itemA[field], itemB[field], dir);

    const a = itemA[field] as Date;
    const b = itemB[field] as Date;

    // Sort ascending
    if (dir === SortDirEnum.ASC) return a.getTime() - b.getTime();
    // Sort descending
    if (dir === SortDirEnum.DESC) return b.getTime() - a.getTime();

    // Throw for invalid SortDir
    throw new Error(`Invalid SortDir: ${dir}`);
  });
}

/**
 * Sorts a collection by a boolean field.
 * @param collection - Array of items.
 * @param field - Field to sort by.
 * @param dir - Sort direction.
 * @returns Sorted array.
 */
export function sortByBooleanField<T, K extends keyof T>(
  collection: T[],
  field: K,
  dir: SortDir = SortDirEnum.ASC
): T[] {
  return collection.sort((itemA: T, itemB: T) => {
    // Handle undefined values
    if (hasUndefined(itemA[field], itemB[field])) return sortUndefined(itemA[field], itemB[field], dir);
    // Handle null values
    if (hasNull(itemA[field], itemB[field])) return sortNull(itemA[field], itemB[field], dir);

    const a = Boolean(itemA[field]);
    const b = Boolean(itemB[field]);

    // Sort ascending
    if (dir === SortDirEnum.ASC) return Number(a) - Number(b);
    // Sort descending
    if (dir === SortDirEnum.DESC) return Number(b) - Number(a);

    // Throw for invalid SortDir
    throw new Error(`Invalid SortDir: ${dir}`);
  });
}
