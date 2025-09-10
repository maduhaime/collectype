import { StringStateOperEnum } from '../../enums/stringOperation';
import { stringStatePredicate } from '../../utils/predicates/stringStatePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for empty strings, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { stringStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   city?: string;
 * }
 *
 * const people = [
 *   { name: 'Alice', city: '' },
 *   { name: 'Bob', city: 'London' },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringIsEmpty = stringStateFactory.isEmpty(this);
 * }
   
 * const fn = new PersonFunctions(people);
 * fn.stringIsEmpty('city');
 * // Result: [{ name: 'Alice', city: '' }]
 */
function isEmpty<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K) {
    return ctx.where((item: T) => {
      const source = item[field] as string | undefined;
      if (source === undefined) return false;
      return stringStatePredicate(source, StringStateOperEnum.IS_EMPTY);
    });
  };
}

/**
 * Factory function that creates a reusable filter for non-empty strings, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { stringStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   city?: string;
 * }
 *
 * const people = [
 *   { name: 'Alice', city: '' },
 *   { name: 'Bob', city: 'London' },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringIsNotEmpty = stringStateFactory.isNotEmpty(this);
 * }
   
 * const fn = new PersonFunctions(people);
 * fn.stringIsNotEmpty('city');
 * // Result: [{ name: 'Bob', city: 'London' }]
 */
function isNotEmpty<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K) {
    return ctx.where((item: T) => {
      const source = item[field] as string | undefined;
      if (source === undefined) return false;
      return stringStatePredicate(source, StringStateOperEnum.IS_NOT_EMPTY);
    });
  };
}

export const stringStateFactory = {
  isEmpty,
  isNotEmpty,
};
