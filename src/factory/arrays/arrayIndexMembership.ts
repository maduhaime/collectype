import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for creating array index membership predicates for use with a Wherable context.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.array.indexMembership>[1]} oper - The array index membership operation (e.g., 'in', 'notIn', etc.).
 * @returns {<K extends keyof ByType<T, any[]>>(field: K, index: Parameters<typeof PredicType.array.indexMembership>[2], target: Parameters<typeof PredicType.array.indexMembership>[3]) => C}
 *   Returns a function that takes a field (of type array on T), an index, and a target value, and applies the array index membership predicate to filter the context.
 *
 * @example
 * // Example: Composing an array index membership filter as a property, following README Example 5
 * import { BaseFunctions } from 'collectype';
 * import { arrayIndexMembershipFactory } from 'collectype';
 *
 * type Person = { name: string; scores: number[] };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arrayIndexIn = arrayIndexMembershipFactory<Person, this>(this, 'in');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', scores: [10, 20, 30] },
 *   { name: 'Bob', scores: [30, 40] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.arrayIndexIn('scores', 1, 20);
 * // filtered contient les éléments dont scores[1] contient 20
 *
 * @remarks
 * - Only fields of type array are supported.
 * - The operation, index, and target must match the signature of PredicType.array.indexMembership.
 * - Returns a new filtered context; does not mutate the original.
 */
export function arrayIndexMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.indexMembership>[1],
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<typeof PredicType.array.indexMembership>[2],
    target: Parameters<typeof PredicType.array.indexMembership>[3],
  ) {
    return ctx.where((item: T) => {
      const array = item[field] as any[] | undefined;
      if (!array) return false;
      return PredicType.array.indexMembership(array, oper, index, target);
    });
  };
}
