import { describe, it, expect } from 'vitest';
import { objectStringFilter } from './objectStringFilter';
import { StringOperEnum } from '../../enums/stringOperation';

type DummyType = { str: string };

describe('objectStringFilter', () => {
  const arr: DummyType[] = [{ str: 'foo' }, { str: 'bar' }, { str: 'baz' }];

  it('should filter objects where the string matches the target', () => {
    const result = objectStringFilter(arr, 'str', StringOperEnum.EQUALS, 'bar');
    expect(result).toEqual([{ str: 'bar' }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectStringFilter(null, 'str', StringOperEnum.EQUALS, 'foo')).toEqual([]);
  });
});
