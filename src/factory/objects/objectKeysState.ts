import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for object keys state using `PredicType.object.keysState`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.object.keysState>[1]} oper - The object keys state operation (e.g., 'hasOnlyStringKeys', 'hasSymbolKeys', etc.).
 * @returns {<K extends keyof ByType<T, object>>(field: K) => C}
 *   Returns a function that takes a field (of type object on T) and applies the object keys state predicate to filter the context.
 *
 * @example
 * // Example: Composing an object keys state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { objectKeysStateFactory } from 'collectype';
 *
 * type Person = { name: string; meta: { country: string; city?: string } };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   objectHasOnlyStringKeys = objectKeysStateFactory<Person, this>(this, 'hasOnlyStringKeys');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', meta: { country: 'FR', city: 'Paris' } },
 *   { name: 'Bob', meta: { country: 'US' } }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.objectHasOnlyStringKeys('meta');
 * // filtered contains the items where 'meta' has only string keys
 *
 * @remarks
 * - Only fields of type object are supported.
 * - The operation must match the signature of PredicType.object.keysState.
 * - Returns a new filtered context; does not mutate the original.
 */
export function objectKeysStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.keysState>[1],
) {
  return function <K extends keyof ByType<T, object>>(field: K): C {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.keysState(value, oper);
    });
  };
}
