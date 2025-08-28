import { ByType, ValueOf } from '../../types/utility';
import { StringStateOperEnum } from '../../enums/stringOperation';
import { stringStatePredicate } from '../predicates/stringStatePredicate';

/**
 * Filters a collection of objects by a string field using the specified string State operation.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the string field to filter by.
 * @param collection - The array of objects to filter.
 * @param field - The key of the string field to filter on.
 * @param oper - The string state operation to apply. Must be a value from StringStateOperEnum.
 * @returns {T[]} The filtered array of objects.
 */
export function stringStateFilter<T, K extends keyof ByType<T, string>>(
  collection: T[],
  field: K,
  oper: ValueOf<StringStateOperEnum>
): T[] {
  return collection.filter((item: T) => {
    const source = item[field] as string | undefined;

    // Guard clause: return false if the field is undefined
    if (typeof source === 'undefined') return false;

    return stringStatePredicate(source, oper);
  });
}
