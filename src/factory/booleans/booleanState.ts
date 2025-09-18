/**
 * Creates a predicate filter for boolean state using `PredicType.boolean.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.boolean.state>[1]} oper - The boolean state operation (e.g., 'isTrue', 'isFalse', etc.).
 * @returns {<K extends keyof ByType<T, boolean>>(field: K) => C}
 *   Returns a function that takes a field (of type boolean on T) and applies the boolean state predicate to filter the context.
 *
 * @example
 * // Example: Composing a boolean state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { booleanStateFactory } from 'collectype';
 *
 * type Person = { name: string; active: boolean };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   booleanIsTrue = booleanStateFactory<Person, this>(this, 'isTrue');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', active: true },
 *   { name: 'Bob', active: false }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.booleanIsTrue('active');
 * // filtered contains the items where 'active' is true
 *
 * @remarks
 * - Only fields of type boolean are supported.
 * - The operation must match the signature of PredicType.boolean.state.
 * - Returns a new filtered context; does not mutate the original.
 */
import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function booleanStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.boolean.state>[1]
) {
  return function <K extends keyof ByType<T, boolean>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as boolean | undefined;
      if (typeof value !== 'boolean') return false;
      return PredicType.boolean.state(value, oper);
    });
  };
}
