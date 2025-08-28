import { describe, it, expect } from 'vitest';
import { objectFilter } from './objectFilter';
import { ObjectOperEnum } from '../../enums/objectOperation';

type DummyType = { a: number; b: number };

describe('objectFilter', () => {
  const arr: DummyType[] = [
    { a: 1, b: 2 },
    { a: 2, b: 3 },
    { a: 3, b: 4 },
  ];

  it('should filter objects that have a specific key', () => {
    const result = objectFilter(arr, ObjectOperEnum.HAS_KEY, 'a');
    expect(result).toEqual(arr);
  });

  it('should filter objects that have all specified keys', () => {
    const result = objectFilter(arr, ObjectOperEnum.HAS_ALL_KEYS, ['a', 'b']);
    expect(result).toEqual(arr);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectFilter(null, ObjectOperEnum.HAS_KEY, 'a')).toEqual([]);
  });
});
