import { NumberOperEnum } from '../../enums/numberOperation';
import { NumberPredicate, numberPredicate } from '../../utils/predicates/numberPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for number equality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberEquals = numberFactory.equals(this);
 * }
 */
function equals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number inequality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberNotEquals = numberFactory.notEquals(this);
 * }
 */
function notEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.NOT_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number less than, designed for composition within the provided context.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberLessThan = numberFactory.lessThan(this);
 * }
 */
function lessThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.LESS_THAN, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number less than or equals, designed for composition within the provided context.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberLessThanOrEquals = numberFactory.lessThanOrEquals(this);
 * }
 */
function lessThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.LESS_THAN_OR_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number greater than, designed for composition within the provided context.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberGreaterThan = numberFactory.greaterThan(this);
 * }
 */
function greaterThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.GREATER_THAN, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number greater than or equals, designed for composition within the provided context.
 *
 * @paramType T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   numberGreaterThanOrEquals = numberFactory.greaterThanOrEquals(this);
 * }
 */
function greaterThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number;
      return numberPredicate(source, NumberOperEnum.GREATER_THAN_OR_EQUALS, target);
    });
  };
}

export const numberFactory = {
  equals,
  notEquals,
  lessThan,
  lessThanOrEquals,
  greaterThan,
  greaterThanOrEquals,
};
