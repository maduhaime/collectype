import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for bigint state using `PredicType.bigint.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.bigint.state>[1]} oper - The bigint state operation (e.g., 'isZero', 'isPositive', etc.).
 * @returns {<K extends keyof ByType<T, bigint>>(field: K) => C}
 *   Returns a function that takes a field (of type bigint on T) and applies the bigint state predicate to filter the context.
 *
 * @example
 * // Example: Composing a bigint state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { bigIntStateFactory } from 'collectype';
 *
 * type Person = { name: string; balance: bigint };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   bigIntIsZero = bigIntStateFactory<Person, this>(this, 'isZero');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', balance: 0n },
 *   { name: 'Bob', balance: 2000n }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.bigIntIsZero('balance');
 * // filtered contains the items where 'balance' is 0n
 *
 * @remarks
 * - Only fields of type bigint are supported.
 * - The operation must match the signature of PredicType.bigint.state.
 * - Returns a new filtered context; does not mutate the original.
 */
export function bigIntStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.bigint.state>[1],
) {
  return function <K extends keyof ByType<T, bigint>>(field: K): C {
    return ctx.where((item: T) => {
      const value = item[field] as bigint | undefined;
      if (typeof value !== 'bigint') return false;
      return PredicType.bigint.state(value, oper);
    });
  };
}
