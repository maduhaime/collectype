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
  switch (oper) {
    case ArrayOperEnum.EQUALS: {
      return arr.length === targetArr.length && arr.every((v, i) => v === targetArr[i]);
    }
    case ArrayOperEnum.SET_EQUALS: {
      const setA = new Set(arr);
      const setB = new Set(targetArr);
      // Must have same unique elements and same array length (to avoid duplicates matching)
      return setA.size === setB.size && [...setA].every((v) => setB.has(v)) && arr.length === targetArr.length;
    }
    case ArrayOperEnum.IS_SUBSET_OF: {
      return arr.every((v) => targetArr.includes(v));
    }
    case ArrayOperEnum.IS_SUPERSET_OF: {
      // All elements of targetArr (including duplicates) must be present in arr
      const arrCopy = [...arr];
      for (const v of targetArr) {
        const idx = arrCopy.indexOf(v);
        if (idx === -1) return false;
        arrCopy.splice(idx, 1);
      }
      return true;
    }
    case ArrayOperEnum.STARTS_WITH: {
      return targetArr.every((v, i) => arr[i] === v);
    }
    case ArrayOperEnum.ENDS_WITH: {
      return targetArr.every((v, i) => arr[arr.length - targetArr.length + i] === v);
    }
    case ArrayOperEnum.CONTAINS_SUBSEQUENCE: {
      for (let i = 0; i <= arr.length - targetArr.length; i++) {
        if (targetArr.every((v, j) => arr[i + j] === v)) return true;
      }
      return false;
    }
    case ArrayOperEnum.INTERSECTS: {
      return arr.some((v) => targetArr.includes(v));
    }
    case ArrayOperEnum.DISJOINT: {
      return arr.every((v) => !targetArr.includes(v));
    }
  }
  throw new Error(`Unsupported array predicate operator: ${oper}`);
};
