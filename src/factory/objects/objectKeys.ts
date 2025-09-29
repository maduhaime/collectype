import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object keys using `PredicType.object.keys`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.object.keys>[1]} oper - The object keys operation (e.g., 'containsAllKeys', 'containsAnyKey', etc.).
 * @returns {<K extends keyof ByType<T, object>>(field: K, keys: Parameters<typeof PredicType.object.keys>[2]) => C}
 *   Returns a function that takes a field (of type object on T) and a list of keys, and applies the object keys predicate to filter the context.
 *
 * @example
 * // Example: Composing an object keys filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectKeysFactory } from 'collectype';
 *
 * type Person = { name: string; meta: { country: string; city?: string } };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectContainsAllKeys = objectKeysFactory<Person, this>(this, 'containsAllKeys');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: { country: 'FR', city: 'Paris' } },
 *   { name: 'Bob', meta: { country: 'US' } }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectContainsAllKeys('meta', ['country', 'city']);
 * // filtered contains the items where 'meta' has all the keys ['country', 'city']
 *
 * @remarks
 * - Only fields of type object are supported.
 * - The operation and keys must match the signature of PredicType.object.keys.
 * - Returns a new filtered context; does not mutate the original.
 */
export function objectKeysFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.keys>[1],
) {
  return function <K extends keyof ByType<T, object>>(field: K, keys: Parameters<typeof PredicType.object.keys>[2]): C {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.keys(value, oper, keys);
    });
  };
}
