import { describe, it, expect } from 'vitest';
import { objectStringStateFilter } from './objectStringStateFilter';
import { StringStateOperEnum } from '../../enums/stringOperation';

type DummyType = { str: string };

describe('objectStringStateFilter', () => {
  const arr: DummyType[] = [{ str: '' }, { str: 'foo' }];

  it('should filter objects where the string is empty', () => {
    const result = objectStringStateFilter(arr, 'str', StringStateOperEnum.IS_EMPTY);
    expect(result).toEqual([{ str: '' }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectStringStateFilter(null, 'str', StringStateOperEnum.IS_EMPTY)).toEqual([]);
  });
});
