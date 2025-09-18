import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string substring using `PredicType.string.substring`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The string substring operation to perform (see PredicType.string.substring).
 * @returns A function that takes a field key and a substring, and filters items where the string substring matches the operation.
 *
 * @example
 * // Example: Composing a string substring filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringSubstringFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   cityContains = stringSubstringFactory<Person, this>(this, 'contains');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'Lyon' },
 *   { name: 'Eve', city: 'Paris' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.cityContains('city', 'ar');
 * // filtered contains the items where 'city' contains 'ar'
 *
 * @remarks
 * - Uses `PredicType.string.substring` for string substring checks on string fields.
 * - Returns a filtered context with items matching the string substring.
 */
export function stringSubstringFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.substring>[1]
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.substring>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.substring(value, oper, target);
    });
  };
}
