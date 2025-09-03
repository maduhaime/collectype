import { RangeOperEnum } from '../../enums/rangeOperation';
import { NumberRangePredicate, numberRangePredicate } from '../../utils/predicates/numberRangePredicate';
import { ByType, Wherable } from '../../types/utility';

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
