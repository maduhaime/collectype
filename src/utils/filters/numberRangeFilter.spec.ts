import { describe, expect, it } from 'vitest';

import { rangeFilter } from './numberRangeFilter';
import { RangeOperEnum } from '../../enums/rangeOperation';

type DummyType = { id: number; value?: number };

describe('rangeFilter', () => {
  const items: DummyType[] = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4 }, // value is undefined
  ];

  it('should filter items by number range', () => {
    const result = rangeFilter(items, 'value', RangeOperEnum.IN_RANGE, 2, 3);
    expect(result).toEqual([
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ]);
  });

  it('should skip items where the number field is undefined', () => {
    const result = rangeFilter(items, 'value', RangeOperEnum.IN_RANGE, 1, 3);
    expect(result).toEqual([
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ]);
  });
});
