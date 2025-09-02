import { EnumOrString } from '../../types/utility';
import { ObjectAttributeEnum } from '../../enums/objectOperation';

export type ObjectAttributesPredicate = (
  obj: Record<string, any>,
  key: string,
  oper: EnumOrString<typeof ObjectAttributeEnum>
) => boolean;

/**
 * Evaluates attribute operations on an object's property descriptor.
 *
 * @param obj - The object to inspect.
 * @param key - The property key to check.
 * @param oper - The operation to perform (from ObjectAttributeEnum or its string value).
 * @returns {boolean} True if the operation is satisfied, otherwise throws an error.
 * @throws {Error} If an unknown operation is provided.
 */
export const objectAttributesPredicate: ObjectAttributesPredicate = (obj, key, oper): boolean => {
  const descriptor = Object.getOwnPropertyDescriptor(obj, key);
  // Check if property is writable
  if (oper === ObjectAttributeEnum.IS_WRITABLE) {
    return descriptor?.writable ?? false;
  }
  // Check if property is enumerable
  if (oper === ObjectAttributeEnum.IS_ENUMERABLE) {
    return obj.propertyIsEnumerable(key);
  }
  // Check if property is configurable
  if (oper === ObjectAttributeEnum.IS_CONFIGURABLE) {
    return descriptor?.configurable ?? false;
  }
  // Throw for unknown operation
  throw new Error(`Unsupported object attributes predicate operation: ${oper}`);
};
