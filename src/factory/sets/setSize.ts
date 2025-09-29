import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for set size using `PredicType.set.size`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.set.size>[1]} oper - The set size operation to perform (see PredicType.set.size).
 * @returns {<K extends keyof ByType<T, Set<any>>>(field: K, target: Parameters<typeof PredicType.set.size>[2]) => C}
 *   Returns a function that takes a field (of type Set on T) and a target size, and applies the set size predicate to filter the context.
 *
 * @example
 * // Example: Composing a set size filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { setSizeFactory } from 'collectype';
 *
 * type Person = { name: string; tags: Set<string> };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   setHasSize = setSizeFactory<Person, this>(this, 'eq');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: new Set(['a', 'b']) },
 *   { name: 'Bob', tags: new Set(['a']) },
 *   { name: 'Eve', tags: new Set(['b', 'c']) }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.setHasSize('tags', 2);
 * // filtered contains the items where 'tags' has a size of 2
 *
 * @remarks
 * - Uses `PredicType.set.size` for set size checks on set fields.
 * - Returns a filtered context with items matching the set size.
 */
export function setSizeFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.set.size>[1]) {
  return function <K extends keyof ByType<T, Set<any>>>(
    field: K,
    target: Parameters<typeof PredicType.set.size>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.size(value, oper, target);
    });
  };
}
