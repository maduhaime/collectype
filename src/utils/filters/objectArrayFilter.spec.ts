import { describe, expect, it } from 'vitest';
import { ArrayOperEnum } from '../../enums/arrayOperation';
import { objectArrayFilter } from './objectArrayFilter';

type DummyType = { arr: number[] };

describe('objectArrayFilter', () => {
  const arr: DummyType[] = [{ arr: [1, 2, 3] }, { arr: [4, 5, 6] }, { arr: [7, 8, 9] }, { arr: [] }];

  it('should filter objects where the array matches the target', () => {
    const result = objectArrayFilter(arr, 'arr', ArrayOperEnum.INCLUDES, 2);
    expect(result).toEqual([{ arr: [1, 2, 3] }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectArrayFilter(null, 'arr', ArrayOperEnum.INCLUDES, 1)).toEqual([]);
  });
});
