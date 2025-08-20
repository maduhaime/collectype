import { describe, it, expect } from 'vitest';

import { inferSortType } from './inferSortType';
import { SortTypeEnum } from '../../enums/sort';

describe('inferSortType', () => {
  it('should infer string type', () => {
    expect(inferSortType('abc')).toBe(SortTypeEnum.STRING);
  });

  it('should infer number type', () => {
    expect(inferSortType(123)).toBe(SortTypeEnum.NUMBER);
    expect(inferSortType(-5.5)).toBe(SortTypeEnum.NUMBER);
  });

  it('should infer boolean type', () => {
    expect(inferSortType(true)).toBe(SortTypeEnum.BOOLEAN);
    expect(inferSortType(false)).toBe(SortTypeEnum.BOOLEAN);
  });

  it('should infer date type', () => {
    expect(inferSortType(new Date())).toBe(SortTypeEnum.DATE);
  });

  it('should throw for unsupported type (null)', () => {
    expect(() => inferSortType(null)).toThrow(/Cannot infer sort type/);
  });

  it('should throw for unsupported type (undefined)', () => {
    expect(() => inferSortType(undefined)).toThrow(/Cannot infer sort type/);
  });

  it('should throw for unsupported type (object)', () => {
    expect(() => inferSortType({})).toThrow(/Cannot infer sort type/);
  });

  it('should throw for unsupported type (array)', () => {
    expect(() => inferSortType([])).toThrow(/Cannot infer sort type/);
  });
});
