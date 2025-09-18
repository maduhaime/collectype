import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string comparison using `PredicType.string.comparison`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The string comparison operation to perform (see PredicType.string.comparison).
 * @returns A function that takes a field key and a target string, and filters items where the string comparison matches the operation.
 *
 * @example
 * // Example: Composing a string comparison filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringComparisonFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   cityEquals = stringComparisonFactory<Person, this>(this, 'eq');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'Lyon' },
 *   { name: 'Eve', city: 'Paris' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.cityEquals('city', 'Paris');
 * // filtered contains the items where 'city' is equal to 'Paris'
 *
 * @remarks
 * - Uses `PredicType.string.comparison` for string comparison on string fields.
 * - Returns a filtered context with items matching the string comparison.
 */
export function stringComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.comparison>[1]
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.comparison>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.comparison(value, oper, target);
    });
  };
}
