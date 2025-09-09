import { ObjectStateEnum } from '../../enums/objectOperation';
import { objectStatePredicate } from '../predicates/objectStatePredicate';
import { ByType, Wherable } from '../../types/utility';

export const objectStateFactory = {
  /**
   * Factory function that creates a reusable filter for empty objects, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and applies the filter
   *
   * @example
   * import { objectStateFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsEmpty = objectStateFactory.isEmpty(this);
   * }
   */
  isEmpty<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_EMPTY);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for plain objects, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and applies the filter
   *
   * @example
   * import { objectStateFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsPlain = objectStateFactory.isPlain(this);
   * }
   */
  isPlain<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_PLAIN);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for objects with numeric keys, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and applies the filter
   *
   * @example
   * import { objectStateFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectHasNumericKeys = objectStateFactory.hasNumericKeys(this);
   * }
   */
  hasNumericKeys<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.HAS_NUMERIC_KEYS);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for objects with camelCase keys, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and applies the filter
   *
   * @example
   * import { objectStateFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectHasCamelcaseKeys = objectStateFactory.hasCamelcaseKeys(this);
   * }
   */
  hasCamelcaseKeys<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.HAS_CAMELCASE_KEYS);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for objects with nested objects, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and applies the filter
   *
   * @example
   * import { objectStateFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectHasNestedObject = objectStateFactory.hasNestedObject(this);
   * }
   */
  hasNestedObject<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.HAS_NESTED_OBJECT);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for frozen objects, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and applies the filter
   *
   * @example
   * import { objectStateFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsFrozen = objectStateFactory.isFrozen(this);
   * }
   */
  isFrozen<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_FROZEN);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for sealed objects, designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and applies the filter
   *
   * @example
   * import { objectStateFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsSealed = objectStateFactory.isSealed(this);
   * }
   */
  isSealed<T, C extends Wherable<T, C>>(ctx: C) {
    return function <K extends keyof ByType<T, object>>(field: K) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectStatePredicate(obj, ObjectStateEnum.IS_SEALED);
      });
    };
  },
};
