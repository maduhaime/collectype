import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object prototype state using `PredicType.object.prototypeState`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.object.prototypeState>[1]} oper - The prototype state operation to perform (see PredicType.object.prototypeState).
 * @returns {<K extends keyof ByType<T, object>>(field: K) => C}
 *   Returns a function that takes a field (of type object on T) and applies the object prototype state predicate to filter the context.
 *
 * @example
 * // Example: Composing an object prototype state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectPrototypeStateFactory } from 'collectype';
 *
 * type Person = { name: string; meta: object };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectHasNullPrototype = objectPrototypeStateFactory<Person, this>(this, 'isNull');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: Object.create(null) },
 *   { name: 'Bob', meta: {} },
 *   { name: 'Eve', meta: [] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectHasNullPrototype('meta');
 * // filtered contains the items where 'meta' has a null prototype
 *
 * @remarks
 * - Uses `PredicType.object.prototypeState` for prototype state checks on object fields.
 * - Returns a filtered context with items matching the prototype state.
 */
export function objectPrototypeStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.prototypeState>[1],
) {
  return function <K extends keyof ByType<T, object>>(field: K): C {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.prototypeState(value, oper);
    });
  };
}
