import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for set state using `PredicType.set.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.set.state>[1]} oper - The set state operation to perform (see PredicType.set.state).
 * @returns {<K extends keyof ByType<T, Set<any>>>(field: K) => C}
 *   Returns a function that takes a field (of type Set on T) and applies the set state predicate to filter the context.
 *
 * @example
 * // Example: Composing a set state filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { setStateFactory } from 'collectype';
 *
 * type Person = { name: string; tags: Set<string> };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   setIsEmpty = setStateFactory<Person, this>(this, 'isEmpty');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: new Set(['a', 'b']) },
 *   { name: 'Bob', tags: new Set() },
 *   { name: 'Eve', tags: new Set(['b']) }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.setIsEmpty('tags');
 * // filtered contains the items where 'tags' is an empty Set
 *
 * @remarks
 * - Uses `PredicType.set.state` for set state checks on set fields.
 * - Returns a filtered context with items matching the set state.
 */
export function setStateFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.set.state>[1]) {
  return function <K extends keyof ByType<T, Set<any>>>(field: K): C {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.state(value, oper);
    });
  };
}
