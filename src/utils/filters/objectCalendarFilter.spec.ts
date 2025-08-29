import { describe, it, expect } from 'vitest';
import { objectCalendarFilter } from './objectCalendarFilter';
import { CalendarOperEnum } from '../../enums/calendarOperation';

type DummyType = { obj: { date: Date } };

describe('objectCalendarFilter', () => {
  it('should filter items where the nested date property is today', () => {
    const today = new Date();
    const data: DummyType[] = [{ obj: { date: today } }, { obj: { date: new Date('2000-01-01') } }];
    const result = objectCalendarFilter(data, 'obj', 'date', CalendarOperEnum.IS_TODAY, today);
    expect(result).toEqual([{ obj: { date: today } }]);
  });

  it('should return empty array if no nested date property is today', () => {
    const today = new Date();
    const data: DummyType[] = [{ obj: { date: new Date('2000-01-01') } }];
    const result = objectCalendarFilter(data, 'obj', 'date', CalendarOperEnum.IS_TODAY, today);
    expect(result).toEqual([]);
  });
});
