import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for date comparison using `PredicType.date.comparison`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.date.comparison>[1]} oper - The date comparison operation (e.g., 'equals', 'before', 'after', etc.).
 * @returns {<K extends keyof ByType<T, Date>>(field: K, target: Parameters<typeof PredicType.date.comparison>[2]) => C}
 *   Returns a function that takes a field (of type Date on T) and a target value, and applies the date comparison predicate to filter the context.
 *
 * @example
 * // Example: Composing a date comparison filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { dateComparisonFactory } from 'collectype';
 *
 * type Person = { name: string; birthday: Date };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   dateSameYear = dateComparisonFactory<Person, this>(this, 'same_year');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', birthday: new Date('2000-01-01') },
 *   { name: 'Bob', birthday: new Date('2000-12-31') },
 *   { name: 'Charlie', birthday: new Date('2010-01-01') }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.dateSameYear('birthday', new Date('2000-06-15'));
 * // filtered contains the items where 'birthday' is in the same year as June 15, 2000
 *
 * @remarks
 * - Only fields of type Date are supported.
 * - The operation and target must match the signature of PredicType.date.comparison.
 * - Returns a new filtered context; does not mutate the original.
 */
export function dateComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.date.comparison>[1],
) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    target: Parameters<typeof PredicType.date.comparison>[2],
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Date | undefined;
      if (!(value instanceof Date)) return false;
      return PredicType.date.comparison(value, oper, target);
    });
  };
}
