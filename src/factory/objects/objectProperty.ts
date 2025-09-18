import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object property presence using `PredicType.object.property`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The property operation to perform (see PredicType.object.property).
 * @returns A function that takes a field key and a property key, and filters items where the object's property matches the operation.
 *
 * @example
 * // Example: Composing an object property filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectPropertyFactory } from 'collectype';
 *
 * type Person = { name: string; meta: { a?: number; b?: number; city?: string } };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectHasProperty = objectPropertyFactory<Person, this>(this, 'has');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: { a: 1, b: 2 } },
 *   { name: 'Bob', meta: { a: 1 } },
 *   { name: 'Eve', meta: { b: 2 } }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectHasProperty('meta', 'a');
 * // filtered contains the items where 'meta' has the property 'a'
 *
 * @remarks
 * - Uses `PredicType.object.property` for property checks on object fields.
 * - Returns a filtered context with items matching the property condition.
 */
export function objectPropertyFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.property>[1]
) {
  return function <K extends keyof ByType<T, object>>(field: K, key: Parameters<typeof PredicType.object.property>[2]) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.property(value, oper, key);
    });
  };
}
