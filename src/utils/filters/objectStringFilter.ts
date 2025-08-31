import { ByType } from '../../types/utility';
import { stringPredicate, StringPredicate } from '../predicates/stringPredicate';

/**
 * Filters a collection of objects based on a string property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the string property within the nested object to test.
 * @param {StringOper | ValueOf<StringOperEnum>} oper - The string operation to apply.
 * @param {string} target - The target string value for comparison.
 * @returns {T[]} The filtered array of objects where the string property matches the operation.
 *
 * Example: Filter users where user.profile.bio includes 'developer':
 *   objectStringFilter(users, 'profile', 'bio', StringOperEnum.INCLUDES, 'developer')
 */
export function objectStringFilter<T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: string,
  oper: Parameters<StringPredicate>[1],
  target: Parameters<StringPredicate>[2]
): T[] {
  if (!Array.isArray(collection)) return [];
  return collection.filter((item) => {
    const obj = item[field] as Record<string, any>;
    return obj && stringPredicate(obj[key], oper, target);
  });
}
