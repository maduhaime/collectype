import { PredicType } from 'predictype';

import { ByType, Wherable } from '../../types/utility.js';

/**
 * Creates a predicate filter for URL hash comparison using `PredicType.url.hash`.
 *
 * @template T - The item type in the collection.
 * @template C - The Wherable context type (must extend Wherable<T, C>).
 * @param {C} ctx - The context (usually a collection) supporting the `where` method.
 * @param {Parameters<typeof PredicType.url.hash>[1]} oper - The URL hash operation to perform.
 * @returns {<K extends keyof ByType<T, URL>>(field: K, target: Parameters<typeof PredicType.url.hash>[2]) => C}
 *   Returns a function that takes a URL field on `T`, compares its `hash`, and filters the context.
 *
 * @example
 * // Example based on sample/models/Person and sample/data/person
 * import { BaseFunctions, urlHashFactory } from 'collectype';
 * import { Person } from '../../../sample/models/Person';
 * import { people } from '../../../sample/data/person';
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   urlHashEquals = urlHashFactory<Person, this>(this, 'equals');
 * }
 *
 * const fn = new PersonFunctions(people);
 * const filtered = fn.urlHashEquals('website', '');
 * // filtered contains people whose website hash matches the target string
 *
 * @remarks
 * - Only fields of type `URL` are supported.
 * - The operation and target must match the signature of `PredicType.url.hash`.
 * - Returns a new filtered context; does not mutate the original.
 */
export function urlHashFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.url.hash>[1]) {
  return function <K extends keyof ByType<T, URL>>(field: K, target: Parameters<typeof PredicType.url.hash>[2]): C {
    return ctx.where((item: T) => {
      const value = item[field] as URL | undefined;
      if (!(value instanceof URL)) return false;
      return PredicType.url.hash(value, oper, target);
    });
  };
}
