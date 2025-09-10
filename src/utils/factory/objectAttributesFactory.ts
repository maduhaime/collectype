import { ObjectAttributesEnum } from '../../enums/objectOperation';
import { ObjectAttributesPredicate, objectAttributesPredicate } from '../predicates/objectAttributesPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for object writability, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target, and applies the filter
 *
 * @example
 * import { objectAttributesFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: {} },
 *   { name: 'B', meta: Object.freeze({}) },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectIsWritable = objectAttributesFactory.isWritable(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectIsWritable('meta', true);
 * // Result: [{ name: 'A', meta: {} }]
 */
function isWritable<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectAttributesPredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectAttributesPredicate(obj, ObjectAttributesEnum.IS_WRITABLE, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for object enumerability, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target, and applies the filter
 *
 * @example
 * import { objectAttributesFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: {} },
 *   { name: 'B', meta: Object.defineProperty({}, 'x', { value: 1, enumerable: false }) },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectIsEnumerable = objectAttributesFactory.isEnumerable(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectIsEnumerable('meta', true);
 * // Result: [{ name: 'A', meta: {} }]
 */
function isEnumerable<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectAttributesPredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectAttributesPredicate(obj, ObjectAttributesEnum.IS_ENUMERABLE, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for object configurability, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target, and applies the filter
 *
 * @example
 * import { objectAttributesFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * const things = [
 *   { name: 'A', meta: {} },
 *   { name: 'B', meta: Object.preventExtensions({}) },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectIsConfigurable = objectAttributesFactory.isConfigurable(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectIsConfigurable('meta', true);
 * // Result: [{ name: 'A', meta: {} }]
 */
function isConfigurable<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectAttributesPredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectAttributesPredicate(obj, ObjectAttributesEnum.IS_CONFIGURABLE, target);
    });
  };
}

export const objectAttributesFactory = {
  isWritable,
  isEnumerable,
  isConfigurable,
};
