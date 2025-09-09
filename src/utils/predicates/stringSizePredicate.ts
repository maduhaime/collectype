import { StringSizeOperEnum } from '../../enums/stringOperation';

// Type definition for the string size predicate function
export type StringSizePredicate = (str: string, oper: StringSizeOperEnum, num: number) => boolean;

/**
 * Predicate for string size operations (length comparisons).
 *
 * @template {string} str - The string to check.
 * @template {string} oper - The operation to perform (should be a string value matching StringSizeOperEnum).
 * @template {number} target - The number to compare the string length to.
 * @returns {boolean} True if the string matches the size condition, false otherwise.
 *
 * @example
 * class DummyClass {
 *   constructor() {
 *     this.value = 'abc';
 *   }
 * }
 * const dummyInstance = new DummyClass();
 * stringSizePredicate(dummyInstance.value, 'lengthEquals', 3); // true
 * stringSizePredicate(dummyInstance.value, 'lengthGreaterThan', 2); // true
 * stringSizePredicate(dummyInstance.value, 'lengthLessThan', 5); // true
 *
 * All condition blocks and throws are commented for clarity.
 *
 * @throws {Error} If the operation is unsupported.
 */
export const stringSizePredicate: StringSizePredicate = (str, oper, target) => {
  // If the operation is LENGTH_EQUALS, check equality
  if (oper === StringSizeOperEnum.LENGTH_EQUALS) {
    return str.length === target;
  }
  // If the operation is LENGTH_GREATER_THAN, check greater than
  if (oper === StringSizeOperEnum.LENGTH_GREATER_THAN) {
    return str.length > target;
  }
  // If the operation is LENGTH_GREATER_THAN_OR_EQUALS, check greater than or equal
  if (oper === StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS) {
    return str.length >= target;
  }
  // If the operation is LENGTH_LESS_THAN, check less than
  if (oper === StringSizeOperEnum.LENGTH_LESS_THAN) {
    return str.length < target;
  }
  // If the operation is LENGTH_LESS_THAN_OR_EQUALS, check less than or equal
  if (oper === StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS) {
    return str.length <= target;
  }
  // If the operation is unsupported, throw an error
  throw new Error(`Unsupported string size predicate operation: ${oper}`);
};
