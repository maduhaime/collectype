import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for array intersection using `PredicType.array.intersection`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.array.intersection>[1]} oper - The array intersection operation (e.g., 'intersects', 'disjoint', etc.).
 * @returns {<K extends keyof ByType<T, any[]>>(field: K, target: Parameters<typeof PredicType.array.intersection>[2]) => C}
 *   Returns a function that takes a field (of type array on T) and a target value, and applies the array intersection predicate to filter the context.
 *
 * @example
 * // Example: Composing an array intersection filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { arrayIntersectionFactory } from 'collectype';
 *
 * type Person = { name: string; tags: string[] };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arrayIntersects = arrayIntersectionFactory<Person, this>(this, 'intersects');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: ['a', 'b', 'c'] },
 *   { name: 'Bob', tags: ['c', 'd'] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.arrayIntersects('tags', ['c']);
 * // filtered contains the items where 'tags' intersects ['c']
 *
 * @remarks
 * - Only fields of type array are supported.
 * - The operation and target must match the signature of PredicType.array.intersection.
 * - Returns a new filtered context; does not mutate the original.
 */
export function arrayIntersectionFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.intersection>[1],
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    target: Parameters<typeof PredicType.array.intersection>[2],
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.intersection(arr, oper, target);
    });
  };
}
