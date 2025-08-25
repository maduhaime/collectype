import { describe, it, expect } from 'vitest';
import {
  arrayIncludesFilter,
  arrayExcludesFilter,
  arraySomeEqualsFilter,
  arrayEveryEqualsFilter,
  arrayEqualsFilter,
  arraySetEqualsFilter,
  arrayIsSubsetOfFilter,
  arrayIsSupersetOfFilter,
  arrayStartsWithFilter,
  arrayEndsWithFilter,
  arrayContainsSubsequenceFilter,
  arrayIntersectsFilter,
  arrayDisjointFilter,
} from './arrayFilter';

type DummyType = { arr: string[] };

describe('arrayFilter', () => {
  const collection: DummyType[] = [
    { arr: ['A', 'B', 'C'] },
    { arr: ['B', 'C', 'D'] },
    { arr: ['A', 'A', 'A'] },
    { arr: [] },
  ];

  it('should filter arrays that include a value', () => {
    expect(arrayIncludesFilter(collection, 'arr', 'A').length).toBe(2);
    expect(arrayIncludesFilter(collection, 'arr', 'D').length).toBe(1);
  });

  it('should filter arrays that do not include a value', () => {
    expect(arrayExcludesFilter(collection, 'arr', 'A').length).toBe(2);
    expect(arrayExcludesFilter(collection, 'arr', 'Z').length).toBe(4);
  });

  it('should filter arrays where some element equals a value', () => {
    expect(arraySomeEqualsFilter(collection, 'arr', 'A').length).toBe(2);
    expect(arraySomeEqualsFilter(collection, 'arr', 'D').length).toBe(1);
  });

  it('should filter arrays where every element equals a value', () => {
    expect(arrayEveryEqualsFilter(collection, 'arr', 'A').length).toBe(1);
    expect(arrayEveryEqualsFilter(collection, 'arr', 'B').length).toBe(0);
  });

  it('should filter arrays strictly equal to a target array', () => {
    expect(arrayEqualsFilter(collection, 'arr', ['A', 'B', 'C']).length).toBe(1);
    expect(arrayEqualsFilter(collection, 'arr', ['B', 'C', 'D']).length).toBe(1);
    expect(arrayEqualsFilter(collection, 'arr', ['A', 'B']).length).toBe(0);
  });

  it('should filter arrays that are set-equal to a target array', () => {
    expect(arraySetEqualsFilter(collection, 'arr', ['C', 'B', 'A']).length).toBe(1);
    expect(arraySetEqualsFilter(collection, 'arr', ['A', 'B', 'C', 'D']).length).toBe(0);
  });

  it('should filter arrays that are a subset of a target array', () => {
    expect(arrayIsSubsetOfFilter(collection, 'arr', ['A', 'B', 'C', 'D']).length).toBe(3);
    expect(arrayIsSubsetOfFilter(collection, 'arr', ['A']).length).toBe(1);
  });

  it('should filter arrays that are a superset of a target array', () => {
    expect(arrayIsSupersetOfFilter(collection, 'arr', ['A', 'B']).length).toBe(1);
    expect(arrayIsSupersetOfFilter(collection, 'arr', ['D']).length).toBe(1);
  });

  it('should filter arrays that start with a target sequence', () => {
    expect(arrayStartsWithFilter(collection, 'arr', ['A', 'B']).length).toBe(1);
    expect(arrayStartsWithFilter(collection, 'arr', ['B']).length).toBe(1);
  });

  it('should filter arrays that end with a target sequence', () => {
    expect(arrayEndsWithFilter(collection, 'arr', ['C']).length).toBe(1);
    expect(arrayEndsWithFilter(collection, 'arr', ['D']).length).toBe(1);
  });

  it('should filter arrays that contain a target subsequence', () => {
    expect(arrayContainsSubsequenceFilter(collection, 'arr', ['B', 'C']).length).toBe(2);
    expect(arrayContainsSubsequenceFilter(collection, 'arr', ['C', 'A']).length).toBe(0);
  });

  it('should filter arrays that intersect with a target array', () => {
    expect(arrayIntersectsFilter(collection, 'arr', ['A', 'D']).length).toBe(3);
    expect(arrayIntersectsFilter(collection, 'arr', ['Z']).length).toBe(0);
  });

  it('should filter arrays that are disjoint with a target array', () => {
    expect(arrayDisjointFilter(collection, 'arr', ['Z']).length).toBe(4);
    expect(arrayDisjointFilter(collection, 'arr', ['A']).length).toBe(2);
  });
});
