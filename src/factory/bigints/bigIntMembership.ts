import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for bigint membership using `PredicType.bigint.membership`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.bigint.membership>[1]} oper - The bigint membership operation (e.g., 'in', 'notIn', etc.).
 * @returns {<K extends keyof ByType<T, bigint>>(field: K, target: Parameters<typeof PredicType.bigint.membership>[2]) => C}
 *   Returns a function that takes a field (of type bigint on T) and a target value, and applies the bigint membership predicate to filter the context.
 *
 * @example
 * // Example: Composing a bigint membership filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { bigIntMembershipFactory } from 'collectype';
 *
 * type Person = { name: string; balance: bigint };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   bigIntIn = bigIntMembershipFactory<Person, this>(this, 'in');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', balance: 1000n },
 *   { name: 'Bob', balance: 2000n },
 *   { name: 'Charlie', balance: 3000n }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.bigIntIn('balance', [1000n, 3000n]);
 * // filtered contains the items where 'balance' is in [1000n, 3000n]
 *
 * @remarks
 * - Only fields of type bigint are supported.
 * - The operation and target must match the signature of PredicType.bigint.membership.
 * - Returns a new filtered context; does not mutate the original.
 */
export function bigIntMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.bigint.membership>[1],
) {
  return function <K extends keyof ByType<T, bigint>>(
    field: K,
    target: Parameters<typeof PredicType.bigint.membership>[2],
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as bigint | undefined;
      if (typeof value !== 'bigint') return false;
      return PredicType.bigint.membership(value, oper, target);
    });
  };
}
