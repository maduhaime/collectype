import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for query key checks using `PredicType.query.key`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.query.key>[1]} oper - The query key operation to perform.
 * @returns {<K extends keyof ByType<T, URL | URLSearchParams>>(field: K, target: Parameters<typeof PredicType.query.key>[2]) => C}
 *   Returns a function that takes a query field on `T`, checks a key, and filters the context.
 *
 * @example
 * // Example: query key filter with URL
 * import { BaseFunctions, queryKeyFactory } from 'collectype';
 *
 * type Post = { id: number; query: URL };
 *
 * class PostFunctions extends BaseFunctions<Post> {
 *   queryContainsKey = queryKeyFactory<Post, this>(this, 'contains_key');
 * }
 *
 * const posts: Post[] = [
 *   { id: 1, query: new URL('https://example.com/?tag=ts&tag=ai') },
 *   { id: 2, query: new URL('https://example.com/?q=docs') }
 * ];
 *
 * const fn = new PostFunctions(posts);
 * const filtered = fn.queryContainsKey('query', 'q');
 * // filtered contains items whose query has the key 'q'
 *
 * @remarks
 * - Supports fields of type `URL` and `URLSearchParams`.
 * - The operation must match the signature of `PredicType.query.key`.
 * - Returns a new filtered context; does not mutate the original.
 */
export function queryKeyFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.query.key>[1]) {
  return function <K extends keyof ByType<T, URL | URLSearchParams>>(field: K, target: Parameters<typeof PredicType.query.key>[2]): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | URLSearchParams | undefined;
      if (!(value instanceof URL || value instanceof URLSearchParams)) return false;
      return PredicType.query.key(value, oper, target);
    });
  };
}
