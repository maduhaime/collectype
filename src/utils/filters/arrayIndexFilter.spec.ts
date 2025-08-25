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

  it('should filter arrays where value at index is greater than target', () => {
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN, 2, 'B').length).toBe(2); // 'C' > 'B', 'D' > 'B'
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN, 0, 'A').length).toBe(1); // 'B' > 'A'
  });

  it('should filter arrays where value at index is greater than or equals target', () => {
    expect(
      arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, 2, 'C').length
    ).toBe(2); // 'C' >= 'C', 'D' >= 'C'
    expect(
      arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, 0, 'A').length
    ).toBe(3); // 'A' >= 'A', 'B' >= 'A', 'A' >= 'A'
  });

  it('should filter arrays where value at index is less than target', () => {
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN, 2, 'C').length).toBe(1); // 'B' < 'C'
    expect(arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN, 0, 'B').length).toBe(2); // 'A' < 'B', 'A' < 'B'
  });

  it('should filter arrays where value at index is less than or equals target', () => {
    expect(
      arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS, 2, 'C').length
    ).toBe(2); // 'C' <= 'C', 'B' <= 'C'
    expect(
      arrayIndexFilter(collection, 'arr', ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS, 0, 'A').length
    ).toBe(2); // 'A' <= 'A', 'A' <= 'A'
  });

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
