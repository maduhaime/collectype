import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for array comparison using `PredicType.array.comparison`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.array.comparison>[1]} oper - The array comparison operation (e.g., 'includes', 'some', 'every', etc.).
 * @returns {<K extends keyof ByType<T, any[]>>(field: K, target: Parameters<typeof PredicType.array.comparison>[2]) => C}
 *   Returns a function that takes a field (of type array on T) and a target value, and applies the array comparison predicate to filter the context.
 *
 * @example
 * // Example: Composing an array comparison filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { arrayComparisonFactory } from 'collectype';
 *
 * type Person = { name: string; ids: number[] };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arrayIncludes = arrayComparisonFactory<Person, this>(this, 'includes');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', ids: [1, 2, 3] },
 *   { name: 'Bob', ids: [3, 4] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.arrayIncludes('ids', 3);
 * // filtered contains the items where 'ids' includes 3
 *
 * @remarks
 * - Only fields of type array are supported.
 * - The operation and target must match the signature of PredicType.array.comparison.
 * - Returns a new filtered context; does not mutate the original.
 */
export function arrayComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.comparison>[1],
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    target: Parameters<typeof PredicType.array.comparison>[2],
  ): C {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.comparison(arr, oper, target);
    });
  };
}
