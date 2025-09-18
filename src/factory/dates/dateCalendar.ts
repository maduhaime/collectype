/**
 * Creates a predicate filter for date calendar using `PredicType.date.calendar`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.date.calendar>[1]} oper - The date calendar operation (e.g., 'isToday', 'isWeekend', etc.).
 * @returns {<K extends keyof ByType<T, Date>>(field: K) => C}
 *   Returns a function that takes a field (of type Date on T) and applies the date calendar predicate to filter the context.
 *
 * @example
 * // Example: Composing a date calendar filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { dateCalendarFactory } from 'collectype';
 *
 * type Person = { name: string; birthday: Date };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   dateIsToday = dateCalendarFactory<Person, this>(this, 'isToday');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', birthday: new Date() },
 *   { name: 'Bob', birthday: new Date('2000-01-01') }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.dateIsToday('birthday');
 * // filtered contains the items where 'birthday' is today
 *
 * @remarks
 * - Only fields of type Date are supported.
 * - The operation must match the signature of PredicType.date.calendar.
 * - Returns a new filtered context; does not mutate the original.
 */
import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function dateCalendarFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.date.calendar>[1]
) {
  return function <K extends keyof ByType<T, Date>>(
    field: K
    // TODDO: Implement this later
    // today?: Parameters<typeof PredicType.date.calendar>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Date | undefined;
      if (!(value instanceof Date) || isNaN(value.getTime())) return false;
      return PredicType.date.calendar(value, oper);
    });
  };
}
