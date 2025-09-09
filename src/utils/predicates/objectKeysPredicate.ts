import { EnumOrString } from '../../types/utility';
import { ObjectKeysEnum } from '../../enums/objectOperation';

// Type definition for the object target predicate function
export type ObjectKeysPredicate = (
  obj: Record<string, any> | any[],
  oper: EnumOrString<typeof ObjectKeysEnum>,
  target: string[] | string
) => boolean;

/**
 * Evaluates key/property operations on objects and arrays.
 *
 * @template {Record<string, any> | any[]} obj - The object or array to inspect.
 * @template {string} oper - The operation to perform (should be a string value matching ObjectKeysEnum).
 * @template {string[] | string} target - The key or target to check (string or array of strings).
 * @returns {boolean} True if the operation is satisfied, otherwise throws an error.
 *
 * @example
 * const obj = { foo: 42, bar: 7 };
 * objectKeysPredicate(obj, 'hasKey', 'foo'); // true
 * objectKeysPredicate(obj, 'hasAnyKey', ['foo', 'baz']); // true
 * objectKeysPredicate(obj, 'hasAllKeys', ['foo', 'bar']); // true
 * objectKeysPredicate(obj, 'hasExactKeys', ['foo', 'bar']); // true
 * objectKeysPredicate(obj, 'hasNoKeys', ['baz']); // true
 * objectKeysPredicate({}, 'hasAnyProperty', []); // false
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unknown operation is provided.
 */
export const objectKeysPredicate: ObjectKeysPredicate = (obj, oper, target): boolean => {
  // Design choice: empty objects/arrays are not considered 'usable' for inclusion/exclusion logic.
  // They are ignored and always return false for HAS_KEY/HAS_ANY_KEY/HAS_ALL_KEYS/HAS_EXACT_KEYS/HAS_NO_KEYS.
  const allKeys = Object.keys(obj);
  if (allKeys.length === 0) {
    if (
      oper === ObjectKeysEnum.HAS_KEY ||
      oper === ObjectKeysEnum.HAS_ANY_KEY ||
      oper === ObjectKeysEnum.HAS_ALL_KEYS ||
      oper === ObjectKeysEnum.HAS_EXACT_KEYS ||
      oper === ObjectKeysEnum.HAS_NO_KEYS
    ) {
      // Condition: Target is empty, always return false for these operations
      return false;
    }
  }

  // Condition: Check if target has a specific key
  if (oper === ObjectKeysEnum.HAS_KEY) {
    return typeof target === 'string' ? allKeys.includes(target) : false;
  }
  // Condition: Check if target has all specified target
  if (oper === ObjectKeysEnum.HAS_ALL_KEYS) {
    return Array.isArray(target) && target.every((k) => allKeys.includes(k));
  }
  // Condition: Check if target has any of the specified target
  if (oper === ObjectKeysEnum.HAS_ANY_KEY) {
    return Array.isArray(target) && target.some((k) => allKeys.includes(k));
  }
  // Condition: Check if target has exactly the specified target
  if (oper === ObjectKeysEnum.HAS_EXACT_KEYS) {
    if (!Array.isArray(target)) return false;
    const sortedObjKeys = [...allKeys].sort();
    const sortedTargetKeys = [...target].sort();
    return sortedObjKeys.length === sortedTargetKeys.length && sortedObjKeys.every((k, i) => k === sortedTargetKeys[i]);
  }
  // Condition: Check if target has none of the specified target
  if (oper === ObjectKeysEnum.HAS_NO_KEYS) {
    return Array.isArray(target) && target.every((k) => !allKeys.includes(k));
  }
  // Throw: Unsupported operation provided
  throw new Error(`Unsupported object keys predicate operation: ${oper}`);
};
