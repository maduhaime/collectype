import { describe, it, expect } from 'vitest';
import { ArrayOperEnum } from '../../enums/arrayOperation';
import { arrayPredicate } from './arrayPredicate';

describe('arrayPredicate', () => {
  type DummyType = string;
  const arr: DummyType[] = ['A', 'B', 'C', 'D'];

  it('should return true if array includes the target value', () => {
    expect(arrayPredicate(arr, ArrayOperEnum.INCLUDES, 'A')).toBe(true);
    expect(arrayPredicate(arr, ArrayOperEnum.INCLUDES, 'Z')).toBe(false);
  });

  it('should return true if array does not include the target value', () => {
    expect(arrayPredicate(arr, ArrayOperEnum.EXCLUDES, 'Z')).toBe(true);
    expect(arrayPredicate(arr, ArrayOperEnum.EXCLUDES, 'A')).toBe(false);
  });

  it('should return true if at least one element equals the target', () => {
    expect(arrayPredicate(arr, ArrayOperEnum.SOME_EQUALS, 'B')).toBe(true);
    expect(arrayPredicate(arr, ArrayOperEnum.SOME_EQUALS, 'Z')).toBe(false);
  });

  it('should return true if every element equals the target', () => {
    expect(arrayPredicate(['A', 'A'], ArrayOperEnum.EVERY_EQUALS, 'A')).toBe(true);
    expect(arrayPredicate(arr, ArrayOperEnum.EVERY_EQUALS, 'A')).toBe(false);
  });

  it('should return true if array is strictly equal to the target array', () => {
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.EQUALS, ['A', 'B'])).toBe(true);
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.EQUALS, ['B', 'A'])).toBe(false);
  });

  it('should return true if array and target array have the same elements (set equality)', () => {
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.SET_EQUALS, ['B', 'A'])).toBe(true);
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.SET_EQUALS, ['A', 'B', 'C'])).toBe(false);
  });

  it('should return true if array is a subset of the target array', () => {
    expect(arrayPredicate(['A'], ArrayOperEnum.IS_SUBSET_OF, ['A', 'B'])).toBe(true);
    expect(arrayPredicate(['A', 'C'], ArrayOperEnum.IS_SUBSET_OF, ['A', 'B'])).toBe(false);
  });

  it('should return true if array is a superset of the target array', () => {
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.IS_SUPERSET_OF, ['A'])).toBe(true);
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.IS_SUPERSET_OF, ['A', 'C'])).toBe(false);
  });

  it('should return true if array starts with the target sequence', () => {
    expect(arrayPredicate(['A', 'B', 'C'], ArrayOperEnum.STARTS_WITH, ['A', 'B'])).toBe(true);
    expect(arrayPredicate(['A', 'B', 'C'], ArrayOperEnum.STARTS_WITH, ['B'])).toBe(false);
  });

  it('should return true if array ends with the target sequence', () => {
    expect(arrayPredicate(['A', 'B', 'C'], ArrayOperEnum.ENDS_WITH, ['B', 'C'])).toBe(true);
    expect(arrayPredicate(['A', 'B', 'C'], ArrayOperEnum.ENDS_WITH, ['A'])).toBe(false);
  });

  it('should return true if array contains the target subsequence', () => {
    expect(arrayPredicate(['A', 'B', 'C', 'D'], ArrayOperEnum.CONTAINS_SUBSEQUENCE, ['B', 'C'])).toBe(true);
    expect(arrayPredicate(['A', 'B', 'C', 'D'], ArrayOperEnum.CONTAINS_SUBSEQUENCE, ['C', 'A'])).toBe(false);
  });

  it('should return true if array and target array have at least one element in common', () => {
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.INTERSECTS, ['B', 'C'])).toBe(true);
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.INTERSECTS, ['X', 'Y'])).toBe(false);
  });

  it('should return true if array and target array have no elements in common', () => {
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.DISJOINT, ['C', 'D'])).toBe(true);
    expect(arrayPredicate(['A', 'B'], ArrayOperEnum.DISJOINT, ['A', 'C'])).toBe(false);
  });
});
