import { RangeOperEnum } from '../../enums/rangeOperation';
import { DateRangePredicate, dateRangePredicate } from '../../utils/predicates/dateRangePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for date ranges (inRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max date, and applies the filter
 *
 * @example
 * import { dateRangeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   dateInRange = dateRangeFactory.inRange(this);
 * }
 */
function inRange<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<DateRangePredicate>[2],
    max: Parameters<DateRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return dateRangePredicate(source, RangeOperEnum.IN_RANGE, min, max);
    });
  };
}

/**
 * Factory function that creates a reusable filter for date ranges (outRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max date, and applies the filter
 *
 * @example
 * import { dateRangeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   dateOutRange = dateRangeFactory.outRange(this);
 * }
 */
function outRange<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<DateRangePredicate>[2],
    max: Parameters<DateRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return dateRangePredicate(source, RangeOperEnum.OUT_RANGE, min, max);
    });
  };
}

/**
 * Factory function that creates a reusable filter for date ranges (strictInRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max date, and applies the filter
 *
 * @example
 * import { dateRangeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   dateStrictInRange = dateRangeFactory.strictInRange(this);
 * }
 */
function strictInRange<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<DateRangePredicate>[2],
    max: Parameters<DateRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return dateRangePredicate(source, RangeOperEnum.STRICT_IN_RANGE, min, max);
    });
  };
}

/**
 * Factory function that creates a reusable filter for date ranges (strictOutRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max date, and applies the filter
 *
 * @example
 * import { dateRangeFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   dateStrictOutRange = dateRangeFactory.strictOutRange(this);
 * }
 */
function strictOutRange<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<DateRangePredicate>[2],
    max: Parameters<DateRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return dateRangePredicate(source, RangeOperEnum.STRICT_OUT_RANGE, min, max);
    });
  };
}

export const dateRangeFactory = {
  inRange,
  outRange,
  strictInRange,
  strictOutRange,
};
