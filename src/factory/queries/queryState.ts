import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for query state checks using `PredicType.query.state`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.query.state>[1]} oper - The query state operation to perform.
 * @returns {<K extends keyof ByType<T, URL | URLSearchParams>>(field: K) => C}
 *   Returns a function that takes a query field on `T`, checks its state, and filters the context.
 *
 * @example
 * // Example: query state filter with URL
 * import { BaseFunctions, queryStateFactory } from 'collectype';
 *
 * type Post = { id: number; query: URL };
 *
 * class PostFunctions extends BaseFunctions<Post> {
 *   queryIsEmpty = queryStateFactory<Post, this>(this, 'is_empty');
 * }
 *
 * const posts: Post[] = [
 *   { id: 1, query: new URL('https://example.com/?tag=ts') },
 *   { id: 2, query: new URL('https://example.com/') }
 * ];
 *
 * const fn = new PostFunctions(posts);
 * const filtered = fn.queryIsEmpty('query');
 * // filtered contains items whose query is empty
 *
 * @remarks
 * - Supports fields of type `URL` and `URLSearchParams`.
 * - The operation must match the signature of `PredicType.query.state`.
 * - Returns a new filtered context; does not mutate the original.
 */
export function queryStateFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.query.state>[1]) {
  return function <K extends keyof ByType<T, URL | URLSearchParams>>(field: K): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | URLSearchParams | undefined;
      if (!(value instanceof URL || value instanceof URLSearchParams)) return false;
      return PredicType.query.state(value, oper);
    });
  };
}
