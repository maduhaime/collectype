import { describe, it, expect } from 'vitest';
import {
  arrayLengthEqualsFilter,
  arrayLengthGreaterThanFilter,
  arrayLengthLessThanFilter,
  arrayIsEmptyFilter,
  arrayIsNotEmptyFilter,
} from './arraySizeFilter';

type DummyType = { arr: string[] };

describe('arraySizeFilter', () => {
  const collection: DummyType[] = [{ arr: ['A', 'B', 'C'] }, { arr: ['B', 'C'] }, { arr: [] }];

  it('should filter arrays with length equal to n', () => {
    expect(arrayLengthEqualsFilter(collection, 'arr', 3).length).toBe(1);
    expect(arrayLengthEqualsFilter(collection, 'arr', 2).length).toBe(1);
  });

  it('should filter arrays with length greater than n', () => {
    expect(arrayLengthGreaterThanFilter(collection, 'arr', 1).length).toBe(2);
    expect(arrayLengthGreaterThanFilter(collection, 'arr', 2).length).toBe(1);
  });

  it('should filter arrays with length less than n', () => {
    expect(arrayLengthLessThanFilter(collection, 'arr', 3).length).toBe(2);
    expect(arrayLengthLessThanFilter(collection, 'arr', 1).length).toBe(1);
  });

  it('should filter arrays that are empty', () => {
    expect(arrayIsEmptyFilter(collection, 'arr').length).toBe(1);
  });

  it('should filter arrays that are not empty', () => {
    expect(arrayIsNotEmptyFilter(collection, 'arr').length).toBe(2);
  });
});
