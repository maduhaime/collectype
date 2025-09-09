import { ObjectPrototypeEnum } from '../../enums/objectOperation';
import { ObjectPrototypePredicate, objectPrototypePredicate } from '../predicates/objectPrototypePredicate';
import { ObjectKeys, Wherable } from '../../types/utility';

export const objectPrototypeFactory = {
  /**
   * Factory function that creates a reusable filter for object prototype (isPrototypeOf), designed for composition within the provided context.
   *
   * @paramType T - The item type (inferred)
   * @param ctx - The context providing a `where` method
   * @returns A function that takes a field and a target, and applies the filter
   *
   * @example
   * import { objectPrototypeFactory } from 'collectype/utils/factory';
   *
   * class DummyFunctions extends BaseFunctions<DummyType> {
   *   objectIsPrototypeOf = objectPrototypeFactory.isPrototypeOf(this);
   * }
   */
  isPrototypeOf<T, C extends Wherable<T, C>>(ctx: C) {
    return function (field: ObjectKeys<T>, target: Parameters<ObjectPrototypePredicate>[2]) {
      return ctx.where((item: T) => {
        const proto = item[field] as object;
        return objectPrototypePredicate(proto, ObjectPrototypeEnum.IS_PROTOTYPE_OF, target);
      });
    };
  },
};
