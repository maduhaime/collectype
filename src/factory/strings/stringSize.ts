import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string size using `PredicType.string.size`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.string.size>[1]} oper - The string size operation to perform (see PredicType.string.size).
 * @returns {<K extends keyof ByType<T, string>>(field: K, target: Parameters<typeof PredicType.string.size>[2]) => C}
 *   Returns a function that takes a field (of type string on T) and a target size, and applies the string size predicate to filter the context.
 *
 * @example
 * // Example: Composing a string size filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringSizeFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringHasLength = stringSizeFactory<Person, this>(this, 'eq');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'Lyon' },
 *   { name: 'Eve', city: 'Rome' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.stringHasLength('city', 5);
 * // filtered contains the items where 'city' has a length of 5
 *
 * @remarks
 * - Uses `PredicType.string.size` for string size checks on string fields.
 * - Returns a filtered context with items matching the string size.
 */
export function stringSizeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.size>[1],
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.size>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.size(value, oper, target);
    });
  };
}
