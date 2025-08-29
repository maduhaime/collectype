import { ByType } from '@/types/utility';
import { objectNumberRangePredicate, ObjectNumberRangePredicate } from '../predicates/objectNumberRangePredicate';

/**
 * Filters a collection of objects based on a number property within a nested object, checking if it falls within a number range.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the number property within the nested object to test.
 * @param {ObjectNumberRangePredicate[2]} oper - The range operation to apply.
 * @param {ObjectNumberRangePredicate[3]} min - The minimum number bound.
 * @param {ObjectNumberRangePredicate[4]} max - The maximum number bound.
 * @returns {T[]} The filtered array of objects where the number property is within the range.
 *
 * Example: Filter users where user.profile.score is between 50 and 100:
 *   objectNumberRangeFilter(users, 'profile', 'score', RangeOperEnum.IN_RANGE, 50, 100)
 */
export const objectNumberRangeFilter: <T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: Parameters<ObjectNumberRangePredicate>[1],
  oper: Parameters<ObjectNumberRangePredicate>[2],
  min: Parameters<ObjectNumberRangePredicate>[3],
  max: Parameters<ObjectNumberRangePredicate>[4]
) => T[] = (collection, field, key, oper, min, max) => {
  return collection.filter((item) => {
    const source = item[field] as Record<string, any>;
    return objectNumberRangePredicate(source, key, oper, min, max);
  });
};
