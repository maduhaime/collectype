/**
 * Creates a predicate filter for number comparison using `PredicType.number.comparison`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.number.comparison>[1]} oper - The number comparison operation (e.g., 'equals', 'greaterThan', etc.).
 * @returns {<K extends keyof ByType<T, number>>(field: K, target: Parameters<typeof PredicType.number.comparison>[2]) => C}
 *   Returns a function that takes a field (of type number on T) and a target value, and applies the number comparison predicate to filter the context.
 *
 * @example
 * // Example: Composing a number comparison filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { numberComparisonFactory } from 'collectype';
 *
 * type Person = { name: string; age: number };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   numberGreaterThan = numberComparisonFactory<Person, this>(this, 'greaterThan');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', age: 30 },
 *   { name: 'Bob', age: 18 },
 *   { name: 'Charlie', age: 40 }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.numberGreaterThan('age', 20);
 * // filtered contains the items where 'age' > 20
 *
 * @remarks
 * - Only fields of type number are supported.
 * - The operation and target must match the signature of PredicType.number.comparison.
 * - Returns a new filtered context; does not mutate the original.
 */
import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function numberComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.number.comparison>[1]
) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    target: Parameters<typeof PredicType.number.comparison>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as number | undefined;
      if (typeof value !== 'number') return false;
      return PredicType.number.comparison(value, oper, target);
    });
  };
}
