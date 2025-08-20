import { SortDirEnum, SortTypeEnum } from '../enums/sort';

/**
 * Type representing possible sort directions.
 * Used for type safety in sorting functions.
 * @typedef {'asc' | 'desc'} SortDir
 */
export type SortDir = `${SortDirEnum}`;

/**
 * Type representing possible sort types.
 * Used for type safety in sorting functions.
 * @typedef {'string' | 'number' | 'date' | 'boolean'} SortType
 */
export type SortType = `${SortTypeEnum}`;
