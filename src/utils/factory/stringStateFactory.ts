import { StringStateOperEnum } from '../../enums/stringOperation';
import { stringStatePredicate } from '../../utils/predicates/stringStatePredicate';
import { ByType, Wherable } from '../../types/utility';

function isEmpty<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, string>>(field: K) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringStatePredicate(source, StringStateOperEnum.IS_EMPTY);
    });
  };
}

function isNotEmpty<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, string>>(field: K) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringStatePredicate(source, StringStateOperEnum.IS_NOT_EMPTY);
    });
  };
}

export const stringStateFactory = {
  isEmpty,
  isNotEmpty,
};
