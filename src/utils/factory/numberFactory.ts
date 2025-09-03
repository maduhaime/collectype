import { NumberOperEnum } from '../../enums/numberOperation';
import { NumberPredicate, numberPredicate } from '../../utils/predicates/numberPredicate';
import { ByType, Wherable } from '../../types/utility';

function equals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.EQUALS, target);
    });
  };
}

function notEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.NOT_EQUALS, target);
    });
  };
}

function lessThan<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.LESS_THAN, target);
    });
  };
}

function lessThanOrEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.LESS_THAN_OR_EQUALS, target);
    });
  };
}

function greaterThan<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.GREATER_THAN, target);
    });
  };
}

function greaterThanOrEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.GREATER_THAN_OR_EQUALS, target);
    });
  };
}

export const numberFactory = {
  equals,
  notEquals,
  lessThan,
  lessThanOrEquals,
  greaterThan,
  greaterThanOrEquals,
};
