import { ByType } from '../../types/utility';
import { arrayIndexPredicate, ArrayIndexPredicate } from '../predicates/arrayIndexPredicate';

/**
 * Filters a collection of objects based on the value at a specific index in an array property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the array property within the nested object to test.
 * @param {ArrayIndexPredicate[2]} oper - The array index operation to apply.
 * @param {number} index - The index to check in the array property.
 * @param {ArrayIndexPredicate[4]} [target] - The target value(s) for comparison (optional).
 * @returns {T[]} The filtered array of objects where the array index property matches the operation.
 *
 * Example: Filter users where user.profile.scores[0] equals 100:
 *   objectArrayIndexFilter(users, 'profile', 'scores', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 0, 100)
 */
export const objectArrayIndexFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: string,
  oper: Parameters<ArrayIndexPredicate>[1],
  index: Parameters<ArrayIndexPredicate>[2],
  target?: Parameters<ArrayIndexPredicate>[3]
) => T[] = (collection, field, key, oper, index, target) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return arrayIndexPredicate(source[key], oper, index, target);
  });
};
