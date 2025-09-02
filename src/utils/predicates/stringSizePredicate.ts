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
  switch (oper) {
    case StringSizeOperEnum.LENGTH_EQUALS:
      return str.length === num;
    case StringSizeOperEnum.LENGTH_GREATER_THAN:
      return str.length > num;
    case StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS:
      return str.length >= num;
    case StringSizeOperEnum.LENGTH_LESS_THAN:
      return str.length < num;
    case StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS:
      return str.length <= num;
    default:
      throw new Error(`Unsupported string size predicate operation: ${oper}`);
  }
}
