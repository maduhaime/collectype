import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for bigint range using `PredicType.bigint.range`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.bigint.range>[1]} oper - The bigint range operation (e.g., 'between', 'notBetween', etc.).
 * @returns {<K extends keyof ByType<T, bigint>>(field: K, min: Parameters<typeof PredicType.bigint.range>[2], max: Parameters<typeof PredicType.bigint.range>[3]) => C}
 *   Returns a function that takes a field (of type bigint on T), a min and max value, and applies the bigint range predicate to filter the context.
 *
 * @example
 * // Example: Composing a bigint range filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { bigIntRangeFactory } from 'collectype';
 *
 * type Person = { name: string; balance: bigint };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   bigIntBetween = bigIntRangeFactory<Person, this>(this, 'between');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', balance: 1000n },
 *   { name: 'Bob', balance: 2000n }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.bigIntBetween('balance', 500n, 1500n);
 * // filtered contains the items where 'balance' is between 500n and 1500n
 *
 * @remarks
 * - Only fields of type bigint are supported.
 * - The operation, min, and max must match the signature of PredicType.bigint.range.
 * - Returns a new filtered context; does not mutate the original.
 */
export function bigIntRangeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.bigint.range>[1],
) {
  return function <K extends keyof ByType<T, bigint>>(
    field: K,
    min: Parameters<typeof PredicType.bigint.range>[2],
    max: Parameters<typeof PredicType.bigint.range>[3],
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as bigint | undefined;
      if (typeof value !== 'bigint') return false;
      return PredicType.bigint.range(value, oper, min, max);
    });
  };
}
