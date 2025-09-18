/**
 * Creates a predicate filter for date range using `PredicType.date.range`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.date.range>[1]} oper - The date range operation (e.g., 'between', 'notBetween', etc.).
 * @returns {<K extends keyof ByType<T, Date>>(field: K, min: Parameters<typeof PredicType.date.range>[2], max: Parameters<typeof PredicType.date.range>[3]) => C}
 *   Returns a function that takes a field (of type Date on T), a min and max value, and applies the date range predicate to filter the context.
 *
 * @example
 * // Example: Composing a date range filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { dateRangeFactory } from 'collectype';
 *
 * type Person = { name: string; birthday: Date };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   dateBetween = dateRangeFactory<Person, this>(this, 'between');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', birthday: new Date('2000-01-01') },
 *   { name: 'Bob', birthday: new Date('2010-01-01') },
 *   { name: 'Charlie', birthday: new Date('2020-01-01') }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.dateBetween('birthday', new Date('2000-01-01'), new Date('2015-01-01'));
 * // filtered contains the items where 'birthday' is between 2000 and 2015
 *
 * @remarks
 * - Only fields of type Date are supported.
 * - The operation, min, and max must match the signature of PredicType.date.range.
 * - Returns a new filtered context; does not mutate the original.
 */
import { PredicType, DateRangeEnum } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function dateRangeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.date.range>[1]
) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<typeof PredicType.date.range>[2],
    max: Parameters<typeof PredicType.date.range>[3]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Date | undefined;
      // Handle invalid dates based on operation
      const isInvalid = !(value instanceof Date) || isNaN(value.getTime());
      // For NOT_BETWEEN and STRICT_NOT_BETWEEN, include invalid dates
      if (isInvalid && (oper === DateRangeEnum.NOT_BETWEEN || oper === DateRangeEnum.STRICT_NOT_BETWEEN)) {
        return true;
      }
      // For all other operations, exclude invalid dates
      if (isInvalid) return false;
      return PredicType.date.range(value, oper, min, max);
    });
  };
}
