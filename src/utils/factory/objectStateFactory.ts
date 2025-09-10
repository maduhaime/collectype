import { ObjectStateEnum } from '../../enums/objectOperation';
import { objectStatePredicate } from '../predicates/objectStatePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for empty objects, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { objectStateFactory } from 'collectype/utils/factory';
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
 *   objectIsEmpty = objectStateFactory.isEmpty(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectIsEmpty('meta');
 * // Result: [{ name: 'A', meta: {} }]
 */
function isEmpty<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectStatePredicate(obj, ObjectStateEnum.IS_EMPTY);
    });
  };
}

/**
 * Factory function that creates a reusable filter for plain objects, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { objectStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * function Meta() {}
 *
 * const things = [
 *   { name: 'A', meta: {} },
 *   { name: 'B', meta: new Meta() },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectIsPlain = objectStateFactory.isPlain(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectIsPlain('meta');
 * // Result: [{ name: 'A', meta: {} }]
 */
function isPlain<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectStatePredicate(obj, ObjectStateEnum.IS_PLAIN);
    });
  };
}

/**
 * Factory function that creates a reusable filter for objects with numeric keys, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { objectStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: { 1: 'a', 2: 'b' } },
 *   { name: 'B', meta: { foo: 1 } },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectHasNumericKeys = objectStateFactory.hasNumericKeys(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectHasNumericKeys('meta');
 * // Result: [{ name: 'A', meta: { 1: 'a', 2: 'b' } }]
 */
function hasNumericKeys<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectStatePredicate(obj, ObjectStateEnum.HAS_NUMERIC_KEYS);
    });
  };
}

/**
 * Factory function that creates a reusable filter for objects with camelCase keys, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { objectStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: { fooBar: 1 } },
 *   { name: 'B', meta: { foo_bar: 1 } },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectHasCamelcaseKeys = objectStateFactory.hasCamelcaseKeys(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectHasCamelcaseKeys('meta');
 * // Result: [{ name: 'A', meta: { fooBar: 1 } }]
 */
function hasCamelcaseKeys<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectStatePredicate(obj, ObjectStateEnum.HAS_CAMELCASE_KEYS);
    });
  };
}

/**
 * Factory function that creates a reusable filter for objects with nested objects, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { objectStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: { foo: { bar: 1 } } },
 *   { name: 'B', meta: { foo: 1 } },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectHasNestedObject = objectStateFactory.hasNestedObject(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectHasNestedObject('meta');
 * // Result: [{ name: 'A', meta: { foo: { bar: 1 } } }]
 */
function hasNestedObject<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectStatePredicate(obj, ObjectStateEnum.HAS_NESTED_OBJECT);
    });
  };
}

/**
 * Factory function that creates a reusable filter for frozen objects, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { objectStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: Object.freeze({}) },
 *   { name: 'B', meta: {} },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectIsFrozen = objectStateFactory.isFrozen(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectIsFrozen('meta');
 * // Result: [{ name: 'A', meta: Object.freeze({}) }]
 */
function isFrozen<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectStatePredicate(obj, ObjectStateEnum.IS_FROZEN);
    });
  };
}

/**
 * Factory function that creates a reusable filter for sealed objects, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and applies the filter
 *
 * @example
 * import { objectStateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: Object.seal({}) },
 *   { name: 'B', meta: {} },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectIsSealed = objectStateFactory.isSealed(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectIsSealed('meta');
 * // Result: [{ name: 'A', meta: Object.seal({}) }]
 */
function isSealed<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectStatePredicate(obj, ObjectStateEnum.IS_SEALED);
    });
  };
}

export const objectStateFactory = {
  isEmpty,
  isPlain,
  hasNumericKeys,
  hasCamelcaseKeys,
  hasNestedObject,
  isFrozen,
  isSealed,
};
