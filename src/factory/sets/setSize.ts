import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for set size using `PredicType.set.size`.
 *
 * @template T - The item type in the collection.
 * @template C - The context type, extending Wherable.
 * @param ctx - The context instance (e.g., a collection or query object).
 * @param oper - The set size operation to perform (see PredicType.set.size).
 * @returns A function that takes a field key and a target size, and filters items where the set size matches the operation.
 *
 * @example
 * // Example: Composing a set size filter as a property, homogeneous model
 * import { BaseFunctions } from 'collectype';
 * import { setSizeFactory } from 'collectype';
 *
 * type Person = { name: string; tags: Set<string> };
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   setHasSize = setSizeFactory<Person, this>(this, 'eq');
 * }
 *
 * // Usage:
 * const people: Person[] = [
 *   { name: 'Alice', tags: new Set(['a', 'b']) },
 *   { name: 'Bob', tags: new Set(['a']) },
 *   { name: 'Eve', tags: new Set(['b', 'c']) }
 * ];
 * const fn = new PersonFunctions(people);
 * const filtered = fn.setHasSize('tags', 2);
 * // filtered contains the items where 'tags' has a size of 2
 *
 * @remarks
 * - Uses `PredicType.set.size` for set size checks on set fields.
 * - Returns a filtered context with items matching the set size.
 */
export function setSizeFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.set.size>[1]) {
  return function <K extends keyof ByType<T, Set<any>>>(field: K, target: Parameters<typeof PredicType.set.size>[2]) {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.size(value, oper, target);
    });
  };
}
