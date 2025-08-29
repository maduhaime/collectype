import { describe, it, expect } from 'vitest';
import { objectArrayFilter } from './objectArrayFilter';
import { ArrayOperEnum } from '../../enums/arrayOperation';

type DummyType = { obj: { arr: number[] } };

describe('objectArrayFilter', () => {
  it('should filter items where the nested array includes a value', () => {
    const data: DummyType[] = [{ obj: { arr: [1, 2, 3] } }, { obj: { arr: [4, 5, 6] } }];
    const result = objectArrayFilter(data, 'obj', 'arr', ArrayOperEnum.INCLUDES, 2);
    expect(result).toEqual([{ obj: { arr: [1, 2, 3] } }]);
  });

  it('should return empty array if no nested array matches', () => {
    const data: DummyType[] = [{ obj: { arr: [7, 8] } }];
    const result = objectArrayFilter(data, 'obj', 'arr', ArrayOperEnum.INCLUDES, 1);
    expect(result).toEqual([]);
  });
});
