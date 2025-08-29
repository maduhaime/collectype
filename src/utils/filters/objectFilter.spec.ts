import { describe, it, expect } from 'vitest';
import { objectFilter } from './objectFilter';
import { ObjectOperEnum } from '../../enums/objectOperation';

type DummyType = { meta: { [key: string]: any } };

describe('objectFilter', () => {
  const arr: DummyType[] = [
    { meta: { a: 1, b: 2, c: 3 } },
    { meta: { a: 1, b: 2 } },
    { meta: { b: 2, c: 3 } },
    { meta: { d: 4 } },
    { meta: {} },
  ];

  it('should filter objects where meta has a specific key', () => {
    const result = objectFilter(arr, 'meta', ObjectOperEnum.HAS_KEY, 'a');
    expect(result).toEqual([{ meta: { a: 1, b: 2, c: 3 } }, { meta: { a: 1, b: 2 } }]);
  });

  it('should filter objects where meta has any of the specified keys', () => {
    const result = objectFilter(arr, 'meta', ObjectOperEnum.HAS_ANY_KEY, ['c', 'd']);
    expect(result).toEqual([{ meta: { a: 1, b: 2, c: 3 } }, { meta: { b: 2, c: 3 } }, { meta: { d: 4 } }]);
  });

  it('should filter objects where meta has all of the specified keys', () => {
    const result = objectFilter(arr, 'meta', ObjectOperEnum.HAS_ALL_KEYS, ['a', 'b']);
    expect(result).toEqual([{ meta: { a: 1, b: 2, c: 3 } }, { meta: { a: 1, b: 2 } }]);
  });

  it('should filter objects where meta has exactly the specified keys', () => {
    const result = objectFilter(arr, 'meta', ObjectOperEnum.HAS_EXACT_KEYS, ['b', 'c']);
    expect(result).toEqual([{ meta: { b: 2, c: 3 } }]);
  });

  it('should filter objects where meta has none of the specified keys', () => {
    const result = objectFilter(arr, 'meta', ObjectOperEnum.HAS_NO_KEYS, ['a', 'b', 'c']);
    expect(result).toEqual([{ meta: { d: 4 } }, { meta: {} }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectFilter(null, 'meta', ObjectOperEnum.HAS_KEY, 'a')).toEqual([]);
  });
});
