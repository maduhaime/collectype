import { ObjectOperEnum } from '../../enums/objectOperation';
import { ObjectOper } from '../../types/objectOperation';
import { ValueOf } from '../../types/utility';

// Type for object predicate function
export type ObjectPredicate = (
  obj: Record<string, any>,
  oper: ObjectOper | ValueOf<ObjectOperEnum>,
  target: string | string[]
) => boolean;

/**
 * Evaluates generic object operations (e.g. key presence, value inclusion, etc.).
 * @param obj - The object to check.
 * @param oper - The object operation to perform (from ObjectOperEnum).
 * @param target - The value or values to check, depending on the operation.
 * @returns {boolean} Result of the operation.
 * @throws Error if an unsupported operator is provided.
 */
export const objectPredicate: ObjectPredicate = (obj, oper, target) => {
  if (oper === ObjectOperEnum.HAS_KEY) {
    const key = target as string;
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  const keys = target as string[];
  switch (oper) {
    case ObjectOperEnum.HAS_ANY_KEY:
      return keys.some((k) => Object.prototype.hasOwnProperty.call(obj, k));
    case ObjectOperEnum.HAS_ALL_KEYS:
      return keys.every((k) => Object.prototype.hasOwnProperty.call(obj, k));
    case ObjectOperEnum.HAS_EXACT_KEYS:
      const objKeys = Object.keys(obj).sort();
      const targetKeys = [...keys].sort();
      return objKeys.length === targetKeys.length && objKeys.every((k, i) => k === targetKeys[i]);
    case ObjectOperEnum.HAS_NO_KEYS:
      return keys.every((k) => !Object.prototype.hasOwnProperty.call(obj, k));
    default:
      throw new Error(`Unknown object keys operation: ${oper}`);
  }
};
