import { RangeOperEnum } from '../../enums/rangeOperation';
import { NumberRangePredicate, numberRangePredicate } from '../../utils/predicates/numberRangePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for number ranges (inRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max number, and applies the filter
 *
 * @example
 * import { numberRangeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberInRange = numberRangeFactory.inRange(this);
 * }
 */
function inRange<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<NumberRangePredicate>[2],
    max: Parameters<NumberRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberRangePredicate(source, RangeOperEnum.IN_RANGE, min, max);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number ranges (outRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max number, and applies the filter
 *
 * @example
 * import { numberRangeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberOutRange = numberRangeFactory.outRange(this);
 * }
 */
function outRange<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<NumberRangePredicate>[2],
    max: Parameters<NumberRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberRangePredicate(source, RangeOperEnum.OUT_RANGE, min, max);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number ranges (strictInRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max number, and applies the filter
 *
 * @example
 * import { numberRangeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberStrictInRange = numberRangeFactory.strictInRange(this);
 * }
 */
function strictInRange<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<NumberRangePredicate>[2],
    max: Parameters<NumberRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberRangePredicate(source, RangeOperEnum.STRICT_IN_RANGE, min, max);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number ranges (strictOutRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max number, and applies the filter
 *
 * @example
 * import { numberRangeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberStrictOutRange = numberRangeFactory.strictOutRange(this);
 * }
 */
function strictOutRange<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<NumberRangePredicate>[2],
    max: Parameters<NumberRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberRangePredicate(source, RangeOperEnum.STRICT_OUT_RANGE, min, max);
    });
  };
}

export const numberRangeFactory = {
  inRange,
  outRange,
  strictInRange,
  strictOutRange,
};
