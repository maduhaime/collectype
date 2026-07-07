import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for query entry checks using `PredicType.query.entry`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.query.entry>[1]} oper - The query entry operation to perform.
 * @returns {<K extends keyof ByType<T, URL | URLSearchParams>>(field: K, target: Parameters<typeof PredicType.query.entry>[2]) => C}
 *   Returns a function that takes a query field on `T`, checks an entry, and filters the context.
 *
 * @example
 * // Example: query entry filter with URLSearchParams
 * import { BaseFunctions, queryEntryFactory } from 'collectype';
 *
 * type Post = { id: number; query: URLSearchParams };
 *
 * class PostFunctions extends BaseFunctions<Post> {
 *   queryContainsEntry = queryEntryFactory<Post, this>(this, 'contains_entry');
 * }
 *
 * const posts: Post[] = [
 *   { id: 1, query: new URLSearchParams('tag=ts&tag=ai') },
 *   { id: 2, query: new URLSearchParams('q=docs') }
 * ];
 *
 * const fn = new PostFunctions(posts);
 * const filtered = fn.queryContainsEntry('query', ['tag', 'ai']);
 * // filtered contains items where query has the ['tag', 'ai'] entry
 *
 * @remarks
 * - Supports fields of type `URL` and `URLSearchParams`.
 * - The operation must match the signature of `PredicType.query.entry`.
 * - Returns a new filtered context; does not mutate the original.
 */
export function queryEntryFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.query.entry>[1]) {
  return function <K extends keyof ByType<T, URL | URLSearchParams>>(field: K, target: Parameters<typeof PredicType.query.entry>[2]): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | URLSearchParams | undefined;
      if (!(value instanceof URL || value instanceof URLSearchParams)) return false;
      return PredicType.query.entry(value, oper, target);
    });
  };
}
