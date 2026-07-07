import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for query value checks using `PredicType.query.value`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.query.value>[1]} oper - The query value operation to perform.
 * @returns {<K extends keyof ByType<T, URL | URLSearchParams>>(field: K, target: Parameters<typeof PredicType.query.value>[2]) => C}
 *   Returns a function that takes a query field on `T`, checks a value, and filters the context.
 *
 * @example
 * // Example: query value filter with URLSearchParams
 * import { BaseFunctions, queryValueFactory } from 'collectype';
 *
 * type Post = { id: number; query: URLSearchParams };
 *
 * class PostFunctions extends BaseFunctions<Post> {
 *   queryContainsValue = queryValueFactory<Post, this>(this, 'contains_value');
 * }
 *
 * const posts: Post[] = [
 *   { id: 1, query: new URLSearchParams('tag=ts&tag=ai') },
 *   { id: 2, query: new URLSearchParams('q=docs') }
 * ];
 *
 * const fn = new PostFunctions(posts);
 * const filtered = fn.queryContainsValue('query', 'ai');
 * // filtered contains items whose query contains the value 'ai'
 *
 * @remarks
 * - Supports fields of type `URL` and `URLSearchParams`.
 * - The operation must match the signature of `PredicType.query.value`.
 * - Returns a new filtered context; does not mutate the original.
 */
export function queryValueFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.query.value>[1]) {
  return function <K extends keyof ByType<T, URL | URLSearchParams>>(field: K, target: Parameters<typeof PredicType.query.value>[2]): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | URLSearchParams | undefined;
      if (!(value instanceof URL || value instanceof URLSearchParams)) return false;
      return PredicType.query.value(value, oper, target);
    });
  };
}
