import { describe, it, expect } from 'vitest';
import { objectArraySizeFilter } from './objectArraySizeFilter';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';

type DummyType = { obj: { arr: number[] } };

describe('objectArraySizeFilter', () => {
  it('should filter items where the nested array has the specified length', () => {
    const data: DummyType[] = [{ obj: { arr: [1, 2, 3] } }, { obj: { arr: [4, 5] } }];
    const result = objectArraySizeFilter(data, 'obj', 'arr', ArraySizeOperEnum.LENGTH_EQUALS, 2);
    expect(result).toEqual([{ obj: { arr: [4, 5] } }]);
  });

  it('should return empty array if no nested array has the specified length', () => {
    const data: DummyType[] = [{ obj: { arr: [7, 8, 9] } }];
    const result = objectArraySizeFilter(data, 'obj', 'arr', ArraySizeOperEnum.LENGTH_EQUALS, 1);
    expect(result).toEqual([]);
  });
});
