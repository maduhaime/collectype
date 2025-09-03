import { StringSizeOperEnum } from '../../enums/stringOperation';

/**
 * Predicate for string size operations (length comparisons).
 *
 * @param str - The string to check.
 * @param oper - The operation to perform (length comparisons).
 * @param num - The number to compare the string length to.
 * @returns {boolean} True if the string matches the size condition, false otherwise.
 *
 * @example
 * stringSizePredicate('abc', StringSizeOperEnum.LENGTH_EQUALS, 3); // true
 * stringSizePredicate('abc', StringSizeOperEnum.LENGTH_GREATER_THAN, 2); // true
 * stringSizePredicate('abc', StringSizeOperEnum.LENGTH_LESS_THAN, 5); // true
 */
export function stringSizePredicate(str: string, oper: StringSizeOperEnum, num: number): boolean {
  // If the operation is LENGTH_EQUALS, check equality
  if (oper === StringSizeOperEnum.LENGTH_EQUALS) {
    return str.length === num;
  }
  // If the operation is LENGTH_GREATER_THAN, check greater than
  if (oper === StringSizeOperEnum.LENGTH_GREATER_THAN) {
    return str.length > num;
  }
  // If the operation is LENGTH_GREATER_THAN_OR_EQUALS, check greater than or equal
  if (oper === StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS) {
    return str.length >= num;
  }
  // If the operation is LENGTH_LESS_THAN, check less than
  if (oper === StringSizeOperEnum.LENGTH_LESS_THAN) {
    return str.length < num;
  }
  // If the operation is LENGTH_LESS_THAN_OR_EQUALS, check less than or equal
  if (oper === StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS) {
    return str.length <= num;
  }
  // If the operation is unsupported, throw an error
  throw new Error(`Unsupported string size predicate operation: ${oper}`);
}
