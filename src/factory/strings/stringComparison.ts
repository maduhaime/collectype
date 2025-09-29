import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string comparison using `PredicType.string.comparison`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.string.comparison>[1]} oper - The string comparison operation to perform (see PredicType.string.comparison).
 * @returns {<K extends keyof ByType<T, string>>(field: K, target: Parameters<typeof PredicType.string.comparison>[2]) => C}
 *   Returns a function that takes a field (of type string on T) and a target string, and applies the string comparison predicate to filter the context.
 *
 * @example
 * // Example: Composing a string comparison filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringComparisonFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringEquals = stringComparisonFactory<Person, this>(this, 'eq');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'Lyon' },
 *   { name: 'Eve', city: 'Paris' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.stringEquals('city', 'Paris');
 * // filtered contains the items where 'city' is equal to 'Paris'
 *
 * @remarks
 * - Uses `PredicType.string.comparison` for string comparison on string fields.
 * - Returns a filtered context with items matching the string comparison.
 */
export function stringComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.comparison>[1],
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.comparison>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.comparison(value, oper, target);
    });
  };
}
