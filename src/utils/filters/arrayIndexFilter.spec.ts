import { describe, it, expect } from 'vitest';
import {
  arrayIndexEqualsFilter,
  arrayIndexNotEqualsFilter,
  arrayIndexInFilter,
  arrayIndexNotInFilter,
} from './arrayIndexFilter';

type DummyType = { arr: string[] };

describe('arrayIndexFilter', () => {
  const collection: DummyType[] = [
    { arr: ['A', 'B', 'C'] },
    { arr: ['B', 'C', 'D'] },
    { arr: ['A', 'A', 'A'] },
    { arr: [] },
  ];

  it('should filter arrays where value at index equals target', () => {
    expect(arrayIndexEqualsFilter(collection, 'arr', 0, 'A').length).toBe(2);
    expect(arrayIndexEqualsFilter(collection, 'arr', 2, 'C').length).toBe(1);
  });

  it('should filter arrays where value at index does not equal target', () => {
    expect(arrayIndexNotEqualsFilter(collection, 'arr', 0, 'A').length).toBe(2);
    expect(arrayIndexNotEqualsFilter(collection, 'arr', 1, 'B').length).toBe(3);
  });

  it('should filter arrays where value at index is in target array', () => {
    expect(arrayIndexInFilter(collection, 'arr', 1, ['A', 'B']).length).toBe(2);
    expect(arrayIndexInFilter(collection, 'arr', 2, ['C', 'D']).length).toBe(2);
  });

  it('should filter arrays where value at index is not in target array', () => {
    expect(arrayIndexNotInFilter(collection, 'arr', 1, ['A', 'B']).length).toBe(2);
    expect(arrayIndexNotInFilter(collection, 'arr', 2, ['C', 'D']).length).toBe(2);
  });
});
