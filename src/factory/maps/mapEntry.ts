import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for map entry using `PredicType.map.entry`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.map.entry>[1]} oper - The map entry operation (e.g., 'hasEntry', 'lacksEntry', etc.).
 * @returns {<K extends keyof ByType<T, Map<any, any>>>(field: K, target: Parameters<typeof PredicType.map.entry>[2]) => C}
 *   Returns a function that takes a field (of type Map on T) and a target entry, and applies the map entry predicate to filter the context.
 *
 * @example
 * // Example: Composing a map entry filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { mapEntryFactory } from 'collectype';
 *
 * type Person = { name: string; scores: Map<string, number> };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   mapHasEntry = mapEntryFactory<Person, this>(this, 'hasEntry');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', scores: new Map([['math', 18], ['english', 15]]) },
 *   { name: 'Bob', scores: new Map([['math', 10]]) }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.mapHasEntry('scores', ['math', 18]);
 * // filtered contains the items where 'scores' contains the entry ['math', 18]
 *
 * @remarks
 * - Only fields of type Map are supported.
 * - The operation and target must match the signature of PredicType.map.entry.
 * - Returns a new filtered context; does not mutate the original.
 */
export function mapEntryFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.map.entry>[1]) {
  return function <K extends keyof ByType<T, Map<any, any>>>(
    field: K,
    target: Parameters<typeof PredicType.map.entry>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as Map<any, any> | undefined;
      if (!(value instanceof Map)) return false;
      return PredicType.map.entry(value, oper, target);
    });
  };
}
