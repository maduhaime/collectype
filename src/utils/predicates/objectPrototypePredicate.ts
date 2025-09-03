import { EnumOrString } from '../../types';
import { ObjectPrototypeEnum } from '../../enums/objectOperation';

// Type definition for the object prototype predicate function
export type ObjectPrototypePredicate = (
  obj: object,
  oper: EnumOrString<typeof ObjectPrototypeEnum>,
  target: object
) => boolean;

/**
 * Evaluates prototype-related operations on objects.
 *
 * @paramType {object} obj - The prototype object to check against.
 * @paramType {string} oper - The operation to perform (should be a string value matching ObjectPrototypeEnum).
 * @paramType {object} target - The object to test.
 * @returns {boolean} True if the operation is satisfied, otherwise throws an error.
 *
 * @example
 * class DummyClass {}
 * const dummyInstance = new DummyClass();
 * objectPrototypePredicate(dummyInstance, 'isPrototypeOf', DummyClass.prototype); // true
 * objectPrototypePredicate(dummyInstance, 'isPrototypeOf', {}); // false
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unknown operation is provided.
 */
export const objectPrototypePredicate: ObjectPrototypePredicate = (obj, oper, target): boolean => {
  // Condition: Check if obj is prototype of target
  if (oper === ObjectPrototypeEnum.IS_PROTOTYPE_OF) {
    // Returns true if obj is prototype of target, false otherwise
    return obj.isPrototypeOf(target);
  }

  // Throw: Unsupported operation provided
  throw new Error(`Unsupported object prototype predicate operation: ${oper}`);
};
