import { arrayPredicate } from '../predicates/arrayPredicate';
import { ArrayOperEnum } from '../../enums/arrayOperation';
import { ByType } from '../../types/utility';

/**
 * Generic filter for array fields, supporting all array operations (see ArrayOperEnum).
 * This function replaces all previous array*Filter functions.
 *
 * @template T - The type of objects in the collection.
 * @template K - The key of the array field to filter by.
 * @param {T[]} collection - The array of objects to filter.
 * @param {K} field - The key of the array field to filter on.
 * @param {ArrayOperEnum} oper - The array operation to perform.
 * @param {any|any[]} target - The value or array to compare, depending on the operation.
 * @returns {T[]} The filtered array of objects.
 *
 * Notes:
 * - For some operations (e.g. EVERY_EQUALS, IS_SUBSET_OF, IS_SUPERSET_OF), empty arrays are excluded by default for consistency with previous behavior.
 * - For SET_EQUALS, empty arrays are only included if the target is also empty.
 * - The caller is responsible for passing the correct target type for each operation.
 */
export function arrayFilter<T, K extends keyof ByType<T, any[]>>(
  collection: T[],
  field: K,
  oper: ArrayOperEnum,
  target: any | any[]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    if (!Array.isArray(arr)) return false;

    // Exclude empty arrays for certain operations (to match legacy behavior)
    if (
      [ArrayOperEnum.EVERY_EQUALS, ArrayOperEnum.IS_SUBSET_OF, ArrayOperEnum.IS_SUPERSET_OF].includes(oper) &&
      arr.length === 0
    ) {
      return false;
    }

    // For SET_EQUALS, only include empty arrays if target is also empty
    if (oper === ArrayOperEnum.SET_EQUALS && arr.length === 0) {
      if (!Array.isArray(target) || target.length !== 0) return false;
    }

    return arrayPredicate(arr, oper, target);
  });
}
