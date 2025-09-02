import { RangeOperEnum } from '../../enums/rangeOperation';
import { DateRangePredicate, dateRangePredicate } from '../../utils/predicates/dateRangePredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

function inRange<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<DateRangePredicate>[2],
    max: Parameters<DateRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return dateRangePredicate(source, RangeOperEnum.IN_RANGE, min, max);
    });
  };
}

function outRange<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<DateRangePredicate>[2],
    max: Parameters<DateRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return dateRangePredicate(source, RangeOperEnum.OUT_RANGE, min, max);
    });
  };
}

function strictInRange<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<DateRangePredicate>[2],
    max: Parameters<DateRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return dateRangePredicate(source, RangeOperEnum.STRICT_IN_RANGE, min, max);
    });
  };
}

function strictOutRange<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<DateRangePredicate>[2],
    max: Parameters<DateRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
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
