import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string membership using `PredicType.string.membership`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.string.membership>[1]} oper - The string membership operation to perform (see PredicType.string.membership).
 * @returns {<K extends keyof ByType<T, string>>(field: K, target: Parameters<typeof PredicType.string.membership>[2]) => C}
 *   Returns a function that takes a field (of type string on T) and a target array, and applies the string membership predicate to filter the context.
 *
 * @example
 * // Example: Composing a string membership filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringMembershipFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringIn = stringMembershipFactory<Person, this>(this, 'in');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'Lyon' },
 *   { name: 'Eve', city: 'Paris' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.stringIn('city', ['Paris', 'Lyon']);
 * // filtered contains the items where 'city' is in ['Paris', 'Lyon']
 *
 * @remarks
 * - Uses `PredicType.string.membership` for string membership on string fields.
 * - Returns a filtered context with items matching the string membership.
 */
export function stringMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.membership>[1],
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.membership>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.membership(value, oper, target);
    });
  };
}
