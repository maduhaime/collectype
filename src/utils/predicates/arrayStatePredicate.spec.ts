import { describe, it, expect } from 'vitest';
import { ArrayStateOperEnum } from '../../enums/arrayOperation';
import { arrayStatePredicate } from './arrayStatePredicate';

describe('arrayStatePredicate', () => {
  type DummyType = string;
  const arr: DummyType[] = ['A', 'B', 'C'];

  it('should return true if array is empty', () => {
    expect(arrayStatePredicate([], ArrayStateOperEnum.IS_EMPTY)).toBe(true);
    expect(arrayStatePredicate(arr, ArrayStateOperEnum.IS_EMPTY)).toBe(false);
  });

  it('should return true if array is not empty', () => {
    expect(arrayStatePredicate(arr, ArrayStateOperEnum.IS_NOT_EMPTY)).toBe(true);
    expect(arrayStatePredicate([], ArrayStateOperEnum.IS_NOT_EMPTY)).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => arrayStatePredicate([1, 2, 3], 'invalid')).toThrow(
      'Unsupported array state predicate operation: invalid'
    );
  });
});
