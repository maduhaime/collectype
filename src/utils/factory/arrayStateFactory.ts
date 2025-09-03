import { ArrayStateOperEnum } from '../../enums/arrayOperation';
import { arrayStatePredicate } from '../predicates/arrayStatePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for array state fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayStateFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIsEmpty = arrayStateFactory.isEmpty(this);
 * }
 */
function isEmpty<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayStatePredicate(arr, ArrayStateOperEnum.IS_EMPTY);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array state fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayStateFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIsNotEmpty = arrayStateFactory.isNotEmpty(this);
 * }
 */
function isNotEmpty<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayStatePredicate(arr, ArrayStateOperEnum.IS_NOT_EMPTY);
    });
  };
}

export const arrayStateFactory = {
  isEmpty,
  isNotEmpty,
};
