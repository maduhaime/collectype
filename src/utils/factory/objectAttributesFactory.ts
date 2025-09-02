import { ObjectAttributesEnum } from '../../enums/objectOperation';
import { objectAttributesPredicate } from '../predicates/objectAttributesPredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

/**
 * Factory for object attributes predicates.
 * Provides methods to compose predicates for object attribute operations.
 */
export const objectAttributesFactory = {
  isWritable<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, key: string) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectAttributesPredicate(obj, key, ObjectAttributesEnum.IS_WRITABLE);
      });
    };
  },
  isEnumerable<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, key: string) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectAttributesPredicate(obj, key, ObjectAttributesEnum.IS_ENUMERABLE);
      });
    };
  },
  isConfigurable<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, key: string) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectAttributesPredicate(obj, key, ObjectAttributesEnum.IS_CONFIGURABLE);
      });
    };
  },
};
