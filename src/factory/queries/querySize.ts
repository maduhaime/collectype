import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for query size checks using `PredicType.query.size`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.query.size>[1]} oper - The query size operation to perform.
 * @returns {<K extends keyof ByType<T, URL | URLSearchParams>>(field: K, target: Parameters<typeof PredicType.query.size>[2]) => C}
 *   Returns a function that takes a query field on `T`, checks its size, and filters the context.
 *
 * @example
 * // Example: query size filter with URLSearchParams
 * import { BaseFunctions, querySizeFactory } from 'collectype';
 *
 * type Post = { id: number; query: URLSearchParams };
 *
 * class PostFunctions extends BaseFunctions<Post> {
 *   querySizeGreaterThan = querySizeFactory<Post, this>(this, 'size_greater_than');
 * }
 *
 * const posts: Post[] = [
 *   { id: 1, query: new URLSearchParams('tag=ts&tag=ai') },
 *   { id: 2, query: new URLSearchParams('q=docs') }
 * ];
 *
 * const fn = new PostFunctions(posts);
 * const filtered = fn.querySizeGreaterThan('query', 1);
 * // filtered contains items whose query size is greater than 1
 *
 * @remarks
 * - Supports fields of type `URL` and `URLSearchParams`.
 * - The operation must match the signature of `PredicType.query.size`.
 * - Returns a new filtered context; does not mutate the original.
 */
export function querySizeFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.query.size>[1]) {
  return function <K extends keyof ByType<T, URL | URLSearchParams>>(field: K, target: Parameters<typeof PredicType.query.size>[2]): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | URLSearchParams | undefined;
      if (!(value instanceof URL || value instanceof URLSearchParams)) return false;
      return PredicType.query.size(value, oper, target);
    });
  };
}
