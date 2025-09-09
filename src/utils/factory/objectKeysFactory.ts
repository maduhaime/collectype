import { ObjectKeysEnum } from '../../enums/objectOperation';
import { ObjectKeysPredicate, objectKeysPredicate } from '../predicates/objectKeysPredicate';
import { ObjectKeys, Wherable } from '../../types/utility';

export const objectKeysFactory = {
  /**
   * Factory function that creates a reusable filter for object key presence (hasKey), designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target key, and applies the filter
   *
   * @example
   * import { objectKeysFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectHasKey = objectKeysFactory.hasKey(this);
   * }
   */
  hasKey<T, C extends Wherable<T, C>>(ctx: C) {
    return function (field: ObjectKeys<T>, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_KEY, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for object all keys presence (hasAllKeys), designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target key array, and applies the filter
   *
   * @example
   * import { objectKeysFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectHasAllKeys = objectKeysFactory.hasAllKeys(this);
   * }
   */
  hasAllKeys<T, C extends Wherable<T, C>>(ctx: C) {
    return function (field: ObjectKeys<T>, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_ALL_KEYS, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for object any key presence (hasAnyKey), designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target key array, and applies the filter
   *
   * @example
   * import { objectKeysFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectHasAnyKey = objectKeysFactory.hasAnyKey(this);
   * }
   */
  hasAnyKey<T, C extends Wherable<T, C>>(ctx: C) {
    return function (field: ObjectKeys<T>, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_ANY_KEY, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for object exact keys (hasExactKeys), designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target key array, and applies the filter
   *
   * @example
   * import { objectKeysFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectHasExactKeys = objectKeysFactory.hasExactKeys(this);
   * }
   */
  hasExactKeys<T, C extends Wherable<T, C>>(ctx: C) {
    return function (field: ObjectKeys<T>, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_EXACT_KEYS, target);
      });
    };
  },
  /**
   * Factory function that creates a reusable filter for object no keys (hasNoKeys), designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target key array, and applies the filter
   *
   * @example
   * import { objectKeysFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectHasNoKeys = objectKeysFactory.hasNoKeys(this);
   * }
   */
  hasNoKeys<T, C extends Wherable<T, C>>(ctx: C) {
    return function (field: ObjectKeys<T>, target: Parameters<ObjectKeysPredicate>[2]) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectKeysPredicate(obj, ObjectKeysEnum.HAS_NO_KEYS, target);
      });
    };
  },
};
