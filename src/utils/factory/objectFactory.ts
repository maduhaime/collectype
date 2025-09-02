import { ObjectOperEnum } from '../../enums/objectOperation';
import { ObjectPredicate, objectPredicate } from '../../utils/predicates/objectPredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

function hasKey<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as object;
      return objectPredicate(source, ObjectOperEnum.HAS_KEY, target);
    });
  };
}

function hasAnyKey<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as object;
      return objectPredicate(source, ObjectOperEnum.HAS_ANY_KEY, target);
    });
  };
}

function hasAllKeys<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as object;
      return objectPredicate(source, ObjectOperEnum.HAS_ALL_KEYS, target);
    });
  };
}

function hasExactKeys<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as object;
      return objectPredicate(source, ObjectOperEnum.HAS_EXACT_KEYS, target);
    });
  };
}

function hasNoKeys<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as object;
      return objectPredicate(source, ObjectOperEnum.HAS_NO_KEYS, target);
    });
  };
}

export const objectFactory = {
  hasKey,
  hasAnyKey,
  hasAllKeys,
  hasExactKeys,
  hasNoKeys,
};
