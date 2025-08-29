import { ByType } from '@/types/utility';
import { objectBooleanPredicate, ObjectBooleanPredicate } from '../predicates/objectBooleanPredicate';

/**
 * Filters a collection of objects based on a boolean property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the boolean property within the nested object to test.
 * @param {ObjectBooleanPredicate[2]} oper - The boolean operation to apply.
 * @param {ObjectBooleanPredicate[3]} target - The target boolean value for comparison.
 * @returns {T[]} The filtered array of objects where the boolean property matches the operation.
 *
 * Example: Filter users where user.profile.active is true:
 *   objectBooleanFilter(users, 'profile', 'active', BooleanOperEnum.EQUALS, true)
 */
export const objectBooleanFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectBooleanPredicate>[1],
  oper: Parameters<ObjectBooleanPredicate>[2],
  target: Parameters<ObjectBooleanPredicate>[3]
) => T[] = (collection, field, key, oper, target) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectBooleanPredicate(source, key, oper, target);
  });
};
