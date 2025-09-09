import { StringMembershipOperEnum } from '../../enums/stringOperation';
import { StringMembershipPredicate, stringMembershipPredicate } from '../predicates/stringMembershipPredicate';
import { StringKeys, Wherable } from '../../types/utility';

export const stringMembershipFactory = {
  /**
   * Factory function that creates a reusable filter for string membership (in array), designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target array, and applies the filter
   *
   * @example
   * import { stringMembershipFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   stringIsOneOf = stringMembershipFactory.isOneOf(this);
   *   stringIsNotOneOf = stringMembershipFactory.isNotOneOf(this);
   * }
   */
  isOneOf<T, C extends Wherable<T, C>>(ctx: C) {
    return function (field: StringKeys<T>, target: Parameters<StringMembershipPredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringMembershipPredicate(str, StringMembershipOperEnum.IS_ONE_OF, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for string non-membership (not in array), designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target array, and applies the filter
   *
   * @example
   * import { stringMembershipFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   stringIsNotOneOf = stringMembershipFactory.isNotOneOf(this);
   * }
   */
  isNotOneOf<T, C extends Wherable<T, C>>(ctx: C) {
    return function (field: StringKeys<T>, target: Parameters<StringMembershipPredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringMembershipPredicate(str, StringMembershipOperEnum.IS_NOT_ONE_OF, target);
      });
    };
  },
};
