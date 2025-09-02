import { EnumOrString } from '../../types';
import { ObjectInstanceEnum } from '../../enums/objectOperation';

export type ObjectInstancePredicate = (
  obj: any,
  constructor: Function,
  oper: EnumOrString<typeof ObjectInstanceEnum>
) => boolean;

/**
 * Evaluates instance-related operations on objects and constructors.
 *
 * @param obj - The object to test.
 * @param constructor - The constructor function to check against.
 * @param oper - The operation to perform (from ObjectInstanceEnum or its string value).
 * @returns {boolean} True if the operation is satisfied, otherwise throws an error.
 * @throws {Error} If an unknown operation is provided.
 */
export const objectInstancePredicate: ObjectInstancePredicate = (obj, constructor, oper): boolean => {
  // Check if obj is an instance of constructor
  if (oper === ObjectInstanceEnum.IS_INSTANCE_OF) {
    return obj instanceof (constructor as any);
  }
  // Check if obj is a constructor (can be instantiated)
  if (oper === ObjectInstanceEnum.IS_CONSTRUCTOR) {
    try {
      new (obj as any)();
      return true;
    } catch {
      return false;
    }
  }
  // Throw for unknown operation
  throw new Error(`Unsupported object instance predicate operation: ${oper}`);
};
