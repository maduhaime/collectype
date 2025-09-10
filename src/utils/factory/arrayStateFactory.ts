import { ArrayStateOperEnum } from '../../enums/arrayOperation';
import { arrayStatePredicate } from '../predicates/arrayStatePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for array state fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   tags?: string[];
 * }
 *
 * const people = [
 *   { name: 'Alice', tags: [] },
 *   { name: 'Bob', tags: ['dev'] },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arrayIsEmpty = arrayStateFactory.isEmpty(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.arrayIsEmpty('tags');
 * // Result: [{ name: 'Alice', tags: [] }]
 */
function isEmpty<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arrayStatePredicate(arr, ArrayStateOperEnum.IS_EMPTY);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array state fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   tags?: string[];
 * }
 *
 * const people = [
 *   { name: 'Alice', tags: [] },
 *   { name: 'Bob', tags: ['dev'] },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   arrayIsNotEmpty = arrayStateFactory.isNotEmpty(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.arrayIsNotEmpty('tags');
 * // Result: [{ name: 'Bob', tags: ['dev'] }]
 */
function isNotEmpty<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arrayStatePredicate(arr, ArrayStateOperEnum.IS_NOT_EMPTY);
    });
  };
}

export const arrayStateFactory = {
  isEmpty,
  isNotEmpty,
};
