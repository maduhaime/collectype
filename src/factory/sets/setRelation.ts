import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for set relations using `PredicType.set.relation`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.set.relation>[1]} oper - The set relation operation to perform (see PredicType.set.relation).
 * @returns {<K extends keyof ByType<T, Set<any>>>(field: K, target: Parameters<typeof PredicType.set.relation>[2]) => C}
 *   Returns a function that takes a field (of type Set on T) and a target set, and applies the set relation predicate to filter the context.
 *
 * @example
 * // Example: Composing a set relation filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { setRelationFactory } from 'collectype';
 *
 * type Person = { name: string; tags: Set<string> };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   setIsSubset = setRelationFactory<Person, this>(this, 'isSubset');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: new Set(['a', 'b']) },
 *   { name: 'Bob', tags: new Set(['a']) },
 *   { name: 'Eve', tags: new Set(['b']) }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.setIsSubset('tags', new Set(['a', 'b', 'c']));
 * // filtered contains the items where 'tags' is a subset of Set(['a', 'b', 'c'])
 *
 * @remarks
 * - Uses `PredicType.set.relation` for set relation checks on set fields.
 * - Returns a filtered context with items matching the set relation.
 */
export function setRelationFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.set.relation>[1],
) {
  return function <K extends keyof ByType<T, Set<any>>>(
    field: K,
    target: Parameters<typeof PredicType.set.relation>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.relation(value, oper, target);
    });
  };
}
