import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for URL origin comparison using `PredicType.url.origin`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.url.origin>[1]} oper - The URL origin operation to perform.
 * @returns {<K extends keyof ByType<T, URL>>(field: K, target: Parameters<typeof PredicType.url.origin>[2]) => C}
 *   Returns a function that takes a URL field on `T`, compares its `origin`, and filters the context.
 *
 * @example
 * // Example based on sample/models/Person and sample/data/person
 * import { BaseFunctions, urlOriginFactory } from 'collectype';
 * import { Person } from '../../../sample/models/Person';
 * import { people } from '../../../sample/data/person';
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   urlOriginStartsWith = urlOriginFactory<Person, this>(this, 'starts_with');
 * }
 *
 * const fn = new PersonFunctions(people);
 * const filtered = fn.urlOriginStartsWith('website', 'https://person-');
 * // filtered contains people whose website origin starts with the target prefix
 *
 * @remarks
 * - Only fields of type `URL` are supported.
 * - The operation and target must match the signature of `PredicType.url.origin`.
 * - Returns a new filtered context; does not mutate the original.
 */
export function urlOriginFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.url.origin>[1],
) {
  return function <K extends keyof ByType<T, URL>>(field: K, target: Parameters<typeof PredicType.url.origin>[2]): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | undefined;
      if (!(value instanceof URL)) return false;
      return PredicType.url.origin(value, oper, target);
    });
  };
}
