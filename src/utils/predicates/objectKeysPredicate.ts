import { EnumOrString } from '../../types/utility';
import { ObjectKeyEnum } from '../../enums/objectOperation';

export type ObjectKeysPredicate = (
  obj: Record<string, any>,
  keys: string[] | string,
  oper: EnumOrString<typeof ObjectKeyEnum>
) => boolean;

/**
 * Evaluates key-related operations on an object.
 *
 * @param obj - The object to inspect.
 * @param keys - The key or keys to check (string or array of strings).
 * @param oper - The operation to perform (from ObjectKeyEnum or its string value).
 * @returns {boolean} True if the operation is satisfied, otherwise throws an error.
 * @throws {Error} If an unknown operation is provided.
 */
export const objectKeysPredicate: ObjectKeysPredicate = (obj, keys, oper): boolean => {
  // Check if object has any property
  if (oper === ObjectKeyEnum.HAS_ANY_PROPERTY) {
    return Object.keys(obj).length > 0;
  }
  // Check if object has a specific key
  if (oper === ObjectKeyEnum.HAS_KEY) {
    return typeof keys === 'string' ? Object.prototype.hasOwnProperty.call(obj, keys) : false;
  }
  // Check if object has all specified keys
  if (oper === ObjectKeyEnum.HAS_ALL_KEYS) {
    return Array.isArray(keys) && keys.every((k) => k in obj);
  }
  // Check if object has any of the specified keys
  if (oper === ObjectKeyEnum.HAS_ANY_KEY || oper === 'hasAnyKey') {
    return Array.isArray(keys) && keys.some((k) => k in obj);
  }
  // Throw for unknown operation
  throw new Error(`Unsupported object keys predicate operation: ${oper}`);
};
