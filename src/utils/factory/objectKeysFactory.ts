import { ObjectKeysEnum } from '../../enums/objectOperation';
import { objectKeysPredicate } from '../predicates/objectKeysPredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

/**
 * Factory for object keys predicates.
 * Provides methods to compose predicates for key-related operations.
 */

export const objectKeysFactory = {
  hasAnyProperty<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, [], ObjectKeysEnum.HAS_ANY_PROPERTY);
      });
    };
  },
  hasKey<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, key: string) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, key, ObjectKeysEnum.HAS_KEY);
      });
    };
  },
  hasAllKeys<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, keys: string[]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, keys, ObjectKeysEnum.HAS_ALL_KEYS);
      });
    };
  },
  hasAnyKey<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, keys: string[]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, keys, ObjectKeysEnum.HAS_ANY_KEY);
      });
    };
  },
  hasExactKeys<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, keys: string[]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, keys, ObjectKeysEnum.HAS_EXACT_KEYS);
      });
    };
  },
  hasNoKeys<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, keys: string[] = []) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, keys, ObjectKeysEnum.HAS_NO_KEYS);
      });
    };
  },
};
