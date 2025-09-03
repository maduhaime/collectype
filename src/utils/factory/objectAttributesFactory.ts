import { ObjectAttributesEnum } from '../../enums/objectOperation';
import { ObjectAttributesPredicate, objectAttributesPredicate } from '../predicates/objectAttributesPredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

/**
 * Factory for object attributes predicates.
 * Provides methods to compose predicates for object attribute operations.
 */
export const objectAttributesFactory = {
  isWritable<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectAttributesPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectAttributesPredicate(obj, ObjectAttributesEnum.IS_WRITABLE, target);
      });
    };
  },
  isEnumerable<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectAttributesPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectAttributesPredicate(obj, ObjectAttributesEnum.IS_ENUMERABLE, target);
      });
    };
  },
  isConfigurable<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectAttributesPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectAttributesPredicate(obj, ObjectAttributesEnum.IS_CONFIGURABLE, target);
      });
    };
  },
};
