import { describe, it, expect } from 'vitest';
import { objectNumberRangeFilter } from './objectNumberRangeFilter';
import { RangeOperEnum } from '../../enums/rangeOperation';

type DummyType = { num: number };

describe('objectNumberRangeFilter', () => {
  const arr: DummyType[] = [{ num: 1 }, { num: 2 }, { num: 3 }];

  it('should filter objects where the number is within the range', () => {
    const result = objectNumberRangeFilter(arr, 'num', RangeOperEnum.IN_RANGE, 2, 3);
    expect(result).toEqual([{ num: 2 }, { num: 3 }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectNumberRangeFilter(null, 'num', RangeOperEnum.IN_RANGE, 1, 2)).toEqual([]);
  });
});
