import { BooleanOperEnum } from '../../enums/booleanOperation';
import { BooleanPredicate, booleanPredicate } from '../../utils/predicates/booleanPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for boolean fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { booleanFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   active?: boolean;
 * }
 *
 * const people = [
 *   { name: 'Alice', active: true },
 *   { name: 'Bob', active: false },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   booleanEquals = booleanFactory.equals(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.booleanEquals('active', true);
 * // Result: [{ name: 'Alice', active: true }]
 */
function equals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, boolean>>(field: K, target: Parameters<BooleanPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as boolean | undefined;
      if (source === undefined) return false;
      return booleanPredicate(source, BooleanOperEnum.EQUALS, target);
    });
  };
}
/**
 * Factory function that creates a reusable filter for boolean fields, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target value, and applies the filter
 *
 * @example
 * import { booleanFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Person {
 *   name: string;
 *   active?: boolean;
 * }
 *
 * const people = [
 *   { name: 'Alice', active: true },
 *   { name: 'Bob', active: false },
 *   { name: 'Carol' },
 * ];
 *
 * class PersonFunctions extends BaseFunctions<Person> {
 *   booleanNotEquals = booleanFactory.notEquals(this);
 * }
 *
 * const fn = new PersonFunctions(people);
 * fn.booleanNotEquals('active', false);
 * // Result: [{ name: 'Alice', active: true }]
 */
function notEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, boolean>>(field: K, target: Parameters<BooleanPredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as boolean | undefined;
      if (source === undefined) return false;
      return booleanPredicate(source, BooleanOperEnum.NOT_EQUALS, target);
    });
  };
}

export const booleanFactory = {
  equals,
  notEquals,
};
