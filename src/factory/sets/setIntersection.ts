import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for set intersection using `PredicType.set.intersection`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.set.comparison>[1]} oper - The set intersection operation to perform (see PredicType.set.comparison).
 * @returns {<K extends keyof ByType<T, Set<any>>>(field: K, target: Parameters<typeof PredicType.set.comparison>[2]) => C}
 *   Returns a function that takes a field (of type Set on T) and a target set, and applies the set intersection predicate to filter the context.
 *
 * @remarks
 * - Uses `PredicType.set.intersection` for set intersection on set fields.
 * - Returns a filtered context with items matching the set intersection.
 */
export function setIntersectionFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.set.intersection>[1],
) {
  return function <K extends keyof ByType<T, Set<any>>>(
    field: K,
    target: Parameters<typeof PredicType.set.intersection>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.intersection(value, oper, target);
    });
  };
}
