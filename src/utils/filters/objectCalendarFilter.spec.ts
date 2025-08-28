import { describe, expect, it } from 'vitest';
import { CalendarOperEnum } from '../../enums/calendarOperation';
import { objectCalendarFilter } from './objectCalendarFilter';

type DummyType = { date: Date };

describe('objectCalendarFilter', () => {
  const today = new Date('2025-08-27');
  const arr: DummyType[] = [{ date: new Date('2025-08-27') }, { date: new Date('2025-08-26') }];

  it('should filter objects where the date matches today', () => {
    const result = objectCalendarFilter(arr, 'date', CalendarOperEnum.IS_TODAY, today);
    expect(result).toEqual([{ date: new Date('2025-08-27') }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectCalendarFilter(null, 'date', CalendarOperEnum.IS_TODAY, today)).toEqual([]);
  });
});
