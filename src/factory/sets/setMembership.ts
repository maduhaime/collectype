import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for set membership predicates using PredicType.set.membership.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type.
 * @param {C} ctx - The context supporting the `where` method.
 * @param {Parameters<typeof PredicType.set.membership>[1]} oper - The set membership operation (e.g., INCLUDES, EXCLUDES).
 * @returns {<K extends keyof ByType<T, Set<any>>>(field: K, target: Parameters<typeof PredicType.set.membership>[2]) => C}
 */
export function setMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.set.membership>[1],
) {
  return function <K extends keyof ByType<T, Set<any>>>(
    field: K,
    target: Parameters<typeof PredicType.set.membership>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.membership(value, oper, target);
    });
  };
}
