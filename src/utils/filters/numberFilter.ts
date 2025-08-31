import { ByType } from '../../types/utility';
import { numberPredicate, NumberPredicate } from '../predicates/numberPredicate';

/**
 * Filters a collection of objects by a number field using the specified number operation.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the number field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the number field to filter on.
 * @param {NumberEnum | ValueOf<NumberOperEnum>} oper - The number operation to apply.
 * @param {number} target - The target number value for comparison.
 * @returns {T[]} The filtered array of objects.
 */
export function numberFilter<T, K extends keyof ByType<T, number>>(
  collection: T[],
  field: K,
  oper: Parameters<NumberPredicate>[1],
  target: Parameters<NumberPredicate>[2]
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as number | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return numberPredicate(source, oper, target);
  });
}
