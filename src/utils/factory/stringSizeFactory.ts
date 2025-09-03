import { StringSizeOperEnum } from '../../enums/stringOperation';
import { StringSizePredicate, stringSizePredicate } from '../predicates/stringSizePredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

/**
 * Factory for string size predicates (length comparisons).
 * Provides methods to compose predicates for string length operations.
 */
export const stringSizeFactory = {
  lengthEquals<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_EQUALS, target);
      });
    };
  },
  lengthGreaterThan<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_GREATER_THAN, target);
      });
    };
  },
  lengthGreaterThanOrEquals<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, target);
      });
    };
  },
  lengthLessThan<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_LESS_THAN, target);
      });
    };
  },
  lengthLessThanOrEquals<T>(ctx: ContextWithWhere<T>) {
    return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
      return ctx.where((item: T) => {
        const str = item[field] as string;
        return stringSizePredicate(str, StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, target);
      });
    };
  },
};
