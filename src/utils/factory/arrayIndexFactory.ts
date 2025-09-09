import { ArrayIndexOperEnum } from '../../enums/arrayOperation';
import { ArrayIndexPredicate, arrayIndexPredicate } from '../../utils/predicates/arrayIndexPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for array index fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, an index, and a target value, and applies the filter
 *
 * @example
 * import { arrayIndexFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIndexEquals = arrayIndexFactory.indexEquals(this);
 * }
 */
function indexEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Compare the value at index using the 'indexEquals' operation
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, index, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array index fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, an index, and a target value, and applies the filter
 *
 * @example
 * import { arrayIndexFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIndexNotEquals = arrayIndexFactory.indexNotEquals(this);
 * }
 */
function indexNotEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Compare the value at index using the 'indexNotEquals' operation
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, index, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array index fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, an index, and a target value, and applies the filter
 *
 * @example
 * import { arrayIndexFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIndexIn = arrayIndexFactory.indexIn(this);
 * }
 */
function indexIn<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Compare the value at index using the 'indexIn' operation
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_IN, index, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array index fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, an index, and a target value, and applies the filter
 *
 * @example
 * import { arrayIndexFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   arrayIndexNotIn = arrayIndexFactory.indexNotIn(this);
 * }
 */
function indexNotIn<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    // Use the context's where method to filter items
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      // Compare the value at index using the 'indexNotIn' operation
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, index, target);
    });
  };
}

function indexGreaterThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN, index, target);
    });
  };
}

function indexGreaterThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, index, target);
    });
  };
}

function indexLessThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN, index, target);
    });
  };
}

function indexLessThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<ArrayIndexPredicate>[2],
    target: Parameters<ArrayIndexPredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[];
      return arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS, index, target);
    });
  };
}

export const arrayIndexFactory = {
  indexEquals,
  indexNotEquals,
  indexIn,
  indexNotIn,
  indexGreaterThan,
  indexGreaterThanOrEquals,
  indexLessThan,
  indexLessThanOrEquals,
};
