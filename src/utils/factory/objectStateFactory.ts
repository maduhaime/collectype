import { ObjectStateEnum } from '../../enums/objectOperation';
import { objectStatePredicate } from '../predicates/objectStatePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory for object state predicates.
 * Provides methods to compose predicates for state-related operations.
 */
export const objectStateFactory = {
  isEmpty<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_EMPTY);
      });
    };
  },
  isPlain<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_PLAIN);
      });
    };
  },
  hasNumericKeys<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.HAS_NUMERIC_KEYS);
      });
    };
  },
  hasCamelcaseKeys<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.HAS_CAMELCASE_KEYS);
      });
    };
  },
  hasNestedObject<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.HAS_NESTED_OBJECT);
      });
    };
  },
  isFrozen<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_FROZEN);
      });
    };
  },
  isSealed<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_SEALED);
      });
    };
  },
};
