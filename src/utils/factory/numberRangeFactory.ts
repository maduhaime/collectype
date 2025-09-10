import { RangeOperEnum } from '../../enums/rangeOperation';
import { NumberRangePredicate, numberRangePredicate } from '../../utils/predicates/numberRangePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for number ranges (inRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max number, and applies the filter
 *
 * @example
 * import { numberRangeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const min = 5;
 * const max = 15;
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 2 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberInRange = numberRangeFactory.inRange(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberInRange('price', min, max);
 * // Result: [{ name: 'Book', price: 10 }]
 */
function inRange<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<NumberRangePredicate>[2],
    max: Parameters<NumberRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
      return numberRangePredicate(source, RangeOperEnum.IN_RANGE, min, max);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number ranges (outRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max number, and applies the filter
 *
 * @example
 * import { numberRangeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const min = 5;
 * const max = 15;
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 2 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberOutRange = numberRangeFactory.outRange(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberOutRange('price', min, max);
 * // Result: [{ name: 'Pen', price: 2 }]
 */
function outRange<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<NumberRangePredicate>[2],
    max: Parameters<NumberRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
      return numberRangePredicate(source, RangeOperEnum.OUT_RANGE, min, max);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number ranges (strictInRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max number, and applies the filter
 *
 * @example
 * import { numberRangeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const min = 5;
 * const max = 15;
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 5 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberStrictInRange = numberRangeFactory.strictInRange(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberStrictInRange('price', min, max);
 * // Result: [{ name: 'Book', price: 10 }]
 */
function strictInRange<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<NumberRangePredicate>[2],
    max: Parameters<NumberRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
      return numberRangePredicate(source, RangeOperEnum.STRICT_IN_RANGE, min, max);
    });
  };
}

/**
 * Factory function that creates a reusable filter for number ranges (strictOutRange), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field, min, and max number, and applies the filter
 *
 * @example
 * import { numberRangeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Product {
 *   name: string;
 *   price?: number;
 * }
 *
 * const min = 5;
 * const max = 15;
 * const products = [
 *   { name: 'Book', price: 10 },
 *   { name: 'Pen', price: 5 },
 *   { name: 'Gift' },
 * ];
 *
 * class ProductFunctions extends BaseFunctions<Product> {
 *   numberStrictOutRange = numberRangeFactory.strictOutRange(this);
 * }
 *
 * const fn = new ProductFunctions(products);
 * fn.numberStrictOutRange('price', min, max);
 * // Result: []
 */
function strictOutRange<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<NumberRangePredicate>[2],
    max: Parameters<NumberRangePredicate>[3]
  ) {
    return ctx.where((item: T) => {
      const source = item[field] as number | undefined;
      if (source === undefined) return false;
      return numberRangePredicate(source, RangeOperEnum.STRICT_OUT_RANGE, min, max);
    });
  };
}

export const numberRangeFactory = {
  inRange,
  outRange,
  strictInRange,
  strictOutRange,
};
