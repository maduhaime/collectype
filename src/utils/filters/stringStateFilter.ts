import { ByType } from '../../types/utility';
import { stringStatePredicate, StringStatePredicate } from '../predicates/stringStatePredicate';

/**
 * Filters a collection of objects by a string field using the specified string State operation.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the string field to filter by.
 * @param collection - The array of objects to filter.
 * @param field - The key of the string field to filter on.
 * @param {StringStateOper | ValueOf<StringStateOperEnum>} oper - The string state operation to apply. Must be a value from StringStateOperEnum.
 * @returns {T[]} The filtered array of objects.
 */
export function stringStateFilter<T, K extends keyof ByType<T, string>>(
  collection: T[],
  field: K,
  oper: Parameters<StringStatePredicate>[1]
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as string | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return stringStatePredicate(source, oper);
  });
}
