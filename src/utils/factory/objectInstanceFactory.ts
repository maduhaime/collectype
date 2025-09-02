import { ObjectInstanceEnum } from '../../enums/objectOperation';
import { objectInstancePredicate } from '../predicates/objectInstancePredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

/**
 * Factory for object instance predicates.
 * Provides methods to compose predicates for instance-related operations.
 */
export const objectInstanceFactory = {
  isInstanceOf<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, constructor: Function) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectInstancePredicate(obj, constructor, ObjectInstanceEnum.IS_INSTANCE_OF);
      });
    };
  },
  isConstructor<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectInstancePredicate(obj, Function, ObjectInstanceEnum.IS_CONSTRUCTOR);
      });
    };
  },
};
