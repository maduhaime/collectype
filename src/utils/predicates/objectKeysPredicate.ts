import { EnumOrString } from '../../types/utility';
import { ObjectKeysEnum } from '../../enums/objectOperation';

export type ObjectKeysPredicate = (
  target: Record<string, any> | any[],
  keys: string[] | string,
  oper: EnumOrString<typeof ObjectKeysEnum>
) => boolean;

/**
 * Evaluates key/property operations on objects and arrays.
 *
 * @param target - The object or array to inspect.
 * @param keys - The key or keys to check (string or array of strings).
 * @param oper - The operation to perform (from ObjectKeysEnum or its string value).
 * @returns {boolean} True if the operation is satisfied, otherwise throws an error.
 * @throws {Error} If an unknown operation is provided.
 * @example
 * objectKeysPredicate([1,2,3], '0', ObjectKeysEnum.HAS_KEY) // true
 * objectKeysPredicate({a:1}, ['a','b'], ObjectKeysEnum.HAS_ANY_KEY) // true
 */
export const objectKeysPredicate: ObjectKeysPredicate = (target, keys, oper): boolean => {
  /**
   * Design choice: empty objects/arrays are not considered 'usable' for inclusion/exclusion logic.
   * They are ignored and always return false for HAS_KEY/HAS_ANY_KEY/HAS_ALL_KEYS/HAS_EXACT_KEYS/HAS_NO_KEYS.
   */
  const allKeys = Object.keys(target);
  if (allKeys.length === 0) {
    if (
      oper === ObjectKeysEnum.HAS_KEY ||
      oper === ObjectKeysEnum.HAS_ANY_KEY ||
      oper === ObjectKeysEnum.HAS_ALL_KEYS ||
      oper === ObjectKeysEnum.HAS_EXACT_KEYS ||
      oper === ObjectKeysEnum.HAS_NO_KEYS
    ) {
      return false;
    }
  }
  if (oper === ObjectKeysEnum.HAS_ANY_PROPERTY) {
    return allKeys.length > 0;
  }
  if (oper === ObjectKeysEnum.HAS_KEY) {
    return typeof keys === 'string' ? allKeys.includes(keys) : false;
  }
  if (oper === ObjectKeysEnum.HAS_ALL_KEYS) {
    return Array.isArray(keys) && keys.every((k) => allKeys.includes(k));
  }
  if (oper === ObjectKeysEnum.HAS_ANY_KEY) {
    return Array.isArray(keys) && keys.some((k) => allKeys.includes(k));
  }
  if (oper === ObjectKeysEnum.HAS_EXACT_KEYS) {
    if (!Array.isArray(keys)) return false;
    const sortedObjKeys = [...allKeys].sort();
    const sortedTargetKeys = [...keys].sort();
    return sortedObjKeys.length === sortedTargetKeys.length && sortedObjKeys.every((k, i) => k === sortedTargetKeys[i]);
  }
  if (oper === ObjectKeysEnum.HAS_NO_KEYS) {
    return Array.isArray(keys) && keys.every((k) => !allKeys.includes(k));
  }
  throw new Error(`Unsupported object keys predicate operation: ${oper}`);
};
