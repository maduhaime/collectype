import { describe, it, expect } from 'vitest';
import { objectNumberFilter } from './objectNumberFilter';
import { NumberOperEnum } from '../../enums/numberOperation';

type DummyType = { num: number };

describe('objectNumberFilter', () => {
  const arr: DummyType[] = [{ num: 1 }, { num: 2 }, { num: 3 }];

  it('should filter objects where the number matches the target', () => {
    const result = objectNumberFilter(arr, 'num', NumberOperEnum.EQUALS, 2);
    expect(result).toEqual([{ num: 2 }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectNumberFilter(null, 'num', NumberOperEnum.EQUALS, 1)).toEqual([]);
  });
});
