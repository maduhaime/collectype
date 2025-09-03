import { ObjectPrototypeEnum } from '../../enums/objectOperation';
import { ObjectPrototypePredicate, objectPrototypePredicate } from '../predicates/objectPrototypePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory for object prototype predicates.
 * Provides methods to compose predicates for prototype-related operations.
 */
export const objectPrototypeFactory = {
  isPrototypeOf<T>(ctx: Wherable<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<ObjectPrototypePredicate>[2]) {
      return ctx.where((item: T) => {
        const proto = item[field] as object;
        return objectPrototypePredicate(proto, ObjectPrototypeEnum.IS_PROTOTYPE_OF, target);
      });
    };
  },
};
