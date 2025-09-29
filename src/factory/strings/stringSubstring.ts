import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string substring using `PredicType.string.substring`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.string.substring>[1]} oper - The string substring operation to perform (see PredicType.string.substring).
 * @returns {<K extends keyof ByType<T, string>>(field: K, target: Parameters<typeof PredicType.string.substring>[2]) => C}
 *   Returns a function that takes a field (of type string on T) and a substring, and applies the string substring predicate to filter the context.
 *
 * @example
 * // Example: Composing a string substring filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringSubstringFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringContains = stringSubstringFactory<Person, this>(this, 'contains');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'Lyon' },
 *   { name: 'Eve', city: 'Paris' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.stringContains('city', 'ar');
 * // filtered contains the items where 'city' contains 'ar'
 *
 * @remarks
 * - Uses `PredicType.string.substring` for string substring checks on string fields.
 * - Returns a filtered context with items matching the string substring.
 */
export function stringSubstringFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.substring>[1],
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.substring>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.substring(value, oper, target);
    });
  };
}
