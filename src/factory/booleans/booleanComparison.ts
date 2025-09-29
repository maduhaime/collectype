import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for boolean comparison using `PredicType.boolean.comparison`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.boolean.comparison>[1]} oper - The boolean comparison operation (e.g., 'equals', 'notEquals', etc.).
 * @returns {<K extends keyof ByType<T, boolean>>(field: K, target: Parameters<typeof PredicType.boolean.comparison>[2]) => C}
 *   Returns a function that takes a field (of type boolean on T) and a target value, and applies the boolean comparison predicate to filter the context.
 *
 * @example
 * // Example: Composing a boolean comparison filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { booleanComparisonFactory } from 'collectype';
 *
 * type Person = { name: string; active: boolean };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   booleanEquals = booleanComparisonFactory<Person, this>(this, 'equals');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', active: true },
 *   { name: 'Bob', active: false }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.booleanEquals('active', true);
 * // filtered contains the items where 'active' is true
 *
 * @remarks
 * - Only fields of type boolean are supported.
 * - The operation and target must match the signature of PredicType.boolean.comparison.
 * - Returns a new filtered context; does not mutate the original.
 */
export function booleanComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.boolean.comparison>[1],
) {
  return function <K extends keyof ByType<T, boolean>>(
    field: K,
    target: Parameters<typeof PredicType.boolean.comparison>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as boolean | undefined;
      if (typeof value !== 'boolean') return false;
      return PredicType.boolean.comparison(value, oper, target);
    });
  };
}
