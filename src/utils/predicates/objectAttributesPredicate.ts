import { EnumOrString } from '../../types/utility';
import { ObjectAttributesEnum } from '../../enums/objectOperation';

// Type definition for the object attributes predicate function
export type ObjectAttributesPredicate = (
  obj: Record<string, any>,
  oper: EnumOrString<typeof ObjectAttributesEnum>,
  key: string
) => boolean;

/**
 * Evaluates attribute operations on an object's property descriptor.
 *
 * @paramType {Record<string, any>} obj - The object to inspect.
 * @paramType {string} key - The property key to check.
 * @paramType {string} oper - The operation to perform (should be a string value matching ObjectAttributesEnum).
 * @returns {boolean} True if the operation is satisfied, otherwise throws an error.
 *
 * @example
 * const obj = { foo: 42 };
 * Object.defineProperty(obj, 'foo', { writable: false, enumerable: true, configurable: true });
 * objectAttributesPredicate(obj, 'isWritable', 'foo'); // false
 * objectAttributesPredicate(obj, 'isEnumerable', 'foo'); // true
 * objectAttributesPredicate(obj, 'isConfigurable', 'foo'); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unknown operation is provided.
 */
export const objectAttributesPredicate: ObjectAttributesPredicate = (obj, oper, key): boolean => {
  // Get the property descriptor for the given key
  const descriptor = Object.getOwnPropertyDescriptor(obj, key);

  // Condition: Check if property is writable
  if (oper === ObjectAttributesEnum.IS_WRITABLE) {
    // Returns true if the property is writable, false otherwise
    return descriptor?.writable ?? false;
  }

  // Condition: Check if property is enumerable
  if (oper === ObjectAttributesEnum.IS_ENUMERABLE) {
    // Returns true if the property is enumerable, false otherwise
    return obj.propertyIsEnumerable(key);
  }

  // Condition: Check if property is configurable
  if (oper === ObjectAttributesEnum.IS_CONFIGURABLE) {
    // Returns true if the property is configurable, false otherwise
    return descriptor?.configurable ?? false;
  }

  // Throw: Unsupported operation provided
  throw new Error(`Unsupported object attributes predicate operation: ${oper}`);
};
