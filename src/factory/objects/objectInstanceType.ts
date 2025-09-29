import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object instance types using `PredicType.object.instanceType`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The instance type operation to perform (see PredicType.object.instanceType).
 * @returns A function that takes a field key and filters items where the object's instance type matches the operation.
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
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.instanceType(value, oper);
    });
  };
}
