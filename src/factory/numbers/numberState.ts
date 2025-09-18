/**
 * Creates a predicate filter for number state using `PredicType.number.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.number.state>[1]} oper - The number state operation (e.g., 'isInteger', 'isPositive', etc.).
 * @returns {<K extends keyof ByType<T, number>>(field: K) => C}
 *   Returns a function that takes a field (of type number on T) and applies the number state predicate to filter the context.
 *
 * @example
 * // Example: Composing a number state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { numberStateFactory } from 'collectype';
 *
 * type Person = { name: string; age: number };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   numberIsInteger = numberStateFactory<Person, this>(this, 'isInteger');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', age: 30 },
 *   { name: 'Bob', age: 18.5 },
 *   { name: 'Charlie', age: 40 }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.numberIsInteger('age');
 * // filtered contains the items where 'age' is an integer
 *
 * @remarks
 * - Only fields of type number are supported.
 * - The operation must match the signature of PredicType.number.state.
 * - Returns a new filtered context; does not mutate the original.
 */
import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function numberStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.number.state>[1]
) {
  return function <K extends keyof ByType<T, number>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as number | undefined;
      if (typeof value !== 'number') return false;
      return PredicType.number.state(value, oper);
    });
  };
}
