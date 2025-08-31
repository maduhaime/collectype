import { ByType } from '../../types/utility';
import { numberRangePredicate, NumberRangePredicate } from '../predicates/numberRangePredicate';

/**
 * Filters a collection of objects based on a number property within a nested object, checking if it falls within a number range.
 *
 * @template T - The type of the objects in the collection.
 * @template K - The key of the nested object property in T.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the nested object property to inspect on each item.
 * @param {string} key - The key of the number property within the nested object to test.
 * @param {RangeOper | ValueOf<RangeOperEnum>} oper - The range operation to apply.
 * @param {number} min - The minimum number bound.
 * @param {number} max - The maximum number bound.
 * @returns {T[]} The filtered array of objects where the number property is within the range.
 *
 * Example: Filter users where user.profile.score is between 50 and 100:
 *   objectNumberRangeFilter(users, 'profile', 'score', RangeOperEnum.IN_RANGE, 50, 100)
 */
export function objectNumberRangeFilter<T, K extends keyof ByType<T, Object>>(
  collection: T[],
  field: K,
  key: string,
  oper: Parameters<NumberRangePredicate>[1],
  min: Parameters<NumberRangePredicate>[2],
  max: Parameters<NumberRangePredicate>[3]
): T[] {
  if (!Array.isArray(collection)) return [];
  return collection.filter((item) => {
    const obj = item[field] as Record<string, any>;
    return obj && numberRangePredicate(obj[key], oper, min, max);
  });
}
