import { ObjectStateEnum } from '../../enums/objectOperation';
import { objectStatePredicate } from '../predicates/objectStatePredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

/**
 * Factory for object state predicates.
 * Provides methods to compose predicates for state-related operations.
 */
export const objectStateFactory = {
  isEmpty<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_EMPTY);
      });
    };
  },
  isPlain<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_PLAIN);
      });
    };
  },
  hasNumericKeys<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.HAS_NUMERIC_KEYS);
      });
    };
  },
  hasCamelcaseKeys<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.HAS_CAMELCASE_KEYS);
      });
    };
  },
  hasNestedObject<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.HAS_NESTED_OBJECT);
      });
    };
  },
  isFrozen<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_FROZEN);
      });
    };
  },
  isSealed<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_SEALED);
      });
    };
  },
};
