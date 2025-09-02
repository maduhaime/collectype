import { StringOperEnum } from '../../enums/stringOperation';
import { StringPredicate, stringPredicate } from '../../utils/predicates/stringPredicate';
import { ByType, ContextWithWhere } from '../../types/utility';

function equals<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringPredicate(source, StringOperEnum.EQUALS, target);
    });
  };
}

function notEquals<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringPredicate(source, StringOperEnum.NOT_EQUALS, target);
    });
  };
}

function includes<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringPredicate(source, StringOperEnum.INCLUDES, target);
    });
  };
}

function excludes<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringPredicate(source, StringOperEnum.EXCLUDES, target);
    });
  };
}

function startsWith<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringPredicate(source, StringOperEnum.STARTS_WITH, target);
    });
  };
}

function endsWith<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringPredicate(source, StringOperEnum.ENDS_WITH, target);
    });
  };
}

function matches<T>(ctx: ContextWithWhere<T>) {
  return function <K extends keyof ByType<T, string>>(field: K, pattern: RegExp) {
    return ctx.where((item: T) => {
      const source = item[field] as string;
      return stringPredicate(source, StringOperEnum.MATCHES, pattern);
    });
  };
}

export const stringFactory = {
  equals,
  notEquals,
  includes,
  excludes,
  startsWith,
  endsWith,
  matches,
};
