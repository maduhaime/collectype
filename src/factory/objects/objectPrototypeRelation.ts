import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object prototype relations using `PredicType.object.prototypeRelation`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.object.prototypeRelation>[1]} oper - The prototype relation operation to perform (see PredicType.object.prototypeRelation).
 * @returns {<K extends keyof ByType<T, object>>(field: K, proto: Parameters<typeof PredicType.object.prototypeRelation>[2]) => C}
 *   Returns a function that takes a field (of type object on T) and a prototype, and applies the object prototype relation predicate to filter the context.
 *
 * @example
 * // Example: Composing an object prototype relation filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectPrototypeRelationFactory } from 'collectype';
 *
 * type Person = { name: string; meta: object };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectHasPrototype = objectPrototypeRelationFactory<Person, this>(this, 'isPrototypeOf');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: Object.create(Array.prototype) },
 *   { name: 'Bob', meta: {} },
 *   { name: 'Eve', meta: [] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectHasPrototype('meta', Array.prototype);
 * // filtered contains the items where 'meta' has Array.prototype as its prototype
 *
 * @remarks
 * - Uses `PredicType.object.prototypeRelation` for prototype checks on object fields.
 * - Returns a filtered context with items matching the prototype relation.
 */
export function objectPrototypeRelationFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.prototypeRelation>[1],
) {
  return function <K extends keyof ByType<T, object>>(
    field: K,
    proto: Parameters<typeof PredicType.object.prototypeRelation>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.prototypeRelation(value, oper, proto);
    });
  };
}
