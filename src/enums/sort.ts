/**
 * Enum for sort direction (ascending or descending).
 * Used to specify order in sorting operations.
 *
 * @enum {'asc' | 'desc'}
 *
 * @example
 * if (dir === SortDirEnum.ASC) { ... }
 */
export enum SortDirEnum {
  /** Sort in ascending order. */
  ASC = 'asc',
  /** Sort in descending order. */
  DESC = 'desc',
}

export type SortDir = SortDirEnum | `${SortDirEnum}`;

/**
 * Enum for sort type (string, number, date, boolean).
 * Used to specify the data type for sorting.
 *
 * @enum {'string' | 'number' | 'date' | 'boolean'}
 *
 * @example
 * if (type === SortTypeEnum.STRING) { ... }
 */
export enum SortTypeEnum {
  /** Sort by string values. */
  STRING = 'string',
  /** Sort by number values. */
  NUMBER = 'number',
  /** Sort by date values. */
  DATE = 'date',
  /** Sort by boolean values. */
  BOOLEAN = 'boolean',
}

export type SortType = SortTypeEnum | `${SortTypeEnum}`;
