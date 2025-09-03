import { StringSizeOperEnum } from '../../enums/stringOperation';
import { StringSizePredicate, stringSizePredicate } from '../predicates/stringSizePredicate';
import { ByType, Wherable } from '../../types/utility';

export const stringSizeFactory = {
  /**
   * Factory function that creates a reusable filter for string length equality, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target length, and applies the filter
   *
   * @example
   * import { stringSizeFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   stringLengthEquals = stringSizeFactory.lengthEquals(this);
   * }
   */
  lengthEquals<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_EQUALS, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for string length greater than, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target length, and applies the filter
   *
   * @example
   * import { stringSizeFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   stringLengthGreaterThan = stringSizeFactory.lengthGreaterThan(this);
   * }
   */
  lengthGreaterThan<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_GREATER_THAN, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for string length greater than or equals, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target length, and applies the filter
   *
   * @example
   * import { stringSizeFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   stringLengthGreaterThanOrEquals = stringSizeFactory.lengthGreaterThanOrEquals(this);
   * }
   */
  lengthGreaterThanOrEquals<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for string length less than, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target length, and applies the filter
   *
   * @example
   * import { stringSizeFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   stringLengthLessThan = stringSizeFactory.lengthLessThan(this);
   * }
   */
  lengthLessThan<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_LESS_THAN, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for string length less than or equals, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target length, and applies the filter
   *
   * @example
   * import { stringSizeFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   stringLengthLessThanOrEquals = stringSizeFactory.lengthLessThanOrEquals(this);
   * }
   */
  lengthLessThanOrEquals<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, target);
      });
    };
  },
};
