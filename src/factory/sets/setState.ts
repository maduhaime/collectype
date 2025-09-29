import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for set state using `PredicType.set.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The set state operation to perform (see PredicType.set.state).
 * @returns A function that takes a field key and filters items where the set state matches the operation.
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
  return function <K extends keyof ByType<T, Set<any>>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.state(value, oper);
    });
  };
}
