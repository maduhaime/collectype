import { ByType, ValueOf } from '../../types/utility';
import { StringBooleanOperEnum } from '../../enums/stringBooleanOperation';
import { stringBooleanPredicate } from '../predicates/stringBooleanPredicate';

/**
 * Filters a collection of objects by a string field using the specified string boolean operation.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the string field to filter by.
 * @param collection - The array of objects to filter.
 * @param field - The key of the string field to filter on.
 * @param oper - The string boolean operation to apply. Must be a value from StringBooleanOperEnum.
 * @returns {T[]} The filtered array of objects.
 */
export function stringBooleanFilter<T, K extends keyof ByType<T, string>>(
  collection: T[],
  field: K,
  oper: ValueOf<StringBooleanOperEnum>
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as string | undefined;
    if (typeof source === 'undefined') return false;
    return stringBooleanPredicate(source, oper);
  });
}
