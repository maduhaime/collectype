import { ByType } from '@/types/utility';
import { objectStringStatePredicate, ObjectStringStatePredicate } from '../predicates/objectStringStatePredicate';

/**
 * Filters a collection of objects based on the state of a string property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the string property within the nested object to test.
 * @param {ObjectStringStatePredicate[2]} oper - The string state operation to apply (e.g., IS_EMPTY, IS_NOT_EMPTY).
 * @returns {T[]} The filtered array of objects where the string property matches the state operation.
 *
 * Example: Filter users where user.profile.bio is not empty:
 *   objectStringStateFilter(users, 'profile', 'bio', StringStateOperEnum.IS_NOT_EMPTY)
 */
export const objectStringStateFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectStringStatePredicate>[1],
  oper: Parameters<ObjectStringStatePredicate>[2]
) => T[] = (collection, field, key, oper) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectStringStatePredicate(source, key, oper);
  });
};
