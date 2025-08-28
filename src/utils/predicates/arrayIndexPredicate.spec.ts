import { describe, it, expect } from 'vitest';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';
import { arrayIndexPredicate } from './arrayIndexPredicate';

describe('arrayIndexPredicate', () => {
  type DummyType = string;
  const arr: DummyType[] = ['A', 'B', 'C', 'D'];

  it('should return true if value at index equals target', () => {
    expect(arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 1, 'B')).toBe(true);
    expect(arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 2, 'A')).toBe(false);
  });

  it('should return true if value at index does not equal target', () => {
    expect(arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, 1, 'A')).toBe(true);
    expect(arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, 0, 'A')).toBe(false);
  });

  it('should return true if value at index is in target array', () => {
    expect(arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_IN, 1, ['A', 'B'])).toBe(true);
    expect(arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_IN, 2, ['A', 'B'])).toBe(false);
  });

  it('should return true if value at index is not in target array', () => {
    expect(arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, 1, ['C', 'D'])).toBe(true);
    expect(arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, 0, ['A', 'B'])).toBe(false);
  });
});
