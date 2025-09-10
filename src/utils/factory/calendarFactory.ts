import { CalendarOperEnum } from '../../enums/calendarOperation';
import { CalendarPredicate, calendarPredicate } from '../../utils/predicates/calendarPredicate';
import { ByType, Wherable } from '../../types/utility';

/**
 * Factory function that creates a reusable filter for calendar fields (isToday), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and an optional reference date, and applies the filter
 *
 * @example
 * import { calendarFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const today = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-08') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   isToday = calendarFactory.isToday(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.isToday('date', today);
 * // Result: [{ name: 'Conference', date: new Date('2025-09-09') }]
 */
function isToday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return calendarPredicate(source, CalendarOperEnum.IS_TODAY, today);
    });
  };
}
/**
 * Factory function that creates a reusable filter for calendar fields (isYesterday), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and an optional reference date, and applies the filter
 *
 * @example
 * import { calendarFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const today = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-08') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   isYesterday = calendarFactory.isYesterday(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.isYesterday('date', today);
 * // Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
 */
function isYesterday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return calendarPredicate(source, CalendarOperEnum.IS_YESTERDAY, today);
    });
  };
}
/**
 * Factory function that creates a reusable filter for calendar fields (isBeforeToday), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and an optional reference date, and applies the filter
 *
 * @example
 * import { calendarFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const today = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-08') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   isBeforeToday = calendarFactory.isBeforeToday(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.isBeforeToday('date', today);
 * // Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
 */
function isBeforeToday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return calendarPredicate(source, CalendarOperEnum.IS_BEFORE_TODAY, today);
    });
  };
}
/**
 * Factory function that creates a reusable filter for calendar fields (isAfterToday), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and an optional reference date, and applies the filter
 *
 * @example
 * import { calendarFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const today = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-10') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   isAfterToday = calendarFactory.isAfterToday(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.isAfterToday('date', today);
 * // Result: [{ name: 'Workshop', date: new Date('2025-09-10') }]
 */
function isAfterToday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return calendarPredicate(source, CalendarOperEnum.IS_AFTER_TODAY, today);
    });
  };
}
/**
 * Factory function that creates a reusable filter for calendar fields (isFuture), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and an optional reference date, and applies the filter
 *
 * @example
 * import { calendarFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const today = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-10') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   isFuture = calendarFactory.isFuture(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.isFuture('date', today);
 * // Result: [{ name: 'Workshop', date: new Date('2025-09-10') }]
 */
function isFuture<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return calendarPredicate(source, CalendarOperEnum.IS_FUTURE, today);
    });
  };
}
/**
 * Factory function that creates a reusable filter for calendar fields (isPast), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and an optional reference date, and applies the filter
 *
 * @example
 * import { calendarFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const today = new Date('2025-09-09');
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-09') },
 *   { name: 'Workshop', date: new Date('2025-09-08') },
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   isPast = calendarFactory.isPast(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.isPast('date', today);
 * // Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
 */
function isPast<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return calendarPredicate(source, CalendarOperEnum.IS_PAST, today);
    });
  };
}

/**
 * Factory function that creates a reusable filter for calendar fields (isWeekend), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and an optional reference date, and applies the filter
 *
 * @example
 * import { calendarFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-13') }, // Saturday
 *   { name: 'Workshop', date: new Date('2025-09-08') }, // Monday
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   isWeekend = calendarFactory.isWeekend(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.isWeekend('date');
 * // Result: [{ name: 'Conference', date: new Date('2025-09-13') }]
 */

function isWeekend<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return calendarPredicate(source, CalendarOperEnum.IS_WEEKEND, today);
    });
  };
}

/**
 * Factory function that creates a reusable filter for calendar fields (isWeekday), designed for composition within the provided context.
 * The returned filter can be used to declaratively build complex queries.
 *
 * @template T - The item type (inferred)
 * @param ctx - The context providing a `where` method
 * @returns A function that takes a field and an optional reference date, and applies the filter
 *
 * @example
 * import { calendarFactory } from 'collectype/utils/factory';
 * import { BaseFunctions } from 'collectype';
 *
 * interface Event {
 *   name: string;
 *   date?: Date;
 * }
 *
 * const events = [
 *   { name: 'Conference', date: new Date('2025-09-13') }, // Saturday
 *   { name: 'Workshop', date: new Date('2025-09-08') }, // Monday
 *   { name: 'Holiday' },
 * ];
 *
 * class EventFunctions extends BaseFunctions<Event> {
 *   isWeekday = calendarFactory.isWeekday(this);
 * }
 *
 * const fn = new EventFunctions(events);
 * fn.isWeekday('date');
 * // Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
 */
function isWeekday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date | undefined;
      if (source === undefined) return false;
      return calendarPredicate(source, CalendarOperEnum.IS_WEEKDAY, today);
    });
  };
}

export const calendarFactory = {
  isToday,
  isYesterday,
  isBeforeToday,
  isAfterToday,
  isFuture,
  isPast,
  isWeekend,
  isWeekday,
};
