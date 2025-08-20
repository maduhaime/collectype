import { SortType } from '../../types/sort';
import { SortTypeEnum } from '../../enums/sort';

/**
 * Infers the sort type of a value for sorting purposes.
 * Returns one of: 'string', 'number', 'boolean', 'date'.
 *
 * @param value - The value to infer the type of.
 * @returns {SortType} The inferred sort type.
 * @throws Error if the type cannot be inferred.
 */
export function inferSortType(value: unknown): SortType {
  if (typeof value === 'string') return SortTypeEnum.STRING;
  if (typeof value === 'number') return SortTypeEnum.NUMBER;
  if (typeof value === 'boolean') return SortTypeEnum.BOOLEAN;
  if (value instanceof Date) return SortTypeEnum.DATE;
  throw new Error(`Cannot infer sort type for value: ${value}`);
}
