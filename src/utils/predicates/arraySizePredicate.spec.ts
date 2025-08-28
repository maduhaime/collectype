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

  it('should return true if array length is less than num', () => {
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, 4)).toBe(true);
    expect(arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, 3)).toBe(false);
  });

  it('should return true if array is empty', () => {
    expect(arraySizePredicate([], ArraySizeOperEnum.IS_EMPTY)).toBe(true);
    expect(arraySizePredicate(arr, ArraySizeOperEnum.IS_EMPTY)).toBe(false);
  });

  it('should return true if array is not empty', () => {
    expect(arraySizePredicate(arr, ArraySizeOperEnum.IS_NOT_EMPTY)).toBe(true);
    expect(arraySizePredicate([], ArraySizeOperEnum.IS_NOT_EMPTY)).toBe(false);
  });
});
