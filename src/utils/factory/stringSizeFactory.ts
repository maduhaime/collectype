import { StringSizeOperEnum } from '../../enums/stringOperation';
import { StringSizePredicate, stringSizePredicate } from '../predicates/stringSizePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for string length equality, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { stringSizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   city?: string;
 * }
 *
 * const people = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'London' },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringLengthEquals = stringSizeFactory.lengthEquals(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.stringLengthEquals('city', 5);
 * // Result: [{ name: 'Alice', city: 'Paris' }]
 */
function lengthEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
    return ctx.where((item: T) => {
      const str = item[field] as string | undefined;
      if (str === undefined) return false;
      return stringSizePredicate(str, StringSizeOperEnum.LENGTH_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string length greater than, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { stringSizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   city?: string;
 * }
 *
 * const people = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'London' },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringLengthGreaterThan = stringSizeFactory.lengthGreaterThan(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.stringLengthGreaterThan('city', 5);
 * // Result: [{ name: 'Bob', city: 'London' }]
 */
function lengthGreaterThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
    return ctx.where((item: T) => {
      const str = item[field] as string | undefined;
      if (str === undefined) return false;
      return stringSizePredicate(str, StringSizeOperEnum.LENGTH_GREATER_THAN, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string length greater than or equals, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { stringSizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   city?: string;
 * }
 *
 * const people = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'London' },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringLengthGreaterThanOrEquals = stringSizeFactory.lengthGreaterThanOrEquals(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.stringLengthGreaterThanOrEquals('city', 5);
 * // Result: [{ name: 'Alice', city: 'Paris' }, { name: 'Bob', city: 'London' }]
 */
function lengthGreaterThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
    return ctx.where((item: T) => {
      const str = item[field] as string | undefined;
      if (str === undefined) return false;
      return stringSizePredicate(str, StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string length less than, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { stringSizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   city?: string;
 * }
 *
 * const people = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'London' },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringLengthLessThan = stringSizeFactory.lengthLessThan(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.stringLengthLessThan('city', 5);
 * // Result: []
 */
function lengthLessThan<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
    return ctx.where((item: T) => {
      const str = item[field] as string | undefined;
      if (str === undefined) return false;
      return stringSizePredicate(str, StringSizeOperEnum.LENGTH_LESS_THAN, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for string length less than or equals, designed for composition within the provided context.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target length, and applies the filter
 *
 * @example
 * import { stringSizeFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   city?: string;
 * }
 *
 * const people = [
 *   { name: 'Alice', city: 'Paris' },
 *   { name: 'Bob', city: 'London' },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   stringLengthLessThanOrEquals = stringSizeFactory.lengthLessThanOrEquals(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.stringLengthLessThanOrEquals('city', 5);
 * // Result: [{ name: 'Alice', city: 'Paris' }]
 */
function lengthLessThanOrEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<StringSizePredicate>[2]) {
    return ctx.where((item: T) => {
      const str = item[field] as string | undefined;
      if (str === undefined) return false;
      return stringSizePredicate(str, StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, target);
    });
  };
}

export const stringSizeFactory = {
  lengthEquals,
  lengthGreaterThan,
  lengthGreaterThanOrEquals,
  lengthLessThan,
  lengthLessThanOrEquals,
};
