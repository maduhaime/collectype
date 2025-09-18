/**
 * Creates a predicate filter for map state using `PredicType.map.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.map.state>[1]} oper - The map state operation (e.g., 'isEmpty', 'isNotEmpty', etc.).
 * @returns {<K extends keyof ByType<T, Map<any, any>>>(field: K) => C}
 *   Returns a function that takes a field (of type Map on T) and applies the map state predicate to filter the context.
 *
 * @example
 * // Example: Composing a map state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { mapStateFactory } from 'collectype';
 *
 * type Person = { name: string; scores: Map<string, number> };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   mapIsEmpty = mapStateFactory<Person, this>(this, 'isEmpty');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', scores: new Map() },
 *   { name: 'Bob', scores: new Map([['math', 10]]) }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.mapIsEmpty('scores');
 * // filtered contains the items where 'scores' is empty
 *
 * @remarks
 * - Only fields of type Map are supported.
 * - The operation must match the signature of PredicType.map.state.
 * - Returns a new filtered context; does not mutate the original.
 */
import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function mapStateFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.map.state>[1]) {
  return function <K extends keyof ByType<T, Map<any, any>>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as Map<any, any> | undefined;
      if (!(value instanceof Map)) return false;
      return PredicType.map.state(value, oper);
    });
  };
}
