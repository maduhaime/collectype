import { StringOperEnum } from '../../enums/stringOperation';
import { StringPredicate, stringPredicate } from '../../utils/predicates/stringPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for string equality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target string, and applies the filter
 *
 * @example
 * import { stringFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   stringEquals = stringFactory.equals(this);
 * }
 */
function equals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string | undefined;
      if (source === undefined) return false;
      return stringPredicate(source, StringOperEnum.EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string inequality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target string, and applies the filter
 *
 * @example
 * import { stringFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   stringNotEquals = stringFactory.notEquals(this);
 * }
 */
function notEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string | undefined;
      if (source === undefined) return false;
      return stringPredicate(source, StringOperEnum.NOT_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string inclusion, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target string, and applies the filter
 *
 * @example
 * import { stringFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   stringIncludes = stringFactory.includes(this);
 * }
 */
function includes<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string | undefined;
      if (source === undefined) return false;
      return stringPredicate(source, StringOperEnum.INCLUDES, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string exclusion, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target string, and applies the filter
 *
 * @example
 * import { stringFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   stringExcludes = stringFactory.excludes(this);
 * }
 */
function excludes<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string | undefined;
      if (source === undefined) return false;
      return stringPredicate(source, StringOperEnum.EXCLUDES, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string prefix (startsWith), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target string, and applies the filter
 *
 * @example
 * import { stringFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   stringStartsWith = stringFactory.startsWith(this);
 * }
 */
function startsWith<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string | undefined;
      if (source === undefined) return false;
      return stringPredicate(source, StringOperEnum.STARTS_WITH, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string suffix (endsWith), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target string, and applies the filter
 *
 * @example
 * import { stringFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   stringEndsWith = stringFactory.endsWith(this);
 * }
 */
function endsWith<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as string | undefined;
      if (source === undefined) return false;
      return stringPredicate(source, StringOperEnum.ENDS_WITH, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string pattern matching, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a RegExp pattern, and applies the filter
 *
 * @example
 * import { stringFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   stringMatches = stringFactory.matches(this);
 * }
 */
function matches<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, pattern: RegExp) {
    return ctx.where((item: T) => {
      const source = item[field] as string | undefined;
      if (source === undefined) return false;
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
