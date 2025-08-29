import { describe, it, expect } from 'vitest';
import { objectArrayIndexFilter } from './objectArrayIndexFilter';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';

type DummyType = { obj: { arr: number[] } };

describe('objectArrayIndexFilter', () => {
  it('should filter items where the value at index matches the target', () => {
    const data: DummyType[] = [{ obj: { arr: [1, 2, 3] } }, { obj: { arr: [4, 5, 6] } }];
    const result = objectArrayIndexFilter(data, 'obj', 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 1, 2);
    expect(result).toEqual([{ obj: { arr: [1, 2, 3] } }]);
  });

  it('should return empty array if no value at index matches', () => {
    const data: DummyType[] = [{ obj: { arr: [7, 8] } }];
    const result = objectArrayIndexFilter(data, 'obj', 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 0, 9);
    expect(result).toEqual([]);
  });
});
