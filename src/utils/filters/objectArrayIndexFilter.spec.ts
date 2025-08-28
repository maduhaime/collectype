import { describe, it, expect } from 'vitest';
import { objectArrayIndexFilter } from './objectArrayIndexFilter';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';

type DummyType = { arr: number[] };

describe('objectArrayIndexFilter', () => {
  const arr: DummyType[] = [{ arr: [1, 2, 3] }, { arr: [4, 5, 6] }, { arr: [7, 8, 9] }, { arr: [] }];

  it('should filter objects where the array at index matches the target', () => {
    const result = objectArrayIndexFilter(arr, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 0, 4);
    expect(result).toEqual([{ arr: [4, 5, 6] }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectArrayIndexFilter(null, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 0, 1)).toEqual([]);
  });
});
