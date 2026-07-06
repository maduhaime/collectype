import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for query key checks using `PredicType.query.key`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.query.key>[1]} oper - The query key operation to perform.
 * @returns {<K extends keyof ByType<T, URLSearchParams>>(field: K, target: Parameters<typeof PredicType.query.key>[2]) => C}
 *   Returns a function that takes a query field on `T`, checks a key, and filters the context.
 */
export function queryKeyFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.query.key>[1]) {
  return function <K extends keyof ByType<T, URLSearchParams>>(
    field: K,
    target: Parameters<typeof PredicType.query.key>[2],
  ): C {
    return ctx.where((item: T) => {
      const value = item[field] as URLSearchParams | undefined;
      if (!(value instanceof URLSearchParams)) return false;
      return PredicType.query.key(value, oper, target);
    });
  };
}
