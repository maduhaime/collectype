import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for creating array sequence predicates for use with a Wherable context.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.array.sequence>[1]} oper - The array sequence operation (e.g., 'startsWith', 'endsWith', etc.).
 * @returns {<K extends keyof ByType<T, any[]>>(field: K, target: Parameters<typeof PredicType.array.sequence>[2]) => C}
 *   Returns a function that takes a field (of type array on T) and a target value, and applies the array sequence predicate to filter the context.
 *
 * @example
 * // Example: Composing an array sequence filter as a property, following README Example 5
 * import { BaseFunctions } from 'collectype';
 * import { arraySequenceFactory } from 'collectype';
 *
 * type Person = { name: string; tags: string[] };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arrayStartsWith = arraySequenceFactory<Person, this>(this, 'startsWith');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: ['a', 'b', 'c'] },
 *   { name: 'Bob', tags: ['c', 'd'] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.arrayStartsWith('tags', ['a']);
 * // filtered contient les éléments dont 'tags' commence par ['a']
 *
 * @remarks
 * - Only fields of type array are supported.
 * - The operation and target must match the signature of PredicType.array.sequence.
 * - Returns a new filtered context; does not mutate the original.
 */
export function arraySequenceFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.sequence>[1],
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    target: Parameters<typeof PredicType.array.sequence>[2],
  ): C {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.sequence(arr, oper, target);
    });
  };
}
