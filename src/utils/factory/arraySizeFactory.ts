import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { ArraySizePredicate, arraySizePredicate } from '../../utils/predicates/arraySizePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for array length equality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   tags?: string[];
 * }
 *
 * const people = [
 *   { name: 'Alice', tags: ['dev', 'lead'] },
 *   { name: 'Bob', tags: ['dev'] },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   lengthEquals = arraySizeFactory.lengthEquals(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.lengthEquals('tags', 2);
 * // Result: [{ name: 'Alice', tags: ['dev', 'lead'] }]
 */
function lengthEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_EQUALS, n);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array length greater than, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   tags?: string[];
 * }
 *
 * const people = [
 *   { name: 'Alice', tags: ['dev', 'lead', 'mentor'] },
 *   { name: 'Bob', tags: ['dev'] },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   lengthGreaterThan = arraySizeFactory.lengthGreaterThan(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.lengthGreaterThan('tags', 2);
 * // Result: [{ name: 'Alice', tags: ['dev', 'lead', 'mentor'] }]
 */
function lengthGreaterThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN, n);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array length greater than or equals, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   tags?: string[];
 * }
 *
 * const people = [
 *   { name: 'Alice', tags: ['dev', 'lead'] },
 *   { name: 'Bob', tags: ['dev'] },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   lengthGreaterThanOrEquals = arraySizeFactory.lengthGreaterThanOrEquals(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.lengthGreaterThanOrEquals('tags', 2);
 * // Result: [{ name: 'Alice', tags: ['dev', 'lead'] }]
 */
function lengthGreaterThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, n);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array length less than, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   tags?: string[];
 * }
 *
 * const people = [
 *   { name: 'Alice', tags: ['dev', 'lead'] },
 *   { name: 'Bob', tags: ['dev'] },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   lengthLessThan = arraySizeFactory.lengthLessThan(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.lengthLessThan('tags', 2);
 * // Result: [{ name: 'Carol' }]
 */
function lengthLessThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, n);
    });
  };
}

/**
 * Factory function that creates a reusable filter for array length less than or equals, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { arraySizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   tags?: string[];
 * }
 *
 * const people = [
 *   { name: 'Alice', tags: ['dev', 'lead'] },
 *   { name: 'Bob', tags: ['dev'] },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   lengthLessThanOrEquals = arraySizeFactory.lengthLessThanOrEquals(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.lengthLessThanOrEquals('tags', 1);
 * // Result: [{ name: 'Bob', tags: ['dev'] }, { name: 'Carol' }]
 */
function lengthLessThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, any[]>>(field: K, n: Parameters<ArraySizePredicate>[2]) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, n);
    });
  };
}

export const arraySizeFactory = {
  lengthEquals,
  lengthGreaterThan,
  lengthGreaterThanOrEquals,
  lengthLessThan,
  lengthLessThanOrEquals,
};
