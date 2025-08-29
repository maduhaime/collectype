import { ByType } from '@/types/utility';
import { objectStringPredicate, ObjectStringPredicate } from '../predicates/objectStringPredicate';

/**
 * Filters a collection of objects based on a string property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the string property within the nested object to test.
 * @param {ObjectStringPredicate[2]} oper - The string operation to apply.
 * @param {ObjectStringPredicate[3]} target - The target string value for comparison.
 * @returns {T[]} The filtered array of objects where the string property matches the operation.
 *
 * Example: Filter users where user.profile.bio includes 'developer':
 *   objectStringFilter(users, 'profile', 'bio', StringOperEnum.INCLUDES, 'developer')
 */
export const objectStringFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectStringPredicate>[1],
  oper: Parameters<ObjectStringPredicate>[2],
  target: Parameters<ObjectStringPredicate>[3]
) => T[] = (collection, field, key, oper, target) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectStringPredicate(source, key, oper, target);
  });
};
