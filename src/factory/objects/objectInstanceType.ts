import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object instance types using `PredicType.object.instanceType`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.object.instanceType>[1]} oper - The instance type operation to perform (see PredicType.object.instanceType).
 * @returns {<K extends keyof ByType<T, object>>(field: K) => C}
 *   Returns a function that takes a field (of type object on T) and applies the object instance type predicate to filter the context.
 *
 * @example
 * // Example: Composing an object instance type filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectInstanceTypeFactory } from 'collectype';
 *
 * type Person = { name: string; meta: object };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectIsType = objectInstanceTypeFactory<Person, this>(this, 'Date');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: new Date() },
 *   { name: 'Bob', meta: {} },
 *   { name: 'Eve', meta: [] }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectIsType('meta');
 * // filtered contains the items where 'meta' is of type Date
 *
 * @remarks
 * - Uses `PredicType.object.instanceType` for type checks on object fields.
 * - Returns a filtered context with items matching the instance type.
 */
export function objectInstanceTypeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.instanceType>[1],
) {
  return function <K extends keyof ByType<T, object>>(field: K): C {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.instanceType(value, oper);
    });
  };
}
