import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for URL state checks using `PredicType.url.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.url.state>[1]} oper - The URL state operation to perform.
 * @returns {<K extends keyof ByType<T, URL>>(field: K) => C}
 *   Returns a function that takes a URL field on `T`, evaluates its state, and filters the context.
 */
export function urlStateFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.url.state>[1]) {
  return function <K extends keyof ByType<T, URL>>(field: K): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | undefined;
      if (!(value instanceof URL)) return false;
      return PredicType.url.state(value, oper);
    });
  };
}
