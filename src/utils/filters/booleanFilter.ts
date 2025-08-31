import { booleanPredicate, BooleanPredicate } from '../predicates/booleanPredicate';
import { ByType } from '../../types/utility';

/**
 * Filters a collection of objects by a boolean field using the specified boolean operation.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the boolean field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the boolean field to filter on.
 * @param {BooleanOper | ValueOf<BooleanOperEnum>} oper - The boolean operation to apply ('equals', 'not_equals').
 * @param {Boolean} target - The target boolean value for comparison.
 * @returns {T[]} The filtered array of objects.
 */

export function booleanFilter<T, K extends keyof ByType<T, boolean>>(
  collection: T[],
  field: K,
  oper: Parameters<BooleanPredicate>[1],
  target: Parameters<BooleanPredicate>[2]
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as boolean | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return booleanPredicate(source, oper, target);
  });
}
