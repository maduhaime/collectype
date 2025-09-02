import { ObjectOperEnum } from '../../enums/objectOperation';
import { EnumOrString } from '../../types';

// Type for object predicate function
export type ObjectPredicate = (
  obj: Record<string, any>,
  oper: EnumOrString<typeof ObjectOperEnum>,
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
  // Check if object has a specific key
  if (oper === ObjectOperEnum.HAS_KEY) return Object.prototype.hasOwnProperty.call(obj, target as string);

  const keys = target as string[];

  // Check if object has any of the specified keys
  if (oper === ObjectOperEnum.HAS_ANY_KEY) return keys.some((k) => Object.prototype.hasOwnProperty.call(obj, k));

  // Check if object has all of the specified keys
  if (oper === ObjectOperEnum.HAS_ALL_KEYS) return keys.every((k) => Object.prototype.hasOwnProperty.call(obj, k));

  // Check if object has exactly the specified keys
  if (oper === ObjectOperEnum.HAS_EXACT_KEYS) {
    const objKeys = Object.keys(obj).sort();
    const targetKeys = [...keys].sort();
    return objKeys.length === targetKeys.length && objKeys.every((k, i) => k === targetKeys[i]);
  }

  // Check if object has none of the specified keys
  if (oper === ObjectOperEnum.HAS_NO_KEYS) return keys.every((k) => !Object.prototype.hasOwnProperty.call(obj, k));

  // Unsupported operator
  throw new Error(`Unknown object keys operation: ${oper}`);
};
