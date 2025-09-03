import { SortDirEnum, SortTypeEnum } from '../enums/sort';

/**
 * Type representing possible sort directions ('asc' or 'desc').
 * Used for type safety in sorting functions.
 *
 * @example
 * function sort(dir: SortDir) { ... }
 */
export type SortDir = `${SortDirEnum}`;

/**
 * Type representing possible sort types ('string', 'number', 'date', 'boolean').
 * Used for type safety in sorting functions.
 *
 * @example
 * function sortByType(type: SortType) { ... }
 */
export type SortType = `${SortTypeEnum}`;
