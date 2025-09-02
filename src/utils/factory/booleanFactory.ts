import { BooleanOperEnum } from '../../enums/booleanOperation';
import { BooleanPredicate, booleanPredicate } from '../../utils/predicates/booleanPredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

function equals<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, boolean>>(field: K, target: Parameters<BooleanPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as boolean;
      return booleanPredicate(source, BooleanOperEnum.EQUALS, target);
    });
  };
}

function notEquals<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, boolean>>(field: K, target: Parameters<BooleanPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as boolean;
      return booleanPredicate(source, BooleanOperEnum.NOT_EQUALS, target);
    });
  };
}

export const booleanFactory = {
  equals,
  notEquals,
};
