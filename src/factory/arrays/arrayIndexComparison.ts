import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for creating array index comparison predicates for use with a Wherable context.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.array.indexComparison>[1]} oper - The array index comparison operation (e.g., 'equals', 'greaterThan', etc.).
 * @returns {<K extends keyof ByType<T, any[]>>(field: K, index: Parameters<typeof PredicType.array.indexComparison>[2], target: Parameters<typeof PredicType.array.indexComparison>[3]) => C}
 *   Returns a function that takes a field (of type array on T), an index, and a target value, and applies the array index comparison predicate to filter the context.
 *
 * @example
 * // Example: Composing an array index comparison filter as a property, following README Example 5
 * import { BaseFunctions } from 'collectype';
 * import { arrayIndexComparisonFactory } from 'collectype';
 *
 * type Person = { name: string; scores: number[] };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arrayIndexEquals = arrayIndexComparisonFactory<Person, this>(this, 'equals');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', scores: [10, 20, 30] },
 *   { name: 'Bob', scores: [30, 40] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.arrayIndexEquals('scores', 0, 10);
 * // filtered contient les éléments dont scores[0] === 10
 *
 * @remarks
 * - Only fields of type array are supported.
 * - The operation, index, and target must match the signature of PredicType.array.indexComparison.
 * - Returns a new filtered context; does not mutate the original.
 */
export function arrayIndexComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.indexComparison>[1],
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<typeof PredicType.array.indexComparison>[2],
    target: Parameters<typeof PredicType.array.indexComparison>[3],
  ): C {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.indexComparison(arr, oper, index, target);
    });
  };
}
