import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for array size using `PredicType.array.size`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.array.size>[1]} oper - The array size operation (e.g., 'equals', 'greaterThan', etc.).
 * @returns {<K extends keyof ByType<T, any[]>>(field: K, size: Parameters<typeof PredicType.array.size>[2]) => C}
 *   Returns a function that takes a field (of type array on T) and a size value, and applies the array size predicate to filter the context.
 *
 * @example
 * // Example: Composing an array size filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { arraySizeFactory } from 'collectype';
 *
 * type Person = { name: string; tags: string[] };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arraySizeEquals = arraySizeFactory<Person, this>(this, 'equals');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: ['a', 'b', 'c'] },
 *   { name: 'Bob', tags: ['c', 'd'] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.arraySizeEquals('tags', 2);
 * // filtered contains the items where the size of 'tags' is 2
 *
 * @remarks
 * - Only fields of type array are supported.
 * - The operation and size must match the signature of PredicType.array.size.
 * - Returns a new filtered context; does not mutate the original.
 */
export function arraySizeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.size>[1],
) {
  return function <K extends keyof ByType<T, any[]>>(field: K, size: Parameters<typeof PredicType.array.size>[2]): C {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.size(arr, oper, size);
    });
  };
}
