import { describe, expect, it } from 'vitest';
import { dateFilter } from '../../utils/filters/dateFilter';
import { DateOperEnum } from '../../enums/dateOperation';

type DummyType = { id: number; date?: Date };

describe('dateFilter', () => {
  const items: DummyType[] = [
    { id: 1, date: new Date('2020-01-01') },
    { id: 2, date: new Date('2020-01-02') },
    { id: 3 }, // date is undefined
  ];

  it('should filter items by date field and operator', () => {
    const result = dateFilter(items, 'date', DateOperEnum.EQUALS, new Date('2020-01-01'));
    expect(result).toEqual([{ id: 1, date: new Date('2020-01-01') }]);
  });

  it('should skip items where the date field is undefined', () => {
    const result = dateFilter(items, 'date', DateOperEnum.EQUALS, new Date('2020-01-02'));
    expect(result).toEqual([{ id: 2, date: new Date('2020-01-02') }]);
  });
});
