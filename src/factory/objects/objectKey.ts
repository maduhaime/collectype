/**
 * Creates a predicate filter for object key presence using `PredicType.object.key`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.object.key>[1]} oper - The object key operation (e.g., 'containsKey', 'lacksKey', etc.).
 * @returns {<K extends keyof ByType<T, object>>(field: K, target: Parameters<typeof PredicType.object.key>[2]) => C}
 *   Returns a function that takes a field (of type object on T) and a target key, and applies the object key predicate to filter the context.
 *
 * @example
 * // Example: Composing an object key filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectKeyFactory } from 'collectype';
 *
 * type Person = { name: string; meta: { country: string; city: string } };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectContainsKey = objectKeyFactory<Person, this>(this, 'containsKey');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: { country: 'FR', city: 'Paris' } },
 *   { name: 'Bob', meta: { country: 'US' } }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectContainsKey('meta', 'city');
 * // filtered contains the items where 'meta' has the key 'city'
 *
 * @remarks
 * - Only fields of type object are supported.
 * - The operation and target must match the signature of PredicType.object.key.
 * - Returns a new filtered context; does not mutate the original.
 */
import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for object key presence using PredicType.object.key
 */
export function objectKeyFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.key>[1]
) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<typeof PredicType.object.key>[2]) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.key(value, oper, target);
    });
  };
}
