import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for set comparison using `PredicType.set.comparison`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.set.comparison>[1]} oper - The set comparison operation to perform (see PredicType.set.comparison).
 * @returns {<K extends keyof ByType<T, Set<any>>>(field: K, target: Parameters<typeof PredicType.set.comparison>[2]) => C}
 *   Returns a function that takes a field (of type Set on T) and a target set, and applies the set comparison predicate to filter the context.
 *
 * @example
 * // Example: Composing a set comparison filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { setComparisonFactory } from 'collectype';
 *
 * type Person = { name: string; tags: Set<string> };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   setEquals = setComparisonFactory<Person, this>(this, 'equals');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: new Set(['a', 'b']) },
 *   { name: 'Bob', tags: new Set(['a']) },
 *   { name: 'Eve', tags: new Set(['b']) }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.setEquals('tags', new Set(['a', 'b']));
 * // filtered contains the items where 'tags' is equal to Set(['a', 'b'])
 *
 * @remarks
 * - Uses `PredicType.set.comparison` for set comparison on set fields.
 * - Returns a filtered context with items matching the set comparison.
 */
export function setComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.set.comparison>[1],
) {
  return function <K extends keyof ByType<T, Set<any>>>(
    field: K,
    target: Parameters<typeof PredicType.set.comparison>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.comparison(value, oper, target);
    });
  };
}
