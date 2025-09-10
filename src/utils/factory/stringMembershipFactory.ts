import { StringMembershipOperEnum } from '../../enums/stringOperation';
import { StringMembershipPredicate, stringMembershipPredicate } from '../predicates/stringMembershipPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for string membership (in array), designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target array, and applies the filter
 *
 * @example
 * import { stringMembershipFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   city?: string;
 * }
 *
 * const people = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'London' },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringIsOneOf = stringMembershipFactory.isOneOf(this);
 *   stringIsNotOneOf = stringMembershipFactory.isNotOneOf(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.stringIsOneOf('city', ['Paris', 'Berlin']);
 * // Result: [{ name: 'Alice', city: 'Paris' }]
 */
function isOneOf<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringMembershipPredicate>[2]) {
    return ctx.where((item: T) => {
      const str = item[field] as string | undefined;
      if (str === undefined) return false;
      return stringMembershipPredicate(str, StringMembershipOperEnum.IS_ONE_OF, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string non-membership (not in array), designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target array, and applies the filter
 *
 * @example
 * import { stringMembershipFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   city?: string;
 * }
 *
 * const people = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'London' },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringIsNotOneOf = stringMembershipFactory.isNotOneOf(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.stringIsNotOneOf('city', ['Paris', 'Berlin']);
 * // Result: [{ name: 'Bob', city: 'London' }]
 */
function isNotOneOf<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringMembershipPredicate>[2]) {
    return ctx.where((item: T) => {
      const str = item[field] as string | undefined;
      if (str === undefined) return false;
      return stringMembershipPredicate(str, StringMembershipOperEnum.IS_NOT_ONE_OF, target);
    });
  };
}

export const stringMembershipFactory = {
  isOneOf,
  isNotOneOf,
};
