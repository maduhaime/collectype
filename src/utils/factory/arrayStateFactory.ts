import { ArrayStateOperEnum } from '../../enums/arrayOperation';
import { arrayStatePredicate } from '../predicates/arrayStatePredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

function isEmpty<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayStatePredicate(arr, ArrayStateOperEnum.IS_EMPTY);
    });
  };
}

function isNotEmpty<T>(ctx: ContextWithWhere<T>) {
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
