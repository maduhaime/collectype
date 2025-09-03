import { DateOperEnum } from '../../enums/dateOperation';
import { DatePredicate, datePredicate } from '../../utils/predicates/datePredicate';
import { ByType, Wherable } from '../../types/utility';

function equals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.EQUALS, target);
    });
  };
}

function notEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.NOT_EQUALS, target);
    });
  };
}

function occursBefore<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_BEFORE, target);
    });
  };
}

function occursOnOrBefore<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_ON_OR_BEFORE, target);
    });
  };
}

function occursAfter<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return datePredicate(source, DateOperEnum.OCCURS_AFTER, target);
    });
  };
}

function occursOnOrAfter<T>(ctx: Wherable<T>) {
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
