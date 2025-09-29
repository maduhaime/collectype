import { PredicType, NumberRangeEnum as Enum } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for number range using `PredicType.number.range`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.number.range>[1]} oper - The number range operation (e.g., 'between', 'notBetween', etc.).
 * @returns {<K extends keyof ByType<T, number>>(field: K, min: Parameters<typeof PredicType.number.range>[2], max: Parameters<typeof PredicType.number.range>[3]) => C}
 *   Returns a function that takes a field (of type number on T), a min and max value, and applies the number range predicate to filter the context.
 *
 * @example
 * // Example: Composing a number range filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { numberRangeFactory } from 'collectype';
 *
 * type Person = { name: string; age: number };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   numberBetween = numberRangeFactory<Person, this>(this, 'between');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', age: 30 },
 *   { name: 'Bob', age: 18 },
 *   { name: 'Charlie', age: 40 }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.numberBetween('age', 20, 35);
 * // filtered contains the items where 'age' is between 20 and 35
 *
 * @remarks
 * - Only fields of type number are supported.
 * - The operation, min, and max must match the signature of PredicType.number.range.
 * - Returns a new filtered context; does not mutate the original.
 */
export function numberRangeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.number.range>[1],
) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<typeof PredicType.number.range>[2],
    max: Parameters<typeof PredicType.number.range>[3],
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as number | undefined;
      if (typeof value !== 'number') {
        if (oper === Enum.NOT_BETWEEN || oper === Enum.STRICT_NOT_BETWEEN) return true;
        return false;
      }
      return PredicType.number.range(value, oper, min, max);
    });
  };
}
