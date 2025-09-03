import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { ArraySizePredicate, arraySizePredicate } from '../../utils/predicates/arraySizePredicate';
import { ByType, Wherable } from '../../types/utility';

function lengthEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_EQUALS, n);
    });
  };
}

function lengthGreaterThan<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN, n);
    });
  };
}

function lengthGreaterThanOrEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, n);
    });
  };
}

function lengthLessThan<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, n);
    });
  };
}

function lengthLessThanOrEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
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
