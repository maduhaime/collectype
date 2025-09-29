import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object instance relations using `PredicType.object.instanceRelation`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.object.instanceRelation>[1]} oper - The instance relation operation to perform (see PredicType.object.instanceRelation).
 * @returns {<K extends keyof ByType<T, object>>(field: K, target: Parameters<typeof PredicType.object.instanceRelation>[2]) => C}
 *   Returns a function that takes a field (of type object on T) and a target constructor, and applies the object instance relation predicate to filter the context.
 *
 * @example
 * // Example: Composing an object instance relation filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectInstanceRelationFactory } from 'collectype';
 *
 * type Person = { name: string; meta: object };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectIsInstanceOf = objectInstanceRelationFactory<Person, this>(this, 'instanceof');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: new Date() },
 *   { name: 'Bob', meta: {} },
 *   { name: 'Eve', meta: [] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectIsInstanceOf('meta', Date);
 * // filtered contains the items where 'meta' is an instance of Date
 *
 * @remarks
 * - Uses `PredicType.object.instanceRelation` for instance checks on object fields.
 * - Returns a filtered context with items matching the instance relation.
 */
export function objectInstanceRelationFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.instanceRelation>[1],
) {
  return function <K extends keyof ByType<T, object>>(
    field: K,
    target: Parameters<typeof PredicType.object.instanceRelation>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.instanceRelation(value, oper, target);
    });
  };
}
