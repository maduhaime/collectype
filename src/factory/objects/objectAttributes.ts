import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object attribute checks using `PredicType.object.attributes`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The attribute operation to perform (see PredicType.object.attributes).
 * @returns A function that takes a field key and a target value, and filters items where the object's attribute matches the operation.
 *
 * @example
 * // Example: Composing an object attribute filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectAttributesFactory } from 'collectype';
 *
 * type Person = { name: string; meta: { a?: number; b?: number; city?: string } };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectHasAttribute = objectAttributesFactory<Person, this>(this, 'has');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: { a: 1, b: 2 } },
 *   { name: 'Bob', meta: { a: 1 } },
 *   { name: 'Eve', meta: { b: 2 } }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectHasAttribute('meta', 'a');
 * // filtered contains the items where 'meta' has the key 'a'
 *
 * @remarks
 * - Uses `PredicType.object.attributes` for attribute checks on object fields.
 * - Returns a filtered context with items matching the attribute condition.
 */
export function objectAttributesFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.attributes>[1]
) {
  return function <K extends keyof ByType<T, object>>(
    field: K,
    target: Parameters<typeof PredicType.object.attributes>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.attributes(value, oper, target);
    });
  };
}
