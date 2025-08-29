import { describe, it, expect } from 'vitest';
import { objectNumberRangeFilter } from './objectNumberRangeFilter';
import { RangeOperEnum } from '../../enums/rangeOperation';

type DummyType = { obj: { num: number } };

describe('objectNumberRangeFilter', () => {
  it('should filter items where the nested number property is within the range', () => {
    const data: DummyType[] = [{ obj: { num: 10 } }, { obj: { num: 5 } }, { obj: { num: 20 } }];
    const result = objectNumberRangeFilter(data, 'obj', 'num', RangeOperEnum.IN_RANGE, 6, 15);
    expect(result).toEqual([{ obj: { num: 10 } }]);
  });

  it('should return empty array if no nested number property is within the range', () => {
    const data: DummyType[] = [{ obj: { num: 3 } }];
    const result = objectNumberRangeFilter(data, 'obj', 'num', RangeOperEnum.IN_RANGE, 6, 15);
    expect(result).toEqual([]);
  });
});
