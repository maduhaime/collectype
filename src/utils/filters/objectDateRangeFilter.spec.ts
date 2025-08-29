import { describe, it, expect } from 'vitest';
import { objectDateRangeFilter } from './objectDateRangeFilter';
import { RangeOperEnum } from '../../enums/rangeOperation';

type DummyType = { obj: { date: Date } };

describe('objectDateRangeFilter', () => {
  const arr: DummyType[] = [
    { obj: { date: new Date('2025-08-27') } },
    { obj: { date: new Date('2025-08-26') } },
    { obj: { date: new Date('2025-08-25') } },
  ];

  it('should filter objects where the date is within the range', () => {
    const result = objectDateRangeFilter(
      arr,
      'obj',
      'date',
      RangeOperEnum.IN_RANGE,
      new Date('2025-08-26'),
      new Date('2025-08-27')
    );
    expect(result).toEqual([{ obj: { date: new Date('2025-08-27') } }, { obj: { date: new Date('2025-08-26') } }]);
  });

  it('should return empty array if no dates match the range', () => {
    const result = objectDateRangeFilter(
      arr,
      'obj',
      'date',
      RangeOperEnum.IN_RANGE,
      new Date('2025-08-28'),
      new Date('2025-08-29')
    );
    expect(result).toEqual([]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectDateRangeFilter(null, 'date', RangeOperEnum.IN_RANGE, new Date(), new Date())).toEqual([]);
  });
});
