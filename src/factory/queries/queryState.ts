import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for query state checks using `PredicType.query.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.query.state>[1]} oper - The query state operation to perform.
 * @returns {<K extends keyof ByType<T, URLSearchParams>>(field: K) => C}
 *   Returns a function that takes a query field on `T`, checks its state, and filters the context.
 */
export function queryStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.query.state>[1],
) {
  return function <K extends keyof ByType<T, URLSearchParams>>(field: K): C {
    return ctx.where((item: T) => {
      const value = item[field] as URLSearchParams | undefined;
      if (!(value instanceof URLSearchParams)) return false;
      return PredicType.query.state(value, oper);
    });
  };
}
