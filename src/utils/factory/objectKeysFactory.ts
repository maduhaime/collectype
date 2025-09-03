import { ObjectKeysEnum } from '../../enums/objectOperation';
import { ObjectKeysPredicate, objectKeysPredicate } from '../predicates/objectKeysPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory for object keys predicates.
 * Provides methods to compose predicates for key-related operations.
 */

export const objectKeysFactory = {
  hasKey<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_KEY, target);
      });
    };
  },
  hasAllKeys<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_ALL_KEYS, target);
      });
    };
  },
  hasAnyKey<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_ANY_KEY, target);
      });
    };
  },
  hasExactKeys<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_EXACT_KEYS, target);
      });
    };
  },
  hasNoKeys<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_NO_KEYS, target);
      });
    };
  },
};
