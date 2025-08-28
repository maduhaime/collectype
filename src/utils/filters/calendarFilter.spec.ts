import { describe, expect, it } from 'vitest';
import { CalendarOperEnum } from '../../enums/calendarOperation';
import { calendarFilter } from '../../utils/filters/calendarFilter';

type DummyType = {
  date?: Date;
};

describe('calendarFilter', () => {
  const today = new Date('2023-12-28'); // Thursday
  const items: DummyType[] = [
    { date: new Date('2023-12-25') }, // Monday
    { date: new Date('2023-12-27') }, // Yesterday (Wednesday)
    { date: new Date('2023-12-28') }, // Today (Thursday)
    { date: new Date('2023-12-29') }, // Friday
    { date: new Date('2023-12-30') }, // Saturday
    { date: new Date('2023-12-31') }, // Sunday
    { date: new Date('2100-01-01') }, // Future
    { date: new Date('2000-01-01') }, // Past
    {}, // date is undefined
  ];

  it('should filter IS_BEFORE_TODAY', () => {
    const result = calendarFilter<DummyType, 'date'>(items, 'date', CalendarOperEnum.IS_BEFORE_TODAY, today);
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2023-12-27').toISOString());
    expect(result.map((i) => i.date && i.date.toISOString())).not.toContain(today.toISOString());
  });

  it('should skip items where the date field is undefined', () => {
    const result = calendarFilter<DummyType, 'date'>(items, 'date', CalendarOperEnum.IS_TODAY, today);
    expect(result).toEqual([{ date: new Date('2023-12-28') }]);
  });

  it('should filter IS_AFTER_TODAY', () => {
    const result = calendarFilter<DummyType, 'date'>(items, 'date', CalendarOperEnum.IS_AFTER_TODAY, today);
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2023-12-29').toISOString());
    expect(result.map((i) => i.date && i.date.toISOString())).not.toContain(today.toISOString());
  });

  it('should filter IS_TODAY', () => {
    const result = calendarFilter<DummyType, 'date'>(items, 'date', CalendarOperEnum.IS_TODAY, today);
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(today.toISOString());
    expect(result).toHaveLength(1);
  });

  it('should filter IS_YESTERDAY', () => {
    const result = calendarFilter<DummyType, 'date'>(items, 'date', CalendarOperEnum.IS_YESTERDAY, today);
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2023-12-27').toISOString());
    expect(result).toHaveLength(1);
  });

  it('should filter IS_WEEKEND', () => {
    const result = calendarFilter<DummyType, 'date'>(items, 'date', CalendarOperEnum.IS_WEEKEND, today);
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2023-12-30').toISOString());
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2023-12-31').toISOString());
  });

  it('should filter IS_WEEKDAY', () => {
    const result = calendarFilter<DummyType, 'date'>(items, 'date', CalendarOperEnum.IS_WEEKDAY, today);
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2023-12-25').toISOString());
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2023-12-27').toISOString());
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2023-12-28').toISOString());
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2023-12-29').toISOString());
  });

  it('should filter IS_FUTURE', () => {
    const result = calendarFilter<DummyType, 'date'>(items, 'date', CalendarOperEnum.IS_FUTURE, today);
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2100-01-01').toISOString());
    expect(result.map((i) => i.date && i.date.toISOString())).not.toContain(new Date('2000-01-01').toISOString());
  });

  it('should filter IS_PAST', () => {
    const result = calendarFilter<DummyType, 'date'>(items, 'date', CalendarOperEnum.IS_PAST, today);
    expect(result.map((i) => i.date && i.date.toISOString())).toContain(new Date('2000-01-01').toISOString());
    expect(result.map((i) => i.date && i.date.toISOString())).not.toContain(new Date('2100-01-01').toISOString());
  });

  it('should throw for unsupported operator', () => {
    expect(() => calendarFilter(items, 'date', 'unsupported' as any, today)).toThrow();
  });
});
