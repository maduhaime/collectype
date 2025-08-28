import { describe, it, expect } from 'vitest';
import { objectArraySizeFilter } from './objectArraySizeFilter';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';

type DummyType = { arr: number[] };

describe('objectArraySizeFilter', () => {
  const arr: DummyType[] = [{ arr: [1, 2, 3] }, { arr: [4, 5] }, { arr: [] }];

  it('should filter objects where the array size matches the target', () => {
    const result = objectArraySizeFilter(arr, 'arr', ArraySizeOperEnum.LENGTH_EQUALS, 2);
    expect(result).toEqual([{ arr: [4, 5] }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectArraySizeFilter(null, 'arr', ArraySizeOperEnum.LENGTH_EQUALS, 1)).toEqual([]);
  });
});
