import { CalendarOperEnum } from '../../enums/calendarOperation';
import { CalendarPredicate, calendarPredicate } from '../../utils/predicates/calendarPredicate';
import { ByType, Wherable } from '../../types/utility';

function isToday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_TODAY, today);
    });
  };
}

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
 *
 * class DummyFunctions extends BaseFunctions<DummyType> {
 *   isToday = calendarFactory.isToday(this);
 * }
 */
function isYesterday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_YESTERDAY, today);
    });
  };
}

function isBeforeToday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_BEFORE_TODAY, today);
    });
  };
}

function isAfterToday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_AFTER_TODAY, today);
    });
  };
}

function isFuture<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_FUTURE, today);
    });
  };
}

function isPast<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_PAST, today);
    });
  };
}

function isWeekend<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_WEEKEND, today);
    });
  };
}

function isWeekday<T, C extends Wherable<T, C>>(ctx: C) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
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
