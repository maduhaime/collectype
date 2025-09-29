import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for map key using `PredicType.map.key`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.map.key>[1]} oper - The map key operation (e.g., 'hasKey', 'lacksKey', etc.).
 * @returns {<K extends keyof ByType<T, Map<any, any>>>(field: K, target: Parameters<typeof PredicType.map.key>[2]) => C}
 *   Returns a function that takes a field (of type Map on T) and a target key, and applies the map key predicate to filter the context.
 *
 * @example
 * // Example: Composing a map key filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { mapKeyFactory } from 'collectype';
 *
 * type Person = { name: string; scores: Map<string, number> };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   mapHasKey = mapKeyFactory<Person, this>(this, 'hasKey');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', scores: new Map([['math', 18], ['english', 15]]) },
 *   { name: 'Bob', scores: new Map([['math', 10]]) }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.mapHasKey('scores', 'english');
 * // filtered contains the items where 'scores' has the key 'english'
 *
 * @remarks
 * - Only fields of type Map are supported.
 * - The operation and target must match the signature of PredicType.map.key.
 * - Returns a new filtered context; does not mutate the original.
 */
export function mapKeyFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.map.key>[1]) {
  return function <K extends keyof ByType<T, Map<any, any>>>(
    field: K,
    target: Parameters<typeof PredicType.map.key>[2],
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Map<any, any> | undefined;
      if (!(value instanceof Map)) return false;
      return PredicType.map.key(value, oper, target);
    });
  };
}
