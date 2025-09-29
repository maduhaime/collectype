import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string state using `PredicType.string.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The string state operation to perform (see PredicType.string.state).
 * @returns A function that takes a field key and filters items where the string state matches the operation.
 *
 * @example
 * // Example: Composing a string state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringStateFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   cityIsEmpty = stringStateFactory<Person, this>(this, 'isEmpty');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: '' },
 *   { name: 'Eve', city: 'Rome' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.cityIsEmpty('city');
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
  return function <K extends keyof ByType<T, string>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.state(value, oper);
    });
  };
}
