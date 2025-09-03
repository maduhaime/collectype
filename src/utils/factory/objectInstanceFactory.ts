import { ObjectInstanceEnum } from '../../enums/objectOperation';
import { ObjectInstancePredicate, objectInstancePredicate } from '../predicates/objectInstancePredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

/**
 * Factory for object instance predicates.
 * Provides methods to compose predicates for instance-related operations.
 */
export const objectInstanceFactory = {
  isInstanceOf<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectInstancePredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectInstancePredicate(obj, ObjectInstanceEnum.IS_INSTANCE_OF, target);
      });
    };
  },
  isConstructor<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectInstancePredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectInstancePredicate(obj, ObjectInstanceEnum.IS_CONSTRUCTOR, target);
      });
    };
  },
};
