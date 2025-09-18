/**
 * Creates a predicate filter for array state using `PredicType.array.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.array.state>[1]} oper - The array state operation (e.g., 'isEmpty', 'isNotEmpty', etc.).
 * @returns {<K extends keyof ByType<T, any[]>>(field: K) => C}
 *   Returns a function that takes a field (of type array on T) and applies the array state predicate to filter the context.
 *
 * @example
 * // Example: Composing an array state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { arrayStateFactory } from 'collectype';
 *
 * type Person = { name: string; tags: string[] };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arrayIsEmpty = arrayStateFactory<Person, this>(this, 'isEmpty');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: [] },
 *   { name: 'Bob', tags: ['a'] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.arrayIsEmpty('tags');
 * // filtered contains the items where 'tags' is empty
 *
 * @remarks
 * - Only fields of type array are supported.
 * - The operation must match the signature of PredicType.array.state.
 * - Returns a new filtered context; does not mutate the original.
 */
import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function arrayStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.state>[1]
) {
  return function <K extends keyof ByType<T, any[]>>(field: K) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.state(arr, oper);
    });
  };
}
