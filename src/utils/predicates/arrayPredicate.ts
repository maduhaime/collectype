import { ArrayOper } from '../../types/arrayOperation';
import { ArrayOperEnum } from '../../enums/arrayOperation';
import { ValueOf } from '../../types/utility';

// Type for array predicate function
export type ArrayPredicate = <T>(arr: T[], oper: ArrayOper | ValueOf<ArrayOperEnum>, target?: T | T[]) => boolean;

/**
 * Evaluates an operation on an array according to the provided operator.
 * Supports inclusion, equality, subset, sequence, and other array operations.
 * @template T
 * @param {T[]} arr - The array to test
 * @param {ValueOf<ArrayOperEnum>} oper - The operation to perform (see ArrayOperEnum)
 * @param {T|T[]} [target] - The value or array to compare, depending on the operation
 * @returns {boolean} Result of the operation
 */
export const arrayPredicate: ArrayPredicate = <T>(arr: T[], oper: ValueOf<ArrayOperEnum>, target?: T | T[]) => {
  const value = target as T;

  if (oper === ArrayOperEnum.INCLUDES) return arr.includes(value);
  if (oper === ArrayOperEnum.EXCLUDES) return !arr.includes(value);
  if (oper === ArrayOperEnum.SOME_EQUALS) return arr.some((v) => v === value);
  if (oper === ArrayOperEnum.EVERY_EQUALS) return arr.every((v) => v === value);

  const targetArr = target as T[];

  // Check if arrays are strictly equal
  if (oper === ArrayOperEnum.EQUALS) return arr.length === targetArr.length && arr.every((v, i) => v === targetArr[i]);

  // Check if arrays are set-equal (same unique elements, same length)
  if (oper === ArrayOperEnum.SET_EQUALS) {
    const setA = new Set(arr);
    const setB = new Set(targetArr);
    return setA.size === setB.size && [...setA].every((v) => setB.has(v)) && arr.length === targetArr.length;
  }

  // Check if arr is a subset of targetArr
  if (oper === ArrayOperEnum.IS_SUBSET_OF) return arr.every((v) => targetArr.includes(v));

  // Check if arr is a superset of targetArr (all elements of targetArr in arr, including duplicates)
  if (oper === ArrayOperEnum.IS_SUPERSET_OF) {
    const arrCopy = [...arr];
    for (const v of targetArr) {
      const idx = arrCopy.indexOf(v);
      if (idx === -1) return false;
      arrCopy.splice(idx, 1);
    }
    return true;
  }

  // Check if arr starts with targetArr
  if (oper === ArrayOperEnum.STARTS_WITH) return targetArr.every((v, i) => arr[i] === v);

  // Check if arr ends with targetArr
  if (oper === ArrayOperEnum.ENDS_WITH) return targetArr.every((v, i) => arr[arr.length - targetArr.length + i] === v);

  // Check if arr contains targetArr as a contiguous subsequence
  if (oper === ArrayOperEnum.CONTAINS_SUBSEQUENCE) {
    for (let i = 0; i <= arr.length - targetArr.length; i++) {
      if (targetArr.every((v, j) => arr[i + j] === v)) return true;
    }
    return false;
  }

  // Check if arr and targetArr have any elements in common
  if (oper === ArrayOperEnum.INTERSECTS) return arr.some((v) => targetArr.includes(v));

  // Check if arr and targetArr are disjoint
  if (oper === ArrayOperEnum.DISJOINT) return arr.every((v) => !targetArr.includes(v));

  // Unsupported operator
  throw new Error(`Unsupported array predicate operator: ${oper}`);
};
