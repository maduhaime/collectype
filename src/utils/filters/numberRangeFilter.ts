import { ByType } from '../../types/utility';
import { numberRangePredicate, NumberRangePredicate } from '../predicates/numberRangePredicate';

/**
 * Filters a collection of objects by a number field using range-based operations.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the number field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the number field to filter on.
 * @param {NumberRangeOperEnum} oper - The range operation to apply.
 * @param {number} min - The minimum bound.
 * @param {number} max - The maximum bound.
 * @returns {T[]} The filtered array of objects.
 */
export function rangeFilter<T, K extends keyof ByType<T, number>>(
  collection: T[],
  field: K,
  oper: Parameters<NumberRangePredicate>[1],
  min: Parameters<NumberRangePredicate>[2],
  max: Parameters<NumberRangePredicate>[3]
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as number | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return numberRangePredicate(source, oper, min, max);
  });
}
