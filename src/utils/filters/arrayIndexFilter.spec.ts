import { describe, it, expect } from 'vitest';
import { arrayIndexFilter } from './arrayIndexFilter';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';

type DummyType = { arr: string[] };

describe('arrayIndexFilter', () => {
  const collection: DummyType[] = [
    { arr: ['A', 'B', 'C'] },
    { arr: ['B', 'C', 'D'] },
    { arr: ['A', 'A', 'A'] },
    { arr: [] },
  ];

  it('should filter arrays where value at index equals target', () => {
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 0, 'A').length).toBe(2);
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 2, 'C').length).toBe(1);
  });

  it('should filter arrays where value at index does not equal target', () => {
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, 0, 'A').length).toBe(2);
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, 1, 'B').length).toBe(3);
  });

  it('should filter arrays where value at index is in target array', () => {
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_IN, 1, ['A', 'B']).length).toBe(2);
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_IN, 2, ['C', 'D']).length).toBe(2);
  });

  it('should filter arrays where value at index is not in target array', () => {
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, 1, ['A', 'B']).length).toBe(2);
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, 2, ['C', 'D']).length).toBe(2);
  });
});
