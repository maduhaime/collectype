import { StringStateOperEnum } from '../../enums/stringOperation';
import { stringStatePredicate } from '../../utils/predicates/stringStatePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for empty strings, designed for composition within the provided context.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { stringStateFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   stringIsEmpty = stringStateFactory.isEmpty(this);
 * }
 */
function isEmpty<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, string>>(field: K) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringStatePredicate(source, StringStateOperEnum.IS_EMPTY);
    });
  };
}

/**
 * Factory function that creates a reusable filter for non-empty strings, designed for composition within the provided context.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { stringStateFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   stringIsNotEmpty = stringStateFactory.isNotEmpty(this);
 * }
 */
function isNotEmpty<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, string>>(field: K) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringStatePredicate(source, StringStateOperEnum.IS_NOT_EMPTY);
    });
  };
}

export const stringStateFactory = {
  isEmpty,
  isNotEmpty,
};
