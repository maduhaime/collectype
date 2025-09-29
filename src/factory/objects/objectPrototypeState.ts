import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object prototype state using `PredicType.object.prototypeState`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The prototype state operation to perform (see PredicType.object.prototypeState).
 * @returns A function that takes a field key and filters items where the object's prototype state matches the operation.
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
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.prototypeState(value, oper);
    });
  };
}
