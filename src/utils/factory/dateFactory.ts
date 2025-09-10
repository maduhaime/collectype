import { DateOperEnum } from '../../enums/dateOperation';
import { DatePredicate, datePredicate } from '../../utils/predicates/datePredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for date equality (equals), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target date, and applies the filter
 *
 * @example
 * import { dateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const refDate = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-08') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   equals = dateFactory.equals(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.equals('date', refDate);
 * // Result: [{ name: 'Conference', date: new Date('2025-09-09') }]
 */
function equals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return datePredicate(source, DateOperEnum.EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for date inequality (notEquals), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target date, and applies the filter
 *
 * @example
 * import { dateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const refDate = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-08') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   notEquals = dateFactory.notEquals(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.notEquals('date', refDate);
 * // Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
 */
function notEquals<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return datePredicate(source, DateOperEnum.NOT_EQUALS, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for date equality, designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target date, and applies the filter
 *
 * @example
 * import { dateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const refDate = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-08') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   occursBefore = dateFactory.occursBefore(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.occursBefore('date', refDate);
 * // Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
 */
function occursBefore<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return datePredicate(source, DateOperEnum.OCCURS_BEFORE, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for date fields (occursOnOrBefore), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target date, and applies the filter
 *
 * @example
 * import { dateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const refDate = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-08') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   occursOnOrBefore = dateFactory.occursOnOrBefore(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.occursOnOrBefore('date', refDate);
 * // Result: [
 * //   { name: 'Conference', date: new Date('2025-09-09') },
 * //   { name: 'Workshop', date: new Date('2025-09-08') }
 * // ]
 */
function occursOnOrBefore<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return datePredicate(source, DateOperEnum.OCCURS_ON_OR_BEFORE, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for date fields (occursAfter), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target date, and applies the filter
 *
 * @example
 * import { dateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const refDate = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-10') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   occursAfter = dateFactory.occursAfter(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.occursAfter('date', refDate);
 * // Result: [{ name: 'Workshop', date: new Date('2025-09-10') }]
 */
function occursAfter<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return datePredicate(source, DateOperEnum.OCCURS_AFTER, target);
    });
  };
}

/**
 * Factory function that creates a reusable filter for date fields (occursOnOrAfter), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and a target date, and applies the filter
 *
 * @example
 * import { dateFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const refDate = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-10') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   occursOnOrAfter = dateFactory.occursOnOrAfter(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.occursOnOrAfter('date', refDate);
 * // Result: [
 * //   { name: 'Conference', date: new Date('2025-09-09') },
 * //   { name: 'Workshop', date: new Date('2025-09-10') }
 * // ]
 */
function occursOnOrAfter<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, target: Parameters<DatePredicate>[2]) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return datePredicate(source, DateOperEnum.OCCURS_ON_OR_AFTER, target);
    });
  };
}

export const dateFactory = {
  equals,
  notEquals,
  occursBefore,
  occursOnOrBefore,
  occursAfter,
  occursOnOrAfter,
};
