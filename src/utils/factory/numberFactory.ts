import { NumberOperEnum } from '../../enums/numberOperation';
import { NumberPredicate, numberPredicate } from '../../utils/predicates/numberPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for number equality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 2 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberEquals = numberFactory.equals(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberEquals('price', 10);
 * // Result: [{ name: 'Book', price: 10 }]
 */
function equals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
      return numberPredicate(source, NumberOperEnum.EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number inequality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 2 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberNotEquals = numberFactory.notEquals(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberNotEquals('price', 2);
 * // Result: [{ name: 'Book', price: 10 }]
 */
function notEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
      return numberPredicate(source, NumberOperEnum.NOT_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number less than, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 2 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberLessThan = numberFactory.lessThan(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberLessThan('price', 5);
 * // Result: [{ name: 'Pen', price: 2 }]
 */
function lessThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
      return numberPredicate(source, NumberOperEnum.LESS_THAN, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number less than or equals, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 2 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberLessThanOrEquals = numberFactory.lessThanOrEquals(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberLessThanOrEquals('price', 10);
 * // Result: [{ name: 'Book', price: 10 }, { name: 'Pen', price: 2 }]
 */
function lessThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
      return numberPredicate(source, NumberOperEnum.LESS_THAN_OR_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number greater than, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 2 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberGreaterThan = numberFactory.greaterThan(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberGreaterThan('price', 5);
 * // Result: [{ name: 'Book', price: 10 }]
 */
function greaterThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
      return numberPredicate(source, NumberOperEnum.GREATER_THAN, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number greater than or equals, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target number, and applies the filter
 *
 * @example
 * import { numberFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 2 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberGreaterThanOrEquals = numberFactory.greaterThanOrEquals(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberGreaterThanOrEquals('price', 2);
 * // Result: [{ name: 'Book', price: 10 }, { name: 'Pen', price: 2 }]
 */
function greaterThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(field: K, target: Parameters<NumberPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
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
