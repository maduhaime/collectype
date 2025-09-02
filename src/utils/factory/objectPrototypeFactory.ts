import { ObjectPrototypeEnum } from '../../enums/objectOperation';
import { objectPrototypePredicate } from '../predicates/objectPrototypePredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

/**
 * Factory for object prototype predicates.
 * Provides methods to compose predicates for prototype-related operations.
 */
export const objectPrototypeFactory = {
  isPrototypeOf<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, object>>(field: K, proto: object) {
      return ctx.where((item: T) => {
        const obj = item[field] as object;
        return objectPrototypePredicate(proto, obj, ObjectPrototypeEnum.IS_PROTOTYPE_OF);
      });
    };
  },
};
