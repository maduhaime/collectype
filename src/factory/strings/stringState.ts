import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string state using `PredicType.string.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.string.state>[1]} oper - The string state operation to perform (see PredicType.string.state).
 * @returns {<K extends keyof ByType<T, string>>(field: K) => C}
 *   Returns a function that takes a field (of type string on T) and applies the string state predicate to filter the context.
 *
 * @example
 * // Example: Composing a string state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringStateFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringIsEmpty = stringStateFactory<Person, this>(this, 'isEmpty');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: '' },
 *   { name: 'Eve', city: 'Rome' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.stringIsEmpty('city');
 * // filtered contains the items where 'city' is an empty string
 *
 * @remarks
 * - Uses `PredicType.string.state` for string state checks on string fields.
 * - Returns a filtered context with items matching the string state.
 */
export function stringStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.state>[1],
) {
  return function <K extends keyof ByType<T, string>>(field: K): C {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.state(value, oper);
    });
  };
}
