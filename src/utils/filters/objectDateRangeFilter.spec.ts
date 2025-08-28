import { describe, it, expect } from 'vitest';
import { objectDateRangeFilter } from './objectDateRangeFilter';
import { RangeOperEnum } from '../../enums/rangeOperation';

type DummyType = { date: Date };

describe('objectDateRangeFilter', () => {
  const arr: DummyType[] = [
    { date: new Date('2025-08-27') },
    { date: new Date('2025-08-26') },
    { date: new Date('2025-08-25') },
  ];

  it('should filter objects where the date is within the range', () => {
    const result = objectDateRangeFilter(
      arr,
      'date',
      RangeOperEnum.IN_RANGE,
      new Date('2025-08-26'),
      new Date('2025-08-27')
    );
    expect(result).toEqual([{ date: new Date('2025-08-27') }, { date: new Date('2025-08-26') }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectDateRangeFilter(null, 'date', RangeOperEnum.IN_RANGE, new Date(), new Date())).toEqual([]);
  });
});
