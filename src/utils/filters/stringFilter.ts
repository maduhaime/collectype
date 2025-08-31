import { ByType } from '../../types/utility';
import { stringPredicate, StringPredicate } from '../predicates/stringPredicate';

/**
 * Filters a collection of objects by a string field using the specified string operation.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the string field to filter by.
 * @param collection - The array of objects to filter.
 * @param field - The key of the string field to filter on.
 * @param {StringOper | ValueOf<StringOperEnum>}oper - The string operation to apply. Must be a value from StringOperEnum.
 * @param target - The target string value for comparison.
 * @returns {T[]} The filtered array of objects.
 */
export function stringFilter<T, K extends keyof ByType<T, string>>(
  collection: T[],
  field: K,
  oper: Parameters<StringPredicate>[1],
  target: Parameters<StringPredicate>[2]
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as string | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return stringPredicate(source, oper, target);
  });
}
