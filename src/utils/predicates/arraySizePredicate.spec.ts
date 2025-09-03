import { describe, it, expect } from 'vitest';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { arraySizePredicate } from './arraySizePredicate';

describe('arraySizePredicate', () => {
  type DummyType = string;
  const arr: DummyType[] = ['A', 'B', 'C'];

  it('should return true if array length equals num', () => {
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_EQUALS, 3)).toBe(true);
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_EQUALS, 2)).toBe(false);
  });

  it('should return true if array length is greater than num', () => {
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN, 2)).toBe(true);
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN, 3)).toBe(false);
  });

  it('should return true if array length is greater than or equal to num', () => {
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, 3)).toBe(true);
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, 4)).toBe(false);
  });

  it('should return true if array length is less than num', () => {
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, 4)).toBe(true);
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, 3)).toBe(false);
  });

  it('should return true if array length is less than or equal to num', () => {
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, 3)).toBe(true);
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, 2)).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => arraySizePredicate(['A', 'B'], 'invalid', 1)).toThrow(
      'Unsupported array size predicate operation: invalid'
    );
  });
});
