import { describe, it, expect } from 'vitest';
import { arrayFilter } from './arrayFilter';
import { ArrayOperEnum } from '../../enums/arrayOperation';

type DummyType = { arr: string[] };

describe('arrayFilter', () => {
  const collection: DummyType[] = [
    { arr: ['A', 'B', 'C'] },
    { arr: ['B', 'C', 'D'] },
    { arr: ['A', 'A', 'A'] },
    { arr: [] },
  ];

  it('should filter arrays that include a value', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.INCLUDES, 'A').length).toBe(2);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.INCLUDES, 'D').length).toBe(1);
  });

  it('should filter arrays that do not include a value', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.EXCLUDES, 'A').length).toBe(2);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.EXCLUDES, 'Z').length).toBe(4);
  });

  it('should filter arrays where some element equals a value', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.SOME_EQUALS, 'A').length).toBe(2);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.SOME_EQUALS, 'D').length).toBe(1);
  });

  it('should filter arrays where every element equals a value', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.EVERY_EQUALS, 'A').length).toBe(1);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.EVERY_EQUALS, 'B').length).toBe(0);
  });

  it('should filter arrays strictly equal to a target array', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.EQUALS, ['A', 'B', 'C']).length).toBe(1);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.EQUALS, ['B', 'C', 'D']).length).toBe(1);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.EQUALS, ['A', 'B']).length).toBe(0);
  });

  it('should filter arrays that are set-equal to a target array', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.SET_EQUALS, ['C', 'B', 'A']).length).toBe(1);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.SET_EQUALS, ['A', 'B', 'C', 'D']).length).toBe(0);
  });

  it('should filter arrays that are a subset of a target array', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.IS_SUBSET_OF, ['A', 'B', 'C', 'D']).length).toBe(3);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.IS_SUBSET_OF, ['A']).length).toBe(1);
  });

  it('should filter arrays that are a superset of a target array', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.IS_SUPERSET_OF, ['A', 'B']).length).toBe(1);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.IS_SUPERSET_OF, ['D']).length).toBe(1);
  });

  it('should filter arrays that start with a target sequence', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.STARTS_WITH, ['A', 'B']).length).toBe(1);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.STARTS_WITH, ['B']).length).toBe(1);
  });

  it('should filter arrays that end with a target sequence', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.ENDS_WITH, ['C']).length).toBe(1);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.ENDS_WITH, ['D']).length).toBe(1);
  });

  it('should filter arrays that contain a target subsequence', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.CONTAINS_SUBSEQUENCE, ['B', 'C']).length).toBe(2);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.CONTAINS_SUBSEQUENCE, ['C', 'A']).length).toBe(0);
  });

  it('should filter arrays that intersect with a target array', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.INTERSECTS, ['A', 'D']).length).toBe(3);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.INTERSECTS, ['Z']).length).toBe(0);
  });

  it('should filter arrays that are disjoint with a target array', () => {
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.DISJOINT, ['Z']).length).toBe(4);
    expect(arrayFilter(collection, 'arr', ArrayOperEnum.DISJOINT, ['A']).length).toBe(2);
  });
});
