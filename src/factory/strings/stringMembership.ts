import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string membership using `PredicType.string.membership`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The string membership operation to perform (see PredicType.string.membership).
 * @returns A function that takes a field key and a target array, and filters items where the string membership matches the operation.
 *
 * @example
 * // Example: Composing a string membership filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringMembershipFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   cityIn = stringMembershipFactory<Person, this>(this, 'in');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'Lyon' },
 *   { name: 'Eve', city: 'Paris' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.cityIn('city', ['Paris', 'Lyon']);
 * // filtered contains the items where 'city' is in ['Paris', 'Lyon']
 *
 * @remarks
 * - Uses `PredicType.string.membership` for string membership on string fields.
 * - Returns a filtered context with items matching the string membership.
 */
export function stringMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.membership>[1]
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.membership>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.membership(value, oper, target);
    });
  };
}
