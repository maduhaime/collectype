import { describe, it, expect } from 'vitest';
import { arraySizeFilter } from './arraySizeFilter';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';

type DummyType = { arr: string[] };

describe('arraySizeFilter', () => {
  const collection: DummyType[] = [{ arr: ['A', 'B', 'C'] }, { arr: ['B', 'C'] }, { arr: [] }];

  it('should filter arrays with length equal to n', () => {
    expect(arraySizeFilter(collection, 'arr', ArraySizeOperEnum.LENGTH_EQUALS, 3).length).toBe(1);
    expect(arraySizeFilter(collection, 'arr', ArraySizeOperEnum.LENGTH_EQUALS, 2).length).toBe(1);
  });

  it('should filter arrays with length greater than n', () => {
    expect(arraySizeFilter(collection, 'arr', ArraySizeOperEnum.LENGTH_GREATER_THAN, 1).length).toBe(2);
    expect(arraySizeFilter(collection, 'arr', ArraySizeOperEnum.LENGTH_GREATER_THAN, 2).length).toBe(1);
  });

  it('should filter arrays with length less than n', () => {
    expect(arraySizeFilter(collection, 'arr', ArraySizeOperEnum.LENGTH_LESS_THAN, 3).length).toBe(2);
    expect(arraySizeFilter(collection, 'arr', ArraySizeOperEnum.LENGTH_LESS_THAN, 1).length).toBe(1);
  });

  it('should filter arrays that are empty', () => {
    expect(arraySizeFilter(collection, 'arr', ArraySizeOperEnum.IS_EMPTY).length).toBe(1);
  });

  it('should filter arrays that are not empty', () => {
    expect(arraySizeFilter(collection, 'arr', ArraySizeOperEnum.IS_NOT_EMPTY).length).toBe(2);
  });
});
