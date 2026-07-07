import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for URL pathname comparison using `PredicType.url.pathname`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.url.pathname>[1]} oper - The URL pathname operation to perform.
 * @returns {<K extends keyof ByType<T, URL>>(field: K, target: Parameters<typeof PredicType.url.pathname>[2]) => C}
 *   Returns a function that takes a URL field on `T`, compares its `pathname`, and filters the context.
 *
 * @example
 * // Example based on sample/models/Person and sample/data/person
 * import { BaseFunctions, urlPathnameFactory } from 'collectype';
 * import { Person } from '../../../sample/models/Person';
 * import { people } from '../../../sample/data/person';
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   urlPathnameIncludes = urlPathnameFactory<Person, this>(this, 'includes');
 * }
 *
 * const fn = new PersonFunctions(people);
 * const filtered = fn.urlPathnameIncludes('website', '/people/');
 * // filtered contains people whose website pathname includes the expected segment
 *
 * @remarks
 * - Only fields of type `URL` are supported.
 * - The operation and target must match the signature of `PredicType.url.pathname`.
 * - Returns a new filtered context; does not mutate the original.
 */
export function urlPathnameFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.url.pathname>[1],
) {
  return function <K extends keyof ByType<T, URL>>(field: K, target: Parameters<typeof PredicType.url.pathname>[2]): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | undefined;
      if (!(value instanceof URL)) return false;
      return PredicType.url.pathname(value, oper, target);
    });
  };
}
