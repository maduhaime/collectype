import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { ArraySizePredicate, arraySizePredicate } from '../../utils/predicates/arraySizePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for array length equality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   lengthEquals = arraySizeFactory.lengthEquals(this);
 * }
 */
function lengthEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_EQUALS, n);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array length greater than, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   lengthGreaterThan = arraySizeFactory.lengthGreaterThan(this);
 * }
 */
function lengthGreaterThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN, n);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array length greater than or equals, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   lengthGreaterThanOrEquals = arraySizeFactory.lengthGreaterThanOrEquals(this);
 * }
 */
function lengthGreaterThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, n);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array length less than, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   lengthLessThan = arraySizeFactory.lengthLessThan(this);
 * }
 */
function lengthLessThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, n);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array length less than or equals, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   lengthLessThanOrEquals = arraySizeFactory.lengthLessThanOrEquals(this);
 * }
 */
function lengthLessThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, n);
    });
  };
}

export const arraySizeFactory = {
  lengthEquals,
  lengthGreaterThan,
  lengthGreaterThanOrEquals,
  lengthLessThan,
  lengthLessThanOrEquals,
};
