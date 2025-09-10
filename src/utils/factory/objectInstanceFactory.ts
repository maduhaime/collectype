import { ObjectInstanceEnum } from '../../enums/objectOperation';
import { ObjectInstancePredicate, objectInstancePredicate } from '../predicates/objectInstancePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for object instanceOf, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target, and applies the filter
 *
 * @example
 * import { objectInstanceFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * class Meta {}
 *
 * const things = [
 *   { name: 'A', meta: new Meta() },
 *   { name: 'B', meta: {} },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectIsInstanceOf = objectInstanceFactory.isInstanceOf(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectIsInstanceOf('meta', Meta);
 * // Result: [{ name: 'A', meta: new Meta() }]
 */
function isInstanceOf<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectInstancePredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectInstancePredicate(obj, ObjectInstanceEnum.IS_INSTANCE_OF, target);
    });
  };
}
/**
 * Factory function that creates a reusable filter for object constructor, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target, and applies the filter
 *
 * @example
 * import { objectInstanceFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Thing {
 *   name: string;
 *   meta?: object;
 * }
 *
 * class Meta {}
 *
 * const things = [
 *   { name: 'A', meta: new Meta() },
 *   { name: 'B', meta: {} },
 *   { name: 'C' },
 * ];
 *
 * class ThingFunctions extends BaseFunctions<Thing> {
 *   objectIsConstructor = objectInstanceFactory.isConstructor(this);
 * }
 *
 * const fn = new ThingFunctions(things);
 * fn.objectIsConstructor('meta', Meta);
 * // Result: [{ name: 'A', meta: new Meta() }]
 */
function isConstructor<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectInstancePredicate>[2]) {
    return ctx.where((item: T) => {
      const obj = item[field] as object | undefined;
      if (obj === undefined) return false;
      return objectInstancePredicate(obj, ObjectInstanceEnum.IS_CONSTRUCTOR, target);
    });
  };
}

export const objectInstanceFactory = {
  isInstanceOf,
  isConstructor,
};
