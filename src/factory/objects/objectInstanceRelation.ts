import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object instance relations using `PredicType.object.instanceRelation`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The instance relation operation to perform (see PredicType.object.instanceRelation).
 * @returns A function that takes a field key and a target constructor, and filters items where the object's instance relation matches the operation.
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
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.instanceRelation(value, oper, target);
    });
  };
}
