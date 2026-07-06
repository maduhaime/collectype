import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for URL host comparison using `PredicType.url.host`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.url.host>[1]} oper - The URL host operation to perform.
 * @returns {<K extends keyof ByType<T, URL>>(field: K, target: Parameters<typeof PredicType.url.host>[2]) => C}
 *   Returns a function that takes a URL field on `T`, compares its `host`, and filters the context.
 */
export function urlHostFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.url.host>[1]) {
  return function <K extends keyof ByType<T, URL>>(field: K, target: Parameters<typeof PredicType.url.host>[2]): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | undefined;
      if (!(value instanceof URL)) return false;
      return PredicType.url.host(value, oper, target);
    });
  };
}
