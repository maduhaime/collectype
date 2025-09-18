import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string size using `PredicType.string.size`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The string size operation to perform (see PredicType.string.size).
 * @returns A function that takes a field key and a target size, and filters items where the string size matches the operation.
 *
 * @example
 * // Example: Composing a string size filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringSizeFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   cityHasLength = stringSizeFactory<Person, this>(this, 'eq');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'Lyon' },
 *   { name: 'Eve', city: 'Rome' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.cityHasLength('city', 5);
 * // filtered contains the items where 'city' has a length of 5
 *
 * @remarks
 * - Uses `PredicType.string.size` for string size checks on string fields.
 * - Returns a filtered context with items matching the string size.
 */
export function stringSizeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.size>[1]
) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<typeof PredicType.string.size>[2]) {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.size(value, oper, target);
    });
  };
}
