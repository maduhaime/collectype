/**
 * Creates a predicate filter for date state using `PredicType.date.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.date.state>[1]} oper - The date state operation (e.g., 'isValid', 'isInvalid', etc.).
 * @returns {<K extends keyof ByType<T, Date>>(field: K) => C}
 *   Returns a function that takes a field (of type Date on T) and applies the date state predicate to filter the context.
 *
 * @example
 * // Example: Composing a date state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { dateStateFactory } from 'collectype';
 *
 * type Person = { name: string; birthday: Date };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   dateIsValid = dateStateFactory<Person, this>(this, 'isValid');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', birthday: new Date('2000-01-01') },
 *   { name: 'Bob', birthday: new Date('invalid-date') }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.dateIsValid('birthday');
 * // filtered contains the items where 'birthday' is a valid date
 *
 * @remarks
 * - Only fields of type Date are supported.
 * - The operation must match the signature of PredicType.date.state.
 * - Returns a new filtered context; does not mutate the original.
 */
import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function dateStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.date.state>[1]
) {
  return function <K extends keyof ByType<T, Date>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as Date | undefined;
      if (!(value instanceof Date)) return false;
      return PredicType.date.state(value, oper);
    });
  };
}
