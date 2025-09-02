import { EnumOrString } from '../../types';
import { ObjectPrototypeEnum } from '../../enums/objectOperation';

export type ObjectPrototypePredicate = (
  proto: object,
  obj: object,
  oper: EnumOrString<typeof ObjectPrototypeEnum>
) => boolean;

/**
 * Evaluates prototype-related operations on objects.
 *
 * @param proto - The prototype object to check against.
 * @param obj - The object to test.
 * @param oper - The operation to perform (from ObjectPrototypeEnum or its string value).
 * @returns {boolean} True if the operation is satisfied, otherwise throws an error.
 * @throws {Error} If an unknown operation is provided.
 */
export const objectPrototypePredicate: ObjectPrototypePredicate = (proto, obj, oper): boolean => {
  // Check if proto is prototype of obj
  if (oper === ObjectPrototypeEnum.IS_PROTOTYPE_OF || oper === 'isPrototypeOf') {
    return proto.isPrototypeOf(obj);
  }
  // Throw for unknown operation
  throw new Error(`Unknown object prototype operation: ${oper}`);
};
