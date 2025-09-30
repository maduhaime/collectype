import { SortType, SortTypeEnum } from '../../enums/sort.js';

/**
 * Infers the sort type of a value for sorting purposes.
 * Returns one of: 'string', 'number', 'boolean', or 'date'.
 *
 * @param value The value whose sort type should be inferred.
 * @returns {SortType} The inferred sort type (string, number, boolean, or date).
 * @throws Error if the type cannot be inferred (e.g., object, array, null, undefined).
 *
 * @example
 * inferSortType('abc'); // 'string'
 * inferSortType(42); // 'number'
 * inferSortType(true); // 'boolean'
 * inferSortType(new Date()); // 'date'
 *
 * // Throws for unsupported types:
 * inferSortType({}); // Error
 * inferSortType([]); // Error
 * inferSortType(null); // Error
 * inferSortType(undefined); // Error
 *
 * // Compositional usage:
 * const type = inferSortType(item.value);
 * if (type === 'string') {
 *   // sort as string
 * }
 */
export function inferSortType(value: unknown): SortType {
  if (typeof value === 'string') return SortTypeEnum.STRING;
  if (typeof value === 'number') return SortTypeEnum.NUMBER;
  if (typeof value === 'boolean') return SortTypeEnum.BOOLEAN;
  if (value instanceof Date) return SortTypeEnum.DATE;
  throw new Error(`Cannot infer sort type for value: ${value}`);
}
