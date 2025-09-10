import { ObjectAttributesEnum } from '../../enums/objectOperation';
import { ObjectAttributesPredicate, objectAttributesPredicate } from '../predicates/objectAttributesPredicate';
import { ByType, Wherable } from '../../types/utility';

export const objectAttributesFactory = {
  /**
   * Factory function that creates a reusable filter for object writability, designed for composition within the provided context.
   *
   * @template T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target, and applies the filter
   *
   * @example
   * import { objectAttributesFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsWritable = objectAttributesFactory.isWritable(this);
   * }
   */
  isWritable<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectAttributesPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object | undefined;
        if (obj === undefined) return false;
        return objectAttributesPredicate(obj, ObjectAttributesEnum.IS_WRITABLE, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for object enumerability, designed for composition within the provided context.
   *
   * @template T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target, and applies the filter
   *
   * @example
   * import { objectAttributesFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsEnumerable = objectAttributesFactory.isEnumerable(this);
   * }
   */
  isEnumerable<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectAttributesPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object | undefined;
        if (obj === undefined) return false;
        return objectAttributesPredicate(obj, ObjectAttributesEnum.IS_ENUMERABLE, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for object configurability, designed for composition within the provided context.
   *
   * @template T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target, and applies the filter
   *
   * @example
   * import { objectAttributesFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsConfigurable = objectAttributesFactory.isConfigurable(this);
   * }
   */
  isConfigurable<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectAttributesPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object | undefined;
        if (obj === undefined) return false;
        return objectAttributesPredicate(obj, ObjectAttributesEnum.IS_CONFIGURABLE, target);
      });
    };
  },
};
