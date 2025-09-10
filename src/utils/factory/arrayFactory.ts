import { ArrayOperEnum } from '../../enums/arrayOperation';
import { ArrayPredicate, arrayPredicate } from '../../utils/predicates/arrayPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target array, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayEquals = arrayFactory.equals(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'a'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayEquals('tags', ['a', 'b']);
 * // result: [{ tags: ['a', 'b'] }]
 */
function equals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Compare the array using the 'equals' operation
      return arrayPredicate(arr, ArrayOperEnum.EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target array, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arraySetEquals = arrayFactory.setEquals(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'a'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arraySetEquals('tags', ['b', 'a']);
 * // result: [{ tags: ['a', 'b'] }, { tags: ['b', 'a'] }]
 */
function setEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Compare the array using the 'setEquals' operation
      return arrayPredicate(arr, ArrayOperEnum.SET_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIncludes = arrayFactory.includes(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'a'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayIncludes('tags', 'a');
 * // result: [{ tags: ['a', 'b'] }, { tags: ['b', 'a'] }, { tags: ['a'] }]
 */
function includes<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if the array includes the target value
      return arrayPredicate(arr, ArrayOperEnum.INCLUDES, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayExcludes = arrayFactory.excludes(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'a'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayExcludes('tags', 'c');
 * // result: [{ tags: ['a', 'b'] }, { tags: ['b', 'a'] }, { tags: ['a'] }]
 */
function excludes<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if the array excludes the target value
      return arrayPredicate(arr, ArrayOperEnum.EXCLUDES, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arraySomeEquals = arrayFactory.someEquals(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'a'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arraySomeEquals('tags', 'a');
 * // result: [{ tags: ['a', 'b'] }, { tags: ['b', 'a'] }, { tags: ['a'] }]
 */
function someEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if some element in the array equals the target value
      return arrayPredicate(arr, ArrayOperEnum.SOME_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayEveryEquals = arrayFactory.everyEquals(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'a'] },
 *   { tags: ['a'] },
 *   { tags: ['a', 'b'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayEveryEquals('tags', 'a');
 * // result: [{ tags: ['a', 'a'] }, { tags: ['a'] }]
 */
function everyEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if every element in the array equals the target value
      return arrayPredicate(arr, ArrayOperEnum.EVERY_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIsSubsetOf = arrayFactory.isSubsetOf(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a'] },
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'a', 'c'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayIsSubsetOf('tags', ['a', 'b', 'c']);
 * // result: [{ tags: ['a'] }, { tags: ['a', 'b'] }, { tags: ['b', 'a', 'c'] }]
 */
function isSubsetOf<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if the array is a subset of the target value
      return arrayPredicate(arr, ArrayOperEnum.IS_SUBSET_OF, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIsSupersetOf = arrayFactory.isSupersetOf(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b', 'c'] },
 *   { tags: ['a', 'b'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayIsSupersetOf('tags', ['a']);
 * // result: [{ tags: ['a', 'b', 'c'] }, { tags: ['a', 'b'] }, { tags: ['a'] }]
 */
function isSupersetOf<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if the array is a superset of the target value
      return arrayPredicate(arr, ArrayOperEnum.IS_SUPERSET_OF, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayStartsWith = arrayFactory.startsWith(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'a'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayStartsWith('tags', ['a']);
 * // result: [{ tags: ['a', 'b'] }, { tags: ['a'] }]
 */
function startsWith<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if the array starts with the target value
      return arrayPredicate(arr, ArrayOperEnum.STARTS_WITH, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayEndsWith = arrayFactory.endsWith(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'a'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayEndsWith('tags', ['b']);
 * // result: [{ tags: ['a', 'b'] }]
 */
function endsWith<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if the array ends with the target value
      return arrayPredicate(arr, ArrayOperEnum.ENDS_WITH, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayContainsSubsequence = arrayFactory.containsSubsequence(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b', 'c'] },
 *   { tags: ['b', 'a', 'c'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayContainsSubsequence('tags', ['a', 'c']);
 * // result: [{ tags: ['a', 'b', 'c'] }, { tags: ['b', 'a', 'c'] }]
 */
function containsSubsequence<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if the array contains the target subsequence
      return arrayPredicate(arr, ArrayOperEnum.CONTAINS_SUBSEQUENCE, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIntersects = arrayFactory.intersects(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'c'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayIntersects('tags', ['b', 'c']);
 * // result: [{ tags: ['a', 'b'] }, { tags: ['b', 'c'] }]
 */
function intersects<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if the array intersects with the target value
      return arrayPredicate(arr, ArrayOperEnum.INTERSECTS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface DummyType { tags?: string[] }
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayDisjoint = arrayFactory.disjoint(this);
 * }
 *
 * const items: DummyType[] = [
 *   { tags: ['a', 'b'] },
 *   { tags: ['b', 'c'] },
 *   { tags: ['a'] },
 *   { tags: undefined }
 * ];
 *
 * const fn = new DummyFunctions(items);
 * const result = fn.arrayDisjoint('tags', ['c']);
 * // result: [{ tags: ['a'] }]
 */
function disjoint<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      // Check if the array is disjoint from the target value
      return arrayPredicate(arr, ArrayOperEnum.DISJOINT, target);
    });
  };
}

export const arrayFactory = {
  equals,
  setEquals,
  includes,
  excludes,
  someEquals,
  everyEquals,
  isSubsetOf,
  isSupersetOf,
  startsWith,
  endsWith,
  containsSubsequence,
  intersects,
  disjoint,
};
