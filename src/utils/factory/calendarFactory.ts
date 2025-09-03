import { CalendarOperEnum } from '../../enums/calendarOperation';
import { CalendarPredicate, calendarPredicate } from '../../utils/predicates/calendarPredicate';
import { ByType, Wherable } from '../../types/utility';

function isToday<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_TODAY, today);
    });
  };
}

function isYesterday<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_YESTERDAY, today);
    });
  };
}

function isBeforeToday<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_BEFORE_TODAY, today);
    });
  };
}

function isAfterToday<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_AFTER_TODAY, today);
    });
  };
}

function isFuture<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_FUTURE, today);
    });
  };
}

function isPast<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_PAST, today);
    });
  };
}

function isWeekend<T>(ctx: Wherable<T>) {
  return function <K extends keyof ByType<T, Date>>(field: K, today: Parameters<CalendarPredicate>[2] = new Date()) {
    return ctx.where((item: T) => {
      const source = item[field] as Date;
      return calendarPredicate(source, CalendarOperEnum.IS_WEEKEND, today);
    });
  };
}

function isWeekday<T>(ctx: Wherable<T>) {
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
