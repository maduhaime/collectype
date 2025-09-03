import { ArrayStateOperEnum } from '../../enums/arrayOperation';
import { arrayStatePredicate } from '../predicates/arrayStatePredicate';
import { ByType, Wherable } from '../../types/utility';

function isEmpty<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayStatePredicate(arr, ArrayStateOperEnum.IS_EMPTY);
    });
  };
}

function isNotEmpty<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayStatePredicate(arr, ArrayStateOperEnum.IS_NOT_EMPTY);
    });
  };
}

export const arrayStateFactory = {
  isEmpty,
  isNotEmpty,
};
