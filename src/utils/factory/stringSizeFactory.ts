import { StringSizeOperEnum } from '../../enums/stringOperation';
import { stringSizePredicate } from '../predicates/stringSizePredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

/**
 * Factory for string size predicates (length comparisons).
 * Provides methods to compose predicates for string length operations.
 */
export const stringSizeFactory = {
  lengthEquals<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, num: number) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_EQUALS, num);
      });
    };
  },
  lengthGreaterThan<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, num: number) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_GREATER_THAN, num);
      });
    };
  },
  lengthGreaterThanOrEquals<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, num: number) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, num);
      });
    };
  },
  lengthLessThan<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, num: number) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_LESS_THAN, num);
      });
    };
  },
  lengthLessThanOrEquals<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, num: number) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, num);
      });
    };
  },
};
