import { arrayPredicate, ArrayPredicate } from '../predicates/arrayPredicate';
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
 * @param {ArrayOper | ValueOf<ArrayOperEnum>} oper - The array operation to perform.
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
  oper: Parameters<ArrayPredicate>[1],
  target: Parameters<ArrayPredicate>[2]
): T[] {
  return collection.filter((item: T) => {
    const arr = item[field] as any[] | undefined;
    if (!Array.isArray(arr)) return false;

    // Convert oper to string for comparison (ValueOf<ArrayOperEnum> is string)
    const opStr = String(oper);
    const everyEquals = String(ArrayOperEnum.EVERY_EQUALS);
    const isSubsetOf = String(ArrayOperEnum.IS_SUBSET_OF);
    const isSupersetOf = String(ArrayOperEnum.IS_SUPERSET_OF);
    const setEquals = String(ArrayOperEnum.SET_EQUALS);

    if ([everyEquals, isSubsetOf, isSupersetOf].includes(opStr) && arr.length === 0) {
      return false;
    }
    if (opStr === setEquals && arr.length === 0) {
      if (!Array.isArray(target) || target.length !== 0) return false;
    }
    return arrayPredicate(arr, oper, target);
  });
}
