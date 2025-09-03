import { ArrayOperEnum } from '../../enums/arrayOperation';
import { ArrayPredicate, arrayPredicate } from '../../utils/predicates/arrayPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target array, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayEquals = arrayFactory.equals(this);
 * }
 */
function equals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Compare the array using the 'equals' operation
      return arrayPredicate(arr, ArrayOperEnum.EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target array, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arraySetEquals = arrayFactory.setEquals(this);
 * }
 */
function setEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Compare the array using the 'setEquals' operation
      return arrayPredicate(arr, ArrayOperEnum.SET_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIncludes = arrayFactory.includes(this);
 * }
 */
function includes<T>(ctx: Wherable<T>) {
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
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayExcludes = arrayFactory.excludes(this);
 * }
 */
function excludes<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if the array excludes the target value
      return arrayPredicate(arr, ArrayOperEnum.EXCLUDES, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arraySomeEquals = arrayFactory.someEquals(this);
 * }
 */
function someEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if some element in the array equals the target value
      return arrayPredicate(arr, ArrayOperEnum.SOME_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayEveryEquals = arrayFactory.everyEquals(this);
 * }
 */
function everyEquals<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if every element in the array equals the target value
      return arrayPredicate(arr, ArrayOperEnum.EVERY_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIsSubsetOf = arrayFactory.isSubsetOf(this);
 * }
 */
function isSubsetOf<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if the array is a subset of the target value
      return arrayPredicate(arr, ArrayOperEnum.IS_SUBSET_OF, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIsSupersetOf = arrayFactory.isSupersetOf(this);
 * }
 */
function isSupersetOf<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if the array is a superset of the target value
      return arrayPredicate(arr, ArrayOperEnum.IS_SUPERSET_OF, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayStartsWith = arrayFactory.startsWith(this);
 * }
 */
function startsWith<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if the array starts with the target value
      return arrayPredicate(arr, ArrayOperEnum.STARTS_WITH, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayEndsWith = arrayFactory.endsWith(this);
 * }
 */
function endsWith<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if the array ends with the target value
      return arrayPredicate(arr, ArrayOperEnum.ENDS_WITH, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayContainsSubsequence = arrayFactory.containsSubsequence(this);
 * }
 */
function containsSubsequence<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if the array contains the target subsequence
      return arrayPredicate(arr, ArrayOperEnum.CONTAINS_SUBSEQUENCE, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIntersects = arrayFactory.intersects(this);
 * }
 */
function intersects<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Check if the array intersects with the target value
      return arrayPredicate(arr, ArrayOperEnum.INTERSECTS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { arrayFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayDisjoint = arrayFactory.disjoint(this);
 * }
 */
function disjoint<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, any[]>>(field: K, target: Parameters<ArrayPredicate>[2]) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
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
