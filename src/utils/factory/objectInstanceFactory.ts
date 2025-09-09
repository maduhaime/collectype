import { ObjectInstanceEnum } from '../../enums/objectOperation';
import { ObjectInstancePredicate, objectInstancePredicate } from '../predicates/objectInstancePredicate';
import { ByType, Wherable } from '../../types/utility';

export const objectInstanceFactory = {
  /**
   * Factory function that creates a reusable filter for object instanceOf, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target, and applies the filter
   *
   * @example
   * import { objectInstanceFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsInstanceOf = objectInstanceFactory.isInstanceOf(this);
   * }
   */
  isInstanceOf<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectInstancePredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectInstancePredicate(obj, ObjectInstanceEnum.IS_INSTANCE_OF, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for object constructor, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target, and applies the filter
   *
   * @example
   * import { objectInstanceFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsConstructor = objectInstanceFactory.isConstructor(this);
   * }
   */
  isConstructor<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectInstancePredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectInstancePredicate(obj, ObjectInstanceEnum.IS_CONSTRUCTOR, target);
      });
    };
  },
};
