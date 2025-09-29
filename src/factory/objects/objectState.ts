import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object state using `PredicType.object.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.object.state>[1]} oper - The object state operation (e.g., 'isPlain', 'isEmpty', etc.).
 * @returns {<K extends keyof ByType<T, object>>(field: K) => C}
 *   Returns a function that takes a field (of type object on T) and applies the object state predicate to filter the context.
 *
 * @example
 * // Example: Composing an object state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectStateFactory } from 'collectype';
 *
 * type Person = { name: string; meta: { country?: string } };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectIsEmpty = objectStateFactory<Person, this>(this, 'isEmpty');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: {} },
 *   { name: 'Bob', meta: { country: 'US' } }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectIsEmpty('meta');
 * // filtered contains the items where 'meta' is empty
 *
 * @remarks
 * - Only fields of type object are supported.
 * - The operation must match the signature of PredicType.object.state.
 * - Returns a new filtered context; does not mutate the original.
 */
export function objectStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.state>[1],
) {
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.state(value, oper);
    });
  };
}
