import { describe, expect, it } from 'vitest';
import { BooleanOperEnum } from '../../enums/booleanOperation';
import { objectBooleanFilter } from './objectBooleanFilter';

type DummyType = { flag: boolean };

describe('objectBooleanFilter', () => {
  const arr: DummyType[] = [{ flag: true }, { flag: false }];

  it('should filter objects where the boolean matches the target', () => {
    const result = objectBooleanFilter(arr, 'flag', BooleanOperEnum.EQUALS, true);
    expect(result).toEqual([{ flag: true }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectBooleanFilter(null, 'flag', BooleanOperEnum.EQUALS, true)).toEqual([]);
  });
});
