import { describe, it, expect, vi, beforeEach } from 'vitest';
import { calendarFactory } from './calendarFactory';
import { CalendarOperEnum } from '../../enums/calendarOperation';
import { calendarPredicate } from '../../utils/predicates/calendarPredicate';

interface DummyType {
  date: Date;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'date';
const item: DummyType = { date: new Date('2025-09-02') };
const today = new Date('2025-09-02');

describe('calendarFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for isToday', () => {
    const fn = calendarFactory.isToday<DummyType, typeof ctx>(ctx);
    fn(field, today);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(calendarPredicate(item.date, CalendarOperEnum.IS_TODAY, today));
  });

  it('should call ctx.where with a predicate for isYesterday', () => {
    const fn = calendarFactory.isYesterday<DummyType, typeof ctx>(ctx);
    fn(field, today);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(calendarPredicate(item.date, CalendarOperEnum.IS_YESTERDAY, today));
  });

  it('should call ctx.where with a predicate for isBeforeToday', () => {
    const fn = calendarFactory.isBeforeToday<DummyType, typeof ctx>(ctx);
    fn(field, today);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(calendarPredicate(item.date, CalendarOperEnum.IS_BEFORE_TODAY, today));
  });

  it('should call ctx.where with a predicate for isAfterToday', () => {
    const fn = calendarFactory.isAfterToday<DummyType, typeof ctx>(ctx);
    fn(field, today);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(calendarPredicate(item.date, CalendarOperEnum.IS_AFTER_TODAY, today));
  });

  it('should call ctx.where with a predicate for isFuture', () => {
    const fn = calendarFactory.isFuture<DummyType, typeof ctx>(ctx);
    fn(field, today);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(calendarPredicate(item.date, CalendarOperEnum.IS_FUTURE, today));
  });

  it('should call ctx.where with a predicate for isPast', () => {
    const fn = calendarFactory.isPast<DummyType, typeof ctx>(ctx);
    fn(field, today);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(calendarPredicate(item.date, CalendarOperEnum.IS_PAST, today));
  });

  it('should call ctx.where with a predicate for isWeekend', () => {
    const fn = calendarFactory.isWeekend<DummyType, typeof ctx>(ctx);
    fn(field, today);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(calendarPredicate(item.date, CalendarOperEnum.IS_WEEKEND, today));
  });

  it('should call ctx.where with a predicate for isWeekday', () => {
    const fn = calendarFactory.isWeekday<DummyType, typeof ctx>(ctx);
    fn(field, today);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(calendarPredicate(item.date, CalendarOperEnum.IS_WEEKDAY, today));
  });
});
