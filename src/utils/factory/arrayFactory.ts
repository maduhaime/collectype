import { ArrayOperEnum } from '../../enums/arrayOperation';
import { ArrayPredicate, arrayPredicate } from '../../utils/predicates/arrayPredicate';
import { ByType, Wherable } from '../../types/utility';

function equals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.EQUALS, target);
    });
  };
}

function setEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.SET_EQUALS, target);
    });
  };
}

function includes<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.INCLUDES, target);
    });
  };
}

function excludes<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.EXCLUDES, target);
    });
  };
}

function someEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.SOME_EQUALS, target);
    });
  };
}

function everyEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.EVERY_EQUALS, target);
    });
  };
}

function isSubsetOf<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.IS_SUBSET_OF, target);
    });
  };
}

function isSupersetOf<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.IS_SUPERSET_OF, target);
    });
  };
}

function startsWith<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.STARTS_WITH, target);
    });
  };
}

function endsWith<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.ENDS_WITH, target);
    });
  };
}

function containsSubsequence<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.CONTAINS_SUBSEQUENCE, target);
    });
  };
}

function intersects<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.INTERSECTS, target);
    });
  };
}

function disjoint<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayPredicate(arr, ArrayOperEnum.DISJOINT, target);
    });
  };
}

export const arrayFactory = {
  equals,
  setEquals,
  includes,
  excludes,
  someEquals,
  everyEquals,
  isSubsetOf,
  isSupersetOf,
  startsWith,
  endsWith,
  containsSubsequence,
  intersects,
  disjoint,
};
