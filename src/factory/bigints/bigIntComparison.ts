import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for bigint comparison using `PredicType.bigint.comparison`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.bigint.comparison>[1]} oper - The bigint comparison operation (e.g., 'equals', 'greaterThan', etc.).
 * @returns {<K extends keyof ByType<T, bigint>>(field: K, target: Parameters<typeof PredicType.bigint.comparison>[2]) => C}
 *   Returns a function that takes a field (of type bigint on T) and a target value, and applies the bigint comparison predicate to filter the context.
 *
 * @example
 * // Example: Composing a bigint comparison filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { bigIntComparisonFactory } from 'collectype';
 *
 * type Person = { name: string; balance: bigint };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   bigIntEquals = bigIntComparisonFactory<Person, this>(this, 'equals');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', balance: 1000n },
 *   { name: 'Bob', balance: 2000n }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.bigIntEquals('balance', 1000n);
 * // filtered contains the items where 'balance' equals 1000n
 *
 * @remarks
 * - Only fields of type bigint are supported.
 * - The operation and target must match the signature of PredicType.bigint.comparison.
 * - Returns a new filtered context; does not mutate the original.
 */
export function bigIntComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.bigint.comparison>[1],
) {
  return function <K extends keyof ByType<T, bigint>>(
    field: K,
    target: Parameters<typeof PredicType.bigint.comparison>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as bigint | undefined;
      if (typeof value !== 'bigint') return false;
      return PredicType.bigint.comparison(value, oper, target);
    });
  };
}
