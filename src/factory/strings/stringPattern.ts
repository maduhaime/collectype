import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for string pattern using `PredicType.string.pattern`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The string pattern operation to perform (see PredicType.string.pattern).
 * @returns A function that takes a field key and a pattern, and filters items where the string pattern matches the operation.
 *
 * @example
 * // Example: Composing a string pattern filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { stringPatternFactory } from 'collectype';
 *
 * type Person = { name: string; city: string };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   cityMatchesPattern = stringPatternFactory<Person, this>(this, 'matches');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'Lyon' },
 *   { name: 'Eve', city: 'Paris' }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.cityMatchesPattern('city', /^Pa/);
 * // filtered contains the items where 'city' starts with 'Pa'
 *
 * @remarks
 * - Uses `PredicType.string.pattern` for string pattern matching on string fields.
 * - Returns a filtered context with items matching the string pattern.
 */
export function stringPatternFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.pattern>[1]
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.pattern>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.pattern(value, oper, target);
    });
  };
}
