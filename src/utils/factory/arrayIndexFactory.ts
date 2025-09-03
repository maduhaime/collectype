import { ArrayIndexOperEnum } from '../../enums/arrayOperation';
import { ArrayIndexPredicate, arrayIndexPredicate } from '../../utils/predicates/arrayIndexPredicate';
import { ByType, Wherable } from '../../types/utility';

function indexEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, index, target);
    });
  };
}

function indexNotEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, index, target);
    });
  };
}

function indexIn<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_IN, index, target);
    });
  };
}

function indexNotIn<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, index, target);
    });
  };
}

function indexGreaterThan<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN, index, target);
    });
  };
}

function indexGreaterThanOrEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, index, target);
    });
  };
}

function indexLessThan<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN, index, target);
    });
  };
}

function indexLessThanOrEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS, index, target);
    });
  };
}

export const arrayIndexFactory = {
  indexEquals,
  indexNotEquals,
  indexIn,
  indexNotIn,
  indexGreaterThan,
  indexGreaterThanOrEquals,
  indexLessThan,
  indexLessThanOrEquals,
};
