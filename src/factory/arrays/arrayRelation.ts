import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for array relation using `PredicType.array.relation`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.array.relation>[1]} oper - The array relation operation (e.g., 'subsetOf', 'supersetOf', etc.).
 * @returns {<K extends keyof ByType<T, any[]>>(field: K, target: Parameters<typeof PredicType.array.relation>[2]) => C}
 *   Returns a function that takes a field (of type array on T) and a target value, and applies the array relation predicate to filter the context.
 *
 * @example
 * // Example: Composing an array relation filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { arrayRelationFactory } from 'collectype';
 *
 * type Person = { name: string; tags: string[] };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arraySubsetOf = arrayRelationFactory<Person, this>(this, 'subsetOf');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: ['a', 'b'] },
 *   { name: 'Bob', tags: ['a', 'b', 'c'] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.arraySubsetOf('tags', ['a', 'b']);
 * // filtered contains the items where 'tags' is a subset of ['a', 'b']
 *
 * @remarks
 * - Only fields of type array are supported.
 * - The operation and target must match the signature of PredicType.array.relation.
 * - Returns a new filtered context; does not mutate the original.
 */
export function arrayRelationFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.relation>[1],
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    target: Parameters<typeof PredicType.array.relation>[2],
  ): C {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.relation(arr, oper, target);
    });
  };
}
