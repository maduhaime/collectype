import { ByType } from '../../types/utility';
import { numberPredicate } from '../predicates/numberPredicate';
import { NumberOperEnum } from '../../enums/numberOperation';

/**
 * Filters a collection of objects based on a number property within a nested object.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the number property within the nested object to test.
 * @param {NumberOperEnum} oper - The number operation to apply.
 * @param {number} target - The target number value for comparison.
 * @returns {T[]} The filtered array of objects where the number property matches the operation.
 *
 * Example: Filter users where user.profile.age is greater than 18:
 *   objectNumberFilter(users, 'profile', 'age', NumberOperEnum.GREATER_THAN, 18)
 */
export function objectNumberFilter<T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: string,
  oper: NumberOperEnum,
  target: number
): T[] {
  if (!Array.isArray(collection)) return [];
  return collection.filter((item) => {
    const obj = item[field] as Record<string, any>;
    return obj && numberPredicate(obj[key], oper, target);
  });
}
