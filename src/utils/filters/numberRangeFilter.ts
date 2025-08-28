import { ByType, ValueOf } from '../../types/utility';
import { numberRangePredicate } from '../predicates/numberRangePredicate';
import { RangeOperEnum } from '../../enums/rangeOperation';

/**
 * Filters a collection of objects by a number field using range-based operations.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the number field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the number field to filter on.
 * @param {ValueOf<RangeOperEnum>} oper - The range operation to apply.
 * @param {number} min - The minimum bound.
 * @param {number} max - The maximum bound.
 * @returns {T[]} The filtered array of objects.
 */
export function rangeFilter<T, K extends keyof ByType<T, number>>(
  collection: T[],
  field: K,
  oper: ValueOf<RangeOperEnum>,
  min: number,
  max: number
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as number | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return numberRangePredicate(source, oper, min, max);
  });
}
