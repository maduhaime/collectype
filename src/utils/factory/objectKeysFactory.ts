import { ObjectKeysEnum } from '../../enums/objectOperation';
import { ObjectKeysPredicate, objectKeysPredicate } from '../predicates/objectKeysPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for object key presence (hasKey), designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target key, and applies the filter
 *
 * @example
 * import { objectKeysFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: { foo: 1, bar: 2 } },
 *   { name: 'B', meta: { foo: 1 } },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectHasKey = objectKeysFactory.hasKey(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectHasKey('meta', 'bar');
 * // Result: [{ name: 'A', meta: { foo: 1, bar: 2 } }]
 */
function hasKey<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectKeysPredicate(obj, ObjectKeysEnum.HAS_KEY, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for object all keys presence (hasAllKeys), designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target key array, and applies the filter
 *
 * @example
 * import { objectKeysFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: { foo: 1, bar: 2 } },
 *   { name: 'B', meta: { foo: 1 } },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectHasAllKeys = objectKeysFactory.hasAllKeys(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectHasAllKeys('meta', ['foo', 'bar']);
 * // Result: [{ name: 'A', meta: { foo: 1, bar: 2 } }]
 */
function hasAllKeys<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectKeysPredicate(obj, ObjectKeysEnum.HAS_ALL_KEYS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for object any key presence (hasAnyKey), designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target key array, and applies the filter
 *
 * @example
 * import { objectKeysFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: { foo: 1, bar: 2 } },
 *   { name: 'B', meta: { foo: 1 } },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectHasAnyKey = objectKeysFactory.hasAnyKey(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectHasAnyKey('meta', ['bar', 'baz']);
 * // Result: [{ name: 'A', meta: { foo: 1, bar: 2 } }]
 */

function hasAnyKey<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectKeysPredicate(obj, ObjectKeysEnum.HAS_ANY_KEY, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for object exact keys (hasExactKeys), designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target key array, and applies the filter
 *
 * @example
 * import { objectKeysFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: { foo: 1, bar: 2 } },
 *   { name: 'B', meta: { foo: 1 } },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectHasExactKeys = objectKeysFactory.hasExactKeys(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectHasExactKeys('meta', ['foo', 'bar']);
 * // Result: [{ name: 'A', meta: { foo: 1, bar: 2 } }]
 */
function hasExactKeys<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectKeysPredicate(obj, ObjectKeysEnum.HAS_EXACT_KEYS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for object no keys (hasNoKeys), designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target key array, and applies the filter
 *
 * @example
 * import { objectKeysFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: {} },
 *   { name: 'B', meta: { foo: 1 } },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectHasNoKeys = objectKeysFactory.hasNoKeys(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectHasNoKeys('meta', []);
 * // Result: [{ name: 'A', meta: {} }]
 */
function hasNoKeys<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectKeysPredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectKeysPredicate(obj, ObjectKeysEnum.HAS_NO_KEYS, target);
    });
  };
}

export const objectKeysFactory = {
  hasKey,
  hasAllKeys,
  hasAnyKey,
  hasExactKeys,
  hasNoKeys,
};
