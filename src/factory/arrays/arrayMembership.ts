import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for array membership using `PredicType.array.membership`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.array.membership>[1]} oper - The array membership operation (e.g., 'in', 'notIn', etc.).
 * @returns {<K extends keyof ByType<T, any[]>>(field: K, target: Parameters<typeof PredicType.array.membership>[2]) => C}
 *   Returns a function that takes a field (of type array on T) and a target value, and applies the array membership predicate to filter the context.
 *
 * @example
 * // Example: Composing an array membership filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { arrayMembershipFactory } from 'collectype';
 *
 * type Person = { name: string; groups: string[] };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arrayIn = arrayMembershipFactory<Person, this>(this, 'in');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', groups: ['admin', 'user'] },
 *   { name: 'Bob', groups: ['user'] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.arrayIn('groups', 'admin');
 * // filtered contains the items where 'groups' contains 'admin'
 *
 * @remarks
 * - Only fields of type array are supported.
 * - The operation and target must match the signature of PredicType.array.membership.
 * - Returns a new filtered context; does not mutate the original.
 */
export function arrayMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.membership>[1],
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    target: Parameters<typeof PredicType.array.membership>[2],
  ): C {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.membership(arr, oper, target);
    });
  };
}
