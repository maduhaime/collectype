import { DateOperEnum } from '../../enums/dateOperation';
import { DatePredicate, datePredicate } from '../../utils/predicates/datePredicate';
import { ByType, Wherable } from '../../types/utility';

function equals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.EQUALS, target);
    });
  };
}

function notEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.NOT_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for date equality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target date, and applies the filter
 *
 * @example
 * import { dateFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   dateEquals = dateFactory.equals(this);
 * }
 */
function occursBefore<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_BEFORE, target);
    });
  };
}

function occursOnOrBefore<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_ON_OR_BEFORE, target);
    });
  };
}

function occursAfter<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_AFTER, target);
    });
  };
}

function occursOnOrAfter<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_ON_OR_AFTER, target);
    });
  };
}

export const dateFactory = {
  equals,
  notEquals,
  occursBefore,
  occursOnOrBefore,
  occursAfter,
  occursOnOrAfter,
};
