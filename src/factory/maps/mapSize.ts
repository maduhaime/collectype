import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for map size using `PredicType.map.size`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.map.size>[1]} oper - The map size operation (e.g., 'equals', 'greaterThan', etc.).
 * @returns {<K extends keyof ByType<T, Map<any, any>>>(field: K, target: Parameters<typeof PredicType.map.size>[2]) => C}
 *   Returns a function that takes a field (of type Map on T) and a target size, and applies the map size predicate to filter the context.
 *
 * @example
 * // Example: Composing a map size filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { mapSizeFactory } from 'collectype';
 *
 * type Person = { name: string; scores: Map<string, number> };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   mapSizeEquals = mapSizeFactory<Person, this>(this, 'equals');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', scores: new Map([['math', 18], ['english', 15]]) },
 *   { name: 'Bob', scores: new Map([['math', 10]]) }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.mapSizeEquals('scores', 2);
 * // filtered contains the items where 'scores' has a size of 2
 *
 * @remarks
 * - Only fields of type Map are supported.
 * - The operation and target must match the signature of PredicType.map.size.
 * - Returns a new filtered context; does not mutate the original.
 */
export function mapSizeFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.map.size>[1]) {
  return function <K extends keyof ByType<T, Map<any, any>>>(
    field: K,
    target: Parameters<typeof PredicType.map.size>[2],
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Map<any, any> | undefined;
      if (!(value instanceof Map)) return false;
      return PredicType.map.size(value, oper, target);
    });
  };
}
