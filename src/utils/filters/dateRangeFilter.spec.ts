import { describe, expect, it } from 'vitest';
import { dateRangeFilter } from '../../utils/filters/dateRangeFilter';
import { RangeOperEnum } from '../../enums/rangeOperation';

type DummyType = { id: number; date?: Date };

describe('dateRangeFilter', () => {
  const items: DummyType[] = [
    { id: 1, date: new Date('2020-01-01') },
    { id: 2, date: new Date('2020-01-05') },
    { id: 3, date: new Date('2020-01-10') },
    { id: 4 }, // date is undefined
  ];

  const min = new Date('2020-01-01');
  const max = new Date('2020-01-05');

  it('should filter items by date range', () => {
    const result = dateRangeFilter(items, 'date', RangeOperEnum.IN_RANGE, min, max);
    expect(result).toEqual([
      { id: 1, date: new Date('2020-01-01') },
      { id: 2, date: new Date('2020-01-05') },
    ]);
  });

  it('should skip items where the date field is undefined', () => {
    const result = dateRangeFilter(items, 'date', RangeOperEnum.IN_RANGE, min, max);
    expect(result).not.toContainEqual({ id: 4 });
  });
});
