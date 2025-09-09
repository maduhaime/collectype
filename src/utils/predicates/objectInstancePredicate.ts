import { EnumOrString } from '../../types';
import { ObjectInstanceEnum } from '../../enums/objectOperation';

// Type definition for the object instance predicate function
export type ObjectInstancePredicate = (
  obj: any,
  oper: EnumOrString<typeof ObjectInstanceEnum>,
  target: Function
) => boolean;

/**
 * Evaluates instance-related operations on objects and targets.
 *
 * @template {any} obj - The object to test.
 * @template {string} oper - The operation to perform (should be a string value matching ObjectInstanceEnum).
 * @template {Function} target - The constructor function to check against.
 * @returns {boolean} True if the operation is satisfied, otherwise throws an error.
 *
 * @example
 * class DummyClass {}
 * const dummyInstance = new DummyClass();
 * objectInstancePredicate(dummyInstance, 'isInstanceOf', DummyClass); // true
 * objectInstancePredicate(DummyClass, 'isConstructor', DummyClass); // true
 * objectInstancePredicate({}, 'isInstanceOf', DummyClass); // false
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If an unknown operation is provided.
 */
export const objectInstancePredicate: ObjectInstancePredicate = (obj, oper, target): boolean => {
  // Condition: Check if obj is an instance of target
  if (oper === ObjectInstanceEnum.IS_INSTANCE_OF) {
    // Returns true if obj is an instance of target, false otherwise
    return obj instanceof (target as any);
  }

  // Condition: Check if obj is a target (can be instantiated)
  if (oper === ObjectInstanceEnum.IS_CONSTRUCTOR) {
    // Returns true if obj can be instantiated, false otherwise
    try {
      new (obj as any)();
      return true;
    } catch {
      return false;
    }
  }

  // Throw: Unsupported operation provided
  throw new Error(`Unsupported object instance predicate operation: ${oper}`);
};
