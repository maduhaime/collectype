import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for set relations using `PredicType.set.relation`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The set relation operation to perform (see PredicType.set.relation).
 * @returns A function that takes a field key and a target set, and filters items where the set relation matches the operation.
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
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.relation(value, oper, target);
    });
  };
}
