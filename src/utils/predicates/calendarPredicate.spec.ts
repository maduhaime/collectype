import { describe, it, expect } from 'vitest';
import { CalendarOperEnum } from '../../enums/calendarOperation';
import { calendarPredicate } from './calendarPredicate';

describe('calendarPredicate', () => {
  const today = new Date(Date.UTC(2023, 11, 28)); // 2023-12-28 UTC
  const saturday = new Date(Date.UTC(2023, 11, 30)); // Saturday
  const sunday = new Date(Date.UTC(2023, 11, 31)); // Sunday
  const monday = new Date(Date.UTC(2023, 11, 25)); // Monday
  const friday = new Date(Date.UTC(2023, 11, 29)); // Friday

  it('should return true for IS_WEEKEND (Saturday)', () => {
    expect(calendarPredicate(saturday, CalendarOperEnum.IS_WEEKEND, today)).toBe(true);
  });

  it('should return true for IS_WEEKEND (Sunday)', () => {
    expect(calendarPredicate(sunday, CalendarOperEnum.IS_WEEKEND, today)).toBe(true);
  });

  it('should return false for IS_WEEKEND (Monday)', () => {
    expect(calendarPredicate(monday, CalendarOperEnum.IS_WEEKEND, today)).toBe(false);
  });

  it('should return false for IS_WEEKEND (Friday)', () => {
    expect(calendarPredicate(friday, CalendarOperEnum.IS_WEEKEND, today)).toBe(false);
  });

  it('should return true for IS_WEEKDAY (Monday)', () => {
    expect(calendarPredicate(monday, CalendarOperEnum.IS_WEEKDAY, today)).toBe(true);
  });

  it('should return true for IS_WEEKDAY (Friday)', () => {
    expect(calendarPredicate(friday, CalendarOperEnum.IS_WEEKDAY, today)).toBe(true);
  });

  it('should return false for IS_WEEKDAY (Saturday)', () => {
    expect(calendarPredicate(saturday, CalendarOperEnum.IS_WEEKDAY, today)).toBe(false);
  });

  it('should return false for IS_WEEKDAY (Sunday)', () => {
    expect(calendarPredicate(sunday, CalendarOperEnum.IS_WEEKDAY, today)).toBe(false);
  });
});
